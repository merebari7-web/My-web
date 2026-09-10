"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Flag, ChevronLeft, ChevronRight, Clock, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn, secondsToClock } from "@/lib/utils";

interface Question {
  id: string;
  text: string;
  imageUrl?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  marks: number;
}

interface ExamMeta {
  id: string;
  title: string;
  durationMins: number;
  negativeMarking: boolean;
  negativeMarkValue: number;
  totalMarks: number;
  passMarkPercent: number;
}

export function CbtExamRunner({ examId }: { examId: string }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [exam, setExam] = React.useState<ExamMeta | null>(null);
  const [attemptId, setAttemptId] = React.useState<string | null>(null);
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [flagged, setFlagged] = React.useState<Set<string>>(new Set());
  const [secondsRemaining, setSecondsRemaining] = React.useState(0);
  const [submitting, setSubmitting] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const startTimeRef = React.useRef<number>(Date.now());

  React.useEffect(() => {
    fetch("/api/attempts/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ examId }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to start exam");
        setExam(data.exam);
        setAttemptId(data.attemptId);
        setQuestions(data.questions);
        setSecondsRemaining(data.exam.durationMins * 60);
        startTimeRef.current = Date.now();
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [examId]);

  const handleSubmit = React.useCallback(async () => {
    if (!attemptId || submitting) return;
    setSubmitting(true);
    const timeSpentSecs = Math.floor((Date.now() - startTimeRef.current) / 1000);
    try {
      const res = await fetch(`/api/attempts/${attemptId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, timeSpentSecs }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit exam");
      toast.success("Exam submitted!");
      router.push(`/cbt/${examId}/result/${attemptId}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
      setSubmitting(false);
    }
  }, [attemptId, answers, examId, router, submitting]);

  // Countdown timer
  React.useEffect(() => {
    if (loading || !exam) return;
    if (secondsRemaining <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setSecondsRemaining((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [loading, exam, secondsRemaining, handleSubmit]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary-600" />
          <p className="mt-3 text-sm text-muted-foreground">Preparing your exam...</p>
        </div>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-6">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <AlertTriangle className="h-10 w-10 text-destructive mx-auto mb-3" />
            <p className="font-semibold">{error || "Unable to load exam"}</p>
            <Button className="mt-4" onClick={() => router.push("/cbt")}>
              Back to CBT Exams
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const isLowTime = secondsRemaining < 120;

  const options: { key: "A" | "B" | "C" | "D"; text?: string | null }[] = [
    { key: "A", text: currentQuestion?.optionA },
    { key: "B", text: currentQuestion?.optionB },
    { key: "C", text: currentQuestion?.optionC },
    { key: "D", text: currentQuestion?.optionD },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 flex flex-col">
      {/* Exam header */}
      <header className="sticky top-0 z-20 bg-hero-gradient text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-white/75 truncate">{exam.title}</p>
            <p className="text-sm font-semibold">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2 font-mono font-bold text-lg",
              isLowTime ? "bg-destructive/90 animate-pulse" : "bg-white/15"
            )}
          >
            <Clock className="h-5 w-5" />
            {secondsToClock(secondsRemaining)}
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 grid lg:grid-cols-[1fr_260px] gap-6">
        {/* Question area */}
        <motion.div key={currentQuestion?.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-semibold text-base leading-relaxed">{currentQuestion?.text}</p>
                <button
                  onClick={() =>
                    setFlagged((prev) => {
                      const next = new Set(prev);
                      if (next.has(currentQuestion.id)) next.delete(currentQuestion.id);
                      else next.add(currentQuestion.id);
                      return next;
                    })
                  }
                  className={cn(
                    "shrink-0 p-2 rounded-lg border",
                    flagged.has(currentQuestion?.id ?? "")
                      ? "bg-warning/20 border-warning text-warning"
                      : "border-border text-muted-foreground hover:bg-muted"
                  )}
                  aria-label="Flag question for review"
                >
                  <Flag className="h-4 w-4" />
                </button>
              </div>

              {currentQuestion?.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={currentQuestion.imageUrl} alt="Question illustration" className="rounded-xl mb-4 max-h-64 object-contain" />
              )}

              <div className="space-y-3">
                {options.map((opt) =>
                  opt.text ? (
                    <button
                      key={opt.key}
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: opt.key }))
                      }
                      className={cn(
                        "w-full flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-colors",
                        answers[currentQuestion.id] === opt.key
                          ? "border-primary-500 bg-primary-50 dark:bg-primary-950 font-semibold"
                          : "border-border hover:bg-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold",
                          answers[currentQuestion.id] === opt.key
                            ? "bg-primary-600 text-white"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {opt.key}
                      </span>
                      {opt.text}
                    </button>
                  ) : null
                )}
              </div>

              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>
                {currentIndex === questions.length - 1 ? (
                  <Button onClick={() => setConfirmOpen(true)} variant="accent">
                    Submit Exam
                  </Button>
                ) : (
                  <Button onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}>
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Question navigator */}
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-5">
              <p className="text-xs font-semibold text-muted-foreground mb-3">
                {answeredCount} of {questions.length} answered
              </p>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isAnswered = !!answers[q.id];
                  const isFlagged = flagged.has(q.id);
                  const isCurrent = idx === currentIndex;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={cn(
                        "h-9 w-9 rounded-lg text-xs font-bold border flex items-center justify-center relative",
                        isCurrent && "ring-2 ring-primary-500",
                        isAnswered
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-background border-border text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-warning" />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-600" /> Answered
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-warning" /> Flagged for review
                </div>
              </div>
            </CardContent>
          </Card>

          {exam.negativeMarking && (
            <Card className="border-warning/50">
              <CardContent className="pt-4 text-xs text-warning flex gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                Negative marking is ON. Wrong answers deduct {exam.negativeMarkValue * 100}% of the question&apos;s marks.
              </CardContent>
            </Card>
          )}

          <Button variant="outline" className="w-full" onClick={() => setConfirmOpen(true)}>
            Submit Exam Early
          </Button>
        </div>
      </div>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit your exam?</DialogTitle>
            <DialogDescription>
              You have answered {answeredCount} of {questions.length} questions.
              {answeredCount < questions.length &&
                ` ${questions.length - answeredCount} question(s) are still unanswered.`}{" "}
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Continue Exam
            </Button>
            <Button onClick={handleSubmit} disabled={submitting}>
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Yes, Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
