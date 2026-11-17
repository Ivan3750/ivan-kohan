"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { links } from "@/app/lib/site";
import { Reveal, SplitWords, Magnetic } from "./motion";
import { SectionLabel } from "./SectionLabel";

const cases = [
  { slug: "improve-physio", label: "Improve Physio & Sport" },
  { slug: "loenbaeks-koereskole", label: "Lønbæks Køreskole" },
  { slug: "veka-center", label: "VEKA Center" },
  { slug: "pizzaria", label: "Pizzaria" },
  { slug: "renserv", label: "RenServ" },
  { slug: "monolit", label: "Monolit" },
];

/** WebHjerte, explained simply: what it is, how it works, a few cases. */
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

      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} onAccent />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold leading-[1.04]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{dict.text}</p>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {dict.points.map((p, i) => (
              <li key={p.title} className="rounded-3xl bg-paper p-6">
                <p className="label text-accent-deep">0{i + 1}</p>
                <p className="font-display mt-3 text-2xl font-bold">{p.title}</p>
                <p className="mt-2 leading-relaxed text-graphite">{p.text}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-display mt-16 text-2xl font-bold sm:text-3xl">{dict.stepsTitle}</h3>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-ink/30 bg-ink/30 md:grid-cols-5">
            {dict.steps.map((st, i) => (
              <li key={st.title} className="bg-accent p-5">
                <p className="font-display text-4xl font-bold italic leading-none text-ink/30">{i + 1}</p>
                <p className="font-display mt-4 text-lg font-bold">{st.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed">{st.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center gap-4">
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
            <a
              href={`mailto:${links.studioEmail}`}
              className="font-display text-lg font-medium underline decoration-ink/40 underline-offset-4 transition hover:decoration-ink"
            >
              {links.studioEmail}
            </a>
          </div>

          <p className="label mt-12 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="opacity-70">{dict.madeTitle}:</span>
            {cases.map((c) => (
              <a
                key={c.slug}
                href={`${links.webhjerte}/portefolje/${c.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-ink/40 underline-offset-4 transition hover:decoration-ink"
              >
                {c.label}
                <span className="sr-only"> ({external})</span>
              </a>
            ))}
            <a
              href={`${links.webhjerte}/portefolje`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
            >
              {dict.more} <ArrowUpRight size={13} />
              <span className="sr-only"> ({external})</span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
