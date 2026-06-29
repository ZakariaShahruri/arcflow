"use client";

import * as React from "react";
import Link from "next/link";
import { Dialog } from "radix-ui";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A single, site-wide "this is a demo" popup. Any element with a `data-demo`
 * attribute opens it — a global click listener catches the bubbled click, so
 * server-rendered buttons (header, footer, hero, pricing) can trigger it with
 * no prop-drilling or client conversion. The optional value of `data-demo` is
 * shown as the feature name (e.g. `data-demo="Log in"`).
 *
 * Mounted once in the root layout.
 */
export function DemoDialog() {
  const [open, setOpen] = React.useState(false);
  const [label, setLabel] = React.useState<string | null>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      // Ignore modified clicks (new tab, etc.)
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const trigger = (e.target as Element | null)?.closest<HTMLElement>("[data-demo]");
      if (!trigger) return;
      e.preventDefault();
      const value = trigger.getAttribute("data-demo");
      setLabel(value && value.length > 0 ? value : null);
      setOpen(true);
    }
    // Capture phase so we preventDefault before Next's <Link> navigates.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-[100] bg-graphite/75 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2",
            "overflow-hidden rounded-2xl border border-amber/40 bg-card p-7 text-center",
            "shadow-[0_0_0_1px_rgba(240,165,0,0.2),0_40px_120px_-30px_rgba(240,165,0,0.55)]",
            "focus:outline-none",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-2",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          )}
        >
          {/* Amber glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 w-40 rounded-full bg-amber/25 blur-[80px]"
          />

          <Dialog.Close
            className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Dialog.Close>

          <div className="relative">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber/40 bg-amber/10 text-amber">
              <Sparkles className="h-5 w-5" />
            </span>

            <Dialog.Title className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
              You&apos;re exploring a demo
            </Dialog.Title>

            <Dialog.Description className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {label ? (
                <>
                  <span className="text-foreground">{label}</span> isn&apos;t wired
                  up in this build — arcflow is a design demo, not a live product
                  yet.
                </>
              ) : (
                <>
                  arcflow is a design demo, not a live product yet, so this button
                  doesn&apos;t lead anywhere real.
                </>
              )}{" "}
              The one thing that actually works is the waitlist — give it a try.
            </Dialog.Description>

            <div className="mt-7 flex flex-col gap-2">
              <Link
                href="/#waitlist"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary font-semibold text-primary-foreground shadow-[0_12px_32px_-12px_rgba(240,165,0,0.7)] transition-colors hover:bg-amber-soft"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Dialog.Close className="inline-flex h-10 items-center justify-center rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Keep exploring
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
