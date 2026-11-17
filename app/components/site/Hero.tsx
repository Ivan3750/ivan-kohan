"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { HeartMark, EcgLine } from "./Heart";
import { socialLinks } from "./Icons";
import { Magnetic } from "./motion";

const chips = [
  { t: "Next.js", x: "4%", y: "10%", d: 0, depth: -120 },
  { t: "SEO", x: "78%", y: "2%", d: 600, depth: -200 },
  { t: "Meta Ads", x: "88%", y: "46%", d: 1200, depth: -90 },
  { t: "Claude Code", x: "-2%", y: "62%", d: 300, depth: -160 },
  { t: "Raspberry Pi 5", x: "62%", y: "88%", d: 900, depth: -60 },
];

export default function Hero({ dict }: { dict: Dict }) {
  const { hero, a11y } = { hero: dict.hero, a11y: dict.a11y };
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // parallax layers
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heartY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const heartRot = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const heartScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const ecgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // pointer-follow glow + mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const glowX = useTransform(sx, (v) => `${50 + v * 40}%`);
  const glowY = useTransform(sy, (v) => `${40 + v * 40}%`);
  const tiltX = useTransform(sx, [-1, 1], [-26, 26]);
  const tiltY = useTransform(sy, [-1, 1], [-18, 18]);

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
    >
      {/* layers */}
      <motion.div aria-hidden style={{ y: gridY }} className="grid-lines absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        className="absolute -z-10 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(closest-side, rgba(0,168,232,0.30), rgba(0,168,232,0.08) 55%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        style={{ x: wordX, y: wordY }}
        className="font-display text-outline pointer-events-none absolute bottom-[4%] left-0 -z-10 select-none whitespace-nowrap text-[clamp(8rem,32vw,34rem)] font-bold leading-none text-white/[0.09]"
      >
        KOHAN · KOHAN
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: ecgY }}
        className="pointer-events-none absolute inset-x-0 bottom-[5.5rem] -z-10 h-20 text-heart/70"
      >
        <EcgLine className="h-full w-full" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        {/* copy */}
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <p
            className="rise label inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-mist"
            style={{ "--d": 100 } as React.CSSProperties}
          >
            <span className="dot-live h-2 w-2 rounded-full bg-heart" />
            {hero.status}
          </p>

          <h1
            className="font-display mt-7 text-[clamp(2.5rem,6.6vw,6.6rem)] font-bold leading-[0.98]"
          >
            <span className="rise block" style={{ "--d": 250 } as React.CSSProperties}>
              {hero.title.pre}
            </span>
            <span className="rise block" style={{ "--d": 420 } as React.CSSProperties}>
              <span className="text-heart-gradient">{hero.title.em}</span>
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
            style={{ "--d": 650 } as React.CSSProperties}
          >
            {hero.lead}
          </p>

          <div
            className="rise mt-8 flex flex-wrap items-center gap-4"
            style={{ "--d": 800 } as React.CSSProperties}
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-heart px-7 py-4 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                {hero.cta1}
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium transition hover:border-heart hover:text-heart"
              >
                {hero.cta2}
              </a>
            </Magnetic>
          </div>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ "--d": 950 } as React.CSSProperties}
          >
            <ul className="flex items-center gap-2">
              {socialLinks.slice(0, 5).map(({ id, label, href, Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`${label} (${a11y.external})`}
                    title={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-mist transition hover:-translate-y-1 hover:border-heart hover:text-heart"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="inline-flex items-center gap-2 text-sm text-mist">
              <MapPin size={15} className="text-heart" />
              {hero.location}
            </p>
          </div>
        </motion.div>

        {/* heart orb */}
        <motion.div
          aria-hidden
          style={{ y: heartY, rotate: heartRot, scale: heartScale }}
          className="relative mx-auto hidden aspect-square w-full max-w-[34rem] lg:block"
        >
          <motion.div style={{ x: tiltX, y: tiltY }} className="absolute inset-0">
            {[0, 800, 1600].map((d) => (
              <span
                key={d}
                className="ring-pulse absolute inset-[18%] rounded-full border border-heart/50"
                style={{ "--d": d } as React.CSSProperties}
              />
            ))}
            <div className="beat absolute inset-[16%] drop-shadow-[0_0_80px_rgba(0,168,232,0.55)]">
              <svg viewBox="0 0 24 24" className="h-full w-full">
                <defs>
                  <linearGradient id="heart-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#7fd3f5" />
                    <stop offset="0.55" stopColor="#00a8e8" />
                    <stop offset="1" stopColor="#006d9c" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 21.2 10.6 20C5.4 15.4 2 12.4 2 8.7 2 5.7 4.3 3.5 7.2 3.5c1.7 0 3.3.8 4.8 2.3 1.5-1.5 3.1-2.3 4.8-2.3 2.9 0 5.2 2.2 5.2 5.2 0 3.7-3.4 6.7-8.6 11.3L12 21.2Z"
                  fill="url(#heart-g)"
                />
                <path
                  d="M6.2 6.3c-1.4.5-2.2 1.8-2.2 3.2"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity=".55"
                  strokeWidth=".5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {chips.map((c) => (
            <ChipLayer key={c.t} chip={c} progress={scrollYProgress} />
          ))}
        </motion.div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10 bg-ink/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <ul className="flex gap-6 sm:gap-12">
            {hero.facts.map((f) => (
              <li key={f.small}>
                <p className="font-display text-xl font-bold text-heart sm:text-3xl">{f.big}</p>
                <p className="label mt-1 text-[0.62rem] text-mist sm:text-[0.7rem]">{f.small}</p>
              </li>
            ))}
          </ul>
          <a
            href="#about"
            className="label hidden items-center gap-3 text-mist transition hover:text-heart sm:inline-flex"
          >
            {hero.scroll}
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15">
              <ArrowDown size={16} className="animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ChipLayer({
  chip,
  progress,
}: {
  chip: (typeof chips)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [0, chip.depth]);
  return (
    <motion.div style={{ y, left: chip.x, top: chip.y }} className="absolute">
      <span
        className="float label inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-ink/70 px-4 py-2 text-paper backdrop-blur-md"
        style={{ "--d": chip.d } as React.CSSProperties}
      >
        <HeartMark className="h-3 w-3 text-heart" />
        {chip.t}
      </span>
    </motion.div>
  );
}
