"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords, Parallax } from "./motion";

export default function About({ dict }: { dict: Dict["about"] }) {
  return (
    <section id="about" className="relative overflow-hidden bg-paper text-ink">
      <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <SectionLabel n="01" text={dict.label} />

        <h2 className="font-display mt-8 max-w-5xl text-[clamp(2.2rem,5.6vw,5rem)] font-bold leading-[1.04]">
          <SplitWords text={dict.title} />
        </h2>

        <Manifesto text={dict.manifesto} />

        <div className="mt-24 grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            {dict.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-xl leading-relaxed text-graphite sm:text-2xl">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="relative">
            <Parallax className="pointer-events-none absolute -right-10 -top-24 hidden h-56 w-56 lg:block" speed={60}>
              <span aria-hidden className="block h-full w-full rounded-full bg-accent" />
            </Parallax>
            <Reveal delay={0.1}>
              <h3 className="label relative text-accent-deep">{dict.factsTitle}</h3>
              <dl className="relative mt-4 divide-y divide-ink/15 border-y border-ink/15 bg-paper/80 backdrop-blur-sm">
                {dict.facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[8rem_1fr] gap-4 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="label text-graphite">{f.k}</dt>
                    <dd className="font-display text-lg font-medium">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  n,
  text,
  light = false,
  onBlue = false,
}: {
  n: string;
  text: string;
  light?: boolean;
  onBlue?: boolean;
}) {
  return (
    <p className={`label flex items-center gap-4 ${onBlue ? "text-ink" : light ? "text-mist" : "text-graphite"}`}>
      <span className={onBlue ? "text-ink" : light ? "text-accent" : "text-accent-deep"}>{n}</span>
      <span className={`h-px w-16 ${onBlue ? "bg-ink/40" : light ? "bg-white/20" : "bg-ink/20"}`} />
      {text}
    </p>
  );
}

/** Word-by-word text that lights up as you scroll. */
function Manifesto({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p
      ref={ref}
      className="font-display mt-16 max-w-6xl text-[clamp(1.6rem,3.8vw,3.4rem)] font-medium leading-[1.2]"
    >
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}
