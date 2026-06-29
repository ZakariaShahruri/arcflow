import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/dashboard-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 sm:pb-28">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="arc-glow-pulse absolute left-1/2 top-[-12rem] h-[42rem] w-[64rem] -translate-x-1/2 rounded-full bg-amber/10 blur-[160px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-arc flex flex-col items-center pt-20 text-center sm:pt-28 lg:pt-32">
        {/* Eyebrow */}
        <Link
          href="#waitlist"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber" />
          <span>Private beta — now onboarding teams</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Headline */}
        <h1 className="mt-8 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Put the busywork on autopilot.{" "}
          <span className="text-amber">Ship 10× faster.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          arcflow connects the tools your team already uses and runs every
          repetitive workflow for you — triggers, approvals, hand-offs. Work
          moves the moment it&apos;s ready, not whenever someone gets to it.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="h-12 bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(240,165,0,0.25),0_12px_32px_-12px_rgba(240,165,0,0.7)] hover:bg-amber-soft"
          >
            <Link href="#waitlist">
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 border-border bg-card/40 px-7 text-base font-medium text-foreground hover:bg-secondary"
          >
            <Link href="#waitlist" data-demo="Watch demo">
              <Play className="h-4 w-4" />
              Watch demo
            </Link>
          </Button>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Join 2,000+ teams already on the waitlist · No credit card required
        </p>
      </div>

      {/* Product mockup */}
      <div className="container-arc relative mt-16 sm:mt-20">
        <DashboardMockup />
      </div>
    </section>
  );
}
