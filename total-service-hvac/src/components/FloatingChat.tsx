"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Phone, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--color-primary)",
              border: "1px solid rgba(255,255,255,0.1)",
              width: "280px",
            }}
            role="dialog"
            aria-label="Contact options"
          >
            <div
              className="px-5 py-4 border-b"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <p className="font-display font-bold text-white text-lg">Chat with Us!</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                We typically respond within minutes
              </p>
            </div>
            <div className="p-4 space-y-3">
              <a
                href="tel:+14076173510"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-semibold text-sm text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                aria-label="Call (407) 617-3510"
              >
                <Phone size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                (407) 617-3510
              </a>
              <Link
                href="/free-estimate"
                onClick={() => setOpen(false)}
                className="btn-accent flex items-center gap-3 w-full px-4 py-3 rounded-xl font-semibold text-sm justify-center"
              >
                <ClipboardList size={16} aria-hidden="true" />
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105"
        style={{ background: "var(--color-accent)" }}
        aria-label={open ? "Close chat widget" : "Open chat options"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} color="white" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} color="white" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
