import type { Metadata } from "next";
import { clashDisplay, satoshi } from "@/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "arcflow — Automation built for modern product teams",
  description:
    "arcflow turns the busywork between your tools into automated flows, so product teams ship instead of shuffling tasks.",
  metadataBase: new URL("https://arcflow.com"),
  openGraph: {
    title: "arcflow — Automation built for modern product teams",
    description:
      "Design, run, and observe the workflows that move your product forward.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${satoshi.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
