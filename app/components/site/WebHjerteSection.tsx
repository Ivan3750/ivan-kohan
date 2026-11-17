"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { links } from "@/app/lib/site";
import { HeartMark, EcgLine } from "./Heart";
import { Reveal, SplitWords, Magnetic } from "./motion";
import { SectionLabel } from "./About";

export default function WebHjerteSection({ dict, external }: { dict: Dict["webhjerte"]; external: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const heartRot = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const heartY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const ecgX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const bigX = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section
      id="webhjerte"
      ref={ref}
      className="relative isolate overflow-hidden bg-heart text-ink"
    >
      <motion.div
        aria-hidden
        style={{ x: bigX }}
        className="font-display pointer-events-none absolute -top-6 left-0 -z-10 select-none whitespace-nowrap text-[clamp(10rem,30vw,30rem)] font-bold leading-none text-ink/[0.07]"
      >
        WEBHJERTE
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 sm:py-40 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* heart */}
        <motion.div style={{ y: heartY }} className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
          <motion.div style={{ rotate: heartRot }} className="absolute inset-0">
            <div className="beat absolute inset-[6%] text-ink drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]">
              <HeartMark className="h-full w-full" />
            </div>
          </motion.div>
          <motion.div
            style={{ x: ecgX }}
            className="absolute inset-x-[-30%] top-1/2 h-24 -translate-y-1/2 text-paper"
          >
            <EcgLine className="h-full w-full" />
          </motion.div>
        </motion.div>

        {/* copy */}
        <div>
          <SectionLabel n="03" text={dict.label} onBlue />
          <h2 className="font-display mt-8 text-[clamp(2rem,5vw,4.4rem)] font-bold leading-[1.05]">
            <SplitWords text={dict.title} />
          </h2>
          <Reveal>
            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">{dict.text}</p>
            <p className="mt-4 max-w-xl rounded-2xl bg-ink/10 p-5 text-base leading-relaxed">🐕 {dict.bo}</p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {dict.points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.1} className="rounded-2xl bg-paper/90 p-5 text-ink">
                <p className="font-display text-lg font-bold">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{p.text}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={links.webhjerte}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
              >
                {dict.visit}
                <span className="sr-only">({external})</span>
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href={links.instagramBusiness}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 rounded-full border border-ink/40 px-6 py-4 text-sm font-medium transition hover:bg-ink hover:text-paper"
            >
              <Instagram size={17} />
              {dict.follow}
              <span className="sr-only">({external})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
