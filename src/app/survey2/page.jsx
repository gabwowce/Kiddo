"use client";

import logoPpic from "@/asset/kiddo-logo.png";
import { Widget } from "@typeform/embed-react";
import Image from "next/image";
import Link from "next/link";
export default function SurveyPage() {


  return (
    <main
      className="
        min-h-screen w-full
        grid grid-rows-[auto_1fr]
        bg-[radial-gradient(ellipse_at_top,_rgba(255,212,171,0.25),_transparent_50%),linear-gradient(#F3EDE5,#F3EDE5)]
      "
    >
      {/* Viršutinė juosta su logotipu (be global headerio) */}
      <div className="w-full">
        <div className="kiddo-container py-4 md:py-6 flex justify-start">
          <Link href="/" aria-label="Grįžti į pradžią" className="inline-flex items-center gap-2">
            <Image
              src={logoPpic}
              alt="Kiddo"
              width={132}
              height={28}
              priority
              className="h-auto w-[132px]"
            />
          </Link>
        </div>
      </div>

      {/* Turinys per visą likusį aukštį */}
      <section className="w-full">
        <div className="kiddo-container">
          {/* Wrapper’is, kad forma visada užimtų visą likusį viewport aukštį po logo */}
          <div
            className="
              h-[calc(100dvh-88px)] md:h-[calc(100dvh-112px)]
              w-full
              rounded-2xl overflow-hidden
              bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-black/5
            "
          >
            <Widget
              id="HROUGdAz"
              hideHeaders
              hideFooter
              style={{ width: "100%", height: "100%" }}
   
            />
          </div>

          {/* jei nori be jokio rėmelio/šešėlio – pakeisk wrapper’io klasę į:
              h-[calc(100dvh-88px)] md:h-[calc(100dvh-112px)] w-full
          */}
        </div>
      </section>
    </main>
  );
}
