"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";

// "Hello" in English, Ukrainian, Danish and Bosnian.
const greetings = ["Hello", "Привіт", "Hej", "Zdravo"];

function Greeting() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((x) => (x + 1) % greetings.length), 2300);
    return () => clearInterval(id);
  }, []);

  return (
    <p aria-hidden className="font-display relative h-[1.15em] overflow-hidden text-[clamp(4.2rem,14vw,11.5rem)] font-bold italic leading-[1.1] text-accent">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={greetings[i]}
          className="absolute left-0 top-0 block whitespace-nowrap"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {greetings[i]}
        </motion.span>
      </AnimatePresence>
      {/* reserves the width of the longest word so layout doesn't jump */}
      <span className="invisible block whitespace-nowrap">Привіт</span>
    </p>
  );
}

export default function Hero({ dict }: { dict: Dict }) {
  const { hero } = dict;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const discY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const discRot = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const discScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

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
      <motion.div aria-hidden style={{ y: gridY }} className="grid-lines absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        className="absolute -z-10 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: glowX,
          top: glowY,
          background: "radial-gradient(closest-side, rgba(255,214,10,0.26), rgba(255,214,10,0.07) 55%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        style={{ x: wordX, y: wordY }}
        className="font-display text-outline pointer-events-none absolute bottom-[6%] left-0 -z-10 select-none whitespace-nowrap text-[clamp(8rem,32vw,34rem)] font-bold italic leading-none text-white/[0.08]"
      >
        KOHAN · KOHAN
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <div className="rise" style={{ "--d": 150 } as React.CSSProperties}>
            <Greeting />
          </div>

          <h1
            className="font-display rise mt-2 text-[clamp(1.9rem,4.4vw,3.8rem)] font-bold leading-[1.05]"
            style={{ "--d": 350 } as React.CSSProperties}
          >
            {hero.name}
          </h1>

          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
            style={{ "--d": 550 } as React.CSSProperties}
          >
            {hero.line}
          </p>
        </motion.div>

        <motion.div
          aria-hidden
          style={{ y: discY, rotate: discRot, scale: discScale }}
          className="relative mx-auto hidden aspect-square w-full max-w-[28rem] lg:block"
        >
          <motion.div style={{ x: tiltX, y: tiltY }} className="absolute inset-0">
            {[0, 800, 1600].map((d) => (
              <span
                key={d}
                className="ring-pulse absolute inset-[12%] rounded-full border border-accent/40"
                style={{ "--d": d } as React.CSSProperties}
              />
            ))}
            <div className="absolute inset-[12%] rounded-full bg-accent shadow-[0_0_120px_rgba(255,214,10,0.28)]">
              <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text fontSize="12.5" fontWeight="600" letterSpacing="3" fill="#0f0f0e" style={{ fontFamily: "var(--font-mono)" }}>
                  <textPath href="#badge-circle" textLength="486">
                    UKRAINE · DENMARK · IVAN KOHAN · WEBHJERTE ·
                  </textPath>
                </text>
              </svg>
              <span className="font-display absolute inset-0 grid place-items-center text-[clamp(5rem,10vw,8.5rem)] font-bold italic leading-none text-ink">
                IK
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#story"
        className="label absolute inset-x-0 bottom-8 mx-auto inline-flex w-fit items-center gap-3 text-mist transition hover:text-accent"
      >
        {hero.scroll}
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15">
          <ArrowDown size={16} className="animate-bounce" />
        </span>
      </a>
    </section>
  );
}
