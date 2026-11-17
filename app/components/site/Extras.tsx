"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords, EASE } from "./motion";
import { SectionLabel } from "./SectionLabel";

function fmt(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone })
    .format(date)
    .split(":");
}

/** Just for fun: two live clocks (Denmark / Ukraine) and a Danish word of the day. */
export default function Extras({ dict }: { dict: Dict["extras"] }) {
  const [now, setNow] = useState<Date | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const n = dict.words.length;
  const day = now ? Math.floor(now.getTime() / 86_400_000) : 0;
  const idx = (day + offset) % n;
  const word = dict.words[idx];

  const clocks = [
    { label: dict.denmark, tz: "Europe/Copenhagen" },
    { label: dict.ukraine, tz: "Europe/Kyiv" },
  ];

  return (
    <section id="extras" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} light />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[1.02]">
          <SplitWords text={dict.title} />
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* clocks */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-ink-2 p-7 sm:p-9">
              <div className="grid gap-8 sm:grid-cols-2">
                {clocks.map((c) => {
                  const [h, m, sec] = now ? fmt(now, c.tz) : ["--", "--", "--"];
                  return (
                    <div key={c.tz}>
                      <p className="label text-mist">{c.label}</p>
                      <p
                        className="font-display mt-3 text-[clamp(3.2rem,7vw,5.6rem)] font-bold leading-none tabular-nums"
                        aria-label={now ? `${h}:${m}` : undefined}
                      >
                        {h}
                        <span className="text-accent">:</span>
                        {m}
                        <span className="ml-2 align-top text-xl font-medium text-mist">{sec}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="font-display mt-10 text-xl font-medium italic text-accent sm:text-2xl">{dict.apart}</p>
            </div>
          </Reveal>

          {/* word of the day */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-accent p-7 text-ink sm:p-9">
              <div className="flex items-center justify-between">
                <p className="label">{dict.wordTitle}</p>
                <p className="label opacity-60">
                  {idx + 1} / {n}
                </p>
              </div>

              <div className="my-8 min-h-[9rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={word.da}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <p lang="da" className="font-display text-[clamp(3.4rem,8vw,6.2rem)] font-bold italic leading-none">
                      {word.da}
                    </p>
                    <p className="mt-4 text-lg">
                      <span className="label mr-2 opacity-60">{dict.means}</span>
                      {word.meaning}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-[16rem] text-sm leading-snug opacity-75">{dict.hint}</p>
                <button
                  type="button"
                  onClick={() => setOffset((o) => o + 1)}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
                >
                  {dict.next}
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
