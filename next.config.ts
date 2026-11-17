import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    // old indexed URL that no longer exists → closest new page
    return [
      { source: "/skills", destination: "/about", permanent: true },
      { source: "/blog/nextjs-seo-checklist", destination: "/blog/website-checklist-small-business", permanent: true },
      { source: "/:lang(da|uk)/blog/nextjs-seo-checklist", destination: "/:lang/blog/website-checklist-small-business", permanent: true },
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
