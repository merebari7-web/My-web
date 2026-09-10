import { requireStudentProfile } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, PlayCircle, Clock, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function SubjectLessonsPage({
  params,
  searchParams,
}: {
  params: Promise<{ classLevelId: string; subjectSlug: string }>;
  searchParams: Promise<{ cs?: string }>;
}) {
  const { subjectSlug } = await params;
  const { cs } = await searchParams;
  const { profile } = await requireStudentProfile();

  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug } });
  if (!subject) notFound();

  const classSubject = await prisma.classSubject.findFirst({
    where: cs
      ? { id: cs }
      : {
          subjectId: subject.id,
          classLevelId: profile.classLevelId,
          OR: [{ stream: "NONE" }, { stream: profile.stream }],
        },
    include: {
      lessons: {
        where: { status: "PUBLISHED" },
        orderBy: { order: "asc" },
        include: { progress: { where: { studentId: profile.id } }, topic: true },
      },
      exams: { where: { status: "PUBLISHED" } },
    },
  });

  if (!classSubject) notFound();

  return (
    <div className="space-y-6">
      <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 w-fit">
        <ArrowLeft className="h-4 w-4" /> Back to My Lessons
      </Link>

      <div>
        <h1 className="font-display text-2xl font-extrabold">{subject.name}</h1>
        <p className="text-muted-foreground text-sm mt-1">{subject.description}</p>
      </div>

      <div className="space-y-3">
        {classSubject.lessons.map((lesson, idx) => {
          const completed = lesson.progress[0]?.completed;
          return (
            <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
              <Card className="hover:border-primary-300 transition-colors">
                <CardContent className="py-4 flex items-center gap-4">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                      completed
                        ? "bg-success/15 text-success"
                        : "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                    }`}
                  >
                    {completed ? <CheckCircle2 className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Lesson {idx + 1}{lesson.topic ? ` · ${lesson.topic.title}` : ""}</p>
                    <p className="font-semibold text-sm truncate">{lesson.title}</p>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                    <Clock className="h-3.5 w-3.5" /> {lesson.durationMins}m
                  </span>
                  {completed && <Badge variant="success" className="shrink-0">Done</Badge>}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {classSubject.exams.length > 0 && (
        <div>
          <h2 className="font-display font-bold text-lg mb-3">Exams for this subject</h2>
          <div className="space-y-3">
            {classSubject.exams.map((exam) => (
              <Card key={exam.id}>
                <CardContent className="py-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">{exam.title}</p>
                      <p className="text-xs text-muted-foreground">{exam.durationMins} min · {exam.type.replace("_", " ")}</p>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/cbt/${exam.id}`}>Take Exam</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
