"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import carpathians from "@/public/bg.jpg";
import trident from "@/public/avatar.png";
import { Reveal, SplitWords, Parallax } from "./motion";

export default function About({ dict }: { dict: Dict["about"] }) {
  return (
    <section id="about" className="relative bg-paper text-ink">
      <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <SectionLabel n="01" text={dict.label} />

        <h2 className="font-display mt-8 max-w-5xl text-[clamp(2rem,5.4vw,4.6rem)] font-bold leading-[1.05]">
          <SplitWords text={dict.title} />
        </h2>

        <Manifesto text={dict.manifesto} />

        <div className="mt-24 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            {dict.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-6 text-lg leading-relaxed text-graphite sm:text-xl">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <h3 className="label mt-14 text-heart-deep">{dict.factsTitle}</h3>
              <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {dict.facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[9rem_1fr] gap-4 py-4 sm:grid-cols-[12rem_1fr]">
                    <dt className="label text-graphite">{f.k}</dt>
                    <dd className="font-medium">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <OriginCard alt={dict.originAlt} caption={dict.origin} />
        </div>

        <Journey title={dict.journeyTitle} items={dict.journey} />
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
      <span className={onBlue ? "text-ink" : light ? "text-heart" : "text-heart-deep"}>{n}</span>
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
      className="font-display mt-16 max-w-6xl text-[clamp(1.5rem,3.6vw,3.1rem)] font-medium leading-[1.25]"
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

function OriginCard({ alt, caption }: { alt: string; caption: string }) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <Reveal>
        <figure className="relative overflow-hidden rounded-[2rem] bg-ink">
          <Parallax className="relative aspect-[4/5] overflow-hidden" speed={50}>
            <div className="relative h-[120%] w-full -translate-y-[8%]">
              <Image
                src={carpathians}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[35%_50%]"
                placeholder="blur"
              />
            </div>
          </Parallax>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-paper">
            <span className="max-w-[16rem] text-sm leading-snug">{caption}</span>
            <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-white/25 bg-ink">
              <Image src={trident} alt="" width={56} height={56} className="h-14 w-14 object-cover" />
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
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
          className="absolute bottom-2 left-[10px] top-2 w-[3px] origin-top rounded-full bg-heart sm:left-[18px]"
        />
        <ol className="space-y-12">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={0.05} className="relative">
              <span
                aria-hidden
                className="absolute -left-[38px] top-2 grid h-6 w-6 place-items-center rounded-full border-2 border-heart bg-paper sm:-left-[58px] sm:h-8 sm:w-8"
              >
                <span className={`h-2 w-2 rounded-full sm:h-3 sm:w-3 ${i === items.length - 1 ? "dot-live bg-heart" : "bg-heart"}`} />
              </span>
              <p className="label text-heart-deep">{it.tag}</p>
              <h4 className="font-display mt-2 text-2xl font-bold sm:text-4xl">{it.title}</h4>
              <p className="mt-2 max-w-xl text-lg text-graphite">{it.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
