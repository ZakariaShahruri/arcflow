import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Database,
  Filter,
  Mail,
  MessageSquare,
  Plug,
  Rocket,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function HowItWorks() {
  return (
    <section id="workflows" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.06] blur-[150px]" />
      </div>

      <div className="container-arc">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber">
            How it works
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            From connected to automated in three steps
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            No code, no glue scripts, no maintenance backlog. Wire it up once and
            watch it run.
          </p>
        </Reveal>

        {/* Flow */}
        <Reveal delay={100} className="mt-16 flex flex-col lg:flex-row lg:items-stretch lg:gap-0">
          <Step
            index="01"
            icon={Plug}
            title="Connect"
            description="Link your apps in a click with secure, native integrations."
            visual={<ConnectVisual />}
          />
          <Connectors />
          <Step
            index="02"
            icon={Workflow}
            title="Automate"
            description="Compose triggers, logic, and AI-assisted steps into a flow."
            visual={<AutomateVisual />}
          />
          <Connectors />
          <Step
            index="03"
            icon={Rocket}
            title="Ship"
            description="Switch it on and let arcflow run the work around the clock."
            visual={<ShipVisual />}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Step({
  index,
  icon: Icon,
  title,
  description,
  visual,
}: {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="group relative flex-1 rounded-2xl border border-border bg-card/40 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-amber/30">
      <div className="rounded-xl border border-border/70 bg-graphite/40 p-4">
        {visual}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="font-display text-3xl font-semibold leading-none text-amber">
          {index}
        </span>
        <div className="h-px flex-1 bg-border" />
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-graphite-elevated text-muted-foreground transition-colors duration-300 group-hover:text-amber">
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

/** Renders a horizontal flowing connector (desktop) and a vertical one (mobile). */
function Connectors() {
  return (
    <>
      <div className="hidden w-12 shrink-0 items-center lg:flex xl:w-20">
        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-border">
          <div className="absolute inset-0 bg-gradient-to-r from-amber/0 via-amber/50 to-amber/0" />
          <span className="arc-comet absolute top-1/2 h-1.5 w-5 -translate-y-1/2 rounded-full bg-amber shadow-[0_0_10px_2px_var(--amber)]" />
        </div>
      </div>
      <div className="flex flex-col items-center py-3 lg:hidden">
        <span className="h-6 w-px bg-gradient-to-b from-amber/60 to-border" />
        <ChevronDown className="h-4 w-4 animate-pulse text-amber" />
      </div>
    </>
  );
}

/* ---------- Step visuals (alive, CSS-driven) ---------- */

function ConnectVisual() {
  const tiles: { icon: LucideIcon; delay: string }[] = [
    { icon: MessageSquare, delay: "0s" },
    { icon: Mail, delay: "0.5s" },
    { icon: Database, delay: "1s" },
    { icon: Calendar, delay: "1.5s" },
  ];
  return (
    <div className="relative flex h-28 items-center justify-center">
      {/* central hub */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-amber/40 bg-amber/15 text-amber shadow-[0_0_28px_-4px_var(--amber)]">
        <Plug className="h-5 w-5" />
        <span className="absolute inset-0 animate-ping rounded-xl bg-amber/15" />
      </div>
      {/* surrounding app tiles */}
      {tiles.map(({ icon: Icon, delay }, i) => (
        <span
          key={i}
          style={{ animationDelay: delay }}
          className={cn(
            "absolute flex h-9 w-9 animate-pulse items-center justify-center rounded-lg border border-border bg-graphite-elevated text-muted-foreground",
            i === 0 && "left-3 top-2",
            i === 1 && "right-3 top-2",
            i === 2 && "bottom-2 left-3",
            i === 3 && "bottom-2 right-3",
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      ))}
    </div>
  );
}

function AutomateVisual() {
  return (
    <div className="flex h-28 items-center justify-center">
      <div className="flex w-full max-w-[220px] items-center">
        <MiniNode icon={Zap} />
        <MiniConnector />
        <MiniNode icon={Filter} running />
        <MiniConnector />
        <MiniNode icon={CheckCircle2} />
      </div>
    </div>
  );
}

function MiniNode({ icon: Icon, running }: { icon: LucideIcon; running?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
        running
          ? "border-amber/50 bg-amber/15 text-amber shadow-[0_0_20px_-4px_var(--amber)]"
          : "border-border bg-graphite-elevated text-muted-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

function MiniConnector() {
  return (
    <div className="relative mx-1.5 h-[2px] flex-1 overflow-hidden rounded-full bg-border">
      <div className="absolute inset-0 bg-gradient-to-r from-amber/0 via-amber/50 to-amber/0" />
      <span className="arc-comet absolute top-1/2 h-1.5 w-4 -translate-y-1/2 rounded-full bg-amber shadow-[0_0_8px_1px_var(--amber)]" />
    </div>
  );
}

function ShipVisual() {
  return (
    <div className="relative flex h-28 items-center justify-center">
      {/* rising track */}
      <div className="absolute inset-x-8 bottom-6 top-6">
        <div className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-t from-amber/0 via-amber/30 to-amber/60" />
      </div>
      <div className="arc-float relative flex h-12 w-12 items-center justify-center rounded-xl border border-amber/40 bg-amber/15 text-amber shadow-[0_0_28px_-4px_var(--amber)]">
        <Rocket className="h-5 w-5" />
        <span className="absolute inset-0 animate-ping rounded-xl bg-amber/15" />
      </div>
      {/* sparkle dots */}
      <span className="absolute right-10 top-5 h-1.5 w-1.5 animate-pulse rounded-full bg-amber/70" />
      <span
        className="absolute left-12 top-8 h-1 w-1 animate-pulse rounded-full bg-amber/50"
        style={{ animationDelay: "0.6s" }}
      />
    </div>
  );
}
