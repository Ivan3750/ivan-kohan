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
          background: "linear-gradient(135deg,#1c1e1e 0%,#1c1e1e 55%,#0b4a63 100%)",
          color: "#f7f6f6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 24 24">
            <path d="M12 21.2 10.6 20C5.4 15.4 2 12.4 2 8.7 2 5.7 4.3 3.5 7.2 3.5c1.7 0 3.3.8 4.8 2.3 1.5-1.5 3.1-2.3 4.8-2.3 2.9 0 5.2 2.2 5.2 5.2 0 3.7-3.4 6.7-8.6 11.3L12 21.2Z" fill="#00a8e8" />
          </svg>
          <div style={{ fontSize: 30, color: "#a9abab" }}>ivankohan.com</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>Ivan Kohan</div>
          <div style={{ marginTop: 28, fontSize: 44, color: "#00a8e8" }}>Web developer · Founder of WebHjerte</div>
          <div style={{ marginTop: 16, fontSize: 30, color: "#a9abab" }}>Next.js · SEO · Meta Ads · Horsens, Denmark</div>
        </div>
      </div>
    ),
    size,
  );
}
