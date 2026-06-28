import { WaitlistForm } from "@/components/waitlist-form";

export function Cta() {
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

          <div className="mt-9">
            <WaitlistForm source="landing_cta" />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            2,000+ teams already waiting · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
