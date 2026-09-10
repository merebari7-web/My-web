"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2, Save, Wand2, Trash2, Plus } from "lucide-react";
import { schemeOfWorkSchema, type SchemeOfWorkInput } from "@/lib/validations/lesson";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ClassSubjectOption {
  id: string;
  label: string;
}

type Entry = SchemeOfWorkInput["entries"][number];

export function SchemeOfWorkEditor({ defaultValues }: { defaultValues?: SchemeOfWorkInput }) {
  const router = useRouter();
  const [classSubjects, setClassSubjects] = React.useState<ClassSubjectOption[]>([]);
  const [classSubjectId, setClassSubjectId] = React.useState(defaultValues?.classSubjectId ?? "");
  const [term, setTerm] = React.useState(defaultValues?.term ?? 1);
  const [session, setSession] = React.useState(defaultValues?.session ?? "2025/2026");
  const [title, setTitle] = React.useState(defaultValues?.title ?? "");
  const [entries, setEntries] = React.useState<Entry[]>(
    defaultValues?.entries ?? Array.from({ length: 13 }, (_, i) => ({ week: i + 1, topicTitle: "", contentSummary: "", referenceMaterials: "" }))
  );
  const [generating, setGenerating] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/teacher/class-subjects")
      .then((res) => res.json())
      .then((data) => setClassSubjects(data.classSubjects ?? []))
      .catch(() => toast.error("Couldn't load class/subject list"));
  }, []);

  const updateEntry = (idx: number, field: keyof Entry, value: string | number) => {
    setEntries((prev) => prev.map((e, i) => (i === idx ? { ...e, [field]: value } : e)));
  };

  const addWeek = () => {
    const nextWeek = entries.length > 0 ? Math.max(...entries.map((e) => e.week)) + 1 : 1;
    setEntries((prev) => [...prev, { week: nextWeek, topicTitle: "", contentSummary: "", referenceMaterials: "" }]);
  };

  const removeWeek = (idx: number) => setEntries((prev) => prev.filter((_, i) => i !== idx));

  const handleGenerate = async () => {
    if (!classSubjectId) {
      toast.error("Select a class & subject first");
      return;
    }
    setGenerating(true);
    try {
      const res = await fetch("/api/teacher/scheme-of-work/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classSubjectId, term }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't generate");
      setEntries(data.entries);
      toast.success(`Generated ${data.entries.length} weeks from existing lesson notes!`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setGenerating(false);
    }
  };

  const handleSave = async () => {
    const payload: SchemeOfWorkInput = {
      classSubjectId,
      term,
      session,
      title,
      entries: entries.filter((e) => e.topicTitle.trim().length > 0),
    };
    const parsed = schemeOfWorkSchema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check the form for errors");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/teacher/scheme-of-work", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      toast.success("Scheme of work saved!");
      router.push("/teacher/scheme-of-work");
      router.refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Class & Subject</Label>
            <Select value={classSubjectId} onValueChange={setClassSubjectId}>
              <SelectTrigger><SelectValue placeholder="Select class & subject" /></SelectTrigger>
              <SelectContent>
                {classSubjects.map((cs) => (
                  <SelectItem key={cs.id} value={cs.id}>{cs.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label>Term</Label>
              <Select value={String(term)} onValueChange={(v) => setTerm(parseInt(v, 10))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">First Term</SelectItem>
                  <SelectItem value="2">Second Term</SelectItem>
                  <SelectItem value="3">Third Term</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Session</Label>
              <Input value={session} onChange={(e) => setSession(e.target.value)} placeholder="2025/2026" />
            </div>
            <div className="sm:col-span-1">
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. P5 Maths — First Term" />
            </div>
          </div>
          <Button type="button" variant="outline" onClick={handleGenerate} disabled={generating}>
            {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
            Auto-generate from existing lesson notes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {entries.map((entry, idx) => (
            <div key={idx} className="rounded-xl border border-border p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Label className="mb-0">Week</Label>
                  <Input
                    type="number"
                    min={1}
                    max={13}
                    className="w-20"
                    value={entry.week}
                    onChange={(e) => updateEntry(idx, "week", parseInt(e.target.value || "1", 10))}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeWeek(idx)}
                  className="text-destructive hover:bg-destructive/10 p-1.5 rounded-lg"
                  aria-label="Remove week"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <Input
                placeholder="Topic title"
                value={entry.topicTitle}
                onChange={(e) => updateEntry(idx, "topicTitle", e.target.value)}
              />
              <Textarea
                placeholder="Content summary (optional)"
                rows={2}
                value={entry.contentSummary}
                onChange={(e) => updateEntry(idx, "contentSummary", e.target.value)}
              />
              <Input
                placeholder="Reference materials (optional)"
                value={entry.referenceMaterials}
                onChange={(e) => updateEntry(idx, "referenceMaterials", e.target.value)}
              />
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={addWeek}>
            <Plus className="h-4 w-4" /> Add Week
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => router.push("/teacher/scheme-of-work")}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={submitting}>
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Save Scheme of Work
        </Button>
      </div>
    </div>
  );
}
