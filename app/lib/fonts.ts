import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";

// next/font needs literal option objects (no shared variables).
export const display = Playfair_Display({
  variable: "--f-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
});

export const body = Manrope({
  variable: "--f-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  variable: "--f-mono",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});
