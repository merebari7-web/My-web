import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const reviewSchema = z.object({
  decision: z.enum(["APPROVE", "REJECT"]),
  reviewNote: z.string().max(1000).optional(),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ approvalId: string }> }
) {
  const { approvalId } = await params;
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = reviewSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const approval = await prisma.contentApproval.findUnique({ where: { id: approvalId } });
  if (!approval) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const newStatus = parsed.data.decision === "APPROVE" ? "PUBLISHED" : "DRAFT";

  const [updatedApproval] = await prisma.$transaction([
    prisma.contentApproval.update({
      where: { id: approvalId },
      data: {
        status: newStatus,
        reviewNote: parsed.data.reviewNote,
        reviewedById: session.user.id,
      },
    }),
    ...(approval.lessonId
      ? [prisma.lesson.update({ where: { id: approval.lessonId }, data: { status: newStatus } })]
      : []),
    ...(approval.examId
      ? [prisma.exam.update({ where: { id: approval.examId }, data: { status: newStatus } })]
      : []),
  ]);

  await prisma.auditLog.create({
    data: {
      userId: session.user.id,
      action: parsed.data.decision === "APPROVE" ? "CONTENT_APPROVED" : "CONTENT_REJECTED",
      entity: approval.lessonId ? "Lesson" : "Exam",
      entityId: approval.lessonId ?? approval.examId ?? "",
      meta: parsed.data.reviewNote ? { reviewNote: parsed.data.reviewNote } : undefined,
    },
  });

  return NextResponse.json({ approval: updatedApproval });
}
