"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Billing = "monthly" | "annual";

type Tier = {
  name: string;
  /** Per-month price in USD for each billing period, or null for "contact us". */
  price: Record<Billing, number> | null;
  description: string;
  features: string[];
  cta: { label: string; href: string; demo?: boolean };
  recommended?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    price: { monthly: 19, annual: 15 },
    description: "For individuals and small teams getting their first flows live.",
    features: [
      "Up to 5 active workflows",
      "1,000 runs / month",
      "50+ integrations",
      "Community support",
    ],
    cta: { label: "Start for free", href: "#waitlist" },
  },
  {
    name: "Pro",
    price: { monthly: 49, annual: 39 },
    description: "For growing product teams that automate everything.",
    features: [
      "Unlimited workflows",
      "50,000 runs / month",
      "200+ integrations",
      "AI copilot & advanced branching",
      "Live observability & alerts",
      "Priority support",
    ],
    cta: { label: "Start free trial", href: "#waitlist" },
    recommended: true,
  },
  {
    name: "Enterprise",
    price: null,
    description: "For organizations with security, scale, and compliance needs.",
    features: [
      "Unlimited runs",
      "SSO / SAML & audit logs",
      "Dedicated support & SLA",
      "On-prem & VPC deployment",
    ],
    cta: { label: "Contact sales", href: "#waitlist", demo: true },
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-arc">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber">
            Pricing
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Start free, upgrade when you outgrow it. No per-seat surprises.
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={100} className="mt-10 flex items-center justify-center gap-3">
          <BillingToggle billing={billing} onChange={setBilling} />
        </Reveal>

        {/* Tiers */}
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={150 + i * 100}>
              <TierCard tier={tier} billing={billing} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing;
  onChange: (b: Billing) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Billing period"
      className="relative grid grid-cols-2 items-center rounded-full border border-border bg-card/60 p-1 backdrop-blur"
    >
      {/* sliding highlight — one column wide, slides to the active tab */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/2)] rounded-full bg-primary transition-transform duration-300 ease-out",
          billing === "annual" && "translate-x-full",
        )}
      />
      {(["monthly", "annual"] as const).map((value) => (
        <button
          key={value}
          role="tab"
          type="button"
          aria-selected={billing === value}
          onClick={() => onChange(value)}
          className={cn(
            "relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium transition-colors",
            billing === value
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {value === "monthly" ? "Monthly" : "Annual"}
          {value === "annual" && (
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                billing === "annual"
                  ? "bg-primary-foreground/15 text-primary-foreground"
                  : "bg-amber/15 text-amber",
              )}
            >
              Save 20%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

function TierCard({ tier, billing }: { tier: Tier; billing: Billing }) {
  const { recommended } = tier;
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
        recommended
          ? "border-amber/50 bg-card shadow-[0_0_0_1px_rgba(240,165,0,0.2),0_30px_80px_-30px_rgba(240,165,0,0.45)] lg:scale-[1.03]"
          : "border-border bg-card/40 hover:border-amber/30",
      )}
    >
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_rgba(240,165,0,0.8)]">
          Recommended
        </span>
      )}

      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
        {tier.name}
      </h3>
      <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-muted-foreground">
        {tier.description}
      </p>

      {/* Price */}
      <div className="mt-6 min-h-[4.5rem]">
        {tier.price ? (
          <>
            <div className="flex items-baseline gap-1">
              <span
                key={billing}
                className="font-display text-5xl font-semibold tracking-tight text-foreground tabular-nums duration-300 animate-in fade-in slide-in-from-bottom-1"
              >
                ${tier.price[billing]}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {billing === "annual"
                ? `Billed annually ($${tier.price.annual * 12}/yr)`
                : "Billed monthly"}
            </p>
          </>
        ) : (
          <>
            <div className="font-display text-4xl font-semibold tracking-tight text-foreground">
              Let&apos;s talk
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Custom pricing for your scale
            </p>
          </>
        )}
      </div>

      {/* CTA */}
      <Button
        asChild
        size="lg"
        variant={recommended ? "default" : "outline"}
        className={cn(
          "mt-6 h-11 w-full font-semibold",
          recommended
            ? "bg-primary text-primary-foreground shadow-[0_12px_32px_-12px_rgba(240,165,0,0.7)] hover:bg-amber-soft"
            : "border-border bg-transparent text-foreground hover:bg-secondary",
        )}
      >
        <Link
          href={tier.cta.href}
          data-demo={tier.cta.demo ? tier.cta.label : undefined}
        >
          {tier.cta.label}
        </Link>
      </Button>

      {/* Features */}
      <ul className="mt-7 space-y-3 border-t border-border pt-7">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
