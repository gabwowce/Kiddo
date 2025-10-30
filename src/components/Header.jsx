"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/asset/kiddo-logo.png"; // 138x54

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works?" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white">
      <div className="mx-auto max-w-7xl py-3 flex items-center gap-4">
        <Link href="/" className="shrink-0 flex items-center" aria-label="Kiddo home">
 
          <Image src={Logo} alt="Kiddo" width={138} height={54} priority className="h-[37px] md:h-[54px] w-auto" />
         
        </Link>

        <nav className="ml-6 hidden md:flex items-center gap-8 text-base text-kiddo-muted font-bold">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-slate-900 transition-colors leading-6 tracking-0">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto">
          <Link
            href="/join/1"
            className="inline-flex items-center rounded-sm bg-kiddo-btn px-4 py-2 text-white text-sm font-bold hover:bg-kiddo-btn/85 transition-colors leading-6 tracking-0"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
