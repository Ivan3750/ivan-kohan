"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Globe, HeartHandshake, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { links, SITE_URL } from "@/app/lib/site";

const content = {
  en: {
    name: "EN",
    role: "Web developer · Founder of WebHjerte",
    about: "Building fast websites for small businesses from Denmark. Originally from Ukraine.",
    contact: "Get in touch",
    website: "My website",
    studio: "WebHjerte — web studio",
    support: "Support Ukraine — UNITED24",
  },
  da: {
    name: "DA",
    role: "Webudvikler · Grundlægger af WebHjerte",
    about: "Jeg bygger hurtige hjemmesider til små virksomheder fra Danmark. Oprindeligt fra Ukraine.",
    contact: "Kontakt mig",
    website: "Min hjemmeside",
    studio: "WebHjerte — webstudie",
    support: "Støt Ukraine — UNITED24",
  },
  uk: {
    name: "UA",
    role: "Веб-розробник · Засновник WebHjerte",
    about: "Створюю швидкі сайти для малого бізнесу з Данії. Родом з України.",
    contact: "Зв'язатися",
    website: "Мій сайт",
    studio: "WebHjerte — веб-студія",
    support: "Підтримати Україну — UNITED24",
  },
  bs: {
    name: "BS",
    role: "Web developer · Osnivač WebHjerte",
    about: "Pravim brze sajtove za mala preduzeća iz Danske. Porijeklom iz Ukrajine.",
    contact: "Kontakt",
    website: "Moj sajt",
    studio: "WebHjerte — web studio",
    support: "Podrži Ukrajinu — UNITED24",
  },
} as const;

type Lang = keyof typeof content;

export default function LinksPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  const rows = [
    { Icon: Globe, title: t.website, sub: "ivankohan.com", href: SITE_URL },
    { Icon: Globe, title: t.studio, sub: "webhjerte.dk", href: links.webhjerte },
    { Icon: Instagram, title: "Instagram", sub: "@webhjerte", href: links.instagramBusiness },
    { Icon: Linkedin, title: "LinkedIn", sub: "ivan-kohan", href: links.linkedin },
    { Icon: Github, title: "GitHub", sub: "Ivan3750", href: links.github },
    { Icon: Send, title: "Telegram", sub: "@ivan3750", href: links.telegram },
    { Icon: HeartHandshake, title: t.support, sub: "u24.gov.ua", href: "https://u24.gov.ua/" },
  ];

  return (
    <main className="grain relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-ink px-4 py-12 text-paper">
      <div
        aria-hidden
        className="absolute left-1/2 top-[-20%] -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,214,10,0.22), transparent 70%)" }}
      />

      <div className="w-full max-w-md">
        <div className="text-center">
          <span className="font-display mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent text-3xl font-bold italic text-ink">
            IK
          </span>
          <h1 className="font-display mt-6 text-4xl font-bold">Ivan Kohan</h1>
          <p className="label mt-3 text-accent">{t.role}</p>
          <p className="mx-auto mt-5 max-w-xs leading-relaxed text-mist">{t.about}</p>
        </div>

        <a
          href={`mailto:${links.email}`}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-sm font-semibold text-ink transition hover:bg-paper active:scale-[0.98]"
        >
          <Mail size={18} /> {t.contact}
        </a>

        <ul className="mt-4 space-y-3">
          {rows.map(({ Icon, title, sub, href }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent hover:bg-white/[0.08]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                  <Icon size={18} />
                </span>
                <span className="flex-1">
                  <span className="font-display block text-base font-medium">{title}</span>
                  <span className="block text-sm text-mist">{sub}</span>
                </span>
                <ArrowUpRight size={18} className="text-mist transition group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>

        <div role="group" aria-label="Language" className="mt-8 flex justify-center gap-2">
          {(Object.keys(content) as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wider transition ${
                lang === l
                  ? "border-accent bg-accent text-ink"
                  : "border-white/15 text-mist hover:border-white/40 hover:text-paper"
              }`}
            >
              {content[l].name}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
