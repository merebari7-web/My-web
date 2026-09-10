import { requireUser } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { SchemeOfWorkEditor } from "@/components/teacher/scheme-of-work-editor";

export const metadata = { title: "Edit Scheme of Work" };

export default async function EditSchemeOfWorkPage({ params }: { params: Promise<{ schemeId: string }> }) {
  const { schemeId } = await params;
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  const scheme = await prisma.schemeOfWork.findUnique({
    where: { id: schemeId },
    include: { entries: { orderBy: { week: "asc" } } },
  });

  if (!scheme) notFound();
  if (user.role === "TEACHER" && scheme.createdById !== user.id) redirect("/teacher/scheme-of-work");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Edit Scheme of Work</h1>
        <p className="text-muted-foreground text-sm mt-1">Update the weekly breakdown below.</p>
      </div>
      <SchemeOfWorkEditor
        defaultValues={{
          classSubjectId: scheme.classSubjectId,
          term: scheme.term,
          session: scheme.session,
          title: scheme.title,
          entries: scheme.entries.map((e) => ({
            week: e.week,
            topicTitle: e.topicTitle,
            contentSummary: e.contentSummary ?? "",
            referenceMaterials: e.referenceMaterials ?? "",
          })),
        }}
      />
    </div>
  );
}
