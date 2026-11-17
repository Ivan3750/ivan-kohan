import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // pages that no longer exist → home (permanent)
      { source: "/:page(about|now|projects|skills)", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      { source: "/:lang(da|uk|bs)/:page(about|now|projects|skills)", destination: "/:lang", permanent: true },
      { source: "/:lang(da|uk|bs)/blog/:slug*", destination: "/:lang", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
