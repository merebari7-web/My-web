"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, XCircle, Clock, RotateCcw, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { secondsToClock, cn } from "@/lib/utils";

interface AnswerDetail {
  id: string;
  questionText: string;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  correctOption?: string | null;
  selectedOption?: string | null;
  isCorrect: boolean;
  explanation?: string | null;
}

interface Props {
  examTitle: string;
  subjectName: string;
  score: number;
  totalMarks: number;
  percentage: number;
  grade: string;
  timeSpentSecs: number;
  passMarkPercent: number;
  examId: string;
  answers: AnswerDetail[];
}

export function CbtResultView({
  examTitle,
  subjectName,
  score,
  totalMarks,
  percentage,
  grade,
  timeSpentSecs,
  passMarkPercent,
  examId,
  answers,
}: Props) {
  const passed = percentage >= passMarkPercent;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const circumference = 2 * Math.PI * 15.9155;
  const dashOffset = circumference - (Math.min(100, percentage) / 100) * circumference;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="overflow-hidden">
          <div className={cn("h-2", passed ? "bg-success" : "bg-destructive")} />
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative h-36 w-36 shrink-0">
                <svg viewBox="0 0 36 36" className="h-36 w-36 -rotate-90">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={passed ? "#128A4A" : "#dc2626"}
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-3xl">{Math.round(percentage)}%</span>
                  <Badge variant={passed ? "success" : "destructive"} className="mt-1">{grade}</Badge>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h1 className="font-display text-xl font-extrabold">{examTitle}</h1>
                <p className="text-sm text-muted-foreground">{subjectName}</p>
                <div className="flex flex-wrap gap-4 mt-4 justify-center sm:justify-start">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Trophy className="h-4 w-4 text-warning" /> {score}/{totalMarks} marks
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success" /> {correctCount}/{answers.length} correct
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" /> {secondsToClock(timeSpentSecs)}
                  </div>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm font-semibold",
                    passed ? "text-success" : "text-destructive"
                  )}
                >
                  {passed ? "🎉 Congratulations, you passed!" : "Keep practicing — you can do better next time!"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild>
                <Link href={`/cbt/${examId}`}>
                  <RotateCcw className="h-4 w-4" /> Retake Exam
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cbt">
                  <ArrowLeft className="h-4 w-4" /> Back to CBT Exams
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>Answer Review & Explanations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {answers.map((a, idx) => {
            const options = [
              { key: "A", text: a.optionA },
              { key: "B", text: a.optionB },
              { key: "C", text: a.optionC },
              { key: "D", text: a.optionD },
            ];
            return (
              <div key={a.id} className="p-4 rounded-xl border border-border">
                <div className="flex items-start gap-2">
                  {a.isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  )}
                  <p className="font-semibold text-sm">
                    {idx + 1}. {a.questionText}
                  </p>
                </div>
                <div className="mt-3 grid sm:grid-cols-2 gap-2">
                  {options.map(
                    (opt) =>
                      opt.text && (
                        <div
                          key={opt.key}
                          className={cn(
                            "text-xs rounded-lg px-3 py-2 border",
                            opt.key === a.correctOption &&
                              "border-success bg-success/10 font-semibold",
                            opt.key === a.selectedOption &&
                              opt.key !== a.correctOption &&
                              "border-destructive bg-destructive/10 font-semibold"
                          )}
                        >
                          <span className="font-bold mr-1">{opt.key}.</span> {opt.text}
                        </div>
                      )
                  )}
                </div>
                {a.explanation && (
                  <p className="mt-3 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                    <span className="font-semibold">Explanation: </span>
                    {a.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
