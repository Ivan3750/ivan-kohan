"use client";

import { useEffect, useRef } from "react";

export default function VisitNotifier() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        isMobile: /Mobi|Android/i.test(navigator.userAgent),
        language: navigator.language,
        screen: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        cookieEnabled: navigator.cookieEnabled,
      }),
    });
  }, []);

  return null;
}
