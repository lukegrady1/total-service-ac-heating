"use client";

import Link from "next/link";
import { Phone, ClipboardList } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "var(--color-primary)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      role="complementary"
      aria-label="Quick contact options"
    >
      <div className="grid grid-cols-2" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
        <a
          href="tel:+14076173510"
          className="flex items-center justify-center gap-2 py-4 font-bold text-white text-sm active:bg-white/10 transition-colors"
          aria-label="Call Total Service AC & Heating"
        >
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/free-estimate"
          className="flex items-center justify-center gap-2 py-4 font-bold text-sm active:opacity-90 transition-opacity"
          style={{ background: "var(--color-accent)", color: "white" }}
        >
          <ClipboardList size={18} aria-hidden="true" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
