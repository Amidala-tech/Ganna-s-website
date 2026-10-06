import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SunArc from "@/components/SunArc";

export default function LegalLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/70 bg-surface pt-[104px] lg:pt-[132px]">
        <SunArc className="pointer-events-none absolute -right-44 -top-24 w-[600px] text-gold opacity-[0.1]" />
        <div className="container-site relative py-14 lg:py-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-6 w-px bg-gold" />
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {intro}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <Reveal className="legal-prose mx-auto max-w-3xl">{children}</Reveal>
        </div>
      </section>
    </>
  );
}
