import { requireStudentProfile } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { CbtExamList } from "@/components/cbt/cbt-exam-list";

export const metadata = { title: "CBT Mock Exams" };

export default async function CbtListPage() {
  const { profile } = await requireStudentProfile();

  const exams = await prisma.exam.findMany({
    where: {
      status: "PUBLISHED",
      classSubject: {
        classLevelId: profile.classLevelId,
        OR: [{ stream: "NONE" }, { stream: profile.stream }],
      },
      type: { in: ["CBT_MOCK", "QUIZ"] },
    },
    include: {
      subject: true,
      questions: { select: { id: true } },
      attempts: {
        where: { studentId: profile.id, status: "GRADED" },
        orderBy: { submittedAt: "desc" },
        take: 1,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  // Also fetch JAMB mocks regardless of class (available broadly for practice)
  const jambExams = await prisma.exam.findMany({
    where: { status: "PUBLISHED", board: "JAMB", type: "CBT_MOCK" },
    include: {
      subject: true,
      questions: { select: { id: true } },
      attempts: { where: { studentId: profile.id }, orderBy: { submittedAt: "desc" }, take: 1 },
    },
  });

  const merged = [...exams, ...jambExams.filter((j) => !exams.some((e) => e.id === j.id))];

  return (
    <CbtExamList
      exams={merged.map((e) => ({
        id: e.id,
        title: e.title,
        subjectName: e.subject.name,
        board: e.board,
        durationMins: e.durationMins,
        questionCount: e.questions.length,
        negativeMarking: e.negativeMarking,
        isPremium: e.isPremium,
        lastScore: e.attempts[0]?.percentage ?? null,
      }))}
      tier={profile.subscription?.tier ?? "FREE"}
    />
  );
}
