"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { links, SITE_URL } from "@/app/lib/site";

const items = [
  { name: "Website", handle: "ivankohan.com", value: SITE_URL },
  { name: "WebHjerte", handle: "webhjerte.dk", value: links.webhjerte },
  { name: "Instagram", handle: "@webhjerte", value: links.instagramBusiness },
  { name: "LinkedIn", handle: "ivan-kohan", value: links.linkedin },
  { name: "GitHub", handle: "Ivan3750", value: links.github },
  { name: "Telegram", handle: "@ivan3750", value: links.telegram },
];

export default function QrPage() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const item = items[index];

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + items.length) % items.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="grain relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-ink px-4 py-12 text-paper">
      <div
        aria-hidden
        className="absolute left-1/2 top-[-20%] -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,214,10,0.2), transparent 70%)" }}
      />

      <div className="w-full max-w-sm text-center">
        <span className="font-display mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-xl font-bold italic text-ink">
          IK
        </span>
        <h1 className="font-display mt-4 text-3xl font-bold">Ivan Kohan</h1>
        <p className="label mt-2 text-mist">Scan to connect</p>

        <div className="relative mt-8 flex items-center justify-center">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute -left-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/80 transition hover:border-accent hover:text-accent sm:-left-14"
          >
            <ChevronLeft size={20} />
          </button>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={item.name}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              className="w-64 cursor-grab touch-pan-y rounded-3xl bg-paper p-6 text-ink active:cursor-grabbing"
            >
              <QRCodeSVG value={item.value} size={208} bgColor="#f6f3ea" fgColor="#0f0f0e" level="M" className="h-auto w-full" />
              <p className="font-display mt-5 text-xl font-bold">{item.name}</p>
              <p className="text-sm text-graphite">{item.handle}</p>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute -right-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/80 transition hover:border-accent hover:text-accent sm:-right-14"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="QR codes">
          {items.map((it, i) => (
            <button
              key={it.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={it.name}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
        <p className="mt-5 text-xs text-mist">Swipe or use arrow keys</p>
      </div>
    </main>
  );
}
