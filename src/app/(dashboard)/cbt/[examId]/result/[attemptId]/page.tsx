import { requireStudentProfile } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CbtResultView } from "@/components/cbt/cbt-result-view";

export default async function CbtResultPage({
  params,
}: {
  params: Promise<{ examId: string; attemptId: string }>;
}) {
  const { examId, attemptId } = await params;
  const { profile } = await requireStudentProfile();

  const attempt = await prisma.examAttempt.findUnique({
    where: { id: attemptId },
    include: {
      exam: { include: { subject: true } },
      answers: {
        include: { question: true },
      },
    },
  });

  if (!attempt || attempt.studentId !== profile.id || attempt.examId !== examId) {
    notFound();
  }

  return (
    <CbtResultView
      examTitle={attempt.exam.title}
      subjectName={attempt.exam.subject.name}
      score={attempt.score ?? 0}
      totalMarks={attempt.totalMarks ?? 0}
      percentage={attempt.percentage ?? 0}
      grade={attempt.grade ?? "-"}
      timeSpentSecs={attempt.timeSpentSecs}
      passMarkPercent={attempt.exam.passMarkPercent}
      examId={examId}
      answers={attempt.answers.map((a) => ({
        id: a.id,
        questionText: a.question.text,
        optionA: a.question.optionA,
        optionB: a.question.optionB,
        optionC: a.question.optionC,
        optionD: a.question.optionD,
        correctOption: a.question.correctOption,
        selectedOption: a.selectedOption,
        isCorrect: a.isCorrect ?? false,
        explanation: a.question.explanation,
      }))}
    />
  );
}
