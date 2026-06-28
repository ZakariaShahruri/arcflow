# arcflow

SaaS landing page for a workflow automation platform aimed at modern product teams.
Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (radix base).

## Design system
- **Palette** (defined in `src/app/globals.css`, dark by default — this is the brand, not a mode):
  - `--graphite` `#111218` (base background), `--graphite-elevated` `#181922`
  - `--amber` `#f0a500` (accent), `--amber-soft` `#f7c34d` (hover). Exposed as `bg-amber`, `text-amber`.
  - `--foreground` `#ece7da` (warm off-white). Amber is also `--primary` for buttons.
- **Type** (both variable fonts loaded via `next/font/local` from `src/fonts/`):
  - Headings: **Clash Display** → `font-display` (`--font-display`). Use for h1–h4 (set in base layer).
  - Body/UI: **Satoshi** → `font-sans` (`--font-sans`), the default.
- **Layout**: page gutter is the `.container-arc` utility. Root layout wires `SiteHeader` + `SiteFooter`.

## Data (Neon Postgres + Drizzle)
- Drizzle schema in `src/db/schema.ts`; lazy client `getDb()` in `src/db/index.ts`
  (uses `drizzle-orm/neon-http` + `@neondatabase/serverless`, reads `DATABASE_URL`).
- Config in `drizzle.config.ts`; migrations in `drizzle/`. Scripts: `db:generate`,
  `db:migrate`, `db:push`, `db:studio`. `DATABASE_URL` lives in `.env.local`.
- Waitlist signup: server action `joinWaitlist` in `src/app/actions/waitlist.ts`
  (Zod validation, duplicate check, insert) wired to `components/waitlist-form.tsx`
  via `useActionState`. Hero/navbar/pricing CTAs are anchor links to `#waitlist`,
  which scrolls to that form.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
