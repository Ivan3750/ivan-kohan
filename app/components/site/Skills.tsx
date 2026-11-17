"use client";

import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords } from "./motion";
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
                <span className="label mr-3 text-accent-deep">0{gi + 1}</span>
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

      </div>
    </section>
  );
}
