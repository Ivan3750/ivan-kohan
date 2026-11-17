import { ImageResponse } from "next/og";

export const alt = "Ivan Kohan — Web Developer & Founder of WebHjerte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Latin-only copy on purpose: the default OG font has no Cyrillic glyphs.
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
          padding: 72,
          background: "linear-gradient(135deg,#0f0f0e 0%,#0f0f0e 55%,#3d3300 100%)",
          color: "#f6f3ea",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 32, background: "#ffd60a", color: "#0f0f0e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700 }}>IK</div>
          <div style={{ fontSize: 30, color: "#a9abab" }}>ivankohan.com</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>Ivan Kohan</div>
          <div style={{ marginTop: 28, fontSize: 44, color: "#ffd60a" }}>Web developer · Founder of WebHjerte</div>
          <div style={{ marginTop: 16, fontSize: 30, color: "#a9abab" }}>Next.js · SEO · Meta Ads · Denmark</div>
        </div>
      </div>
    ),
    size,
  );
}
