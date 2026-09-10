import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { GraduationCap, TrendingUp, Calendar } from "lucide-react";

export async function ParentDashboard({ userId, userName }: { userId: string; userName: string }) {
  const parentProfile = await prisma.parentProfile.findUnique({
    where: { userId },
    include: {
      children: {
        include: {
          student: {
            include: {
              user: true,
              classLevel: true,
              examAttempts: {
                where: { status: "GRADED" },
                orderBy: { submittedAt: "desc" },
                take: 3,
                include: { exam: { include: { subject: true } } },
              },
            },
          },
        },
      },
    },
  });

  const children = parentProfile?.children ?? [];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-hero-gradient pattern-adire p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative">
          <p className="text-white/80 text-sm">Welcome back,</p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold">{userName.split(" ")[0]} 👨‍👩‍👧</h1>
          <p className="text-white/85 text-sm mt-1">Track your children&apos;s progress, scores, and attendance.</p>
        </div>
      </div>

      {children.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            No children linked to your account yet. Contact support to link your child&apos;s account.
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {children.map((link) => {
          const s = link.student;
          return (
            <Card key={s.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary-600" />
                    {s.user.name}
                  </CardTitle>
                  <Badge variant="secondary">{s.classLevel.name}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">XP Level {s.level}</span>
                    <span className="font-semibold">{s.xp} XP</span>
                  </div>
                  <Progress value={Math.min(100, (s.xp % 1000) / 10)} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5" /> Recent Exam Results
                  </p>
                  {s.examAttempts.length === 0 && (
                    <p className="text-xs text-muted-foreground">No exam attempts yet.</p>
                  )}
                  <div className="space-y-1.5">
                    {s.examAttempts.map((a) => (
                      <div key={a.id} className="flex justify-between text-sm p-2 rounded-lg bg-muted/50">
                        <span>{a.exam.subject.name}</span>
                        <span className="font-bold">{Math.round(a.percentage ?? 0)}% ({a.grade})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Streak: {s.currentStreak} days · Longest: {s.longestStreak} days
                </div>

                <Link href="#" className="text-xs text-primary-600 font-semibold hover:underline">
                  View full report card →
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
