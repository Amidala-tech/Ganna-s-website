import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/lib/data";

export default function CtaBand({
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryIsPhone = false,
  supportLine,
}: {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  secondaryIsPhone?: boolean;
  supportLine?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(217,161,26,0.55) 0%, transparent 70%)",
        }}
      />
      <div className="container-site relative grid items-center gap-10 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[44px]">
            {heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#aab0bb] sm:text-lg">
            {body}
          </p>
          {supportLine && (
            <p className="mt-3 text-sm text-[#8a909c]">{supportLine}</p>
          )}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel} <ArrowRight size={18} />
            </Link>
            {secondaryIsPhone ? (
              <a href={secondaryHref} className="btn-secondary-dark">
                <Phone size={17} /> {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="btn-secondary-dark">
                {secondaryLabel}
              </Link>
            )}
          </div>
          <div className="mt-6 flex flex-col gap-2 text-sm text-[#8a909c]">
            <a
              href={CONTACT.phoneHref}
              className="transition-colors hover:text-gold"
            >
              Call Us · {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="transition-colors hover:text-gold"
            >
              Email Us · {CONTACT.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
