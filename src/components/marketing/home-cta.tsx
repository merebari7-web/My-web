"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-14 sm:px-14 text-center text-white pattern-adire">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
              Ready to boost your grades this term?
            </h2>
            <p className="mt-3 text-white/90 max-w-xl mx-auto">
              Join thousands of Nigerian students already learning smarter with NaijaLearn.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <Button size="lg" variant="accent" asChild>
                <Link href="/register">
                  Create Free Account <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
