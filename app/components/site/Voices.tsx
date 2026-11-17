"use client";

import { useState } from "react";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./SectionLabel";

/** Five languages as expanding panels: hover / focus / tap one to open it. */
export default function Voices({ dict }: { dict: Dict["voices"] }) {
  const [active, setActive] = useState(0);
  const cols = dict.items.map((_, i) => (i === active ? "2.2fr" : "1fr")).join(" ");

  return (
    <section id="voices" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} light />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[1.02]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-mist">{dict.intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul
            className="mt-14 grid gap-3 lg:h-[26rem] lg:gap-4 lg:[grid-template-columns:var(--cols)] lg:transition-[grid-template-columns] lg:duration-700 lg:ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ "--cols": cols } as React.CSSProperties}
          >
            {dict.items.map((it, i) => {
              const on = i === active;
              return (
                <li key={it.name} className="min-w-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border p-6 text-left transition-colors duration-500 sm:p-7 lg:px-5 ${
                      on ? "border-accent bg-accent text-ink" : "border-white/10 bg-ink-2 hover:border-white/30"
                    }`}
                  >
                    <span className={`label ${on ? "text-ink" : "text-mist"}`}>
                      0{i + 1} · {it.level}
                    </span>
                    <span>
                      <span
                        className={`font-display block whitespace-nowrap font-bold italic leading-none transition-all duration-500 ${
                          on ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl text-accent lg:text-[1.7rem] xl:text-3xl"
                        }`}
                      >
                        {it.greeting}
                      </span>
                      <span className="font-display mt-3 block text-xl font-medium">{it.name}</span>
                      <span
                        className={`mt-2 block max-w-xs text-sm leading-relaxed transition-all duration-500 lg:overflow-hidden ${
                          on ? "opacity-100 lg:max-h-20" : "opacity-70 lg:max-h-0 lg:opacity-0"
                        }`}
                      >
                        {it.note}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
