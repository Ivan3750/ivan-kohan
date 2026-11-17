export const SITE_URL = "https://ivankohan.com";

export const locales = ["en", "da", "uk", "bs"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; native: string; og: string; hreflang: string }
> = {
  en: { label: "EN", native: "English", og: "en_GB", hreflang: "en" },
  da: { label: "DA", native: "Dansk", og: "da_DK", hreflang: "da-DK" },
  uk: { label: "UA", native: "Українська", og: "uk_UA", hreflang: "uk-UA" },
  bs: { label: "BS", native: "Bosanski", og: "bs_BA", hreflang: "bs-BA" },
};

/** Locales shown in the switcher, sitemap and hreflang. Bosnian stays reachable at /bs but is kept quiet. */
export const publicLocales: readonly Locale[] = ["en", "da", "uk"];
export const hiddenLocales: readonly Locale[] = ["bs"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Default locale lives at "/", the others at "/da", "/uk". */
export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function localeUrl(locale: Locale) {
  return locale === defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
}

export const links = {
  email: "kohan3750@gmail.com",
  linkedin: "https://www.linkedin.com/in/ivan-kohan/",
  instagram: "https://www.instagram.com/ivan.kohan.ua/",
  instagramBusiness: "https://www.instagram.com/webhjerte/",
  github: "https://github.com/Ivan3750",
  telegram: "https://t.me/ivan3750",
  webhjerte: "https://webhjerte.dk",
} as const;

export const pageSlugs = ["about", "now", "projects", "contact", "blog"] as const;
export type PageSlug = (typeof pageSlugs)[number];

/** "" = home. Default locale has no prefix: /about, /da/about … */
export function pagePath(locale: Locale, slug: string = "") {
  const base = locale === defaultLocale ? "" : `/${locale}`;
  const path = slug ? `${base}/${slug}` : base;
  return path === "" ? "/" : path;
}

export function pageUrl(locale: Locale, slug: string = "") {
  const path = pagePath(locale, slug);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/** Blog exists in public locales only; hidden locales link to the default-language blog. */
export function navHref(locale: Locale, slug: string) {
  if (slug === "blog" && hiddenLocales.includes(locale)) return pagePath(defaultLocale, "blog");
  return pagePath(locale, slug);
}
