// components/OptimizedVideo.jsx
"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const toSrc = (v) => (typeof v === "string" ? v : v?.src);

export default function OptimizedVideo({
  srcWebm,
  srcMp4,                 // Safari fallback (H.264)
  poster,
  className = "",
  width = 563,
  height = 371,
  objectFit = "object-contain",
  priority = false,

  // elgsenos parametrai (nebūtini)
  threshold = 0.4,        // kiek video turi būti matoma (0..1)
  rootMargin = "0px 0px -10% 0px",
  resetOnLeave = true,    // išeinant iš viewport – grąžinti į 0s
  playOnlyOnce = false,   // sugroja tik pirmą kartą
}) {
  const vRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const posterSrc = toSrc(poster);

  const prefersReduce = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;

    v.muted = true;       // būtina autoplay
    v.playsInline = true; // iOS

    const onPlaying = () => setReady(true);
    const onError = (e) => console.error("VIDEO ERROR", e);

    v.addEventListener("playing", onPlaying);
    v.addEventListener("error", onError);

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        // matomumo tikrinimas
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          if (prefersReduce) return;
          if (playOnlyOnce && hasPlayedOnce) return;

          // startinam nuo pradžios, kad nebūtų „įsuktas vidury“
          v.currentTime = 0;
          v.play().catch(() => {});
          setHasPlayedOnce(true);
        } else {
          v.pause();
          if (resetOnLeave) v.currentTime = 0;
        }
      },
      { threshold: [threshold], rootMargin }
    );

    io.observe(v);

    return () => {
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("error", onError);
      io.disconnect();
    };
  }, [threshold, rootMargin, prefersReduce, resetOnLeave, playOnlyOnce, hasPlayedOnce]);

  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      aria-label="decorative video"
    >
      {/* Poster – išnyksta, kai video realiai pradeda groti */}
      {posterSrc && (
        <Image
          src={posterSrc}
          alt=""
          fill
          priority={priority}
          className={`${objectFit} transition-opacity duration-200 ${ready ? "opacity-0" : "opacity-100"}`}
        />
      )}

      <video
        ref={vRef}
        className={`absolute inset-0 ${objectFit} transition-opacity duration-200 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        // neautoplayinam iki IO leidimo (kontroliuojam patys)
        preload="none"
        loop
        muted
        playsInline
        poster={posterSrc}
      >
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        {srcMp4 && <source src={srcMp4} type="video/mp4" />}
      </video>
    </div>
  );
}
