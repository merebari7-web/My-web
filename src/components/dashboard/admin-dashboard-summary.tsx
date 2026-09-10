import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, BookOpen, FileText, DollarSign, Megaphone, ShieldCheck } from "lucide-react";

export async function AdminDashboardSummary() {
  const [userCount, studentCount, teacherCount, lessonCount, examCount, activeSubs] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.user.count({ where: { role: "TEACHER" } }),
    prisma.lesson.count(),
    prisma.exam.count(),
    prisma.subscription.count({ where: { tier: "PREMIUM", status: "ACTIVE" } }),
  ]);

  const stats = [
    { icon: Users, label: "Total Users", value: userCount, color: "text-primary-600 bg-primary-100 dark:bg-primary-900" },
    { icon: Users, label: "Students", value: studentCount, color: "text-accent-600 bg-accent-100 dark:bg-accent-900" },
    { icon: BookOpen, label: "Lessons Published", value: lessonCount, color: "text-primary-600 bg-primary-100 dark:bg-primary-900" },
    { icon: FileText, label: "Exams", value: examCount, color: "text-warning bg-warning/15" },
    { icon: DollarSign, label: "Active Premium Subs", value: activeSubs, color: "text-success bg-success/15" },
    { icon: Users, label: "Teachers", value: teacherCount, color: "text-accent-600 bg-accent-100 dark:bg-accent-900" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-hero-gradient pattern-adire p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative">
          <p className="text-white/80 text-sm">Admin Console</p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold">Platform Overview 🛡️</h1>
          <p className="text-white/85 text-sm mt-1">Monitor users, content, and revenue across NaijaLearn.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>User Management</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/admin/users"><Users className="h-4 w-4" /> Manage Users</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Content Approvals</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/admin/content"><ShieldCheck className="h-4 w-4" /> Review Pending Content</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Announcements</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/admin/announcements"><Megaphone className="h-4 w-4" /> Post Announcement</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
