"use client";

import Header from "@/components/header/Header";
import { initReveal } from "@/lib/initReveal";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";

const Kiddo = localFont({
  src: [
    { path: "../asset/fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "../asset/fonts/Gilroy-Bold.woff2",   weight: "700", style: "normal" },
    { path: "../asset/fonts/Gilroy-Heavy.woff2",  weight: "900", style: "normal" },
  ],
  variable: "--font-kiddo",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname?.startsWith("/survey");

  useEffect(() => {
    const stop = initReveal({
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
      once: true,
      observeMutations: true,
    });
    return () => stop();
  }, []);

  return (
    <html lang="en" className={Kiddo.variable}>
      <head>
        <link rel="preload" as="video" href="/media/Kiddo.webm" type="video/webm" />
      </head>
      <body className="font-sans font-medium">
        {!hideHeader && <Header />}
        <main>{children}</main>
      </body>
    </html>
  );
}
