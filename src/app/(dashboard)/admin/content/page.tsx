import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { AdminContentReview } from "@/components/admin/admin-content-review";

export const metadata = { title: "Review Content" };

export default async function AdminContentPage() {
  const user = await requireUser();
  if (user.role !== "ADMIN") redirect("/dashboard");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Content Review Queue</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Approve or reject lesson notes and exams submitted by teachers before they go live.
        </p>
      </div>
      <AdminContentReview />
    </div>
  );
}
