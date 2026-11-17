import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis() {
  return instance;
}

/** Lock / unlock page scrolling (mobile menu). Works with or without Lenis. */
export function lockScroll(locked: boolean) {
  const l = getLenis();
  if (l) {
    if (locked) l.stop();
    else l.start();
  } else {
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }
}
