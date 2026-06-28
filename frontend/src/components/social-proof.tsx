import type { SVGProps } from "react";
import { Reveal } from "@/components/reveal";

/**
 * Social-proof bar. The "logos" are fictional companies rendered as styled
 * SVG wordmarks (not images) so they stay crisp and inherit currentColor for
 * the muted → hover treatment.
 */
export function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-graphite-elevated/30">
      <Reveal className="container-arc py-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by teams at
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {WORDMARKS.map(({ name, Mark }) => (
            <Mark
              key={name}
              aria-label={name}
              role="img"
              className="h-6 w-auto text-muted-foreground/55 transition-colors duration-300 hover:text-foreground/85"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const FONT_SANS = "var(--font-sans), system-ui, sans-serif";
const FONT_DISPLAY = "var(--font-display), system-ui, sans-serif";

function Northwind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 168 32" fill="none" {...props}>
      <path d="M5 26 14 6 23 26 14 20Z" fill="currentColor" />
      <text
        x="34"
        y="23"
        fontFamily={FONT_DISPLAY}
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        Northwind
      </text>
    </svg>
  );
}

function Quanta(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 138 32" fill="none" {...props}>
      <rect x="4" y="6" width="9" height="9" rx="2" fill="currentColor" />
      <rect x="15" y="17" width="9" height="9" rx="2" fill="currentColor" opacity="0.55" />
      <text
        x="34"
        y="23"
        fontFamily={FONT_SANS}
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.5"
        fill="currentColor"
      >
        Quanta
      </text>
    </svg>
  );
}

function Lumenly(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 150 32" fill="none" {...props}>
      <circle cx="14" cy="16" r="8" fill="currentColor" />
      <circle cx="14" cy="16" r="3.5" fill="var(--graphite-elevated)" />
      <text
        x="30"
        y="23"
        fontFamily={FONT_SANS}
        fontSize="20"
        fontWeight="400"
        letterSpacing="0.3"
        fill="currentColor"
      >
        lumenly
      </text>
    </svg>
  );
}

function Helix(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 122 32" fill="none" {...props}>
      <path
        d="M6 7C18 7 6 25 18 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 7C6 7 18 25 6 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <text
        x="30"
        y="23"
        fontFamily={FONT_DISPLAY}
        fontSize="21"
        fontWeight="600"
        letterSpacing="-0.3"
        fill="currentColor"
      >
        HELIX
      </text>
    </svg>
  );
}

function Cobalt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 130 32" fill="none" {...props}>
      <path
        d="M14 4 23 9.5V20.5L14 26 5 20.5V9.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="15" r="3" fill="currentColor" />
      <text
        x="33"
        y="23"
        fontFamily={FONT_SANS}
        fontSize="20"
        fontWeight="600"
        letterSpacing="-0.2"
        fill="currentColor"
      >
        Cobalt
      </text>
    </svg>
  );
}

function Driftwood(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 172 32" fill="none" {...props}>
      <path
        d="M3 17C7 11 11 23 15 17C19 11 23 23 27 17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="34"
        y="23"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
        fontStyle="italic"
        fontWeight="500"
        fill="currentColor"
      >
        Driftwood
      </text>
    </svg>
  );
}

const WORDMARKS = [
  { name: "Northwind", Mark: Northwind },
  { name: "Quanta", Mark: Quanta },
  { name: "lumenly", Mark: Lumenly },
  { name: "Helix", Mark: Helix },
  { name: "Cobalt", Mark: Cobalt },
  { name: "Driftwood", Mark: Driftwood },
] as const;
