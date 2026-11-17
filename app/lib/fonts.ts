import { Unbounded, Onest, JetBrains_Mono } from "next/font/google";

// next/font needs literal option objects (no shared variables).
export const display = Unbounded({
  variable: "--f-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "500", "700"],
  display: "swap",
});

export const body = Onest({
  variable: "--f-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  variable: "--f-mono",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});
