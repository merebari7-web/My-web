import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Users, ClipboardCheck, TrendingUp, Plus } from "lucide-react";

export async function TeacherDashboard({ userId, userName }: { userId: string; userName: string }) {
  const [lessonCount, examCount, questionCount, submissionCount] = await Promise.all([
    prisma.lesson.count({ where: { authorId: userId } }),
    prisma.exam.count({ where: { authorId: userId } }),
    prisma.question.count({ where: { authorId: userId } }),
    prisma.homeworkSubmission.count({ where: { status: "SUBMITTED" } }),
  ]);

  const stats = [
    { icon: BookOpen, label: "Lessons Authored", value: lessonCount, color: "text-primary-600 bg-primary-100 dark:bg-primary-900" },
    { icon: ClipboardCheck, label: "Exams Created", value: examCount, color: "text-accent-600 bg-accent-100 dark:bg-accent-900" },
    { icon: TrendingUp, label: "Questions in Bank", value: questionCount, color: "text-warning bg-warning/15" },
    { icon: Users, label: "Pending Submissions", value: submissionCount, color: "text-primary-600 bg-primary-100 dark:bg-primary-900" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-hero-gradient pattern-adire p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative">
          <p className="text-white/80 text-sm">Welcome back,</p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold">{userName.split(" ")[0]} 👩‍🏫</h1>
          <p className="text-white/85 text-sm mt-1">Manage your lessons, question bank, and student progress.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-5 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-extrabold text-lg leading-none">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" asChild>
              <Link href="/teacher/lessons/new">
                <Plus className="h-4 w-4" /> Create New Lesson
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/teacher/questions">
                <BookOpen className="h-4 w-4" /> Manage Question Bank
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/teacher/homework">
                <ClipboardCheck className="h-4 w-4" /> Assign & Grade Homework
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Class Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View class performance breakdowns, average scores by topic, and identify students who need extra support.
            </p>
            <Button variant="outline" className="w-full justify-start mt-3" asChild>
              <Link href="/teacher/analytics">
                <TrendingUp className="h-4 w-4" /> View Analytics
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
