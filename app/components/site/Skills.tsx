"use client";

import { motion } from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import { interestEmoji, languageEmoji, valueEmoji } from "@/app/lib/emoji";
import { Reveal, SplitWords, EASE } from "./motion";
import { SectionLabel } from "./About";

/** "Life" section: languages, interests and values. */
export default function Skills({ dict }: { dict: Dict["skills"] }) {
  return (
    <section id="skills" className="relative bg-paper text-ink">
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <SectionLabel text={dict.label} />
        <h2 className="font-display mt-8 max-w-5xl text-[clamp(2.2rem,5.6vw,5rem)] font-bold leading-[1.04]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-graphite">{dict.intro}</p>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="font-display border-b-2 border-ink pb-4 text-2xl font-bold">{dict.interestsTitle}</h3>
            <ul>
              {dict.interests.map((it, i) => (
                <li key={it} className="group relative overflow-hidden border-b border-ink/10">
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <div className="relative flex items-baseline gap-5 px-1 py-5 transition-all duration-500 group-hover:px-4">
                    <span aria-hidden className="text-2xl">{interestEmoji[i]}</span>
                    <span className="font-display text-xl font-medium sm:text-3xl">{it}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display border-b-2 border-ink pb-4 text-2xl font-bold">{dict.languagesTitle}</h3>
            <ul className="mt-8 space-y-7">
              {dict.languages.map((l, i) => (
                <li key={l.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-xl font-medium">
                      <span aria-hidden className="mr-2">{languageEmoji[i]}</span>
                      {l.name}
                    </span>
                    <span className="label text-graphite">{l.level}</span>
                  </div>
                  <div
                    className="mt-3 h-2.5 overflow-hidden rounded-full bg-ink/10"
                    role="img"
                    aria-label={`${l.name}: ${l.level}`}
                  >
                    <motion.div
                      className="h-full rounded-full bg-ink"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: EASE, delay: 0.15 + i * 0.12 }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="font-display mt-14 border-b-2 border-ink pb-4 text-2xl font-bold">{dict.valuesTitle}</h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {dict.values.map((v, i) => (
                <Reveal as="li" key={v} delay={i * 0.07}>
                  <span className="inline-block rounded-full border-2 border-ink px-5 py-3 font-display text-sm font-medium transition hover:-rotate-2 hover:border-accent hover:bg-accent">
                    <span aria-hidden className="mr-2">{valueEmoji[i]}</span>
                    {v}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
