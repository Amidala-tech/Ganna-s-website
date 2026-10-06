"use client";

import { useEffect, useState } from "react";

const CATEGORIES = [
  { id: "hr-payroll", label: "HR & Payroll" },
  { id: "incorporation-roc", label: "Incorporation & ROC" },
  { id: "accounting", label: "Accounting" },
  { id: "taxation", label: "Taxation" },
  { id: "business-consulting", label: "Business Consulting" },
  { id: "co-working", label: "Co-Working" },
];

export default function StickyServiceNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    CATEGORIES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-[72px] z-40 border-b border-line bg-bg/90 backdrop-blur-lg lg:top-[84px]">
      <div className="container-site">
        <ul className="flex h-[52px] snap-x items-center gap-2 overflow-x-auto lg:h-[64px] lg:gap-4 [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map(({ id, label }) => (
            <li key={id} className="snap-start">
              <a
                href={`#${id}`}
                className={`relative inline-block whitespace-nowrap rounded-full px-[18px] py-3 text-sm font-semibold transition-colors ${
                  active === id
                    ? "text-ink"
                    : "text-muted hover:text-blue"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-4 bottom-1 h-0.5 rounded bg-gold transition-opacity ${
                    active === id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
