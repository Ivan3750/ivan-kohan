import type { MetadataRoute } from "next";
import { locales, localeMeta, localeUrl, SITE_URL } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [localeMeta[l].hreflang, localeUrl(l)]),
  );
  languages["x-default"] = SITE_URL;

  return locales.map((l) => ({
    url: localeUrl(l),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
