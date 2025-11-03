"use client";

import StatCard from "@/components/StatCard";
import { useRef } from "react";

export default function MobileStatCarousel({ items = [], titleStyle = "text-6xl" }) {
  const ref = useRef(null);

  return (
    <div className="relative sm:hidden mt-8">
      <ul
        ref={ref}
        className="
          flex gap-4 items-stretch
          overflow-x-auto overflow-y-visible     /* ← neleisk vidinio vertikalaus scroll'o */
          no-scrollbar scroll-smooth
          snap-x snap-mandatory
          overscroll-x-contain                   /* ← X bounce nepersiduoda tėvui */
          px-4 -mx-4 pb-2
        "
        /* Jokio touchAction! Paliekam naršyklei pačiai spręsti:
           vertikalūs gestai keliauja tėvui (puslapis), horizontalūs – ul (karuselė) */
        style={{ scrollPaddingLeft: "1rem", WebkitOverflowScrolling: "touch" }}
      >
        {items.map((it, i) => (
          <li
            key={i}
            className="
              snap-start
              flex-[0_0_263px] w-[263px]           /* fiksuota kortelės bazė */
              first:ml-0 last:mr-4
            "
          >
            <div className="h-full overflow-hidden">  {/* ← kortelė pati ne-scroll'ins */}
              <StatCard
                value={it.value}
                label={it.label}
                bg={it.bg}
                textColor={it.textColor}
                titleStyle={titleStyle}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
