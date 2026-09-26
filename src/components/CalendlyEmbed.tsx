"use client";

import Script from "next/script";
import { CALENDLY_URL } from "@/data/site";

export function CalendlyEmbed() {
  return (
    <div className="gold-border-hover glass overflow-hidden rounded-2xl border border-[var(--border)]">
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
