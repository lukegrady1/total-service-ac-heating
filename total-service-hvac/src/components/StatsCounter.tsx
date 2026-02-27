"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const defaultStats: Stat[] = [
  { value: 500, suffix: "+", label: "Systems Installed" },
  { value: 15, suffix: "+", label: "Years Serving Orlando" },
  { value: 4.9, suffix: "⭐", label: "Google Rating" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
];

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setCount(parseFloat((eased * target).toFixed(isDecimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats = defaultStats, dark = false }: { stats?: Stat[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <p
            className="font-display text-4xl md:text-5xl font-bold mb-1"
            style={{ color: "var(--color-accent)" }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
          </p>
          <p
            className="text-sm font-medium"
            style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)" }}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
