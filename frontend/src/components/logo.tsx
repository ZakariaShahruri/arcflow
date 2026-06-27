import { cn } from "@/lib/utils";

/**
 * arcflow mark — two nested arcs feeding into a node, suggesting work
 * flowing along a curve. Drawn with currentColor so the amber accent
 * is applied by the parent.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7 text-amber"
      >
        <path
          d="M4 22C4 12.0589 12.0589 4 22 4"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M10 22C10 15.3726 15.3726 10 22 10"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="22" cy="22" r="3" fill="currentColor" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        arcflow
      </span>
    </span>
  );
}
