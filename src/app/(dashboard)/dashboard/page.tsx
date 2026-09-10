import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { StudentDashboard } from "@/components/dashboard/student-dashboard";
import { TeacherDashboard } from "@/components/dashboard/teacher-dashboard";
import { ParentDashboard } from "@/components/dashboard/parent-dashboard";
import { AdminDashboardSummary } from "@/components/dashboard/admin-dashboard-summary";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const user = await requireUser();

  if (user.role === "TEACHER") {
    return <TeacherDashboard userId={user.id} userName={user.name ?? "Teacher"} />;
  }
  if (user.role === "PARENT") {
    return <ParentDashboard userId={user.id} userName={user.name ?? "Parent"} />;
  }
  if (user.role === "ADMIN") {
    return <AdminDashboardSummary />;
  }

  // STUDENT (default)
  const profile = await prisma.studentProfile.findUnique({
    where: { userId: user.id },
    include: {
      classLevel: true,
      subscription: true,
      badges: { include: { badge: true }, orderBy: { earnedAt: "desc" }, take: 5 },
    },
  });

  if (!profile) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <h1 className="font-display text-2xl font-bold">Complete your profile</h1>
        <p className="text-muted-foreground mt-2">
          We couldn&apos;t find a student profile linked to your account.
        </p>
      </div>
    );
  }

  const classSubjects = await prisma.classSubject.findMany({
    where: {
      classLevelId: profile.classLevelId,
      OR: [{ stream: "NONE" }, { stream: profile.stream }],
    },
    include: {
      subject: true,
      lessons: {
        where: { status: "PUBLISHED" },
        orderBy: { order: "asc" },
        include: {
          progress: { where: { studentId: profile.id } },
        },
      },
    },
  });

  const allLessons = classSubjects.flatMap((cs) =>
    cs.lessons.map((l) => ({ ...l, subjectName: cs.subject.name, subjectSlug: cs.subject.slug }))
  );
  const totalLessons = allLessons.length;
  const completedLessons = allLessons.filter((l) => l.progress[0]?.completed).length;
  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const recommended = allLessons
    .filter((l) => !l.progress[0]?.completed)
    .slice(0, 4);

  const recentExamAttempts = await prisma.examAttempt.findMany({
    where: { studentId: profile.id, status: "GRADED" },
    include: { exam: { include: { subject: true } } },
    orderBy: { submittedAt: "desc" },
    take: 5,
  });

  const leaderboard = await prisma.studentProfile.findMany({
    where: { classLevelId: profile.classLevelId },
    include: { user: true },
    orderBy: { xp: "desc" },
    take: 5,
  });

  return (
    <StudentDashboard
      userName={user.name ?? "Student"}
      classLevelName={profile.classLevel.name}
      stream={profile.stream}
      xp={profile.xp}
      level={profile.level}
      currentStreak={profile.currentStreak}
      longestStreak={profile.longestStreak}
      overallProgress={overallProgress}
      completedLessons={completedLessons}
      totalLessons={totalLessons}
      subjectCount={classSubjects.length}
      tier={profile.subscription?.tier ?? "FREE"}
      recentBadges={profile.badges.map((b) => ({
        id: b.badge.id,
        name: b.badge.name,
        icon: b.badge.icon,
        earnedAt: b.earnedAt.toISOString(),
      }))}
      recommended={recommended.map((l) => ({
        id: l.id,
        title: l.title,
        subjectName: l.subjectName,
        subjectSlug: l.subjectSlug,
        durationMins: l.durationMins,
      }))}
      recentResults={recentExamAttempts.map((a) => ({
        id: a.id,
        examTitle: a.exam.title,
        subjectName: a.exam.subject.name,
        percentage: a.percentage ?? 0,
        grade: a.grade ?? "-",
        submittedAt: a.submittedAt?.toISOString() ?? "",
      }))}
      leaderboard={leaderboard.map((s, idx) => ({
        rank: idx + 1,
        name: s.user.name,
        xp: s.xp,
        isCurrentUser: s.userId === user.id,
      }))}
    />
  );
}
