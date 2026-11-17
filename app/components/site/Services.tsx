"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import { SplitWords, Reveal } from "./motion";
import { SectionLabel } from "./About";

const skins = [
  "bg-heart text-ink",
  "bg-paper text-ink",
  "bg-ink-3 text-paper border border-white/10",
  "bg-heart-soft text-ink",
];

export default function Services({ dict }: { dict: Dict["services"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = dict.items.length;

  return (
    <section id="services" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-40">
        <SectionLabel n="02" text={dict.label} light />
        <h2 className="font-display mt-8 max-w-5xl text-[clamp(2rem,5.4vw,4.6rem)] font-bold leading-[1.05]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-mist">{dict.intro}</p>
        </Reveal>
      </div>

      <div ref={ref} className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8">
        {dict.items.map((it, i) => (
          <StackCard
            key={it.title}
            i={i}
            n={n}
            progress={scrollYProgress}
            skin={skins[i % skins.length]}
            title={it.title}
            text={it.text}
            tags={it.tags}
          />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  i,
  n,
  progress,
  skin,
  title,
  text,
  tags,
}: {
  i: number;
  n: number;
  progress: MotionValue<number>;
  skin: string;
  title: string;
  text: string;
  tags: string[];
}) {
  const target = 1 - (n - 1 - i) * 0.045;
  const scale = useTransform(progress, [i / n, 1], [1, Math.max(0.8, target)]);

  return (
    <div className="sticky flex h-[88svh] items-start sm:h-screen" style={{ top: `calc(5.5rem + ${i * 1.1}rem)` }}>
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className={`relative flex min-h-[26rem] w-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.5)] sm:min-h-[30rem] sm:p-12 ${skin}`}
      >
        <span
          aria-hidden
          className="font-display text-outline pointer-events-none absolute -right-4 -top-10 select-none text-[clamp(9rem,24vw,20rem)] font-bold leading-none opacity-25"
        >
          0{i + 1}
        </span>

        <div className="relative">
          <p className="label opacity-70">0{i + 1} / 0{n}</p>
          <h3 className="font-display mt-4 max-w-2xl text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.02]">{title}</h3>
        </div>

        <div className="relative mt-10 grid gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-end">
          <p className="max-w-xl text-lg leading-relaxed opacity-90 sm:text-xl">{text}</p>
          <ul className="flex flex-wrap gap-2 sm:justify-end">
            {tags.map((t) => (
              <li key={t} className="label rounded-full border border-current/30 px-4 py-2">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
}
