"use client";

import { motion } from "framer-motion";
import {
  Wrench, Wind, Settings, Flame, Trash2, Leaf, Phone, Search,
  CheckCircle, ClipboardList, ClipboardCheck, Star, Zap, Shield,
  PhoneCall, FileText, DollarSign, Calendar,
} from "lucide-react";

// Icon registry — all icons passed by name to avoid RSC serialization issues
const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; "aria-hidden"?: "true" }>> = {
  wrench: Wrench,
  wind: Wind,
  settings: Settings,
  flame: Flame,
  trash2: Trash2,
  leaf: Leaf,
  phone: Phone,
  search: Search,
  "check-circle": CheckCircle,
  "clipboard-list": ClipboardList,
  "clipboard-check": ClipboardCheck,
  star: Star,
  zap: Zap,
  shield: Shield,
  "phone-call": PhoneCall,
  "file-text": FileText,
  "dollar-sign": DollarSign,
  calendar: Calendar,
};

export interface Step {
  number: string;
  iconName: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  dark?: boolean;
}

export default function ProcessSteps({ steps, dark = false }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Connector line (desktop only) */}
      <div
        className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px"
        style={{ background: "rgba(232,98,26,0.2)" }}
        aria-hidden="true"
      />

      {steps.map((step, i) => {
        const Icon = iconMap[step.iconName] || Wrench;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="flex flex-col items-center text-center relative"
          >
            {/* Step number (decorative) */}
            <span
              className="font-display font-bold select-none absolute -top-4 left-1/2 -translate-x-1/2 text-7xl"
              style={{ color: dark ? "rgba(232,98,26,0.08)" : "rgba(232,98,26,0.07)", lineHeight: 1 }}
              aria-hidden="true"
            >
              {step.number}
            </span>

            {/* Icon circle */}
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center mb-5 relative z-10 shadow-lg"
              style={{
                background: dark
                  ? "rgba(232,98,26,0.15)"
                  : "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
              }}
            >
              <Icon
                size={36}
                style={{ color: dark ? "var(--color-accent)" : "white" }}
                aria-hidden="true"
              />
            </div>

            <h3
              className="font-display text-xl font-bold mb-2"
              style={{ color: dark ? "white" : "var(--color-primary)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: dark ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)" }}
            >
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
