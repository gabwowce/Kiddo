"use client";

import { Widget } from "@typeform/embed-react";

export default function SurveyPage() {
  return (
    <main className="min-h-dvh h-dvh overflow-hidden">
      <section className="kiddo-container h-dvh">
        {/* Pilnas aukštis + plotis konteineryje */}
        <div className="relative w-full h-full">
          <Widget
            id="HROUGdAz"
            hideHeaders
            hideFooter
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>
    </main>
  );
}
