import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { lessonNoteSchema } from "@/lib/validations/lesson";
import { slugify } from "@/lib/utils";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { topic: true, classSubject: { include: { subject: true, classLevel: true } } },
  });

  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  if (session.user.role === "TEACHER" && lesson.authorId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ lesson });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existingLesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
  if (!existingLesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  if (session.user.role === "TEACHER" && existingLesson.authorId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json();
  const parsed = lessonNoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", issues: parsed.error.flatten() }, { status: 400 });
  }
  const data = parsed.data;

  const topicSlug = slugify(data.topicTitle);
  const topic = await prisma.topic.upsert({
    where: { classSubjectId_slug: { classSubjectId: data.classSubjectId, slug: topicSlug } },
    update: {
      title: data.topicTitle,
      nerdcCode: data.nerdcCode || null,
      waecTopic: data.waecTopic || null,
      necoTopic: data.necoTopic || null,
      jambRelevance: data.jambRelevance || null,
      term: data.term,
      week: data.week,
    },
    create: {
      classSubjectId: data.classSubjectId,
      title: data.topicTitle,
      slug: topicSlug,
      nerdcCode: data.nerdcCode || null,
      waecTopic: data.waecTopic || null,
      necoTopic: data.necoTopic || null,
      jambRelevance: data.jambRelevance || null,
      term: data.term,
      week: data.week,
    },
  });

  // Re-submitting for review after edits (unless admin, who publishes directly)
  const nextStatus = session.user.role === "ADMIN" ? existingLesson.status : "PENDING_REVIEW";

  const lesson = await prisma.lesson.update({
    where: { id: lessonId },
    data: {
      title: data.title,
      slug: slugify(data.title),
      summary: data.summary || null,
      contentMd: data.contentMd,
      durationMins: data.durationMins,
      term: data.term,
      week: data.week,
      learningObjectives: data.learningObjectives || null,
      entryBehaviour: data.entryBehaviour || null,
      instructionalMaterials: data.instructionalMaterials || null,
      classActivities: data.classActivities || null,
      evaluationQuestions: data.evaluationQuestions || null,
      assignment: data.assignment || null,
      classSubjectId: data.classSubjectId,
      topicId: topic.id,
      status: nextStatus,
    },
  });

  if (session.user.role === "TEACHER") {
    await prisma.contentApproval.create({
      data: { lessonId: lesson.id, status: "PENDING_REVIEW" },
    });
  }

  return NextResponse.json({ lesson });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  if (session.user.role === "TEACHER" && lesson.authorId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.lesson.delete({ where: { id: lessonId } });
  return NextResponse.json({ success: true });
}
