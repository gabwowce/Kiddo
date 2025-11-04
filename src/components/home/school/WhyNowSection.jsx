// components/school/WhyNowSection.jsx
"use client";
import iconSet from "@/asset/icon-set.png";
import Image from "next/image";

export default function WhyNowSection({
  eyebrow = "KODĖL DABAR",
  title = "Iki 2026 metų rugsėjo 1 dienos visos Lietuvos mokyklos privalo parengti aiškias taisykles dėl mobiliųjų telefonų naudojimo.",
  lead = `Skamba puikiai ant popieriaus — bet kaip tai įgyvendinti realioje klasėje?
„Kidcan“ padeda mokykloms paversti taisykles veiksmais:
programėlės nutildomos, skambučiai lieka aktyvūs, dėmesys grįžta.`,
  bullets = [
    "Mokytojai sutaupo laiką",
    "Mokiniai mokosi balanso ir atsakomybės",
    "Tėvai visada gali susisiekti",
  ],
}) {
  return (
    <section id="why-now" className="relative">
      <div className="kiddo-container mx-auto relative">
        {/* Absoliuti zona ikonų rinkiniui (nedalyvauja layout'e) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 bottom-[-20] lg:bottom-0 right-10 lg:right-5 xl:right-15 hidden md:flex items-end justify-end"
          // plotis sklandžiai keičiasi  → nuo 180px iki 397px, pagal viewport ~28vw
          style={{ width: "clamp(180px, 28vw, 397px)" }}
        >
          <Image
            src={iconSet}
            alt=""
            priority
            className="w-full h-auto u-reveal"
            sizes="(min-width:1280px) 397px, (min-width:768px) 28vw, 0px"
          />
        </div>

        {/* Tekstas. Rezervuojam vietą ikonoms tik L/D ekranuose */}
        <div className="max-w-[1020px] xxl:pr-[clamp(180px,28vw,397px)] u-stagger">
          <p className="text-base font-semibold tracking-[0.18em] text-kiddo-muted uppercase u-reveal">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-[-0.02em] u-reveal">
            {title}
          </h2>

          <p className="mt-5 text-kiddo-muted leading-7 tracking-[-0.003em] whitespace-pre-line text-lg md:text-xl u-reveal">
            {lead}
          </p>

          <ul className="mt-6 space-y-3  u-stagger">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 u-reveal">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-500"
                    />
                  </svg>
                </span>
                <span className="text-slate-900/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
