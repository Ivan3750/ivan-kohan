"use client";

import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./SectionLabel";

// 12-column mosaic: 2 + 3 + 3 cards, 8 in total.
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];
const skins = [
  "bg-ink text-paper",
  "bg-accent text-ink",
  "border-2 border-ink text-ink",
  "bg-ink text-paper",
  "border-2 border-ink text-ink",
  "bg-accent text-ink",
  "bg-ink text-paper",
  "border-2 border-ink text-ink",
];

/** "A few things that make me, me" — a mosaic of short cards. */
export default function AboutMe({ dict }: { dict: Dict["me"] }) {
  return (
    <section id="me" className="relative bg-paper text-ink">
      <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[1.02]">
          <SplitWords text={dict.title} />
        </h2>

        <ul className="mt-14 grid gap-4 lg:grid-cols-12">
          {dict.cards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 3) * 0.08} className={spans[i] ?? "lg:col-span-4"}>
              <article
                className={`group flex h-full min-h-[14rem] flex-col justify-between rounded-3xl p-7 transition duration-500 hover:-translate-y-1 hover:-rotate-[0.6deg] sm:p-8 ${skins[i] ?? skins[0]}`}
              >
                <p className="label opacity-70">0{i + 1}</p>
                <div>
                  <h3 className="font-display mt-8 text-3xl font-bold leading-tight">{c.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed opacity-85">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
