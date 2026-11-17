"use client";

import { motion } from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords, EASE } from "./motion";
import { SectionLabel } from "./About";

export default function Skills({ dict }: { dict: Dict["skills"] }) {
  return (
    <section id="skills" className="relative bg-paper text-ink">
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <SectionLabel n="04" text={dict.label} />
        <h2 className="font-display mt-8 max-w-5xl text-[clamp(2rem,5.4vw,4.6rem)] font-bold leading-[1.05]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-graphite">{dict.intro}</p>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-3">
          {dict.groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <h3 className="font-display border-b-2 border-ink pb-4 text-2xl font-bold">
                <span className="label mr-3 text-heart-deep">0{gi + 1}</span>
                {g.title}
              </h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name} className="group relative overflow-hidden border-b border-ink/10">
                    <span
                      aria-hidden
                      className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                    <div className="relative flex items-baseline justify-between gap-4 px-1 py-4 transition-all duration-500 group-hover:px-4 group-hover:text-paper">
                      <span className="font-display text-lg font-medium">{it.name}</span>
                      <span className="text-right text-sm text-graphite transition group-hover:text-mist">
                        {it.note}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-bold sm:text-4xl">{dict.languagesTitle}</h3>
            <ul className="mt-10 space-y-7">
              {dict.languages.map((l, i) => (
                <li key={l.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-xl font-medium">{l.name}</span>
                    <span className="label text-graphite">{l.level}</span>
                  </div>
                  <div
                    className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10"
                    role="img"
                    aria-label={`${l.name}: ${l.level}`}
                  >
                    <motion.div
                      className="h-full rounded-full bg-heart"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: EASE, delay: 0.15 + i * 0.12 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold sm:text-4xl">{dict.valuesTitle}</h3>
            <ul className="mt-10 flex flex-wrap gap-3">
              {dict.values.map((v, i) => (
                <Reveal as="li" key={v} delay={i * 0.07}>
                  <span className="inline-block rounded-full border-2 border-ink px-5 py-3 font-display text-sm font-medium transition hover:-rotate-2 hover:bg-heart hover:border-heart">
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
