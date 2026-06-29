import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  Clock,
  Database,
  GitBranch,
  LayoutGrid,
  ListChecks,
  Play,
  Plug,
  Search,
  Send,
  Settings,
  TrendingUp,
  UserPlus,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Fake arcflow product dashboard, built entirely in JSX (no image).
 * Used as the hero visual — a glowing, floating app window showing an
 * automation workflow mid-run.
 */
export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Amber bloom behind the window */}
      <div aria-hidden className="pointer-events-none absolute -inset-x-8 -top-16 bottom-0 -z-10">
        <div className="arc-glow-pulse mx-auto h-3/4 w-3/4 rounded-[50%] bg-amber/20 blur-[120px]" />
      </div>

      <div className="arc-float mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/5 backdrop-blur-xl">
          {/* Window chrome */}
          <div className="flex items-center gap-4 border-b border-border bg-graphite-elevated/70 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-1 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-[3px] bg-amber" />
              <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                arcflow
              </span>
            </div>
            <div className="ml-auto hidden items-center gap-3 sm:flex">
              <div className="flex items-center gap-2 rounded-md border border-border bg-graphite/60 px-2.5 py-1 text-xs text-muted-foreground">
                <Search className="h-3.5 w-3.5" />
                <span>Search workflows…</span>
              </div>
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber/20 text-[10px] font-semibold text-amber">
                ZS
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex">
            {/* Sidebar */}
            <aside className="hidden w-48 shrink-0 flex-col gap-1 border-r border-border p-3 md:flex">
              <div className="mb-2 flex items-center gap-2 rounded-lg border border-border bg-graphite-elevated/50 px-2.5 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber/15 text-[10px] font-semibold text-amber">
                  AC
                </span>
                <div className="min-w-0">
                  <div className="truncate text-xs font-medium text-foreground">Acme Corp</div>
                  <div className="truncate text-[10px] text-muted-foreground">Pro plan</div>
                </div>
              </div>
              <NavItem icon={LayoutGrid} label="Overview" />
              <NavItem icon={Workflow} label="Workflows" active />
              <NavItem icon={ListChecks} label="Runs" />
              <NavItem icon={Plug} label="Integrations" />
              <NavItem icon={BarChart3} label="Analytics" />
              <NavItem icon={Settings} label="Settings" />
            </aside>

            {/* Main panel */}
            <div className="flex-1 p-4 text-left sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                      Customer onboarding
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 text-[10px] font-medium text-amber">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
                      Live
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Runs automatically on every new signup
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="hidden rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground sm:inline">
                    Edit
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    <Play className="h-3 w-3" />
                    Run
                  </span>
                </div>
              </div>

              {/* Stat cards */}
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                <StatCard icon={Zap} label="Runs today" value="12,847" trend="+18%" up />
                <StatCard icon={Clock} label="Time saved" value="312 hrs" trend="this week" />
                <StatCard icon={CheckCircle2} label="Success rate" value="99.4%" trend="+0.3%" up />
              </div>

              {/* Workflow pipeline */}
              <div className="mt-5 rounded-xl border border-border bg-graphite/40 p-3 sm:p-4">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    Workflow
                  </span>
                  <span className="shrink-0 text-[11px] text-muted-foreground">4 steps · avg 1.2s</span>
                </div>
                <div className="flex items-start">
                  <Node icon={UserPlus} title="Signup" sub="Trigger" />
                  <Connector />
                  <Node icon={Database} title="Enrich" sub="Clearbit" />
                  <Connector active />
                  <Node icon={GitBranch} title="Route" sub="By plan" running />
                  <Connector />
                  <Node icon={Send} title="Welcome" sub="Email" />
                </div>
              </div>

              {/* Recent runs */}
              <div className="mt-5">
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Recent runs
                </div>
                <ul className="space-y-1">
                  <ActivityRow name="Customer onboarding" meta="completed in 1.1s" time="2s ago" />
                  <ActivityRow name="Invoice sync → QuickBooks" meta="running" time="now" running />
                  <ActivityRow name="Slack daily digest" meta="completed in 0.8s" time="1m ago" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px]",
        active
          ? "bg-amber/10 font-medium text-amber"
          : "text-muted-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  up,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  up?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-graphite-elevated/50 p-2.5 sm:p-3">
      <div className="flex items-center justify-between gap-1">
        <span className="truncate text-[10px] text-muted-foreground sm:text-[11px]">{label}</span>
        <Icon className="h-3.5 w-3.5 shrink-0 text-amber" />
      </div>
      <div className="mt-2 font-display text-base font-semibold text-foreground sm:text-xl">
        {value}
      </div>
      <div
        className={cn(
          "mt-0.5 flex items-center gap-1 text-[11px]",
          up ? "text-emerald-400" : "text-muted-foreground",
        )}
      >
        {up && <TrendingUp className="h-3 w-3" />}
        {trend}
      </div>
    </div>
  );
}

function Node({
  icon: Icon,
  title,
  sub,
  running,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  running?: boolean;
}) {
  return (
    <div className="flex w-12 shrink-0 flex-col items-center gap-2 sm:w-16">
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl border transition-colors",
          running
            ? "border-amber/50 bg-amber/15 text-amber shadow-[0_0_24px_-4px_var(--amber)]"
            : "border-border bg-graphite-elevated text-muted-foreground",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-center">
        <div className="text-[11px] font-medium text-foreground">{title}</div>
        <div className="text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function Connector({ active }: { active?: boolean }) {
  return (
    <div className="relative mx-1 mt-[21px] h-[2px] flex-1 overflow-hidden rounded-full bg-border">
      {active && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-amber/0 via-amber/50 to-amber/0" />
          <span className="arc-comet absolute top-1/2 h-1.5 w-6 -translate-y-1/2 rounded-full bg-amber shadow-[0_0_10px_2px_var(--amber)]" />
        </>
      )}
    </div>
  );
}

function ActivityRow({
  name,
  meta,
  time,
  running,
}: {
  name: string;
  meta: string;
  time: string;
  running?: boolean;
}) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-1.5 transition-colors hover:border-border hover:bg-graphite-elevated/40">
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          running
            ? "bg-amber/15 text-amber"
            : "bg-emerald-500/15 text-emerald-400",
        )}
      >
        {running ? (
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
        ) : (
          <Check className="h-3 w-3" />
        )}
      </span>
      <span className="flex-1 truncate text-xs text-foreground">{name}</span>
      <span className="hidden text-[11px] text-muted-foreground sm:inline">{meta}</span>
      <span className="shrink-0 text-[11px] text-muted-foreground">{time}</span>
    </li>
  );
}
