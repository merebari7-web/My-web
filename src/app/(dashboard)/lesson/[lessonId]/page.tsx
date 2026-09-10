import { requireStudentProfile } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { LessonViewer } from "@/components/lesson/lesson-viewer";

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const { profile } = await requireStudentProfile();

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      subject: true,
      topic: true,
      classSubject: {
        include: {
          lessons: {
            where: { status: "PUBLISHED" },
            orderBy: { order: "asc" },
            select: { id: true, title: true, order: true },
          },
        },
      },
      quizQuestions: true,
      progress: { where: { studentId: profile.id } },
    },
  });

  if (!lesson) notFound();

  const siblingLessons = lesson.classSubject.lessons;
  const currentIdx = siblingLessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = siblingLessons[currentIdx + 1] ?? null;
  const prevLesson = currentIdx > 0 ? siblingLessons[currentIdx - 1] : null;

  return (
    <LessonViewer
      lesson={{
        id: lesson.id,
        title: lesson.title,
        summary: lesson.summary,
        contentMd: lesson.contentMd,
        durationMins: lesson.durationMins,
        subjectName: lesson.subject.name,
        topicName: lesson.topic?.title ?? null,
        term: lesson.term,
        week: lesson.week,
        evaluationQuestions: lesson.evaluationQuestions,
        assignment: lesson.assignment,
      }}
      quizQuestions={lesson.quizQuestions.map((q) => ({
        id: q.id,
        text: q.text,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD,
        correctOption: q.correctOption,
        explanation: q.explanation,
      }))}
      existingProgress={
        lesson.progress[0]
          ? { completed: lesson.progress[0].completed, quizScore: lesson.progress[0].quizScore }
          : null
      }
      nextLesson={nextLesson}
      prevLesson={prevLesson}
    />
  );
}
