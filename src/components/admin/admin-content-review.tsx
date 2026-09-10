"use client";

import * as React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { CheckCircle2, XCircle, Loader2, FileText, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Approval {
  id: string;
  status: string;
  reviewNote?: string | null;
  createdAt: string;
  lesson?: {
    id: string;
    title: string;
    authorName: string;
    subjectName: string;
    classShortName: string;
    term: number;
    week: number;
  } | null;
  exam?: {
    id: string;
    title: string;
    authorName: string;
    subjectName: string;
  } | null;
}

export function AdminContentReview() {
  const [approvals, setApprovals] = React.useState<Approval[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [notes, setNotes] = React.useState<Record<string, string>>({});
  const [actingId, setActingId] = React.useState<string | null>(null);

  const load = React.useCallback(() => {
    setLoading(true);
    fetch("/api/admin/content?status=PENDING_REVIEW")
      .then((res) => res.json())
      .then((data) => setApprovals(data.approvals ?? []))
      .catch(() => toast.error("Couldn't load the review queue"))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    load();
  }, [load]);

  const handleDecision = async (id: string, decision: "APPROVE" | "REJECT") => {
    setActingId(id);
    try {
      const res = await fetch(`/api/admin/content/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ decision, reviewNote: notes[id] }),
      });
      if (!res.ok) throw new Error("Failed to submit decision");
      toast.success(decision === "APPROVE" ? "Content approved & published!" : "Content rejected and sent back to draft.");
      setApprovals((prev) => prev.filter((a) => a.id !== id));
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setActingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-primary-600" />
      </div>
    );
  }

  if (approvals.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          🎉 No content pending review. All caught up!
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {approvals.map((a) => (
        <Card key={a.id}>
          <CardContent className="pt-5 space-y-3">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <Badge variant="warning">Pending Review</Badge>
                  {a.lesson && <Badge variant="outline">{a.lesson.classShortName} — {a.lesson.subjectName}</Badge>}
                  {a.lesson && <Badge variant="outline">Term {a.lesson.term}, Week {a.lesson.week}</Badge>}
                  {a.exam && <Badge variant="outline">{a.exam.subjectName}</Badge>}
                </div>
                <p className="font-semibold text-sm flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {a.lesson?.title ?? a.exam?.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Submitted by {a.lesson?.authorName ?? a.exam?.authorName}
                </p>
              </div>
              {a.lesson && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/teacher/lessons/${a.lesson.id}/note`} target="_blank">
                    <Eye className="h-3.5 w-3.5" /> Preview
                  </Link>
                </Button>
              )}
            </div>

            <Textarea
              placeholder="Optional review note (visible to the teacher)..."
              rows={2}
              value={notes[a.id] ?? ""}
              onChange={(e) => setNotes((prev) => ({ ...prev, [a.id]: e.target.value }))}
            />

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="success"
                disabled={actingId === a.id}
                onClick={() => handleDecision(a.id, "APPROVE")}
              >
                <CheckCircle2 className="h-4 w-4" /> Approve & Publish
              </Button>
              <Button
                size="sm"
                variant="destructive"
                disabled={actingId === a.id}
                onClick={() => handleDecision(a.id, "REJECT")}
              >
                <XCircle className="h-4 w-4" /> Reject
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
