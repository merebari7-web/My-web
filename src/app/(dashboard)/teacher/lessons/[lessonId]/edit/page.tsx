import { requireUser } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { LessonNoteForm } from "@/components/teacher/lesson-note-form";

export const metadata = { title: "Edit Lesson Note" };

export default async function EditLessonNotePage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { topic: true },
  });

  if (!lesson) notFound();
  if (user.role === "TEACHER" && lesson.authorId !== user.id) redirect("/teacher/lessons");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Edit Lesson Note</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {user.role === "TEACHER" ? "Saving changes will resubmit this lesson for admin review." : "Changes are saved immediately."}
        </p>
      </div>
      <LessonNoteForm
        lessonId={lesson.id}
        defaultValues={{
          classSubjectId: lesson.classSubjectId,
          topicTitle: lesson.topic?.title ?? "",
          nerdcCode: lesson.topic?.nerdcCode ?? "",
          waecTopic: lesson.topic?.waecTopic ?? "",
          necoTopic: lesson.topic?.necoTopic ?? "",
          jambRelevance: lesson.topic?.jambRelevance ?? "",
          title: lesson.title,
          summary: lesson.summary ?? "",
          contentMd: lesson.contentMd,
          durationMins: lesson.durationMins,
          term: lesson.term,
          week: lesson.week,
          learningObjectives: lesson.learningObjectives ?? "",
          entryBehaviour: lesson.entryBehaviour ?? "",
          instructionalMaterials: lesson.instructionalMaterials ?? "",
          classActivities: lesson.classActivities ?? "",
          evaluationQuestions: lesson.evaluationQuestions ?? "",
          assignment: lesson.assignment ?? "",
        }}
      />
    </div>
  );
}
