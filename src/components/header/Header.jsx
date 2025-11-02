"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import HamburgerButton from "./HamburgerButton";
import JoinCta from "./JoinCta";
import LogoLink from "./LogoLink";
import MobileSheet from "./MobileSheet";

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works?" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Uždaryti meniu pasikeitus hash/route (pvz., paspaudus ant inkaro)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white">
      <div className="mx-auto py-4 flex items-center gap-3 kiddo-container">
        <HamburgerButton open={open} onToggle={() => setOpen(v => !v)} />

        <LogoLink />

        <DesktopNav items={nav} className="ml-6" />

        <div className="ml-auto hidden md:block">
          <JoinCta />
        </div>
      </div>

      <MobileSheet
        open={open}
        onClose={() => setOpen(false)}
        items={nav}
      />
    </header>
  );
}
