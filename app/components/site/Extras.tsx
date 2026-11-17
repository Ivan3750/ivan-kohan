"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords, EASE } from "./motion";
import { SectionLabel } from "./SectionLabel";

/** Just for fun: a Danish word of the day (changes daily, tap for the next one). */
export default function Extras({ dict }: { dict: Dict["extras"] }) {
  const [day, setDay] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setDay(Math.floor(Date.now() / 86_400_000)), 0);
    return () => clearTimeout(t);
  }, []);

  const n = dict.words.length;
  const idx = (day + offset) % n;
  const word = dict.words[idx];

  return (
    <section id="extras" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} light />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[1.02]">
          <SplitWords text={dict.title} />
        </h2>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-10 rounded-3xl bg-accent p-7 text-ink sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="min-h-[10rem]">
              <p className="label mb-6">{dict.wordTitle}</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={word.da}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p lang="da" className="font-display text-[clamp(3.6rem,10vw,8rem)] font-bold italic leading-none">
                    {word.da}
                  </p>
                  <p className="mt-5 text-xl">
                    <span className="label mr-2 opacity-60">{dict.means}</span>
                    {word.meaning}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end lg:text-right">
              <p className="label opacity-60">
                {idx + 1} / {n}
              </p>
              <p className="max-w-xs leading-snug opacity-80">{dict.hint}</p>
              <button
                type="button"
                onClick={() => setOffset((o) => o + 1)}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
              >
                {dict.next}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
