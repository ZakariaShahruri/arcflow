import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GRAPHITE = "#111218";
const AMBER = "#f0a500";
const OFFWHITE = "#ece7da";
const MUTED = "#93909e";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: GRAPHITE,
          padding: "80px",
          position: "relative",
        }}
      >
        {/* amber glow */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 320,
            width: 700,
            height: 700,
            borderRadius: "9999px",
            background: AMBER,
            opacity: 0.18,
            filter: "blur(140px)",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 28 28" fill="none">
            <path
              d="M4 22C4 12.0589 12.0589 4 22 4"
              stroke={AMBER}
              strokeWidth="2.75"
              strokeLinecap="round"
            />
            <path
              d="M10 22C10 15.3726 15.3726 10 22 10"
              stroke={AMBER}
              strokeWidth="2.75"
              strokeLinecap="round"
              opacity="0.55"
            />
            <circle cx="22" cy="22" r="3" fill={AMBER} />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 700, color: OFFWHITE }}>
            arcflow
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: OFFWHITE,
            }}
          >
            Put the busywork on autopilot.&nbsp;
            <span style={{ color: AMBER }}>Ship 10× faster.</span>
          </div>
          <div style={{ fontSize: 32, color: MUTED, maxWidth: 900 }}>
            Automation built for modern product teams.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
