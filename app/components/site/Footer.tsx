"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { publicLocales, localeMeta, pagePath, navHref, isLocale, type Locale } from "@/app/lib/site";
import { socialLinks } from "./Icons";

function restPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts.shift();
  return parts.join("/");
}

export default function Footer({ dict, lang }: { dict: Dict; lang: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname() ?? "/";
  const rest = restPath(pathname);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const f = dict.footer;
  const year = new Date().getFullYear();

  const nav = [
    ["", dict.nav.home, "🏠"],
    ["about", dict.nav.about, "🙋"],
    ["now", dict.nav.now, "⏳"],
    ["projects", dict.nav.work, "🧩"],
    ["blog", dict.nav.blog, "✍️"],
    ["contact", dict.nav.contact, "💌"],
  ] as const;

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display grid h-11 w-11 place-items-center rounded-full bg-accent text-base font-bold italic text-ink">
              IK
            </span>
            <span className="font-display text-xl font-bold">Ivan Kohan</span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-mist">{f.tagline}</p>
        </div>

        <nav aria-label={f.navTitle}>
          <h2 className="label text-mist">{f.navTitle}</h2>
          <ul className="mt-5 space-y-3">
            {nav.map(([slug, label, emoji]) => (
              <li key={slug || "home"}>
                <Link href={slug ? navHref(lang, slug) : pagePath(lang)} className="transition hover:text-accent">
                  <span aria-hidden className="mr-2">{emoji}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label text-mist">{f.socialTitle}</h2>
          <ul className="mt-5 space-y-3">
            {socialLinks.map(({ id, label, href }) => (
              <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer me" className="transition hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        aria-hidden
        style={{ y }}
        className="font-display pointer-events-none select-none whitespace-nowrap text-center text-[clamp(3.5rem,16vw,22rem)] font-bold italic leading-[0.8] tracking-tighter text-white/[0.06]"
      >
        IVAN KOHAN
      </motion.div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-mist sm:px-8">
          <p>
            © {year} Ivan Kohan · {f.rights}
          </p>
          <p className="inline-flex items-center gap-1.5">
            {f.madeIn} <span role="img" aria-label="love" className="text-accent">♥</span> {f.madeInIn}
          </p>
          <div className="flex items-center gap-4">
            <nav aria-label={dict.a11y.language} className="flex items-center gap-3">
              {publicLocales.map((l) => (
                <Link
                  key={l}
                  href={pagePath(l, rest)}
                  hrefLang={localeMeta[l].hreflang}
                  lang={l}
                  aria-current={l === lang ? "true" : undefined}
                  className={l === lang ? "text-accent" : "transition hover:text-paper"}
                >
                  {localeMeta[l].native}
                </Link>
              ))}
              <Link
                href={pagePath("bs")}
                hrefLang="bs"
                lang="bs"
                aria-current={lang === "bs" ? "true" : undefined}
                title="Bosanski"
                className={`text-xs ${lang === "bs" ? "text-accent" : "text-mist/40 transition hover:text-mist"}`}
              >
                bs
              </Link>
            </nav>
            <a
              href="#main"
              aria-label={dict.a11y.backToTop}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
