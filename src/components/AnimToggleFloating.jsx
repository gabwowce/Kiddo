// components/AnimToggleFloating.tsx
"use client";
import { useEffect, useState } from "react";

const KEY = "anim_pref_off"; // "1" => off, "" => on

function applyClass(off) {
  document.documentElement.classList.toggle("no-anim", off);
}

export default function AnimToggleFloating() {
  const [off, setOff] = useState(false);

  // Inicializacija iš localStorage
  useEffect(() => {
    const isOff = localStorage.getItem(KEY) === "1";
    setOff(isOff);
    applyClass(isOff);

    // Sync tarp tab’ų
    const onStorage = (e) => {
      if (e.key !== KEY) return;
      const v = e.newValue === "1";
      setOff(v);
      applyClass(v);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => {
    const next = !off;
    setOff(next);
    applyClass(next);
    localStorage.setItem(KEY, next ? "1" : "");
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={off}
      className="fixed bottom-4 right-4 z-50 rounded-full px-4 py-2 shadow-lg border bg-white/90 backdrop-blur hover:bg-white"
      title={off ? "Įjungti animacijas" : "Išjungti animacijas"}
    >
      <span className="text-sm font-semibold">Animacijos: {off ? "off" : "on"}</span>
    </button>
  );
}
