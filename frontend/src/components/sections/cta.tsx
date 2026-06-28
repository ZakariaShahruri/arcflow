"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to the backend waitlist endpoint when it exists.
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="relative overflow-hidden py-24 sm:py-32">
      {/* Amber glow band */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/15 blur-[150px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-arc">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Stop doing the busywork.
            <br />
            <span className="text-amber">Let arcflow run it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Join the waitlist and be first in line when we open the doors. Early
            teams get founder support and locked-in pricing.
          </p>

          {submitted ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-xl border border-amber/30 bg-amber/10 px-5 py-4 text-sm font-medium text-foreground">
              <CheckCircle2 className="h-5 w-5 text-amber" />
              You&apos;re on the list — we&apos;ll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Work email
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-lg border border-border bg-card/60 px-4 text-base text-foreground placeholder:text-muted-foreground outline-none backdrop-blur transition-colors focus:border-amber/50 focus:ring-2 focus:ring-amber/30"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 shrink-0 bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_12px_32px_-12px_rgba(240,165,0,0.7)] hover:bg-amber-soft"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-sm text-muted-foreground">
            2,000+ teams already waiting · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
