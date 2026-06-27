import localFont from "next/font/local";

/**
 * Clash Display — geometric, architectural display face used for headings.
 * Variable axis: weight 200–700.
 */
export const clashDisplay = localFont({
  src: "./ClashDisplay-Variable.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "200 700",
  preload: true,
});

/**
 * Satoshi — humanist, highly legible grotesque used for body and UI text.
 * Variable axis: weight 300–900, plus a matching italic.
 */
export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Variable.woff2",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "./Satoshi-VariableItalic.woff2",
      style: "italic",
      weight: "300 900",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
