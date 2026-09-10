"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Chiamaka O.",
    role: "SS3 Student, Enugu",
    quote:
      "The JAMB mock exams on NaijaLearn feel exactly like the real UTME. My practice score went from 210 to 267 in three months!",
  },
  {
    name: "Malam Ibrahim Sule",
    role: "Mathematics Teacher, Kano",
    quote:
      "I create assignments and grade my JSS2 class in minutes. The topic tags make it so easy to match NERDC objectives.",
  },
  {
    name: "Mrs. Folasade Bello",
    role: "Parent, Lagos",
    quote:
      "I get a weekly report on my daughter's progress. I finally know exactly where she needs help — in English or Basic Science.",
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Loved by students, teachers &amp; parents
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((tItem, i) => (
            <motion.div
              key={tItem.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 text-accent-500 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">“{tItem.quote}”</p>
                  <div className="flex items-center gap-3 mt-5">
                    <Avatar>
                      <AvatarFallback>{tItem.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{tItem.name}</p>
                      <p className="text-xs text-muted-foreground">{tItem.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
