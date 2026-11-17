"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/app/lib/site";
import { pagePath } from "@/app/lib/site";
import type { BlogCardItem } from "@/app/lib/blogCards";
import { Reveal } from "./motion";

/** Clean editorial list of posts: date · title + summary · arrow. */
export function BlogGrid({ items, lang, readTime }: { items: BlogCardItem[]; lang: Locale; readTime: string }) {
  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((item, i) => (
        <Reveal as="li" key={item.slug} delay={i * 0.05}>
          <Link
            href={pagePath(lang, `blog/${item.slug}`)}
            className="group grid gap-4 py-9 transition-all hover:bg-accent/30 hover:px-4 md:grid-cols-[12rem_1fr_auto] md:items-start md:gap-10"
          >
            <p className="label text-graphite">
              <time dateTime={item.date}>{item.dateLabel}</time>
              <br />
              {item.minutes} {readTime}
            </p>
            <div>
              <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-graphite">{item.description}</p>
            </div>
            <ArrowUpRight
              size={28}
              className="hidden text-graphite transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink md:block"
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
