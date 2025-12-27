"use client";

import { useEffect, useRef } from "react";

export default function VisitNotifier() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    fetch("/api/notify", {
      method: "POST",
    });
  }, []);

  return null;
}
