import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ivan Kohan — Web Developer & Founder of WebHjerte",
    short_name: "Ivan Kohan",
    description: "Web developer from Ukraine in Denmark. Founder of WebHjerte.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1e1e",
    theme_color: "#1c1e1e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
