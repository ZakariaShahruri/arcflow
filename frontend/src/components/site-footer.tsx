import type { SVGProps } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

// Brand glyphs as inline SVG (lucide no longer ships brand icons).
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404Z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Real profiles link out; the rest open the demo popup (no real accounts yet).
const SOCIALS = [
  { label: "X (Twitter)", demo: true, Icon: XIcon },
  { label: "GitHub", href: "https://github.com/ZakariaShahruri/arcflow", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zakaria-shahruri", Icon: LinkedInIcon },
  { label: "YouTube", demo: true, Icon: YouTubeIcon },
] as const;

// Links to real on-page sections resolve; the rest open the demo popup.
const FOOTER_NAV = [
  {
    heading: "Product",
    links: [
      { label: "Workflows", href: "#workflows" },
      { label: "Integrations", demo: true },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", demo: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", demo: true },
      { label: "Careers", demo: true },
      { label: "Blog", demo: true },
      { label: "Contact", demo: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", demo: true },
      { label: "API reference", demo: true },
      { label: "Community", demo: true },
      { label: "Status", demo: true },
    ],
  },
] as const;

const SOCIAL_CLASS =
  "flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-amber/40 hover:text-amber";
const NAV_LINK_CLASS =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-graphite">
      <div className="container-arc py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Link href="/" aria-label="arcflow home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Automation infrastructure for modern product teams. Design it
              once, let arcflow run it forever.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, Icon, ...rest }) =>
                "demo" in rest ? (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    data-demo={label}
                    className={SOCIAL_CLASS}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    key={label}
                    href={rest.href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={SOCIAL_CLASS}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ),
              )}
            </div>
          </div>

          {FOOTER_NAV.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"demo" in link ? (
                      <button
                        type="button"
                        data-demo={link.label}
                        className={NAV_LINK_CLASS}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link href={link.href} className={NAV_LINK_CLASS}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} arcflow, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/security" className="transition-colors hover:text-foreground">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
