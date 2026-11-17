"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { links, pagePath, type Locale } from "@/app/lib/site";
import { Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./About";

const sites = [
  { url: links.webhjerte, display: "webhjerte.dk" },
  { url: "https://xn--lnbks-ura7j.dk", display: "lønbæks.dk" },
  { url: "https://veka.center", display: "veka.center" },
];

/** Home-page work preview: three sites, no gallery. */
export default function WorkTeaser({
  dict,
  lang,
  more,
  external,
}: {
  dict: Dict["projects"];
  lang: Locale;
  more: string;
  external: string;
}) {
  return (
    <section className="relative bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel text={dict.label} />
            <h2 className="font-display mt-8 text-[clamp(2.2rem,5.4vw,4.6rem)] font-bold leading-[1.04]">
              <SplitWords text={dict.title} />
            </h2>
          </div>
          <Link
            href={pagePath(lang, "projects")}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold transition hover:bg-ink hover:text-paper"
          >
            {more}
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {dict.flagship.map((f, i) => (
            <Reveal as="li" key={f.key} delay={i * 0.08}>
              <a
                href={sites[i].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-3xl bg-ink p-8 text-paper transition hover:-translate-y-1 hover:bg-accent hover:text-ink"
              >
                <div>
                  <p className="label text-accent transition group-hover:text-ink">{f.tag}</p>
                  <h3 className="font-display mt-4 text-3xl font-bold">{f.title}</h3>
                  <p className="mt-4 leading-relaxed text-mist transition group-hover:text-ink/85">{f.text}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-2 text-sm font-semibold">
                  {sites[i].display}
                  <span className="sr-only">({external})</span>
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
