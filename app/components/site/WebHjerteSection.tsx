"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { links } from "@/app/lib/site";
import { Reveal, SplitWords, Magnetic } from "./motion";
import { SectionLabel } from "./About";

export default function WebHjerteSection({ dict, external }: { dict: Dict["webhjerte"]; external: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigX = useTransform(scrollYProgress, [0, 1], ["12%", "-34%"]);
  const discY = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <section id="webhjerte" ref={ref} className="relative isolate overflow-hidden bg-accent text-ink">
      <motion.div
        aria-hidden
        style={{ x: bigX }}
        className="font-display pointer-events-none absolute -top-4 left-0 -z-10 select-none whitespace-nowrap text-[clamp(10rem,30vw,30rem)] font-bold italic leading-none text-ink/[0.08]"
      >
        WebHjerte
      </motion.div>
      <motion.span
        aria-hidden
        style={{ y: discY }}
        className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-[26rem] w-[26rem] rounded-full border-[3px] border-ink/20"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 sm:py-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <SectionLabel n="03" text={dict.label} onBlue />
          <h2 className="font-display mt-8 text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold leading-[1.04]">
            <SplitWords text={dict.title} />
          </h2>
          <Reveal>
            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">{dict.text}</p>
          </Reveal>

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

        <ul className="grid gap-4">
          {dict.points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.1} className="rounded-3xl bg-paper p-6 text-ink">
              <p className="font-display text-xl font-bold">
                <span className="label mr-3 text-accent-deep">0{i + 1}</span>
                {p.title}
              </p>
              <p className="mt-2 leading-relaxed text-graphite">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
