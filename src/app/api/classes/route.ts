import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const classLevels = await prisma.classLevel.findMany({
    orderBy: { order: "asc" },
    select: { id: true, name: true, shortName: true, stage: true, order: true },
  });
  return NextResponse.json({ classLevels });
}
