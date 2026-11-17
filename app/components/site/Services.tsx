"use client";

import type { Dict } from "@/app/lib/dictionary";
import { SplitWords, Reveal } from "./motion";
import { SectionLabel } from "./About";

/** Compact "focus" grid — four things that fill my days. */
export default function Services({ dict }: { dict: Dict["services"] }) {
  return (
    <section id="services" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} light />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold leading-[1.05]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-mist">{dict.intro}</p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {dict.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 2) * 0.1}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-8 transition duration-500 hover:border-accent hover:bg-accent hover:text-ink sm:p-10">
                <div>
                  <p className="label text-accent transition group-hover:text-ink">0{i + 1}</p>
                  <h3 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">{it.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-mist transition group-hover:text-ink/85">{it.text}</p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {it.tags.map((t) => (
                    <li
                      key={t}
                      className="label rounded-full border border-white/20 px-3 py-1.5 transition group-hover:border-ink/40"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
