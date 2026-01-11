"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";
import avatar from "@/public/avatar.png";

export default function QRSliderPage() {
  const [index, setIndex] = useState(0);
const socials = [
  {
    name: "Telegram",
    value: "https://t.me/ivan3750",
    color: "#27A7E7",
   },
  {
    name: "Instagram",
    value: "https://instagram.com/ivan.kohan.ua",
    color: "#E4405F",
   },
  {
    name: "GitHub",
    value: "https://github.com/Ivan3750",
    color: "#ffffff",
   },
  {
    name: "LinkedIn",
    value: "https://linkedin.com/in/ivankohan",
    color: "#0A66C2",
   }
];
  const social = socials[index];

  const next = () => setIndex((i) => (i + 1) % socials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + socials.length) % socials.length);

  return (
    <main className="min-h-screen bg-[#0C1014] flex items-center justify-center px-4">
      <div className="
        w-full max-w-sm rounded-[28px]
        bg-white/[0.05] backdrop-blur-xl
        border border-white/10 p-6 text-center
      ">
         <div className="flex justify-center">
           <div className="w-15 h-15 rounded-full overflow-hidden border border-white/15 bg-[#0C1014] z-10">
                        <Image src={avatar} alt="Avatar" className="object-cover w-15 h-15" />
                      </div>   
        </div>

        <h1 className="mt-3 text-white font-medium">
          Ivan Kohan
        </h1>
        <p className="text-xs text-neutral-400">
          Swipe to choose contact
        </p>

         <div className="mt-6 relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 text-neutral-400 text-xl px-2"
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="rounded-xl bg-black/40 p-4">
                <QRCodeCanvas
                  value={social.value}
                  size={180}
                  fgColor={social.color}
                  bgColor="transparent"
                  level="H"
                />
              </div>

              <div className="text-white text-sm flex items-center gap-2">
                 {social.name}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-0 text-neutral-400 text-xl px-2"
          >
            →
          </button>
        </div>

         <div className="mt-4 flex justify-center gap-2">
          {socials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#edcb4c]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-[11px] text-neutral-500">
          Just swipe & scan  
        </p>
      </div>
    </main>
  );
}
