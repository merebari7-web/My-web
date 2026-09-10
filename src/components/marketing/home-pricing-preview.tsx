"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "₦0",
    period: "forever",
    features: [
      "Access to 1 class level",
      "3 lessons per subject",
      "Limited CBT practice (10 questions)",
      "Class leaderboard & badges",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₦1,500",
    period: "/month",
    features: [
      "Unlimited lessons, all 12 class levels",
      "Full WAEC/NECO/JAMB CBT bank",
      "Downloadable PDFs & offline mode",
      "Term exams with report cards",
      "Priority teacher support",
    ],
    cta: "Go Premium",
    highlighted: true,
  },
  {
    name: "Family",
    price: "₦4,000",
    period: "/month",
    features: [
      "Premium for up to 4 children",
      "Parent progress dashboard",
      "Weekly email reports",
      "Attendance tracking",
    ],
    cta: "Choose Family",
    highlighted: false,
  },
];

export function HomePricingPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Simple pricing in Naira
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pay with Paystack or Flutterwave. Cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? "border-primary-500 border-2 shadow-lg relative" : "relative"}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="accent">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-display font-extrabold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary-600 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} asChild>
                  <Link href="/register">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
