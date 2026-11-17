"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { links } from "@/app/lib/site";
import { Reveal, SplitWords, Magnetic } from "./motion";
import { SectionLabel } from "./SectionLabel";

const made = [
  { url: links.webhjerte, label: "webhjerte.dk" },
  { url: "https://xn--lnbks-ura7j.dk", label: "lønbæks.dk" },
  { url: "https://veka.center", label: "veka.center" },
];

/** WebHjerte as a quiet "side quest": one calm block, no portfolio cards. */
export default function Studio({ dict, external }: { dict: Dict["studio"]; external: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigX = useTransform(scrollYProgress, [0, 1], ["12%", "-34%"]);

  return (
    <section id="studio" ref={ref} className="relative isolate overflow-hidden bg-accent text-ink">
      <motion.div
        aria-hidden
        style={{ x: bigX }}
        className="font-display pointer-events-none absolute -top-4 left-0 -z-10 select-none whitespace-nowrap text-[clamp(10rem,30vw,30rem)] font-bold italic leading-none text-ink/[0.08]"
      >
        WebHjerte
      </motion.div>

      <div className="mx-auto max-w-4xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} onAccent />
        <h2 className="font-display mt-8 text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold leading-[1.04]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{dict.text}</p>

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

          <p className="label mt-14 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="opacity-70">{dict.madeTitle}:</span>
            {made.map((m) => (
              <a
                key={m.url}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-ink/40 underline-offset-4 transition hover:decoration-ink"
              >
                {m.label}
                <span className="sr-only"> ({external})</span>
              </a>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
