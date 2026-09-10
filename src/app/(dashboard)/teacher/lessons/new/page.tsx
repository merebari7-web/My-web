import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { LessonNoteForm } from "@/components/teacher/lesson-note-form";

export const metadata = { title: "New Lesson Note" };

export default async function NewLessonNotePage() {
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">New Lesson Note</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Fill in the details below. {user.role === "TEACHER" ? "It will be submitted to an admin for review before publishing." : "As an admin, this will be published immediately."}
        </p>
      </div>
      <LessonNoteForm />
    </div>
  );
}
