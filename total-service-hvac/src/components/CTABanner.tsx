import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  buttonText: string;
  buttonHref: string;
  phoneNumber?: string;
  variant?: "primary" | "dark";
}

export default function CTABanner({
  headline,
  subtext,
  buttonText,
  buttonHref,
  phoneNumber,
  variant = "primary",
}: CTABannerProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: isPrimary ? "var(--color-accent)" : "var(--color-primary)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-white mb-3"
        >
          {headline}
        </h2>
        {subtext && (
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            style={{
              background: "white",
              color: isPrimary ? "var(--color-accent)" : "var(--color-primary)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            {buttonText} <ArrowRight size={18} aria-hidden="true" />
          </Link>
          {phoneNumber && (
            <a
              href="tel:+14076173510"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white transition-all btn-outline-white"
              aria-label="Call Total Service AC & Heating"
            >
              <Phone size={18} aria-hidden="true" />
              {phoneNumber}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
