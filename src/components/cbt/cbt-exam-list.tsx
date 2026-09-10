"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, FileQuestion, Lock, Crown, Timer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ExamListItem {
  id: string;
  title: string;
  subjectName: string;
  board: string;
  durationMins: number;
  questionCount: number;
  negativeMarking: boolean;
  isPremium: boolean;
  lastScore: number | null;
}

export function CbtExamList({ exams, tier }: { exams: ExamListItem[]; tier: string }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold flex items-center gap-2">
          <Timer className="h-6 w-6 text-primary-600" /> CBT Mock Exams
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Practice under real WAEC, NECO and JAMB/UTME exam conditions — with a timer, instant scoring and explanations.
        </p>
      </div>

      {exams.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No CBT exams available for your class yet. Check back soon!
          </CardContent>
        </Card>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {exams.map((exam, i) => {
          const locked = exam.isPremium && tier !== "PREMIUM";
          return (
            <motion.div key={exam.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{exam.board}</Badge>
                    {exam.isPremium && (
                      <Badge variant="accent">
                        <Crown className="h-3 w-3" /> Premium
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base mt-1">{exam.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{exam.subjectName}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {exam.durationMins} minutes
                    </div>
                    <div className="flex items-center gap-2">
                      <FileQuestion className="h-4 w-4" /> {exam.questionCount} questions
                    </div>
                    {exam.negativeMarking && (
                      <Badge variant="warning" className="text-[10px]">Negative marking ON</Badge>
                    )}
                    {exam.lastScore !== null && (
                      <p className="text-xs">
                        Last score: <span className="font-bold text-primary-700 dark:text-primary-400">{Math.round(exam.lastScore)}%</span>
                      </p>
                    )}
                  </div>
                  <Button className="w-full" disabled={locked} asChild={!locked}>
                    {locked ? (
                      <span className="flex items-center gap-2">
                        <Lock className="h-4 w-4" /> Upgrade to unlock
                      </span>
                    ) : (
                      <Link href={`/cbt/${exam.id}`}>Start Exam</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
