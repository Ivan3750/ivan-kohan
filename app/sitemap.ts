import type { MetadataRoute } from "next";
import { publicLocales, localeMeta, pageUrl, pageSlugs } from "@/app/lib/site";
import { posts } from "@/app/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = ["", ...pageSlugs, ...posts.map((p) => `blog/${p.slug}`)];

  return slugs.flatMap((slug) => {
    const languages: Record<string, string> = Object.fromEntries(
      publicLocales.map((l) => [localeMeta[l].hreflang, pageUrl(l, slug)]),
    );
    languages["x-default"] = pageUrl("en", slug);
    const post = posts.find((p) => `blog/${p.slug}` === slug);

    return publicLocales.map((l) => ({
      url: pageUrl(l, slug),
      lastModified: post ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: slug === "" ? (l === "en" ? 1 : 0.9) : slug.startsWith("blog/") ? 0.6 : 0.8,
      alternates: { languages },
    }));
  });
}

