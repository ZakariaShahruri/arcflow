import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";

/**
 * Shared shell for the legal stub pages (privacy / terms / security). The full
 * documents are still being finalized before launch, so each renders a bold,
 * popup-style "coming soon" card as the focal point. Pages render inside the
 * root layout, so they inherit the site header and footer.
 */
export function LegalPage({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24 sm:py-32">
      {/* Ambient glow to match the rest of the site */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/12 blur-[160px]" />
      </div>

      <div className="container-arc">
        <Reveal className="mx-auto max-w-xl">
          {/* Popup-style card */}
          <div className="relative overflow-hidden rounded-3xl border border-amber/40 bg-card/90 p-8 text-center shadow-[0_0_0_1px_rgba(240,165,0,0.15),0_50px_140px_-40px_rgba(240,165,0,0.55)] backdrop-blur sm:p-12">
            {/* Inner top glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full bg-amber/25 blur-[90px]"
            />

            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/40 bg-amber/10 text-amber">
                <Clock className="h-6 w-6" />
              </span>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                Coming soon
              </p>

              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {title}
              </h1>

              <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
              <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                arcflow is in private beta — the full document will live here
                before we open to the public.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#waitlist"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-primary-foreground shadow-[0_12px_32px_-12px_rgba(240,165,0,0.7)] transition-colors hover:bg-amber-soft"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
