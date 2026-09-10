import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, NotebookPen, Printer } from "lucide-react";

export const metadata = { title: "My Lesson Notes" };

const STATUS_VARIANT: Record<string, "secondary" | "warning" | "success" | "destructive"> = {
  DRAFT: "secondary",
  PENDING_REVIEW: "warning",
  PUBLISHED: "success",
  ARCHIVED: "destructive",
};

export default async function TeacherLessonsPage() {
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  const lessons = await prisma.lesson.findMany({
    where: user.role === "TEACHER" ? { authorId: user.id } : undefined,
    include: {
      subject: { select: { name: true } },
      classSubject: { include: { classLevel: { select: { shortName: true } } } },
      topic: { select: { title: true } },
    },
    orderBy: [{ term: "asc" }, { week: "asc" }],
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold flex items-center gap-2">
            <NotebookPen className="h-6 w-6 text-primary-600" /> Lesson Notes
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Full NERDC-style lesson notes — objectives, entry behaviour, activities, evaluation & assignment.
          </p>
        </div>
        <Button asChild>
          <Link href="/teacher/lessons/new">
            <Plus className="h-4 w-4" /> New Lesson Note
          </Link>
        </Button>
      </div>

      {lessons.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            You haven&apos;t created any lesson notes yet.
            <div className="mt-4">
              <Button asChild>
                <Link href="/teacher/lessons/new">Create your first lesson note</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <Card key={lesson.id}>
              <CardContent className="py-4 flex items-center justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <Badge variant="outline">{lesson.classSubject.classLevel.shortName}</Badge>
                    <Badge variant="outline">{lesson.subject.name}</Badge>
                    <Badge variant="outline">Term {lesson.term}, Week {lesson.week}</Badge>
                    <Badge variant={STATUS_VARIANT[lesson.status] ?? "secondary"}>
                      {lesson.status.replace("_", " ")}
                    </Badge>
                  </div>
                  <p className="font-semibold text-sm">{lesson.title}</p>
                  {lesson.topic && <p className="text-xs text-muted-foreground">{lesson.topic.title}</p>}
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/teacher/lessons/${lesson.id}/note`}>
                      <Printer className="h-3.5 w-3.5" /> View / Print Note
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/teacher/lessons/${lesson.id}/edit`}>Edit</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
