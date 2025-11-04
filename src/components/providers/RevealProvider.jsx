// components/providers/RevealProvider.jsx
"use client";

import { initReveal } from "@/lib/initReveal";
import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    const stop = initReveal({
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
      once: true,
      observeMutations: true,
    });
    return () => stop();
  }, []);

  return null;
}
