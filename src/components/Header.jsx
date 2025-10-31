"use client";

import HamburgerIcon from "@/asset/icons/hamburger.svg";
import Logo from "@/asset/kiddo-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works?" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white">
      <div className="mx-auto py-4 flex items-center gap-3 kiddo-container">
        {/* Hamburger — mobile only */}
       <button
          type="button"
          className="md:hidden w-6 h-5 inline-flex items-center justify-center"
          aria-label="Open menu"
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <HamburgerIcon aria-hidden="true" />
          
        </button>


        <Link href="/" className="shrink-0 flex items-center" aria-label="Kiddo home">
          <Image src={Logo} alt="Kiddo" width={138} height={54} priority className="h-[37px] md:h-[54px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav id="primary-nav" className="ml-6 hidden md:flex items-center gap-8 text-base text-kiddo-muted font-bold">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-slate-900 transition-colors leading-6">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <Link
            href="/join/1"
            className="inline-flex items-center rounded-sm bg-kiddo-btn px-4 py-2 text-white text-sm font-bold hover:bg-kiddo-btn/85 transition-colors leading-6"
          >
            Join Waitlist
          </Link>
        </div>
      </div>

      {/* ===== MOBILE LEFT SHEET ===== */}
{/* Overlay */}
<div
  className={`md:hidden fixed inset-0 z-[1000]  transition-opacity duration-200
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
  onClick={() => setOpen(false)}
  aria-hidden={!open}
/>

{/* Panelė */}
<aside
  role="dialog"
  aria-modal="true"
  aria-label="Sidebar"
  className={`md:hidden fixed left-0 top-0 z-[1001] h-screen w-[min(85vw,320px)]
    bg-white shadow-2xl transform-gpu transition-transform duration-300 will-change-transform
    ${open ? "translate-x-0" : "-translate-x-full"}`}
  style={{ paddingTop: "env(safe-area-inset-top)" }}  // iPhone notch
>
  {/* Viršutinė juosta */}
  <div className="flex items-center justify-end h-12 px-4">
   
    <button
      onClick={() => setOpen(false)}
      className="h-8 w-8 grid place-items-center rounded focus:outline-none focus:ring-2 focus:ring-slate-300"
      aria-label="Close menu"
      title="Close"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  </div>

  {/* Turinys su vidaus scrollu */}
  <nav className="h-[calc(100vh-3rem)] overflow-y-auto p-4 space-y-1">
    {nav.map((n) => (
      <a
        key={n.href}
        href={n.href}
        className="block rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50"
        onClick={() => setOpen(false)}
      >
        {n.label}
      </a>
    ))}
    {/* <div className="pt-2">
      <Link
        href="/join/1"
        onClick={() => setOpen(false)}
        className="inline-flex w-full items-center justify-center rounded-sm bg-kiddo-btn px-4 py-2 text-white text-sm font-bold hover:bg-kiddo-btn/85 transition-colors"
      >
        Join Waitlist
      </Link>
    </div> */}
  </nav>
</aside>

    </header>
  );
}
