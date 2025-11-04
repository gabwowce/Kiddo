"use client";

import { Widget } from "@typeform/embed-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function OfferFormPage() {
  const sp = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const hidden = useMemo(() => {
    const get = (k) => sp.get(k) || "";
    return {
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
      utm_content: get("utm_content"),
      utm_term: get("utm_term"),
      source: get("source") || "offer-cta",
      audience: get("audience") || "schools",
      path: pathname || "/survey",
      ref: typeof document !== "undefined" ? document.referrer : "",
    };
  }, [sp, pathname]);

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
