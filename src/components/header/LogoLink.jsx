"use client";

import Logo from "@/asset/logo.svg"; // SVGR – grąžina React komponentą
import Link from "next/link";

export default function LogoLink() {
  return (
    <Link href="/" className="shrink-0 flex items-center justify-center" aria-label="Kiddo home">
      <Logo className="w-[119px] h-[37px]" aria-hidden="true" focusable="false" />
    </Link>
  );
}
