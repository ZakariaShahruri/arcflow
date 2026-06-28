"use client";

import { useActionState, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { joinWaitlist } from "@/app/actions/waitlist";
import { initialWaitlistState } from "@/app/actions/waitlist.types";

/**
 * Waitlist signup form wired to the `joinWaitlist` server action.
 * Shows inline success / error states without a page reload via useActionState.
 * Pass `source` to record where the signup came from.
 */
export function WaitlistForm({ source = "website" }: { source?: string }) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialWaitlistState,
  );
  // Controlled so the typed value survives a failed submit (React resets the
  // uncontrolled form after an action runs). On success the form unmounts in
  // favour of the banner below, so there's nothing to clear.
  const [email, setEmail] = useState("");

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-xl border border-amber/30 bg-amber/10 px-5 py-4 text-sm font-medium text-foreground"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber" />
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="mx-auto max-w-md">
      <input type="hidden" name="source" value={source} />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Work email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={pending}
          aria-invalid={state.status === "error"}
          className="h-12 flex-1 rounded-lg border border-border bg-card/60 px-4 text-base text-foreground outline-none backdrop-blur transition-colors placeholder:text-muted-foreground focus:border-amber/50 focus:ring-2 focus:ring-amber/30 disabled:opacity-60 aria-[invalid=true]:border-red-500/60"
        />
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-12 shrink-0 bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_12px_32px_-12px_rgba(240,165,0,0.7)] hover:bg-amber-soft"
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Joining…
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      {state.status === "error" && (
        <p role="alert" className="mt-2.5 text-left text-sm text-red-400">
          {state.message}
        </p>
      )}
    </form>
  );
}
