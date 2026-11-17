"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./SectionLabel";

const ROUTE = "M300 470 C 350 360 70 390 100 265 C 120 175 270 160 92 62";
const START = { x: 300, y: 470 };
const END = { x: 92, y: 62 };
const roman = ["I", "II", "III", "IV", "V", "VI"];

/** "A life in six chapters": a route from Ukraine to Denmark that draws itself as you scroll. */
export default function Story({ dict }: { dict: Dict["story"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.65", "end 0.55"] });

  return (
    <section id="story" className="relative bg-paper text-ink">
      <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionLabel text={dict.label} />
        <h2 className="font-display mt-8 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[1.02]">
          <SplitWords text={dict.title} />
        </h2>
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-graphite">{dict.intro}</p>
          <dl className="mt-10 grid gap-x-8 gap-y-6 border-y border-ink/15 py-7 sm:grid-cols-2 lg:grid-cols-5">
            {dict.facts.map((f) => (
              <div key={f.k}>
                <dt className="label text-graphite">{f.k}</dt>
                <dd className="font-display mt-1.5 text-lg font-medium leading-snug">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div ref={ref} className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <RouteMap progress={scrollYProgress} from={dict.from} to={dict.to} />
            </div>
          </div>

          <ol>
            {dict.chapters.map((c, i) => (
              <li
                key={c.name}
                className="flex min-h-[58vh] flex-col justify-center border-t border-ink/15 py-12 first:border-t-0 lg:min-h-[72vh]"
              >
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span aria-hidden className="font-display text-7xl font-bold italic leading-none text-ink/15 sm:text-8xl">
                      {roman[i]}
                    </span>
                    <span className="label text-accent-deep">{c.name}</span>
                  </div>
                  <h3 className="font-display mt-6 text-[clamp(2rem,4.6vw,3.8rem)] font-bold leading-[1.05]">{c.head}</h3>
                  <p className="mt-5 max-w-lg text-xl leading-relaxed text-graphite">{c.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RouteMap({ progress, from, to }: { progress: MotionValue<number>; from: string; to: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const draw = useSpring(useTransform(progress, [0, 1], [0, 1]), { stiffness: 90, damping: 24 });
  const cx = useMotionValue(START.x);
  const cy = useMotionValue(START.y);

  useMotionValueEvent(draw, "change", (v) => {
    const el = pathRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    const pt = el.getPointAtLength(Math.min(Math.max(v, 0), 1) * len);
    cx.set(pt.x);
    cy.set(pt.y);
  });

  return (
    <svg viewBox="0 0 400 540" role="img" aria-label={`${from} → ${to}`} className="mx-auto h-auto w-full max-w-md">
      {/* faint full route */}
      <path d={ROUTE} fill="none" stroke="#0f0f0e" strokeOpacity=".18" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" />
      {/* drawn route */}
      <motion.path ref={pathRef} d={ROUTE} fill="none" stroke="#0f0f0e" strokeWidth="3.5" strokeLinecap="round" style={{ pathLength: draw }} />

      {/* start: Ukraine */}
      <circle cx={START.x} cy={START.y} r="9" fill="#0f0f0e" />
      <text x={START.x - 14} y={START.y + 34} textAnchor="end" fontSize="15" letterSpacing="2" fill="#0f0f0e" style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
        {from}
      </text>

      {/* end: Denmark */}
      <circle cx={END.x} cy={END.y} r="15" fill="none" stroke="#0f0f0e" strokeWidth="2.5" />
      <circle cx={END.x} cy={END.y} r="5" fill="#0f0f0e" />
      <text x={END.x + 26} y={END.y + 5} fontSize="15" letterSpacing="2" fill="#0f0f0e" style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
        {to}
      </text>

      {/* traveller */}
      <motion.circle cx={cx} cy={cy} r="12" fill="#ffd60a" stroke="#0f0f0e" strokeWidth="3" />
    </svg>
  );
}
