"use client";

import { Widget } from "@typeform/embed-react";

export default function SurveyPage() {

  return (
    <main className="min-h-screen w-full bg-[#F3EDE5] flex items-center justify-center p-4 md:p-10">
      {/* PHONE BORDER (pure CSS, no image) */}
      <div className="relative w-[350px] md:w-[400px] aspect-[9/19.5] rounded-[48px] p-[6px] bg-gradient-to-b from-[#FFB676] via-[#FF8A3D] to-[#C9591E] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
        <div className="pointer-events-none absolute inset-0 rounded-[48px] ring-1 ring-black/10" />
        <div className="h-full w-full rounded-[44px] bg-black/85 p-[8px] relative">
          
          {/* Screen */}
          <div className="relative h-full w-full rounded-[38px] bg-white overflow-hidden">
            {/* Safe-area so Typeform doesn't hit the frame */}
            <div className="absolute top-[10px] bottom-[10px] left-[20px] right-[20px] overflow-hidden bg-white">
              <Widget
                id="HROUGdAz"
                hideHeaders
                hideFooter
                style={{ width: "100%", height: "100%" }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
