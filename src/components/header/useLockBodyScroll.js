"use client";

import { useLayoutEffect } from "react";

export default function useLockBodyScroll(locked) {
  useLayoutEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (locked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = prev;
    }
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}
