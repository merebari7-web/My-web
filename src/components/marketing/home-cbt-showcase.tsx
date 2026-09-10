"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  { icon: Clock, title: "Real Exam Timer", desc: "Practice under real WAEC/NECO/JAMB time pressure." },
  { icon: Target, title: "Negative Marking Toggle", desc: "Simulate JAMB's negative marking rules, or turn it off to practice freely." },
  { icon: CheckCircle2, title: "Instant Explanations", desc: "See the correct answer and a full explanation right after each question." },
  { icon: TrendingUp, title: "Result Analytics", desc: "Track your score history, topic strengths and weak spots over time." },
];

export function HomeCbtShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
            Exam-ready with our CBT engine
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Our Computer-Based Test engine mirrors the real WAEC, NECO and JAMB/UTME
            experience — so exam day never catches you off guard.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3"
              >
                <div className="h-10 w-10 shrink-0 rounded-xl bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-bold">JAMB UTME Mock Result</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-success/10 text-success font-semibold">
                Completed
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative h-28 w-28 shrink-0">
                <svg viewBox="0 0 36 36" className="h-28 w-28 -rotate-90">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#128A4A"
                    strokeWidth="3"
                    strokeDasharray="78, 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-xl">234</span>
                  <span className="text-[10px] text-muted-foreground">out of 300</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                {[
                  { s: "Use of English", v: 78 },
                  { s: "Mathematics", v: 64 },
                  { s: "Physics", v: 52 },
                  { s: "Chemistry", v: 40 },
                ].map((row) => (
                  <div key={row.s}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{row.s}</span>
                      <span className="font-semibold">{row.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary-600"
                        style={{ width: `${row.v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
