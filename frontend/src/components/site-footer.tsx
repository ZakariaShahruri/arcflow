import Link from "next/link";
import { Logo } from "@/components/logo";

const FOOTER_NAV = [
  {
    heading: "Product",
    links: [
      { label: "Workflows", href: "#workflows" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "#docs" },
      { label: "API reference", href: "#api" },
      { label: "Community", href: "#community" },
      { label: "Status", href: "#status" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-graphite">
      <div className="container-arc py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Automation infrastructure for modern product teams. Design it
              once, let arcflow run it forever.
            </p>
          </div>

          {FOOTER_NAV.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} arcflow, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#security" className="transition-colors hover:text-foreground">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
