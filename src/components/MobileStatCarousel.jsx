"use client";

import StatCard from "@/components/StatCard";
import { useRef } from "react";

export default function MobileStatCarousel({ items = [], titleStyle="text-6xl" }) {
  const ref = useRef(null);

  return (
    <div className="relative sm:hidden mt-8">
      <ul
        ref={ref}
        className="
          flex gap-4 overflow-x-auto no-scrollbar scroll-smooth
          snap-x snap-mandatory md:bg-[#FAFAFA] md:border-18 md:border-[#FAFAFA]
          px-4 -mx-4 pb-2
        "
        style={{ scrollPaddingLeft: "1rem" }} /* px-4 */
      >
        {items.map((it, i) => (
          <li
            key={i}
            data-card
            className="
              snap-start shrink-0
              w-[263px] max-w-[263px]
              first:ml-0 last:mr-4
            "
          >
            <StatCard
              value={it.value}
              label={it.label}
              bg={it.bg}
              textColor={it.textColor}
              titleStyle={titleStyle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
