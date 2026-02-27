"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-().+]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  zip: z.string().min(5, "Please enter your ZIP code").max(10),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const services = [
  "AC Repair",
  "AC Installation",
  "AC Maintenance",
  "Heating Services",
  "Duct Cleaning",
  "Indoor Air Quality",
  "Other / Not Sure",
];

export default function LeadForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      reset();
    } catch {
      setServerError("Something went wrong. Please call us at (407) 617-3510.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = dark
    ? {
        background: "rgba(255,255,255,0.08)",
        border: "1.5px solid rgba(255,255,255,0.15)",
        color: "white",
      }
    : {};

  const labelStyle = dark ? { color: "rgba(255,255,255,0.9)" } : {};

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
          style={{ background: "rgba(34, 197, 94, 0.15)" }}
        >
          <CheckCircle size={48} style={{ color: "#22c55e" }} aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2" style={{ color: dark ? "white" : "var(--color-primary)" }}>
          Request Received!
        </h3>
        <p style={{ color: dark ? "rgba(255,255,255,0.75)" : "var(--color-text-muted)" }} className="text-lg">
          We&apos;ll contact you within 1 hour during business hours.
        </p>
        <p className="mt-2 text-sm" style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--color-text-muted)" }}>
          For urgent needs, call us directly:{" "}
          <a href="tel:+14076173510" className="font-semibold" style={{ color: "var(--color-accent)" }}>
            (407) 617-3510
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="form-label" style={labelStyle} htmlFor="lead-name">
            Full Name *
          </label>
          <input
            id="lead-name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className="form-input"
            style={inputStyle}
            {...register("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="form-error">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="form-label" style={labelStyle} htmlFor="lead-phone">
            Phone Number *
          </label>
          <input
            id="lead-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(407) 555-0000"
            className="form-input"
            style={inputStyle}
            {...register("phone")}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="form-error">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="form-label" style={labelStyle} htmlFor="lead-email">
            Email Address *
          </label>
          <input
            id="lead-email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            className="form-input"
            style={inputStyle}
            {...register("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="form-error">{errors.email.message}</p>
          )}
        </div>

        {/* ZIP */}
        <div>
          <label className="form-label" style={labelStyle} htmlFor="lead-zip">
            ZIP Code *
          </label>
          <input
            id="lead-zip"
            type="text"
            autoComplete="postal-code"
            placeholder="32703"
            className="form-input"
            style={inputStyle}
            {...register("zip")}
            aria-describedby={errors.zip ? "zip-error" : undefined}
          />
          {errors.zip && (
            <p id="zip-error" className="form-error">{errors.zip.message}</p>
          )}
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label className="form-label" style={labelStyle} htmlFor="lead-service">
            Service Needed *
          </label>
          <select
            id="lead-service"
            className="form-input"
            style={inputStyle}
            {...register("service")}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="form-error">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="form-label" style={labelStyle} htmlFor="lead-message">
            Additional Details (optional)
          </label>
          <textarea
            id="lead-message"
            rows={3}
            placeholder="Describe the issue or any additional information..."
            className="form-input resize-none"
            style={inputStyle}
            {...register("message")}
          />
        </div>
      </div>

      {serverError && (
        <p className="form-error mt-3 text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-accent w-full py-4 rounded-xl text-base font-bold mt-5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending Request...
          </>
        ) : (
          "Get My Free Estimate"
        )}
      </button>

      <p className="text-xs text-center mt-3 flex items-center justify-center gap-1.5" style={{ color: dark ? "rgba(255,255,255,0.5)" : "var(--color-text-muted)" }}>
        <Lock size={11} aria-hidden="true" />
        We never share your information. No spam, ever.
      </p>
    </form>
  );
}
