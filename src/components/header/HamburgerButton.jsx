"use client";

import HamburgerIcon from "@/asset/icons/hamburger.svg";

export default function HamburgerButton({ open, onToggle }) {
  return (
    <button
      type="button"
      className="md:hidden w-6 h-5 inline-flex items-center justify-center"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-controls="mobile-sheet"
      aria-expanded={open}
      onClick={onToggle}
    >
      <HamburgerIcon aria-hidden="true" />
    </button>
  );
}
