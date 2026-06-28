/**
 * Resolve the canonical site URL. Only used in server contexts (metadata,
 * sitemap, robots, OG image), so the server-only Vercel vars are safe here.
 * Priority: explicit override → Vercel production domain → sensible default.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://arcflow.com";
}

/** Central site metadata, reused by layout metadata, sitemap, robots, and OG. */
export const siteConfig = {
  name: "arcflow",
  title: "arcflow — Put the busywork on autopilot",
  description:
    "arcflow connects the tools your product team already uses and runs every repetitive workflow for you — triggers, approvals, hand-offs — so work moves the moment it's ready.",
  url: resolveSiteUrl(),
  ogImageAlt: "arcflow — automation built for modern product teams",
  twitter: "@arcflowhq",
  keywords: [
    "workflow automation",
    "automation platform",
    "product teams",
    "no-code automation",
    "integrations",
    "workflow builder",
    "SaaS automation",
  ],
} as const;
