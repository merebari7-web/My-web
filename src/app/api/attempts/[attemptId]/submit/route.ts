import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { gradeFromPercent } from "@/lib/utils";

const submitSchema = z.object({
  answers: z.record(z.string(), z.enum(["A", "B", "C", "D"])),
  timeSpentSecs: z.number().int().min(0),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ attemptId: string }> }
) {
  const { attemptId } = await params;
  const session = await auth();
  if (!session?.user || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", issues: parsed.error.flatten() }, { status: 400 });
  }

  const studentProfile = await prisma.studentProfile.findUnique({ where: { userId: session.user.id } });
  if (!studentProfile) {
    return NextResponse.json({ error: "Student profile not found" }, { status: 404 });
  }

  const attempt = await prisma.examAttempt.findUnique({
    where: { id: attemptId },
    include: {
      exam: {
        include: { questions: { include: { question: true } } },
      },
    },
  });

  if (!attempt || attempt.studentId !== studentProfile.id) {
    return NextResponse.json({ error: "Attempt not found" }, { status: 404 });
  }
  if (attempt.status === "GRADED") {
    return NextResponse.json({ error: "This attempt has already been submitted." }, { status: 409 });
  }

  const { answers, timeSpentSecs } = parsed.data;
  const exam = attempt.exam;

  let totalScore = 0;
  const answerRecords: {
    questionId: string;
    selectedOption: string | null;
    isCorrect: boolean;
    marksAwarded: number;
  }[] = [];

  for (const eq of exam.questions) {
    const q = eq.question;
    const selected = answers[q.id] ?? null;
    const isCorrect = selected !== null && selected === q.correctOption;

    let marksAwarded = 0;
    if (isCorrect) {
      marksAwarded = q.marks;
    } else if (selected !== null && exam.negativeMarking) {
      marksAwarded = -(q.marks * exam.negativeMarkValue);
    }

    totalScore += marksAwarded;
    answerRecords.push({ questionId: q.id, selectedOption: selected, isCorrect, marksAwarded });
  }

  totalScore = Math.max(0, totalScore); // floor total at 0
  const totalMarks = exam.questions.reduce((sum, eq) => sum + eq.question.marks, 0);
  const percentage = totalMarks > 0 ? (totalScore / totalMarks) * 100 : 0;
  const grade = gradeFromPercent(percentage);

  await prisma.$transaction([
    ...answerRecords.map((a) =>
      prisma.studentAnswer.upsert({
        where: { attemptId_questionId: { attemptId: attempt.id, questionId: a.questionId } },
        update: {
          selectedOption: a.selectedOption,
          isCorrect: a.isCorrect,
          marksAwarded: a.marksAwarded,
        },
        create: {
          attemptId: attempt.id,
          questionId: a.questionId,
          selectedOption: a.selectedOption,
          isCorrect: a.isCorrect,
          marksAwarded: a.marksAwarded,
        },
      })
    ),
    prisma.examAttempt.update({
      where: { id: attempt.id },
      data: {
        status: "GRADED",
        score: Math.round(totalScore),
        totalMarks,
        percentage,
        grade,
        timeSpentSecs,
        submittedAt: new Date(),
      },
    }),
    prisma.studentProfile.update({
      where: { id: studentProfile.id },
      data: { xp: { increment: Math.round(percentage / 2) + 10 } }, // gamification reward
    }),
  ]);

  const correctCount = answerRecords.filter((a) => a.isCorrect).length;

  return NextResponse.json({
    attemptId: attempt.id,
    score: Math.round(totalScore),
    totalMarks,
    percentage,
    grade,
    correctCount,
    totalQuestions: exam.questions.length,
  });
}
