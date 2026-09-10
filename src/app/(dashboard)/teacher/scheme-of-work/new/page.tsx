import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { SchemeOfWorkEditor } from "@/components/teacher/scheme-of-work-editor";

export const metadata = { title: "New Scheme of Work" };

export default async function NewSchemeOfWorkPage() {
  const user = await requireUser();
  if (!["TEACHER", "ADMIN"].includes(user.role)) redirect("/dashboard");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">New Scheme of Work</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Choose a class, subject and term, then auto-generate from existing lesson notes or fill in the weeks manually.
        </p>
      </div>
      <SchemeOfWorkEditor />
    </div>
  );
}
