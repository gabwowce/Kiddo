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
  objectFit = "object-contain", // pvz. "object-cover" arba "object-contain"
  priority = false,

  // elgsenos parametrai (nebūtini)
  threshold = 0.4,
  rootMargin = "0px 0px -10% 0px",
  resetOnLeave = true,
  playOnlyOnce = false,

  // svarbu Next Image su fill
  sizes = "100vw",
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
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          if (prefersReduce) return;
          if (playOnlyOnce && hasPlayedOnce) return;

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
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      aria-label="decorative video"
    >
      {/* Poster — dengia iki kol video realiai pradeda groti */}
      {posterSrc && (
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes={sizes} // ← būtina su `fill`
          priority={priority}
          className={`absolute inset-0 w-full h-full ${objectFit} transition-opacity duration-200 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      <video
        ref={vRef}
        className={`absolute inset-0 w-full h-full ${objectFit} transition-opacity duration-200 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        preload="none"    // autoplay valdomas per IO
        loop
        muted
        playsInline
        poster={posterSrc}
        aria-hidden="true"
      >
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        {srcMp4 && <source src={srcMp4} type="video/mp4" />}
      </video>
    </div>
  );
}
