import { ImageResponse } from "next/og";

// Latin-only on purpose: the default OG font has no Cyrillic glyphs.
export function GET(req: Request) {
  const t = new URL(req.url).searchParams.get("t")?.replace(/[^\p{Script=Latin}\p{N}\p{P}\p{Zs}]/gu, "").slice(0, 90);

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
          background: "linear-gradient(135deg,#0f0f0e 0%,#0f0f0e 58%,#4a3d00 100%)",
          color: "#f6f3ea",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#ffd60a",
              color: "#0f0f0e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            IK
          </div>
          <div style={{ fontSize: 30, color: "#a9a69b" }}>ivankohan.com</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: t ? 72 : 112,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            {t || "Ivan Kohan"}
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#ffd60a" }}>
            {t ? "Ivan Kohan" : "Entrepreneur · Student · Founder of WebHjerte"}
          </div>
          {!t && <div style={{ marginTop: 14, fontSize: 28, color: "#a9a69b" }}>From Ukraine · living in Denmark</div>}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400" },
    },
  );
}
