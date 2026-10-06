"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { CONTACT } from "@/lib/data";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.inquiryEmail}`;

type Inquiry = { name: string; email: string; phone: string; message: string };

function emailInquiry({ name, email, phone, message }: Inquiry) {
  fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      message,
      _subject: `[Website Inquiry] ${name}`,
      _template: "table",
      _captcha: "false",
    }),
    keepalive: true,
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    })
    .catch(() => {
      console.warn("Inquiry reached AuditSetu, but the email copy failed.");
    });
}

// Inquiries go to AuditSetu through its widget, and are also emailed via
// FormSubmit. The widget renders into an open shadow root on
// #auditsetu-inquiry-form and swaps its form for a role="status" message once
// AuditSetu accepts the inquiry, so the fields are captured on submit and only
// emailed after that confirmation — failed or retried sends don't duplicate.
export default function ContactForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let root: ShadowRoot | null = null;
    let pending: Inquiry | null = null;

    const onSubmit = (e: Event) => {
      const fd = new FormData(e.target as HTMLFormElement);
      const field = (key: string) => String(fd.get(key) ?? "").trim();
      // Honeypot — bots fill hidden fields, humans don't.
      pending = field("website")
        ? null
        : {
            name: field("name"),
            email: field("email"),
            phone: field("phone"),
            message: field("message"),
          };
    };

    const observer = new MutationObserver(() => {
      if (pending && root?.querySelector('[role="status"]')) {
        emailInquiry(pending);
        pending = null;
      }
    });

    // attachShadow can't be observed, so check each frame until the widget
    // mounts. It attaches the shadow root before fetching its config and
    // rendering the form, so the listener is always in place before a submit.
    let frame = 0;
    const waitForMount = () => {
      if (!host.shadowRoot) {
        frame = requestAnimationFrame(waitForMount);
        return;
      }
      root = host.shadowRoot;
      root.addEventListener("submit", onSubmit, true);
      observer.observe(root, { childList: true, subtree: true });
    };
    waitForMount();

    return () => {
      cancelAnimationFrame(frame);
      root?.removeEventListener("submit", onSubmit, true);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="consultation-form">
      <div id="auditsetu-inquiry-form" ref={hostRef} />
      <Script
        src="https://app.auditsetu.com/widget.js"
        data-organization="gaunas-management-consultants"
      />
    </div>
  );
}
