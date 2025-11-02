"use client";

import Link from "next/link";

export default function JoinCta() {
  return (
    <Link
      href="/join/1"
      className="inline-flex items-center rounded-sm bg-kiddo-btn px-4 py-2 text-white text-sm font-bold hover:bg-kiddo-btn/85 transition-colors leading-6"
    >
      Gauti pasiūlymą
    </Link>
  );
}
