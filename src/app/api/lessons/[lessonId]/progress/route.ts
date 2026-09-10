import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const progressSchema = z.object({
  progressPercent: z.number().int().min(0).max(100).optional(),
  completed: z.boolean().optional(),
  quizScore: z.number().int().min(0).max(100).optional(),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const session = await auth();
  if (!session?.user || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = progressSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const studentProfile = await prisma.studentProfile.findUnique({ where: { userId: session.user.id } });
  if (!studentProfile) {
    return NextResponse.json({ error: "Student profile not found" }, { status: 404 });
  }

  const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  const wasCompletedBefore = await prisma.lessonProgress.findUnique({
    where: { studentId_lessonId: { studentId: studentProfile.id, lessonId } },
  });

  const data = { ...parsed.data };
  if (data.completed) {
    (data as any).completedAt = new Date();
  }

  const progress = await prisma.lessonProgress.upsert({
    where: { studentId_lessonId: { studentId: studentProfile.id, lessonId } },
    update: data,
    create: {
      studentId: studentProfile.id,
      lessonId,
      progressPercent: data.progressPercent ?? 0,
      completed: data.completed ?? false,
      quizScore: data.quizScore,
      ...(data.completed ? { completedAt: new Date() } : {}),
    },
  });

  // Award XP only the first time a lesson is completed
  let xpAwarded = 0;
  if (data.completed && !wasCompletedBefore?.completed) {
    xpAwarded = 25 + (data.quizScore ? Math.round(data.quizScore / 5) : 0);
    await prisma.studentProfile.update({
      where: { id: studentProfile.id },
      data: {
        xp: { increment: xpAwarded },
        lastActiveDate: new Date(),
      },
    });
  }

  return NextResponse.json({ progress, xpAwarded });
}
