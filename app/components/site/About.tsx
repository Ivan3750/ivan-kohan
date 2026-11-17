"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SplitWords, Parallax } from "./motion";

export default function About({
  dict,
  compact = false,
  more,
}: {
  dict: Dict["about"];
  compact?: boolean;
  more?: { href: string; label: string };
}) {
  return (
    <section id="about" className="relative overflow-hidden bg-paper text-ink">
      <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <SectionLabel text={dict.label} />

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

        {!compact && <Journey title={dict.journeyTitle} items={dict.journey} />}
        {compact && more && (
          <Reveal className="mt-14">
            <Link
              href={more.href}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition hover:bg-accent hover:text-ink"
            >
              {more.label}
              <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Journey({ title, items }: { title: string; items: Dict["about"]["journey"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="mt-32">
      <h3 className="font-display text-3xl font-bold sm:text-5xl">{title}</h3>
      <div ref={ref} className="relative mt-14 pl-10 sm:pl-16">
        <span aria-hidden className="absolute bottom-2 left-[11px] top-2 w-px bg-ink/15 sm:left-[19px]" />
        <motion.span
          aria-hidden
          style={{ scaleY }}
          className="absolute bottom-2 left-[10px] top-2 w-[3px] origin-top rounded-full bg-accent sm:left-[18px]"
        />
        <ol className="space-y-12">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={0.05} className="relative">
              <span
                aria-hidden
                className="absolute -left-[38px] top-2 grid h-6 w-6 place-items-center rounded-full border-2 border-ink bg-paper sm:-left-[58px] sm:h-8 sm:w-8"
              >
                <span className={`h-2 w-2 rounded-full sm:h-3 sm:w-3 ${i === items.length - 1 ? "dot-live bg-accent" : "bg-ink"}`} />
              </span>
              <p className="label text-accent-deep">{it.tag}</p>
              <h4 className="font-display mt-2 text-2xl font-bold sm:text-4xl">{it.title}</h4>
              <p className="mt-2 max-w-xl text-lg text-graphite">{it.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function SectionLabel({
  text,
  light = false,
  onBlue = false,
}: {
  n?: string;
  text: string;
  light?: boolean;
  onBlue?: boolean;
}) {
  return (
    <p className={`label flex items-center gap-4 ${onBlue ? "text-ink" : light ? "text-mist" : "text-graphite"}`}>
      <span className={`h-px w-12 ${onBlue ? "bg-ink/40" : light ? "bg-accent/60" : "bg-ink/30"}`} />
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
