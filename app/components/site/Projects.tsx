"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { SectionLabel } from "./About";

type Flagship = {
  key: "webhjerte" | "lonbaeks" | "veka";
  url: string;
  display: string;
  /** Add a real screenshot here to replace the stylised wireframe. */
  image?: StaticImageData;
};

const flagships: Flagship[] = [
  { key: "webhjerte", url: "https://webhjerte.dk", display: "webhjerte.dk" },
  { key: "lonbaeks", url: "https://xn--lnbks-ura7j.dk", display: "lønbæks.dk" },
  { key: "veka", url: "https://veka.center", display: "veka.center" },
];

export default function Projects({
  dict,
  external,
  h1 = false,
}: {
  dict: Dict["projects"];
  external: string;
  h1?: boolean;
}) {
  const Title = h1 ? "h1" : "h2";
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (t) setDist(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="work" className="relative bg-ink text-paper">
      <div ref={ref} style={{ height: dist ? `calc(100svh + ${dist}px)` : "320svh" }}>
        <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <SectionLabel text={dict.label} light />
            <Title className="font-display mt-5 text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.05]">{dict.title}</Title>
            <p className="mt-3 max-w-xl text-mist">{dict.intro}</p>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="mt-8 flex w-max gap-5 px-5 will-change-transform sm:gap-8 sm:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          >
            {flagships.map((f, i) => {
              const c = dict.flagship[i];
              return (
                <FlagshipCard
                  key={f.key}
                  f={f}
                  i={i}
                  tag={c.tag}
                  title={c.title}
                  text={c.text}
                  visit={dict.visit}
                  external={external}
                />
              );
            })}
          </motion.div>

          <div className="mx-auto mt-8 w-full max-w-7xl px-5 sm:px-8">
            <div className="h-px w-full bg-white/10">
              <motion.div style={{ scaleX: bar }} className="h-[3px] origin-left -translate-y-px bg-accent" />
            </div>
            <p className="label mt-3 text-mist">{dict.drag} →</p>
          </div>
        </div>
      </div>

    </section>
  );
}

function FlagshipCard({
  f,
  i,
  tag,
  title,
  text,
  visit,
  external,
}: {
  f: Flagship;
  i: number;
  tag: string;
  title: string;
  text: string;
  visit: string;
  external: string;
}) {
  return (
    <a
      href={f.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor={visit}
      className="group relative flex w-[min(82vw,52rem)] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 transition hover:border-accent/60 sm:flex-row"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-ink-3 sm:aspect-auto sm:w-[58%]">
        {f.image ? (
          <Image src={f.image} alt={`${title} — ${f.display}`} fill sizes="40vw" className="object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <Wireframe variant={i} domain={f.display} />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
        <div>
          <p className="label text-accent">
            0{i + 1} · {tag}
          </p>
          <h3 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">{text}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-paper transition group-hover:text-accent">
          {f.display}
          <span className="sr-only">({external})</span>
          <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </a>
  );
}

/** Stylised browser mock-up used until a real screenshot is added. */
function Wireframe({ variant, domain }: { variant: number; domain: string }) {
  const accents = ["#ffd60a", "#ffe97a", "#f6f3ea"];
  const a = accents[variant % 3];
  return (
    <div className="absolute inset-0 flex flex-col p-5 sm:p-6" aria-hidden>
      <div className="flex items-center gap-3 rounded-t-2xl border border-white/10 bg-ink px-4 py-3">
        <span className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </span>
        <span className="label flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 text-[0.62rem] text-mist">
          {domain}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-b-2xl border border-t-0 border-white/10 bg-ink p-5">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full blur-3xl" style={{ background: a, opacity: 0.35 }} />
        <div className="relative">
          <div className="h-2.5 w-16 rounded-full" style={{ background: a }} />
          <div className="mt-4 h-5 w-[70%] rounded-md bg-white/85" />
          <div className="mt-2 h-5 w-[45%] rounded-md" style={{ background: a }} />
          <div className="mt-4 h-2 w-[60%] rounded-full bg-white/20" />
          <div className="mt-2 h-2 w-[48%] rounded-full bg-white/20" />
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-20 rounded-full" style={{ background: a }} />
            <div className="h-7 w-20 rounded-full border border-white/25" />
          </div>
        </div>
        <div className="relative mt-5 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="aspect-[4/3] rounded-lg border border-white/10 bg-white/[0.04]"
              style={variant === 1 && n === 1 ? { background: a, opacity: 0.8 } : undefined}
            />
          ))}
        </div>
        <span className="font-display absolute bottom-3 right-4 text-4xl font-bold text-white/[0.07]">{domain.split(".")[0]}</span>
      </div>
    </div>
  );
}
