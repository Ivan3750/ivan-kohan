import type { Metadata, Viewport } from "next";
import "../globals.css";
import { display, body, mono } from "@/app/lib/fonts";
import { SITE_URL } from "@/app/lib/site";

export const viewport: Viewport = { themeColor: "#0f0f0e", colorScheme: "dark" };

// Utility pages (link-in-bio, QR) — useful for people, not for the search index.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: false, follow: true },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
