import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We deleted an entire repo of glue scripts the week we adopted arcflow. Our onboarding flow used to be three cron jobs and a prayer — now it's one workflow I can actually read.",
    name: "Marcus Webb",
    role: "Staff Engineer",
    company: "Quanta",
  },
  {
    quote:
      "I shipped a customer lifecycle automation in an afternoon without filing a single ticket with engineering. That used to take a full sprint.",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "Northwind",
  },
  {
    quote:
      "The AI copilot drafts a flow from a sentence, and the live run logs mean I'm never guessing why something broke. It's the first automation tool my whole team actually trusts.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "lumenly",
  },
  {
    quote:
      "Retries and observability are first-class, not bolted on. We moved our billing sync over and it's been quietly running for months — exactly what you want from infrastructure.",
    name: "David Okafor",
    role: "Engineering Lead",
    company: "Cobalt",
  },
  {
    quote:
      "arcflow paid for itself in the first month just from the hours we stopped spending on manual handoffs between tools.",
    name: "Elena Rossi",
    role: "Product Manager",
    company: "Helix",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-arc">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber">
            Loved by builders
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Product teams ship more with arcflow
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From scrappy startups to scaling platforms — here&apos;s what
            managers and engineers say after switching.
          </p>
        </Reveal>

        {/* Masonry of cards */}
        <Reveal delay={100} className="mt-16 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, role, company }: Testimonial) {
  return (
    <figure className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card/40 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-amber/30">
      <div className="flex gap-0.5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber text-amber" />
        ))}
      </div>
      <blockquote className="mt-4 text-pretty text-[15px] leading-relaxed text-foreground/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar name={name} />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-foreground">
            {name}
          </div>
          <div className="truncate text-xs text-muted-foreground">
            {role} · {company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

/** Avatar placeholder — initials on a deterministic amber-tinted gradient. */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  // Pick one of a few warm gradients based on the name, so avatars vary.
  const gradients = [
    "from-amber/30 to-amber/5",
    "from-amber-soft/30 to-amber/5",
    "from-orange-500/25 to-amber/5",
    "from-yellow-500/25 to-amber/5",
  ];
  const gradient =
    gradients[name.charCodeAt(0) % gradients.length] ?? gradients[0];

  return (
    <span
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber/20 bg-gradient-to-br text-xs font-semibold text-amber",
        gradient,
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}
