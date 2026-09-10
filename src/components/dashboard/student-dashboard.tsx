"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  BookOpen,
  Trophy,
  Star,
  ArrowRight,
  Clock,
  Crown,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { xpForLevel } from "@/lib/utils";

interface Props {
  userName: string;
  classLevelName: string;
  stream: string;
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  overallProgress: number;
  completedLessons: number;
  totalLessons: number;
  subjectCount: number;
  tier: string;
  recentBadges: { id: string; name: string; icon: string; earnedAt: string }[];
  recommended: { id: string; title: string; subjectName: string; subjectSlug: string; durationMins: number }[];
  recentResults: { id: string; examTitle: string; subjectName: string; percentage: number; grade: string; submittedAt: string }[];
  leaderboard: { rank: number; name: string; xp: number; isCurrentUser: boolean }[];
}

export function StudentDashboard({
  userName,
  classLevelName,
  stream,
  xp,
  level,
  currentStreak,
  longestStreak,
  overallProgress,
  completedLessons,
  totalLessons,
  subjectCount,
  tier,
  recentBadges,
  recommended,
  recentResults,
  leaderboard,
}: Props) {
  const firstName = userName.split(" ")[0];
  const xpForNextLevel = xpForLevel(level + 1);
  const xpForCurrentLevel = xpForLevel(level);
  const xpProgress = Math.round(
    ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100
  );

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-hero-gradient pattern-adire p-6 sm:p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-white/80 text-sm">Welcome back,</p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold">{firstName} 👋</h1>
            <p className="text-white/85 text-sm mt-1">
              {classLevelName}
              {stream !== "NONE" ? ` · ${stream.charAt(0)}${stream.slice(1).toLowerCase()} Stream` : ""}
              {" · "}
              <Badge variant={tier === "PREMIUM" ? "accent" : "secondary"} className="ml-1 align-middle">
                {tier === "PREMIUM" && <Crown className="h-3 w-3" />}
                {tier}
              </Badge>
            </p>
          </div>
          <div className="flex gap-3">
            <div className="text-center bg-white/15 rounded-xl px-4 py-2.5">
              <p className="text-2xl font-display font-extrabold flex items-center gap-1 justify-center">
                <Flame className="h-5 w-5" /> {currentStreak}
              </p>
              <p className="text-[11px] text-white/80">Day Streak</p>
            </div>
            <div className="text-center bg-white/15 rounded-xl px-4 py-2.5">
              <p className="text-2xl font-display font-extrabold">{xp.toLocaleString()}</p>
              <p className="text-[11px] text-white/80">Total XP</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: "Lessons Completed", value: `${completedLessons}/${totalLessons}`, color: "text-primary-600 bg-primary-100 dark:bg-primary-900" },
          { icon: Sparkles, label: "Overall Progress", value: `${overallProgress}%`, color: "text-accent-600 bg-accent-100 dark:bg-accent-900" },
          { icon: Trophy, label: "Longest Streak", value: `${longestStreak} days`, color: "text-warning bg-warning/15" },
          { icon: Star, label: "Subjects", value: subjectCount, color: "text-primary-600 bg-primary-100 dark:bg-primary-900" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card>
              <CardContent className="pt-5 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-extrabold text-lg leading-none">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level progress */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Level {level}</CardTitle>
                <span className="text-xs text-muted-foreground">{xp} / {xpForNextLevel} XP</span>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={Math.max(0, Math.min(100, xpProgress))} />
              <p className="text-xs text-muted-foreground mt-2">
                Earn {xpForNextLevel - xp} more XP to reach Level {level + 1}!
              </p>
            </CardContent>
          </Card>

          {/* Recommended lessons */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Continue Learning</CardTitle>
                <Button variant="link" size="sm" asChild>
                  <Link href="/learn">
                    View all <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommended.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  You&apos;ve completed all available lessons. Great job! 🎉
                </p>
              )}
              {recommended.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.id}`}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-border hover:border-primary-300 hover:bg-primary-50/50 dark:hover:bg-primary-950/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 flex items-center justify-center shrink-0">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">{lesson.subjectName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {lesson.durationMins}m
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recent exam results */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Exam Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentResults.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No exam attempts yet. Try a CBT mock exam to see your results here!
                </p>
              )}
              {recentResults.map((r) => (
                <div key={r.id} className="flex items-center justify-between p-3.5 rounded-xl border border-border">
                  <div>
                    <p className="font-semibold text-sm">{r.examTitle}</p>
                    <p className="text-xs text-muted-foreground">{r.subjectName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-primary-700 dark:text-primary-400">
                      {Math.round(r.percentage)}%
                    </p>
                    <Badge variant="secondary" className="text-[10px]">{r.grade}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Badges</CardTitle>
            </CardHeader>
            <CardContent>
              {recentBadges.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Complete lessons and quizzes to earn your first badge!
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {recentBadges.map((b) => (
                    <div key={b.id} className="text-center">
                      <div className="h-14 w-14 mx-auto rounded-2xl bg-accent-50 dark:bg-accent-950 flex items-center justify-center text-2xl">
                        {b.icon}
                      </div>
                      <p className="text-[11px] font-semibold mt-1.5 truncate">{b.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Class Leaderboard</CardTitle>
                <Trophy className="h-4 w-4 text-warning" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center justify-between p-2.5 rounded-xl ${
                    entry.isCurrentUser ? "bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800" : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        entry.rank === 1
                          ? "bg-warning text-white"
                          : entry.rank === 2
                          ? "bg-muted-foreground/40 text-white"
                          : entry.rank === 3
                          ? "bg-accent-400 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {entry.rank}
                    </span>
                    <span className="text-sm font-medium truncate max-w-[120px]">
                      {entry.isCurrentUser ? "You" : entry.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">{entry.xp} XP</span>
                </div>
              ))}
              <Button variant="link" size="sm" className="w-full" asChild>
                <Link href="/leaderboard">View full leaderboard</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/cbt">
                  <Clock className="h-4 w-4" /> Start a CBT Mock Exam
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/forum">
                  <BookOpen className="h-4 w-4" /> Ask a question in the forum
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
