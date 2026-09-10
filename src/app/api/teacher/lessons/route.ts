import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { lessonNoteSchema } from "@/lib/validations/lesson";
import { slugify } from "@/lib/utils";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const mine = searchParams.get("mine") === "true";

  const lessons = await prisma.lesson.findMany({
    where: mine ? { authorId: session.user.id } : undefined,
    include: {
      subject: { select: { name: true } },
      classSubject: { include: { classLevel: { select: { shortName: true } } } },
      topic: { select: { title: true } },
      approvals: { orderBy: { createdAt: "desc" }, take: 1 },
    },
    orderBy: [{ term: "asc" }, { week: "asc" }, { order: "asc" }],
  });

  return NextResponse.json({
    lessons: lessons.map((l) => ({
      id: l.id,
      title: l.title,
      subjectName: l.subject.name,
      classShortName: l.classSubject.classLevel.shortName,
      topicTitle: l.topic?.title ?? null,
      term: l.term,
      week: l.week,
      status: l.status,
      latestApproval: l.approvals[0]
        ? { status: l.approvals[0].status, reviewNote: l.approvals[0].reviewNote }
        : null,
      updatedAt: l.updatedAt,
    })),
  });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = lessonNoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", issues: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;

  const classSubject = await prisma.classSubject.findUnique({ where: { id: data.classSubjectId } });
  if (!classSubject) {
    return NextResponse.json({ error: "Class/subject not found" }, { status: 404 });
  }

  // Teachers submit for review; admins publish directly.
  const initialStatus = session.user.role === "ADMIN" ? "PUBLISHED" : "PENDING_REVIEW";

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

  const lessonSlug = slugify(data.title);

  const existing = await prisma.lesson.findUnique({
    where: { classSubjectId_slug: { classSubjectId: data.classSubjectId, slug: lessonSlug } },
  });
  if (existing) {
    return NextResponse.json({ error: "A lesson with this title already exists for this class/subject." }, { status: 409 });
  }

  const lesson = await prisma.lesson.create({
    data: {
      title: data.title,
      slug: lessonSlug,
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
      subjectId: classSubject.subjectId,
      classSubjectId: data.classSubjectId,
      topicId: topic.id,
      authorId: session.user.id,
      status: initialStatus,
    },
  });

  if (initialStatus === "PENDING_REVIEW") {
    await prisma.contentApproval.create({
      data: { lessonId: lesson.id, status: "PENDING_REVIEW" },
    });
  }

  return NextResponse.json({ lesson }, { status: 201 });
}
