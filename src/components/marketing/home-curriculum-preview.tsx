"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stages = [
  {
    name: "Primary",
    range: "P1 – P6",
    color: "from-primary-500 to-primary-700",
    subjects: ["English Studies", "Mathematics", "Basic Science & Technology", "National Values Education", "CCA", "CRS / IRS"],
  },
  {
    name: "Junior Secondary",
    range: "JSS1 – JSS3",
    color: "from-accent-500 to-accent-700",
    subjects: ["English Studies", "Mathematics", "Basic Science", "Basic Technology", "Business Studies", "Computer Studies"],
  },
  {
    name: "Senior Secondary",
    range: "SS1 – SS3",
    color: "from-naija-indigo to-primary-700",
    subjects: ["Science Stream", "Commercial Stream", "Arts Stream", "WAEC/NECO/JAMB Prep"],
  },
];

export function HomeCurriculumPreview() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 font-semibold text-sm">
              <GraduationCap className="h-4 w-4" /> Full 9-3-4 Curriculum
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Every class. Every subject.
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/curriculum">
              View Full Curriculum <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${stage.color}`} />
                <CardContent className="pt-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display font-bold text-xl">{stage.name}</h3>
                    <Badge variant="secondary">{stage.range}</Badge>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {stage.subjects.map((s) => (
                      <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
