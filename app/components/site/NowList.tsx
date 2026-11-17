"use client";

import { Reveal } from "./motion";
import { nowEmoji } from "@/app/lib/emoji";

export default function NowList({
  updated,
  items,
}: {
  updated: string;
  items: { label: string; text: string }[];
}) {
  return (
    <section className="relative bg-paper text-ink">
      <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="label inline-flex items-center gap-3 rounded-full border border-ink/20 px-4 py-2 text-graphite">
          <span className="dot-live h-2 w-2 rounded-full bg-accent-deep" />
          {updated}
        </p>

        <ul className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
          {items.map((it, i) => (
            <Reveal as="li" key={it.label} delay={i * 0.05}>
              <div className="group grid items-baseline gap-3 py-8 transition-all hover:bg-accent/30 hover:px-4 sm:grid-cols-[16rem_1fr] sm:gap-10">
                <h2 className="font-display flex items-center gap-4 text-2xl font-bold sm:text-3xl">
                  <span aria-hidden className="text-3xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125">
                    {nowEmoji[i]}
                  </span>
                  {it.label}
                </h2>
                <p className="text-xl leading-relaxed text-graphite">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
