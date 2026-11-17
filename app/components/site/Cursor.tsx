"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** Custom follower cursor — fine pointers only, native cursor stays visible. */
export default function Cursor() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
  const [mode, setMode] = useState<"idle" | "link" | "label">("idle");
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 260, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      const labelled = t?.closest?.("[data-cursor]");
      if (labelled) {
        setMode("label");
        setLabel(labelled.getAttribute("data-cursor") ?? "");
      } else if (t?.closest?.("a,button,summary,input,textarea,label")) {
        setMode("link");
      } else {
        setMode("idle");
      }
    };
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = mode === "label" ? 92 : mode === "link" ? 56 : 34;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] flex items-center justify-center rounded-full border text-[11px] font-semibold uppercase tracking-widest"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: size,
          height: size,
          backgroundColor:
            mode === "label" ? "#ffd60a" : mode === "link" ? "rgba(255,214,10,0.18)" : "rgba(255,214,10,0)",
          borderColor: mode === "label" ? "#ffd60a" : "rgba(255,214,10,0.7)",
          color: "#0f0f0e",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {mode === "label" ? label : null}
      </motion.div>
    </>
  );
}
