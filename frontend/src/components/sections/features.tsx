import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  GitBranch,
  LineChart,
  Workflow,
  Wand2,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Workflow,
    title: "Visual workflow builder",
    description: "Drag, drop, and connect steps on an infinite canvas.",
  },
  {
    icon: Blocks,
    title: "200+ native integrations",
    description: "Plug into the tools your team already runs on.",
  },
  {
    icon: GitBranch,
    title: "Conditional logic",
    description: "Add branches, filters, and parallel paths in seconds.",
  },
  {
    icon: LineChart,
    title: "Live observability",
    description: "Watch every run with real-time logs, metrics, and alerts.",
  },
  {
    icon: Wand2,
    title: "AI copilot",
    description: "Describe a workflow in words and let AI draft the first version.",
  },
  {
    icon: Zap,
    title: "Triggers & schedules",
    description: "Fire on webhooks, events, or a schedule — never poll again.",
  },
];

export function Features() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="container-arc">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber">
            Capabilities
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Everything you need to automate the work
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            One platform to connect your stack, design the logic, and run it all
            without babysitting a single task.
          </p>
        </Reveal>

        {/* Grid */}
        <Reveal delay={100} className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="group relative isolate overflow-hidden bg-card p-7 transition-colors duration-300 hover:bg-card-foreground/[0.03]">
      {/* hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-amber/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/20 bg-amber/10 text-amber transition-colors duration-300 group-hover:border-amber/40 group-hover:bg-amber/15">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
