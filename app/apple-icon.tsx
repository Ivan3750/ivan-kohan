import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#1c1e1e" }}>
        <svg width="120" height="120" viewBox="0 0 24 24">
          <path d="M12 21.2 10.6 20C5.4 15.4 2 12.4 2 8.7 2 5.7 4.3 3.5 7.2 3.5c1.7 0 3.3.8 4.8 2.3 1.5-1.5 3.1-2.3 4.8-2.3 2.9 0 5.2 2.2 5.2 5.2 0 3.7-3.4 6.7-8.6 11.3L12 21.2Z" fill="#00a8e8" />
        </svg>
      </div>
    ),
    size,
  );
}
