"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/app/lib/site";
import { pagePath } from "@/app/lib/site";
import type { BlogCardItem } from "@/app/lib/blogCards";
import { Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./About";

function Card({ item, lang, readTime, i }: { item: BlogCardItem; lang: Locale; readTime: string; i: number }) {
  return (
    <Reveal as="li" delay={(i % 3) * 0.08} className="h-full">
      <Link
        href={pagePath(lang, `blog/${item.slug}`)}
        className="group flex h-full flex-col justify-between rounded-3xl border border-ink/15 bg-paper p-7 text-ink transition hover:-translate-y-1 hover:border-ink hover:bg-accent"
      >
        <div>
          <div className="flex items-center justify-between">
            <span aria-hidden className="text-4xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125">
              {item.emoji}
            </span>
            <ArrowUpRight className="text-graphite transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
          </div>
          <h3 className="font-display mt-6 text-2xl font-bold leading-tight">{item.title}</h3>
          <p className="mt-3 leading-relaxed text-graphite group-hover:text-ink/80">{item.description}</p>
        </div>
        <p className="label mt-8 flex flex-wrap gap-x-4 gap-y-1 text-graphite group-hover:text-ink">
          <time dateTime={item.date}>{item.dateLabel}</time>
          <span>
            {item.minutes} {readTime}
          </span>
        </p>
      </Link>
    </Reveal>
  );
}

export function BlogGrid({ items, lang, readTime }: { items: BlogCardItem[]; lang: Locale; readTime: string }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Card key={it.slug} item={it} lang={lang} readTime={readTime} i={i} />
      ))}
    </ul>
  );
}

/** Home-page teaser: latest posts. */
export function BlogTeaser({
  items,
  lang,
  readTime,
  label,
  title,
  intro,
  all,
}: {
  items: BlogCardItem[];
  lang: Locale;
  readTime: string;
  label: string;
  title: string;
  intro: string;
  all: string;
}) {
  return (
    <section className="relative bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-4 sm:px-8 sm:pb-40">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel text={label} />
            <h2 className="font-display mt-8 text-[clamp(2.2rem,5.4vw,4.6rem)] font-bold leading-[1.04]">
              <SplitWords text={title} />
            </h2>
            <p className="mt-5 max-w-xl text-lg text-graphite">{intro}</p>
          </div>
          <Link
            href={pagePath(lang, "blog")}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold transition hover:bg-ink hover:text-paper"
          >
            {all}
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-14">
          <BlogGrid items={items} lang={lang} readTime={readTime} />
        </div>
      </div>
    </section>
  );
}
