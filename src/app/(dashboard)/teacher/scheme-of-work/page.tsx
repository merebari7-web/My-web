import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarRange, Plus } from "lucide-react";

export const metadata = { title: "Scheme of Work" };

export default async function SchemeOfWorkListPage() {
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  const schemes = await prisma.schemeOfWork.findMany({
    where: user.role === "TEACHER" ? { createdById: user.id } : undefined,
    include: {
      classSubject: { include: { subject: true, classLevel: true } },
      entries: { select: { id: true } },
    },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold flex items-center gap-2">
            <CalendarRange className="h-6 w-6 text-primary-600" /> Scheme of Work
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Generate and manage a full term's week-by-week scheme of work for any class & subject.
          </p>
        </div>
        <Button asChild>
          <Link href="/teacher/scheme-of-work/new">
            <Plus className="h-4 w-4" /> New Scheme of Work
          </Link>
        </Button>
      </div>

      {schemes.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No schemes of work yet.
            <div className="mt-4">
              <Button asChild>
                <Link href="/teacher/scheme-of-work/new">Create your first scheme of work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {schemes.map((s) => (
            <Link key={s.id} href={`/teacher/scheme-of-work/${s.id}`}>
              <Card className="h-full hover:border-primary-300 transition-colors">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <Badge variant="outline">{s.classSubject.classLevel.shortName}</Badge>
                    <Badge variant="outline">{s.classSubject.subject.name}</Badge>
                    <Badge variant="secondary">Term {s.term}</Badge>
                  </div>
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {s.session} · {s.entries.length} week{s.entries.length === 1 ? "" : "s"} filled
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
