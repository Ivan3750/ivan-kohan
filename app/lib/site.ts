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
