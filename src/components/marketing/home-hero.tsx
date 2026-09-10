"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/stores/language-store";

export function HomeHero() {
  const { t } = useLanguageStore();

  return (
    <section className="relative overflow-hidden pattern-adire">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-background to-background dark:from-primary-950/40 dark:via-background dark:to-background" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-300/30 blur-3xl" />
      <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />

      <div className="container relative py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 dark:bg-primary-950 dark:border-primary-800 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
              <Sparkles className="h-3.5 w-3.5" />
              {t("hero.badge")}
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.08]">
              {t("hero.title1")}{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground max-w-xl text-balance">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" variant="default" asChild>
                <Link href="/register">
                  {t("hero.cta.primary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/curriculum">
                  <PlayCircle className="h-4 w-4" />
                  {t("hero.cta.secondary")}
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["🧑🏾‍🎓", "👩🏾‍🎓", "🧑🏿‍🎓", "👨🏾‍🎓"].map((emoji, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full bg-primary-100 dark:bg-primary-900 border-2 border-background flex items-center justify-center text-base"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <span>Joined by students in Lagos, Kano, PH, Enugu &amp; more</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-border bg-card shadow-xl overflow-hidden">
              <div className="bg-hero-gradient p-5 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs opacity-80">SS2 · Physics</p>
                  <p className="font-display font-bold">Mock CBT — Waves &amp; Optics</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-80">Time Left</p>
                  <p className="font-mono font-bold text-lg">28:14</p>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-sm font-semibold">
                  12. A ray of light travels from air into glass. Which of the
                  following increases as it enters the glass?
                </p>
                <div className="space-y-2">
                  {[
                    { k: "A", v: "Speed", active: false },
                    { k: "B", v: "Wavelength", active: false },
                    { k: "C", v: "Frequency", active: false },
                    { k: "D", v: "Refractive index of the ray", active: true },
                  ].map((opt) => (
                    <div
                      key={opt.k}
                      className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm ${
                        opt.active
                          ? "border-primary-500 bg-primary-50 dark:bg-primary-950 font-semibold"
                          : "border-border"
                      }`}
                    >
                      <span
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          opt.active
                            ? "bg-primary-600 text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {opt.k}
                      </span>
                      {opt.v}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">Question 12 of 30</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Previous</Button>
                    <Button size="sm">Next</Button>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-card border border-border rounded-2xl shadow-lg px-4 py-3 hidden sm:flex items-center gap-2"
            >
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-xs text-muted-foreground">Daily Streak</p>
                <p className="font-bold text-sm">14 days</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-card border border-border rounded-2xl shadow-lg px-4 py-3 hidden sm:flex items-center gap-2"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-muted-foreground">New Badge</p>
                <p className="font-bold text-sm">Maths Wizard</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
