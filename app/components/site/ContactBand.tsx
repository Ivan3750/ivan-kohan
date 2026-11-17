"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links, pagePath, type Locale } from "@/app/lib/site";
import { Magnetic, Reveal, SplitWords } from "./motion";

/** Compact closing call-to-action used at the bottom of pages. */
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
    <section className="grain relative isolate overflow-hidden bg-accent text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="label">{emailLabel}</p>
        <h2 className="font-display mt-6 max-w-4xl text-[clamp(2.4rem,7vw,6.4rem)] font-bold leading-[1]">
          <SplitWords text={band.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg sm:text-xl">{band.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Magnetic>
              <Link
                href={pagePath(lang, "contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
              >
                {band.cta}
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <a
              href={`mailto:${links.email}`}
              className="font-display text-lg font-medium underline decoration-2 underline-offset-4 transition hover:text-paper"
            >
              {links.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
