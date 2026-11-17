import type { Metadata } from "next";
import { publicLocales, hiddenLocales, localeMeta, pageUrl, SITE_URL, type Locale } from "./site";

export const dateLocale: Record<Locale, string> = { en: "en-GB", da: "da-DK", uk: "uk-UA", bs: "bs-BA" };

export function formatDate(iso: string, lang: Locale) {
  return new Intl.DateTimeFormat(dateLocale[lang], { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));
}

export function pageMetadata({
  lang,
  slug = "",
  title,
  description,
  keywords,
  absoluteTitle = false,
  article,
  ogTitle,
}: {
  lang: Locale;
  slug?: string;
  title: string;
  description: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  article?: { publishedTime: string; tags?: string[] };
  /** Title printed in the social card (Latin-script languages only). */
  ogTitle?: string;
}): Metadata {
  const ogImage = `${SITE_URL}/api/og${ogTitle ? `?t=${encodeURIComponent(ogTitle)}` : ""}`;
  const hidden = hiddenLocales.includes(lang);
  const languages: Record<string, string> = Object.fromEntries(
    publicLocales.map((l) => [localeMeta[l].hreflang, pageUrl(l, slug)]),
  );
  languages["x-default"] = pageUrl("en", slug);
  const fullTitle = absoluteTitle ? title : `${title} | Ivan Kohan`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: pageUrl(lang, slug), languages: hidden ? undefined : languages },
    ...(hidden ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: article ? "article" : "website",
      siteName: "Ivan Kohan",
      title: fullTitle,
      description,
      url: pageUrl(lang, slug),
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: localeMeta[lang].og,
      alternateLocale: publicLocales.filter((l) => l !== lang).map((l) => localeMeta[l].og),
      ...(article ? { publishedTime: article.publishedTime, authors: [SITE_URL], tags: article.tags } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}
