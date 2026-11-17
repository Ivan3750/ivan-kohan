"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitWords, Reveal } from "./motion";
import { SectionLabel } from "./About";

/** Dark page intro with parallax ring + giant outlined word. Renders the page's <h1>. */
export default function PageHeader({
  label,
  title,
  intro,
  watermark,
}: {
  label: string;
  title: string;
  intro: string;
  watermark?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <header ref={ref} className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <motion.span
        aria-hidden
        style={{ y: ringY }}
        className="absolute -right-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full border-[3px] border-accent/30 md:-right-24 md:border-accent/50"
      />
      <motion.span
        aria-hidden
        style={{ y: ringY }}
        className="absolute right-[12%] top-[32%] -z-10 hidden h-24 w-24 rounded-full bg-accent md:block"
      />
      {watermark && (
        <motion.div
          aria-hidden
          style={{ x: wordX }}
          className="font-display text-outline pointer-events-none absolute bottom-0 left-0 -z-10 select-none whitespace-nowrap text-[clamp(7rem,24vw,24rem)] font-bold italic leading-[0.8] text-white/[0.07]"
        >
          {watermark}
        </motion.div>
      )}

      <motion.div style={{ y: copyY }} className="mx-auto max-w-7xl px-5 pb-24 pt-40 sm:px-8 sm:pb-32 sm:pt-52">
        <SectionLabel text={label} light />
        <h1
          className={`font-display mt-8 max-w-5xl font-bold leading-[1.02] ${
            title.length > 34 ? "text-[clamp(2rem,5vw,4.6rem)]" : "text-[clamp(2.6rem,7.5vw,6.8rem)]"
          }`}
        >
          <SplitWords text={title} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">{intro}</p>
        </Reveal>
      </motion.div>
    </header>
  );
}
