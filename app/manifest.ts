import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ivan Kohan — Entrepreneur & Founder of WebHjerte",
    short_name: "Ivan Kohan",
    description: "Entrepreneur and student from Ukraine, living in Denmark. Founder of WebHjerte.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0e",
    theme_color: "#0f0f0e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
