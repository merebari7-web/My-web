import { requireStudentProfile } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export const metadata = { title: "My Lessons" };

export default async function LearnPage() {
  const { profile } = await requireStudentProfile();

  const classSubjects = await prisma.classSubject.findMany({
    where: {
      classLevelId: profile.classLevelId,
      OR: [{ stream: "NONE" }, { stream: profile.stream }],
    },
    include: {
      subject: true,
      lessons: {
        where: { status: "PUBLISHED" },
        include: { progress: { where: { studentId: profile.id } } },
      },
    },
    orderBy: { subject: { name: "asc" } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">My Lessons</h1>
        <p className="text-muted-foreground text-sm mt-1">
          All subjects for {profile.classLevelId ? "your class" : "you"} — pick up where you left off.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {classSubjects.map((cs) => {
          const total = cs.lessons.length;
          const completed = cs.lessons.filter((l) => l.progress[0]?.completed).length;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <Link key={cs.id} href={`/learn/${profile.classLevelId}/${cs.subject.slug}?cs=${cs.id}`}>
              <Card className="h-full hover:border-primary-300 transition-colors">
                <CardHeader>
                  <div className="h-11 w-11 rounded-xl bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 flex items-center justify-center mb-2">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{cs.subject.name}</CardTitle>
                  {cs.stream !== "NONE" && (
                    <Badge variant="secondary" className="w-fit">{cs.stream}</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                    <span>{completed}/{total} lessons</span>
                    <span>{pct}%</span>
                  </div>
                  <Progress value={pct} />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
