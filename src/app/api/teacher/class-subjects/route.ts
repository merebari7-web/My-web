import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const classSubjects = await prisma.classSubject.findMany({
    include: {
      subject: { select: { name: true } },
      classLevel: { select: { name: true, shortName: true, order: true } },
    },
    orderBy: [{ classLevel: { order: "asc" } }, { subject: { name: "asc" } }],
  });

  return NextResponse.json({
    classSubjects: classSubjects.map((cs) => ({
      id: cs.id,
      label: `${cs.classLevel.shortName} — ${cs.subject.name}${cs.stream !== "NONE" ? ` (${cs.stream})` : ""}`,
      classShortName: cs.classLevel.shortName,
      subjectName: cs.subject.name,
      stream: cs.stream,
    })),
  });
}
