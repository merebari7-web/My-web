import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const generateSchema = z.object({
  classSubjectId: z.string().cuid(),
  term: z.coerce.number().int().min(1).max(3),
});

// Auto-generates a draft scheme of work by pulling existing topics/lessons
// already authored for a class-subject + term, ordered by week.
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || !["TEACHER", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = generateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { classSubjectId, term } = parsed.data;

  const topics = await prisma.topic.findMany({
    where: { classSubjectId, term },
    include: {
      lessons: { select: { summary: true, instructionalMaterials: true }, take: 1 },
    },
    orderBy: { week: "asc" },
  });

  if (topics.length === 0) {
    return NextResponse.json(
      { error: "No topics/lessons found yet for this class, subject, and term. Add lesson notes first, or build the scheme manually." },
      { status: 404 }
    );
  }

  const entries = topics.map((t, idx) => ({
    week: t.week || idx + 1,
    topicTitle: t.title,
    contentSummary: t.lessons[0]?.summary ?? "",
    referenceMaterials: t.lessons[0]?.instructionalMaterials ?? "",
  }));

  return NextResponse.json({ entries });
}
