"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Timer,
  Trophy,
  Users,
  Download,
  BarChart3,
  ShieldCheck,
  Languages,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguageStore } from "@/stores/language-store";

const features = [
  {
    icon: BookOpenCheck,
    title: "Interactive Lessons",
    desc: "Text, video, audio narration and inline quizzes for every topic — from Primary 1 phonics to SS3 Further Maths.",
    color: "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300",
  },
  {
    icon: Timer,
    title: "CBT Mock Exams",
    desc: "Practice WAEC, NECO and JAMB/UTME-style computer-based tests with a real exam timer and instant scoring.",
    color: "bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300",
  },
  {
    icon: Trophy,
    title: "Gamified Learning",
    desc: "Earn XP, unlock badges, keep your daily streak alive and climb your class leaderboard.",
    color: "bg-warning/20 text-warning",
  },
  {
    icon: Users,
    title: "Teacher & Parent Tools",
    desc: "Teachers assign homework & grade instantly. Parents track scores, attendance and weekly reports.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Download,
    title: "Study Offline",
    desc: "Download lesson notes and past questions as PDF, or queue lessons for offline access — built for low data.",
    color: "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    desc: "See your strengths and weak topics with detailed analytics after every quiz and mock exam.",
    color: "bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300",
  },
  {
    icon: ShieldCheck,
    title: "NERDC-Aligned",
    desc: "Every topic is tagged to the official NERDC curriculum, with WAEC/NECO syllabus refs and JAMB relevance.",
    color: "bg-warning/20 text-warning",
  },
  {
    icon: Languages,
    title: "4 Languages",
    desc: "Use NaijaLearn in English, Hausa, Igbo or Yorùbá — built for every corner of Nigeria.",
    color: "bg-secondary text-secondary-foreground",
  },
];

export function HomeFeatures() {
  const { t } = useLanguageStore();
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("features.title")}
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">{t("features.subtitle")}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${f.color}`}>
                    <f.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base mt-2">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
