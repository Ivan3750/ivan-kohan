"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { locales, localeMeta, localePath, type Locale } from "@/app/lib/site";
import { HeartMark } from "./Heart";
import { socialLinks } from "./Icons";

export default function Footer({ dict, lang }: { dict: Dict; lang: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const f = dict.footer;
  const year = new Date().getFullYear();

  const nav = [
    ["about", dict.nav.about],
    ["services", dict.nav.services],
    ["webhjerte", dict.nav.webhjerte],
    ["work", dict.nav.work],
    ["skills", dict.nav.skills],
    ["faq", "FAQ"],
    ["contact", dict.nav.contact],
  ] as const;

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-heart text-ink">
              <HeartMark className="beat h-6 w-6" />
            </span>
            <span className="font-display text-xl font-bold">Ivan Kohan</span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-mist">{f.tagline}</p>
          <a
            href="https://u24.gov.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ffd500]/40 px-4 py-2 text-sm text-[#ffd500] transition hover:bg-[#ffd500] hover:text-ink"
          >
            🇺🇦 {f.support}
          </a>
        </div>

        <nav aria-label={f.navTitle}>
          <h2 className="label text-mist">{f.navTitle}</h2>
          <ul className="mt-5 space-y-3">
            {nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition hover:text-heart">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label text-mist">{f.socialTitle}</h2>
          <ul className="mt-5 space-y-3">
            {socialLinks.map(({ id, label, href }) => (
              <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer me" className="transition hover:text-heart">
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
        className="font-display pointer-events-none select-none whitespace-nowrap text-center text-[clamp(3rem,10.4vw,14rem)] font-bold leading-[0.8] tracking-tighter text-white/[0.06]"
      >
        IVAN KOHAN
      </motion.div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-mist sm:px-8">
          <p>
            © {year} Ivan Kohan · {f.rights}
          </p>
          <p className="inline-flex items-center gap-1.5">
            {f.madeIn} <HeartMark className="beat h-4 w-4 text-heart" title="♥" /> {f.madeInIn}
          </p>
          <div className="flex items-center gap-4">
            <nav aria-label={dict.a11y.language} className="flex gap-3">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localePath(l)}
                  hrefLang={localeMeta[l].hreflang}
                  lang={l}
                  aria-current={l === lang ? "true" : undefined}
                  className={l === lang ? "text-heart" : "transition hover:text-paper"}
                >
                  {localeMeta[l].native}
                </Link>
              ))}
            </nav>
            <a
              href="#top"
              aria-label={dict.a11y.backToTop}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-heart hover:text-heart"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
