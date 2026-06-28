# arcflow

Marketing site and API for **arcflow** — a workflow automation platform for
modern product teams. The landing page is a premium, dark, editorial take on a
SaaS site: deep graphite base, sharp amber-gold accent, and a Clash Display /
Satoshi type pairing — deliberately not another blue SaaS template.

It's a monorepo with a separate frontend and backend:

```
arcflow/
├── frontend/   Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · Drizzle (Neon)
└── backend/    Spring Boot 4 · Java 21 · Maven
```

## Getting started

Run the two apps in separate terminals.

### Frontend (Next.js)

```bash
cd frontend
npm install
cp .env.example .env.local   # then fill in DATABASE_URL (see Waitlist below)
npm run db:migrate           # creates the waitlist table in Neon
npm run dev
```

Site runs on **http://localhost:3000**. The landing page itself is static; the
only live feature is the waitlist form, which needs a Neon database. The Spring
Boot backend is independent and not required to run the site.

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

API runs on **http://localhost:8090** (8080/8081 are commonly taken by local
Airflow). Quick check:

```bash
curl http://localhost:8090/api/health
```

## What's on the page

The landing page (`frontend/src/app/page.tsx`) is composed of section
components under `frontend/src/components/sections/`:

- **Hero** — speed/automation headline, waitlist + demo CTAs, and a glowing
  product dashboard mockup built entirely in JSX (no image) with an animated
  workflow pipeline.
- **Social proof** — six fictional companies rendered as styled SVG wordmarks.
- **Features** — grid of six core capabilities.
- **How it works** — Connect / Automate / Ship as an animated, alive 3-step
  flow with CSS-driven step visuals and flowing connectors.
- **Pricing** — monthly/annual toggle with real-time price switching; Starter,
  Pro (recommended), and Enterprise (contact us) tiers.
- **Testimonials** — five reviews with avatar placeholders in a masonry layout.
- **FAQ** — shadcn/ui accordion of common questions.
- **Final CTA** — full-width waitlist signup with an interactive email form.
- **Navbar & footer** — sticky, scroll-aware header and a footer with nav
  columns and social links.

## Waitlist (Neon Postgres + Drizzle)

The CTA forms persist signups to a Neon Postgres database via Drizzle ORM and a
Next.js Server Action — no separate API needed.

- **Schema** — `frontend/src/db/schema.ts` (`waitlist`: `email` unique, `source`,
  `created_at`). Client created lazily in `src/db/index.ts` from `DATABASE_URL`.
- **Server Action** — `src/app/actions/waitlist.ts` validates the email with Zod,
  checks for duplicates, and inserts the row. Shared types/constants live in
  `waitlist.types.ts` (a `"use server"` file may only export async functions).
- **Form** — `src/components/waitlist-form.tsx` uses `useActionState` for inline
  success/error states without a reload. Hero, navbar, and pricing CTAs are
  anchor links to `#waitlist`, which scrolls to this form.

**Setup:** get a Neon connection string (Neon console or the Vercel Marketplace
integration), put the pooled URL in `frontend/.env.local` as `DATABASE_URL`, then
run `npm run db:migrate`. Drizzle scripts: `db:generate`, `db:migrate`,
`db:push`, `db:studio`.

## Design system

Defined in `frontend/src/app/globals.css` (dark by default — this is the brand,
not a mode toggle):

- **Palette** — graphite `#111218` base, amber-gold `#f0a500` accent, warm
  off-white `#ece7da` text. Exposed as `bg-amber` / `text-amber`, with amber
  wired in as `--primary`.
- **Type** — both variable fonts loaded via `next/font/local` from
  `frontend/src/fonts/`: **Clash Display** (`font-display`, headings) and
  **Satoshi** (`font-sans`, body).
- **Motion** — `arc-comet`, `arc-float`, and `arc-glow-pulse` keyframes power
  the live visuals and respect `prefers-reduced-motion`.

## Layout

- `frontend/` — marketing site and app UI. Design system and conventions are
  documented in `frontend/AGENTS.md`.
- `backend/` — REST API under `com.arcflow`. Business endpoints live under
  `/api/**`; operational probes under `/actuator/**`. CORS allowed origins are
  configured via `arcflow.cors.allowed-origins` in `application.properties`.

## Notes

- The frontend can also talk to the Spring Boot backend through
  `frontend/src/lib/api.ts` (`NEXT_PUBLIC_API_URL`), independent of the waitlist.
- `lucide-react` no longer ships brand icons (GitHub, X, etc.); use inline SVGs
  for those, as the footer does.
- A `"use server"` file may only export async functions — keep types and
  constants in a separate module (e.g. `waitlist.types.ts`).
