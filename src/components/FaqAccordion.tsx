"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What types of inquiries can I submit through this page?",
    a: "You can use this page for service inquiries, business consultation requests, office visit coordination and general communication.",
  },
  {
    q: "How soon can I expect a response?",
    a: "Our team reviews inquiries and typically responds within one working day.",
  },
  {
    q: "Can I visit the office directly?",
    a: "Office visits are best scheduled in advance for smoother coordination.",
  },
  {
    q: "Where should I apply for job openings?",
    a: "Career applications should be submitted through the Careers page application process or recruitment form.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div
            key={faq.q}
            className="overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
            >
              <span className="text-base font-semibold text-ink">{faq.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gold-deep transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
