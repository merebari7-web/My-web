import { requireUser } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { LessonNotePrintView } from "@/components/teacher/lesson-note-print-view";

export const metadata = { title: "Lesson Note" };

export default async function LessonNoteViewPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      topic: true,
      subject: true,
      classSubject: { include: { classLevel: true } },
      author: { select: { name: true } },
    },
  });

  if (!lesson) notFound();
  if (user.role === "TEACHER" && lesson.authorId !== user.id) redirect("/teacher/lessons");

  return (
    <LessonNotePrintView
      lesson={{
        id: lesson.id,
        title: lesson.title,
        summary: lesson.summary,
        subjectName: lesson.subject.name,
        classLevelName: lesson.classSubject.classLevel.name,
        term: lesson.term,
        week: lesson.week,
        durationMins: lesson.durationMins,
        topicTitle: lesson.topic?.title ?? null,
        nerdcCode: lesson.topic?.nerdcCode ?? null,
        waecTopic: lesson.topic?.waecTopic ?? null,
        necoTopic: lesson.topic?.necoTopic ?? null,
        jambRelevance: lesson.topic?.jambRelevance ?? null,
        learningObjectives: lesson.learningObjectives,
        entryBehaviour: lesson.entryBehaviour,
        instructionalMaterials: lesson.instructionalMaterials,
        contentMd: lesson.contentMd,
        classActivities: lesson.classActivities,
        evaluationQuestions: lesson.evaluationQuestions,
        assignment: lesson.assignment,
        authorName: lesson.author?.name ?? "NaijaLearn Teacher",
      }}
    />
  );
}
