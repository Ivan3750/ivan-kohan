"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./About";

export default function Faq({ dict }: { dict: Dict["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 sm:py-40 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel text={dict.label} />
          <h2 className="font-display mt-8 text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.05]">
            <SplitWords text={dict.title} />
          </h2>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {dict.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={it.q} delay={i * 0.04}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-medium sm:text-2xl">{it.q}</span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 transition duration-500 ${
                        isOpen ? "rotate-45 bg-accent border-accent" : ""
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                {/* answers stay in the DOM (crawlable); only the grid row animates */}
                <div
                  id={`faq-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-lg leading-relaxed text-graphite">{it.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
