import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
  const session = await auth();
  if (!session?.user) return null;
  return session.user;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function getStudentProfile(userId: string) {
  return prisma.studentProfile.findUnique({
    where: { userId },
    include: {
      classLevel: true,
      subscription: true,
      badges: { include: { badge: true } },
    },
  });
}

export async function requireStudentProfile() {
  const user = await requireUser();
  const profile = await getStudentProfile(user.id);
  if (!profile) redirect("/dashboard");
  return { user, profile };
}
