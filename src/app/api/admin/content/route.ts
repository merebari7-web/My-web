import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") ?? "PENDING_REVIEW";

  const approvals = await prisma.contentApproval.findMany({
    where: { status: status as any },
    include: {
      lesson: {
        include: {
          author: { select: { name: true, email: true } },
          subject: { select: { name: true } },
          classSubject: { include: { classLevel: { select: { shortName: true } } } },
        },
      },
      exam: {
        include: {
          author: { select: { name: true, email: true } },
          subject: { select: { name: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    approvals: approvals.map((a) => ({
      id: a.id,
      status: a.status,
      reviewNote: a.reviewNote,
      createdAt: a.createdAt,
      lesson: a.lesson
        ? {
            id: a.lesson.id,
            title: a.lesson.title,
            authorName: a.lesson.author?.name ?? "Unknown",
            subjectName: a.lesson.subject.name,
            classShortName: a.lesson.classSubject.classLevel.shortName,
            term: a.lesson.term,
            week: a.lesson.week,
          }
        : null,
      exam: a.exam
        ? {
            id: a.exam.id,
            title: a.exam.title,
            authorName: a.exam.author?.name ?? "Unknown",
            subjectName: a.exam.subject.name,
          }
        : null,
    })),
  });
}
