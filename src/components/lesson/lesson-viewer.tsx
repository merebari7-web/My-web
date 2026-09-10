"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  id: string;
  text: string;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  correctOption?: string | null;
  explanation?: string | null;
}

interface LessonInfo {
  id: string;
  title: string;
  summary?: string | null;
  contentMd: string;
  durationMins: number;
  subjectName: string;
  topicName?: string | null;
}

interface SiblingLesson {
  id: string;
  title: string;
  order: number;
}

export function LessonViewer({
  lesson,
  quizQuestions,
  existingProgress,
  nextLesson,
  prevLesson,
}: {
  lesson: LessonInfo;
  quizQuestions: QuizQuestion[];
  existingProgress: { completed: boolean; quizScore: number | null } | null;
  nextLesson: SiblingLesson | null;
  prevLesson: SiblingLesson | null;
}) {
  const router = useRouter();
  const [speaking, setSpeaking] = React.useState(false);
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizAnswers, setQuizAnswers] = React.useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [completed, setCompleted] = React.useState(existingProgress?.completed ?? false);
  const [saving, setSaving] = React.useState(false);
  const utteranceRef = React.useRef<SpeechSynthesisUtterance | null>(null);

  const plainText = React.useMemo(
    () => lesson.contentMd.replace(/[#*_`>\-]/g, "").replace(/\n+/g, ". "),
    [lesson.contentMd]
  );

  const toggleSpeech = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      toast.error("Text-to-speech isn't supported on this browser.");
      return;
    }
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  React.useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  const saveProgress = async (data: { progressPercent?: number; completed?: boolean; quizScore?: number }) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/lessons/${lesson.id}/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.xpAwarded > 0) {
        toast.success(`+${result.xpAwarded} XP earned!`);
      }
      return result;
    } catch {
      toast.error("Couldn't save progress. Check your connection.");
    } finally {
      setSaving(false);
    }
  };

  const correctCount = quizQuestions.filter((q) => quizAnswers[q.id] === q.correctOption).length;
  const quizScore = quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0;

  const handleQuizSubmit = async () => {
    setQuizSubmitted(true);
    setCompleted(true);
    await saveProgress({ progressPercent: 100, completed: true, quizScore });
  };

  const handleMarkComplete = async () => {
    setCompleted(true);
    await saveProgress({ progressPercent: 100, completed: true });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      <div className="flex items-center justify-between">
        <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        {completed && (
          <Badge variant="success">
            <CheckCircle2 className="h-3.5 w-3.5" /> Completed
          </Badge>
        )}
      </div>

      <div>
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <Badge variant="secondary">{lesson.subjectName}</Badge>
          {lesson.topicName && <Badge variant="outline">{lesson.topicName}</Badge>}
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {lesson.durationMins} min read
          </span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold">{lesson.title}</h1>
        {lesson.summary && <p className="text-muted-foreground mt-2">{lesson.summary}</p>}
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={toggleSpeech}>
          {speaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          {speaking ? "Stop reading" : "Listen to lesson"}
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6 prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.contentMd}</ReactMarkdown>
        </CardContent>
      </Card>

      {quizQuestions.length > 0 ? (
        <Card>
          <CardContent className="pt-6">
            {!showQuiz ? (
              <div className="text-center py-6">
                <Sparkles className="h-10 w-10 text-accent-500 mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg">Ready for a quick check?</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-4">
                  Answer {quizQuestions.length} question{quizQuestions.length > 1 ? "s" : ""} to complete this lesson and earn XP.
                </p>
                <Button onClick={() => setShowQuiz(true)}>Start Mini Quiz</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const options = [
                    { key: "A", text: q.optionA },
                    { key: "B", text: q.optionB },
                    { key: "C", text: q.optionC },
                    { key: "D", text: q.optionD },
                  ];
                  const selected = quizAnswers[q.id];
                  return (
                    <div key={q.id}>
                      <p className="font-semibold text-sm mb-3">
                        {idx + 1}. {q.text}
                      </p>
                      <div className="space-y-2">
                        {options.map(
                          (opt) =>
                            opt.text && (
                              <button
                                key={opt.key}
                                disabled={quizSubmitted}
                                onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: opt.key }))}
                                className={cn(
                                  "w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                                  selected === opt.key && !quizSubmitted && "border-primary-500 bg-primary-50 dark:bg-primary-950",
                                  quizSubmitted && opt.key === q.correctOption && "border-success bg-success/10",
                                  quizSubmitted && selected === opt.key && opt.key !== q.correctOption && "border-destructive bg-destructive/10",
                                  !selected && !quizSubmitted && "border-border hover:bg-muted"
                                )}
                              >
                                <span className="h-6 w-6 shrink-0 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                                  {opt.key}
                                </span>
                                {opt.text}
                                {quizSubmitted && opt.key === q.correctOption && (
                                  <CheckCircle2 className="h-4 w-4 text-success ml-auto" />
                                )}
                                {quizSubmitted && selected === opt.key && opt.key !== q.correctOption && (
                                  <XCircle className="h-4 w-4 text-destructive ml-auto" />
                                )}
                              </button>
                            )
                        )}
                      </div>
                      {quizSubmitted && q.explanation && (
                        <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 mt-2">
                          <span className="font-semibold">Explanation: </span>{q.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}

                {!quizSubmitted ? (
                  <Button
                    className="w-full"
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length || saving}
                    onClick={handleQuizSubmit}
                  >
                    Submit Answers
                  </Button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-5 rounded-xl bg-primary-50 dark:bg-primary-950"
                  >
                    <p className="font-display font-extrabold text-2xl">{quizScore}%</p>
                    <p className="text-sm text-muted-foreground">
                      {correctCount} of {quizQuestions.length} correct — lesson marked complete!
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        !completed && (
          <Button className="w-full" onClick={handleMarkComplete} disabled={saving}>
            <CheckCircle2 className="h-4 w-4" /> Mark Lesson as Complete
          </Button>
        )
      )}

      <div className="flex items-center justify-between pt-4 border-t border-border">
        {prevLesson ? (
          <Button variant="outline" asChild>
            <Link href={`/lesson/${prevLesson.id}`}>
              <ArrowLeft className="h-4 w-4" /> Previous
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {nextLesson ? (
          <Button asChild>
            <Link href={`/lesson/${nextLesson.id}`}>
              Next Lesson <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" onClick={() => router.push("/learn")}>
            <BookOpen className="h-4 w-4" /> Back to Subject
          </Button>
        )}
      </div>
    </div>
  );
}
