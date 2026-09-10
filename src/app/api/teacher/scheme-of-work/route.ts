import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { schemeOfWorkSchema } from "@/lib/validations/lesson";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const classSubjectId = searchParams.get("classSubjectId");
  const term = searchParams.get("term");
  const session_ = searchParams.get("session");

  if (classSubjectId && term && session_) {
    const scheme = await prisma.schemeOfWork.findUnique({
      where: {
        classSubjectId_term_session: {
          classSubjectId,
          term: parseInt(term, 10),
          session: session_,
        },
      },
      include: {
        entries: { orderBy: { week: "asc" } },
        classSubject: { include: { subject: true, classLevel: true } },
      },
    });
    return NextResponse.json({ scheme });
  }

  const schemes = await prisma.schemeOfWork.findMany({
    where: session.user.role === "TEACHER" ? { createdById: session.user.id } : undefined,
    include: {
      classSubject: { include: { subject: true, classLevel: true } },
      entries: { select: { id: true } },
    },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({
    schemes: schemes.map((s) => ({
      id: s.id,
      title: s.title,
      term: s.term,
      session: s.session,
      subjectName: s.classSubject.subject.name,
      classShortName: s.classSubject.classLevel.shortName,
      weekCount: s.entries.length,
      updatedAt: s.updatedAt,
    })),
  });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = schemeOfWorkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", issues: parsed.error.flatten() }, { status: 400 });
  }
  const data = parsed.data;

  const scheme = await prisma.schemeOfWork.upsert({
    where: {
      classSubjectId_term_session: {
        classSubjectId: data.classSubjectId,
        term: data.term,
        session: data.session,
      },
    },
    update: { title: data.title },
    create: {
      classSubjectId: data.classSubjectId,
      term: data.term,
      session: data.session,
      title: data.title,
      createdById: session.user.id,
    },
  });

  // Replace all entries for this scheme
  await prisma.schemeOfWorkEntry.deleteMany({ where: { schemeId: scheme.id } });
  await prisma.schemeOfWorkEntry.createMany({
    data: data.entries.map((e, idx) => ({
      schemeId: scheme.id,
      week: e.week,
      topicTitle: e.topicTitle,
      contentSummary: e.contentSummary || null,
      referenceMaterials: e.referenceMaterials || null,
      order: idx,
    })),
  });

  return NextResponse.json({ scheme }, { status: 201 });
}
