import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default async function DashboardRootLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();

  let streak: number | undefined;
  if (user.role === "STUDENT") {
    const profile = await prisma.studentProfile.findUnique({
      where: { userId: user.id },
      select: { currentStreak: true },
    });
    streak = profile?.currentStreak ?? 0;
  }

  return (
    <DashboardShell role={user.role} userName={user.name ?? "User"} userImage={user.image} streak={streak}>
      {children}
    </DashboardShell>
  );
}
