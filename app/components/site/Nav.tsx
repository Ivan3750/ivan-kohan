"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { publicLocales, localeMeta, localePath, pagePath, navHref, isLocale, type Locale } from "@/app/lib/site";
import { lockScroll } from "@/app/lib/lenis-store";
import { socialLinks } from "./Icons";
import { EASE } from "./motion";

const items = [
  { key: "about", slug: "about" },
  { key: "now", slug: "now" },
  { key: "work", slug: "projects" },
  { key: "blog", slug: "blog" },
  { key: "contact", slug: "contact" },
] as const;

/** "/da/blog/x" -> "blog/x", "/about" -> "about", "/" -> "" */
function restPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts.shift();
  return parts.join("/");
}

export default function Nav({
  lang,
  nav,
  a11y,
}: {
  lang: Locale;
  nav: Dict["nav"];
  a11y: Dict["a11y"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const rest = restPath(pathname);
  const active = rest.split("/")[0];
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 500 && y > prev && !open);
  });

  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80] px-4 pt-4 sm:px-6"
        animate={{ y: hidden ? "-120%" : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border-white/10 bg-ink/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href={localePath(lang)}
            className="group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3"
            aria-label={a11y.home}
          >
            <span className="font-display grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold italic text-ink">
              IK
            </span>
            <span className="font-display hidden whitespace-nowrap text-sm font-medium tracking-tight min-[440px]:inline">Ivan Kohan</span>
          </Link>

          <nav aria-label={a11y.primaryNav} className="hidden items-center gap-1 lg:flex">
            {items.map((it) => (
              <Link
                key={it.key}
                href={navHref(lang, it.slug)}
                aria-current={active === it.slug ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === it.slug ? "text-ink" : "text-mist hover:text-paper"
                }`}
              >
                {active === it.slug && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{nav[it.key]}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} label={a11y.language} rest={rest} />
            <Link
              href={navHref(lang, "contact")}
              className="hidden items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent sm:inline-flex"
            >
              {nav.cta} <span aria-hidden>👋</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={a11y.menu}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={a11y.menu}
            className="fixed inset-0 z-[95] flex flex-col bg-ink px-6 pb-8 pt-6"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <span className="label text-mist">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={a11y.close}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15"
              >
                <X size={18} />
              </button>
            </div>

            <nav aria-label={a11y.primaryNav} className="mt-10 flex flex-1 flex-col justify-center gap-1">
              {items.map((it, i) => (
                <motion.div
                  key={it.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE }}
                >
                <Link
                  href={navHref(lang, it.slug)}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-baseline gap-4 py-2 text-[clamp(2rem,9vw,3.4rem)] font-medium leading-tight"
                >
                  <span className="label text-accent">0{i + 1}</span>
                  {nav[it.key]}
                </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2">
              {socialLinks.slice(0, 5).map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${label} (${a11y.external})`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LangSwitch({ lang, label, rest }: { lang: Locale; label: string; rest: string }) {
  return (
    <nav aria-label={label} className="flex rounded-full border border-white/10 bg-white/[0.04] p-0.5">
      {publicLocales.map((l) => (
        <Link
          key={l}
          href={pagePath(l, rest)}
          hrefLang={localeMeta[l].hreflang}
          lang={l}
          title={localeMeta[l].native}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-wider transition ${
            l === lang ? "bg-paper text-ink" : "text-mist hover:text-paper"
          }`}
        >
          {localeMeta[l].label}
        </Link>
      ))}
    </nav>
  );
}
