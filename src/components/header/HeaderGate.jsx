// components/header/HeaderGate.jsx
"use client";

import Header from "@/components/header/Header";
import { usePathname } from "next/navigation";

const HIDE_HEADER_PATTERNS = [
  /^\/survey(\/|$)/, // forma
  /^\/thankyou(\/|$)/,   // ačiū puslapis
];

export default function HeaderGate() {
  const pathname = usePathname() || "";
  const shouldHide = HIDE_HEADER_PATTERNS.some((re) => re.test(pathname));
  if (shouldHide) return null;
  return <Header />;
}
