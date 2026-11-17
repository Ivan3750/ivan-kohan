import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f0f0e" }}>
        <svg width="120" height="120" viewBox="0 0 64 64"><path d="M14 12v40M28 12v40M28 32l18-20M33 27l15 25" stroke="#ffd60a" strokeWidth="8" strokeLinecap="round" fill="none" /></svg>
      </div>
    ),
    size,
  );
}
