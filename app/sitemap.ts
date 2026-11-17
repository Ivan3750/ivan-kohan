import type { MetadataRoute } from "next";
import { publicLocales, localeMeta, pageUrl, pageSlugs } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = ["", ...pageSlugs];

  return slugs.flatMap((slug) => {
    const languages: Record<string, string> = Object.fromEntries(
      publicLocales.map((l) => [localeMeta[l].hreflang, pageUrl(l, slug)]),
    );
    languages["x-default"] = pageUrl("en", slug);

    return publicLocales.map((l) => ({
      url: pageUrl(l, slug),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: slug === "" ? (l === "en" ? 1 : 0.9) : 0.7,
      alternates: { languages },
    }));
  });
}
