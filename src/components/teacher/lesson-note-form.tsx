"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Loader2, Save, Sparkles } from "lucide-react";
import { lessonNoteSchema, type LessonNoteInput } from "@/lib/validations/lesson";
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

const FIELD_HELP: Record<string, string> = {
  learningObjectives: "What should pupils be able to do by the end of this lesson? (list 2-4 objectives)",
  entryBehaviour: "What should pupils already know/be able to do before this lesson?",
  instructionalMaterials: "Teaching aids, charts, real objects, textbooks needed for this lesson.",
  classActivities: "Step-by-step teacher/pupil activities during the lesson (numbered steps work well).",
  evaluationQuestions: "In-class questions to check understanding before the lesson ends.",
  assignment: "Take-home task for pupils to reinforce the lesson.",
};

export function LessonNoteForm({
  defaultValues,
  lessonId,
}: {
  defaultValues?: Partial<LessonNoteInput>;
  lessonId?: string;
}) {
  const router = useRouter();
  const [classSubjects, setClassSubjects] = React.useState<ClassSubjectOption[]>([]);
  const [loadingOptions, setLoadingOptions] = React.useState(true);
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LessonNoteInput>({
    resolver: zodResolver(lessonNoteSchema),
    defaultValues: {
      durationMins: 20,
      term: 1,
      week: 1,
      ...defaultValues,
    },
  });

  React.useEffect(() => {
    fetch("/api/teacher/class-subjects")
      .then((res) => res.json())
      .then((data) => setClassSubjects(data.classSubjects ?? []))
      .catch(() => toast.error("Couldn't load class/subject list"))
      .finally(() => setLoadingOptions(false));
  }, []);

  const classSubjectId = watch("classSubjectId");

  const onSubmit = async (data: LessonNoteInput) => {
    setSubmitting(true);
    try {
      const url = lessonId ? `/api/teacher/lessons/${lessonId}` : "/api/teacher/lessons";
      const method = lessonId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to save lesson note");
      toast.success(lessonId ? "Lesson note updated — submitted for review." : "Lesson note created — submitted for review.");
      router.push("/teacher/lessons");
      router.refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Class, Subject & Curriculum Mapping</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Class & Subject</Label>
            <Select
              value={classSubjectId}
              onValueChange={(v) => setValue("classSubjectId", v, { shouldValidate: true })}
              disabled={loadingOptions}
            >
              <SelectTrigger>
                <SelectValue placeholder={loadingOptions ? "Loading..." : "Select class & subject"} />
              </SelectTrigger>
              <SelectContent>
                {classSubjects.map((cs) => (
                  <SelectItem key={cs.id} value={cs.id}>
                    {cs.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.classSubjectId && <p className="text-xs text-destructive mt-1">{errors.classSubjectId.message}</p>}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="term">Term</Label>
              <Select
                value={String(watch("term") ?? 1)}
                onValueChange={(v) => setValue("term", parseInt(v, 10) as any)}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">First Term</SelectItem>
                  <SelectItem value="2">Second Term</SelectItem>
                  <SelectItem value="3">Third Term</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="week">Week (1-13)</Label>
              <Input id="week" type="number" min={1} max={13} {...register("week")} />
            </div>
            <div>
              <Label htmlFor="durationMins">Duration (mins)</Label>
              <Input id="durationMins" type="number" min={5} max={180} {...register("durationMins")} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="topicTitle">Topic Title (NERDC curriculum topic)</Label>
              <Input id="topicTitle" placeholder="e.g. Fractions" {...register("topicTitle")} />
              {errors.topicTitle && <p className="text-xs text-destructive mt-1">{errors.topicTitle.message}</p>}
            </div>
            <div>
              <Label htmlFor="nerdcCode">NERDC Code (optional)</Label>
              <Input id="nerdcCode" placeholder="e.g. MATH-P5-N4" {...register("nerdcCode")} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="waecTopic">WAEC Syllabus Mapping (optional)</Label>
              <Input id="waecTopic" {...register("waecTopic")} />
            </div>
            <div>
              <Label htmlFor="necoTopic">NECO Syllabus Mapping (optional)</Label>
              <Input id="necoTopic" {...register("necoTopic")} />
            </div>
          </div>

          <div>
            <Label htmlFor="jambRelevance">JAMB/UTME Relevance (optional)</Label>
            <Textarea id="jambRelevance" rows={2} {...register("jambRelevance")} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lesson Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Lesson Title</Label>
            <Input id="title" placeholder="e.g. Fractions: Addition and Subtraction of Fractions" {...register("title")} />
            {errors.title && <p className="text-xs text-destructive mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <Label htmlFor="summary">Summary</Label>
            <Textarea id="summary" rows={2} placeholder="One or two sentences summarising the lesson" {...register("summary")} />
          </div>
          <div>
            <Label htmlFor="contentMd">
              Lesson Content <span className="text-xs text-muted-foreground font-normal">(Markdown supported — headings, bold, tables, lists)</span>
            </Label>
            <Textarea id="contentMd" rows={12} className="font-mono text-xs" {...register("contentMd")} />
            {errors.contentMd && <p className="text-xs text-destructive mt-1">{errors.contentMd.message}</p>}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent-500" />
            Formal NERDC Lesson Note
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            These fields generate a print-ready lesson note (objectives, entry behaviour, instructional materials, activities, evaluation, assignment) matching the standard Nigerian lesson-plan format.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {(
            [
              "learningObjectives",
              "entryBehaviour",
              "instructionalMaterials",
              "classActivities",
              "evaluationQuestions",
              "assignment",
            ] as const
          ).map((field) => (
            <div key={field}>
              <Label htmlFor={field} className="capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </Label>
              <p className="text-[11px] text-muted-foreground mb-1">{FIELD_HELP[field]}</p>
              <Textarea id={field} rows={field === "classActivities" ? 6 : 3} {...register(field)} />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => router.push("/teacher/lessons")}>
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          {lessonId ? "Save & Resubmit for Review" : "Submit for Review"}
        </Button>
      </div>
    </form>
  );
}
