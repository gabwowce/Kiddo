"use client";

import { Widget } from "@typeform/embed-react";
import { useRouter } from "next/navigation";


export default function OfferFormPage() {

  const router = useRouter();



  return (
    <main className="min-h-dvh h-dvh overflow-hidden">
      <section className="kiddo-container h-dvh">
        <div className="relative w-full h-full">
          <Widget
            id="HROUGdAz"
            hideHeaders
            hideFooter
            hidden={hidden}
            style={{ width: "100%", height: "100%" }}
            onReady={() => {
              // gtag("event", "lead_form_view");
              // fbq("trackCustom", "LeadFormView");
            }}
            onSubmit={() => {
              // gtag("event", "lead_form_submit");
              // fbq("track", "Lead");
              router.push("/thankyou");
            }}
          />
        </div>
      </section>
    </main>
  );
}
