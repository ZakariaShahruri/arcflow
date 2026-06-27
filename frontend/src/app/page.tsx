import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUSTED_BY = ["Linear", "Ramp", "Vercel", "Retool", "Notion"];

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient amber glow + grid wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--graphite)_100%)]" />
      </div>

      <div className="container-arc flex flex-col items-center pb-24 pt-20 text-center sm:pt-28 lg:pt-36">
        <Link
          href="#changelog"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber" />
          <span>Now with AI-drafted workflow steps</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <h1 className="mt-8 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          The busywork between your tools,{" "}
          <span className="text-amber">automated away.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          arcflow connects the apps your product team already lives in and runs
          the handoffs for you — so the work moves on its own while you build
          what matters.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="h-12 bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(240,165,0,0.25),0_12px_32px_-12px_rgba(240,165,0,0.7)] hover:bg-amber-soft"
          >
            <Link href="#start">
              Start building free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 border-border bg-card/40 px-7 text-base font-medium text-foreground hover:bg-secondary"
          >
            <Link href="#demo">Book a demo</Link>
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Free for 14 days · No credit card required
        </p>

        {/* Social proof */}
        <div className="mt-20 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by product teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUSTED_BY.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-medium tracking-tight text-muted-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
