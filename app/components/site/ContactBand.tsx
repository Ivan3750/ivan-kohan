"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links, pagePath, type Locale } from "@/app/lib/site";
import { Magnetic, Reveal, SplitWords } from "./motion";

/** Closing "say hi" call-to-action. */
export default function ContactBand({
  lang,
  band,
  emailLabel,
}: {
  lang: Locale;
  band: { title: string; text: string; cta: string };
  emailLabel: string;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,214,10,0.22), transparent 72%)" }}
      />
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <p className="label text-mist">{emailLabel}</p>
        <h2 className="font-display mt-6 text-[clamp(3rem,10vw,9rem)] font-bold italic leading-[0.95] text-accent">
          <SplitWords text={band.title} />
        </h2>
        <Reveal>
          <p className="mt-8 max-w-xl text-lg text-mist sm:text-xl">{band.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Magnetic>
              <Link
                href={pagePath(lang, "contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                {band.cta}
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <a
              href={`mailto:${links.email}`}
              className="font-display text-xl font-medium underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent"
            >
              {links.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
