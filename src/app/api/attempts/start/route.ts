import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const startSchema = z.object({ examId: z.string().cuid() });

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = startSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const studentProfile = await prisma.studentProfile.findUnique({
    where: { userId: session.user.id },
  });
  if (!studentProfile) {
    return NextResponse.json({ error: "Student profile not found" }, { status: 404 });
  }

  const exam = await prisma.exam.findUnique({
    where: { id: parsed.data.examId },
    include: {
      questions: {
        include: { question: true },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!exam || exam.status !== "PUBLISHED") {
    return NextResponse.json({ error: "Exam not found" }, { status: 404 });
  }

  if (exam.isPremium) {
    const sub = await prisma.subscription.findUnique({ where: { studentId: studentProfile.id } });
    if (!sub || sub.tier !== "PREMIUM") {
      return NextResponse.json({ error: "This exam requires a Premium subscription." }, { status: 403 });
    }
  }

  // Reuse an in-progress attempt if one exists, else create a new one
  let attempt = await prisma.examAttempt.findFirst({
    where: { studentId: studentProfile.id, examId: exam.id, status: "IN_PROGRESS" },
  });

  if (!attempt) {
    attempt = await prisma.examAttempt.create({
      data: {
        studentId: studentProfile.id,
        examId: exam.id,
        status: "IN_PROGRESS",
        totalMarks: exam.questions.reduce((sum, eq) => sum + eq.question.marks, 0),
      },
    });
  }

  let questions = exam.questions.map((eq) => ({
    id: eq.question.id,
    text: eq.question.text,
    imageUrl: eq.question.imageUrl,
    optionA: eq.question.optionA,
    optionB: eq.question.optionB,
    optionC: eq.question.optionC,
    optionD: eq.question.optionD,
    marks: eq.question.marks,
  }));

  if (exam.shuffleQuestions) {
    questions = questions.sort(() => Math.random() - 0.5);
  }

  return NextResponse.json({
    attemptId: attempt.id,
    exam: {
      id: exam.id,
      title: exam.title,
      durationMins: exam.durationMins,
      negativeMarking: exam.negativeMarking,
      negativeMarkValue: exam.negativeMarkValue,
      totalMarks: exam.totalMarks,
      passMarkPercent: exam.passMarkPercent,
    },
    questions,
    startedAt: attempt.startedAt,
  });
}
