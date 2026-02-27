import { Shield, Home, Gift, Zap, ThumbsUp, Award } from "lucide-react";

const items = [
  { icon: Shield, text: "Licensed CAC Contractor" },
  { icon: Home, text: "Locally Owned & Operated" },
  { icon: Gift, text: "Free Estimates" },
  { icon: Zap, text: "Same-Day Service" },
  { icon: ThumbsUp, text: "100% Satisfaction Guaranteed" },
  { icon: Award, text: "Trane & Carrier Certified" },
];

// Duplicate for seamless marquee
const allItems = [...items, ...items];

export default function TrustBar() {
  return (
    <div
      className="py-4 overflow-hidden relative"
      style={{ background: "var(--color-primary-light)" }}
      aria-label="Trust signals"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--color-primary-light), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--color-primary-light), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="marquee-track" aria-hidden="true">
        {allItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-2 px-8 shrink-0">
              <Icon size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {item.text}
              </span>
              <span
                className="ml-8 w-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.3)" }}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>

      {/* Accessible text for screen readers */}
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
