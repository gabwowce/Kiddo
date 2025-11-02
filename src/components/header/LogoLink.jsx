"use client";

import Logo from "@/asset/kiddo-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function LogoLink() {
  return (
    <Link href="/" className="shrink-0 flex items-center" aria-label="Kiddo home">
      <Image
        src={Logo}
        alt="Kiddo"
        width={138}
        height={54}
        priority
        className="h-[37px] md:h-[54px] w-auto"
      />
    </Link>
  );
}
