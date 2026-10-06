"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

const INQUIRY_TYPES = [
  "Business Consultation",
  "Accounting & Bookkeeping",
  "Taxation Support",
  "Compliance & Registration",
  "HR / Payroll Services",
  "Co-Working / Office Services",
  "Careers",
  "General Inquiry",
];

const inputClass =
  "h-[52px] w-full rounded-xl border border-line bg-bg px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.inquiryEmail}`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill hidden fields, humans don't.
    if (fd.get("_honey")) return;

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const inquiry = String(fd.get("inquiry") ?? "");
    const message = String(fd.get("message") ?? "");

    setStatus("submitting");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          inquiry_type: inquiry,
          message,
          _subject: `[Website Inquiry] ${inquiry} — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json();
      // FormSubmit returns { success: "true" | true, message }
      const ok = json?.success === true || json?.success === "true";
      setStatus(ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      id="consultation-form"
      className="rounded-3xl border border-line bg-surface p-7 shadow-sm sm:p-9"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 size={56} strokeWidth={1.5} className="text-gold" />
            <h3 className="mt-5 font-display text-3xl font-semibold text-ink">
              Thank You for Reaching Out
            </h3>
            <p className="mt-3 max-w-sm text-muted">
              Our team will review your inquiry and respond through the
              appropriate channel.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={false}
            exit={{ opacity: 0, y: -16 }}
          >
            <h3 className="font-display text-3xl font-semibold text-ink">
              Send Us a Message
            </h3>
            <p className="mt-2 text-sm text-muted">
              Please share a brief overview of your requirement so our team can
              direct your inquiry appropriately.
            </p>

            {/* Honeypot field (hidden from real users) */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="inquiry"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Inquiry Type *
                </label>
                <select id="inquiry" name="inquiry" required className={inputClass}>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us briefly about your requirement…"
                  className={`${inputClass} min-h-[160px] resize-y py-3.5`}
                />
              </div>
            </div>

            {status === "error" && (
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-accent-red">
                <AlertCircle size={16} />
                Something went wrong. Please try again or email us directly at{" "}
                <a href={CONTACT.emailHref} className="underline">
                  {CONTACT.inquiryEmail}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  Sending… <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Submit Inquiry <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
