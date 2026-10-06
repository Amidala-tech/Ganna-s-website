import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Globe2,
  Users,
  LineChart,
  Building,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SunArc from "@/components/SunArc";
import CtaBand from "@/components/CtaBand";
import StickyServiceNav from "@/components/StickyServiceNav";
import { SERVICE_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Gauna's Management Consultants",
  description:
    "Integrated services for compliance, finance and business growth — HR & payroll, incorporation & ROC, accounting, taxation, business consulting and co-working solutions.",
};

const TRUST_ITEMS = [
  "Multi-Domain Advisory",
  "Compliance-Led Execution",
  "Structured Business Support",
  "Growth-Focused Guidance",
];

const OVERVIEW_ITEMS = [
  { label: "Business Setup & Regulatory Support", icon: Building },
  { label: "Finance, Accounting & Reporting", icon: Calculator },
  { label: "Taxation & Cross-Border Advisory", icon: Globe2 },
  { label: "HR, Payroll & Workforce Compliance", icon: Users },
  { label: "Business Consulting & Process Improvement", icon: LineChart },
  { label: "Office Support & Business Presence Services", icon: Briefcase },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[104px] lg:pt-[132px]">
        <SunArc className="pointer-events-none absolute -right-44 -top-24 w-[680px] text-gold opacity-[0.12]" />
        <div className="container-site relative grid items-center gap-12 pb-12 pt-6 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-6 w-px bg-gold" />
                Services List
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[52px]">
                Integrated Services for Compliance, Finance and{" "}
                <span className="text-blue">Business Growth</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Delivering reliable, end-to-end accounting, compliance,
                taxation, HR and strategic consulting solutions designed to
                simplify operations and support sustainable business growth.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact#consultation-form" className="btn-primary">
                  Book Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="overflow-hidden rounded-3xl border border-line shadow-2xl shadow-ink/10">
              <Image
                src="/images/services-hero.png"
                alt="Gauna's integrated consulting services"
                width={1000}
                height={760}
                priority
                className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[560px]"
              />
            </div>
            <div className="absolute bottom-6 left-6 rounded-2xl border border-line bg-surface/95 px-6 py-4 shadow-xl shadow-ink/10 backdrop-blur">
              <p className="text-sm font-semibold text-ink">
                Integrated support across{" "}
                <span className="text-gold-deep">6 core service areas</span>.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="container-site pb-12">
          <Reveal delay={0.3}>
            <div className="gold-divider mb-6" />
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {TRUST_ITEMS.map((item) => (
                <p
                  key={item}
                  className="text-center text-sm font-semibold text-ink/80"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="border-y border-line/70 bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Overview"
            title="Service Areas Designed Around Real Business Needs"
            intro="Our services are structured to support businesses across setup, compliance, finance, taxation, operations, workforce processes and strategic decision-making."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OVERVIEW_ITEMS.map(({ label, icon: Icon }, i) => (
              <Reveal key={label} delay={(i % 3) * 0.08}>
                <div className="flex items-center gap-4 rounded-[20px] border border-line bg-bg p-5 transition-all duration-200 hover:border-gold/60 hover:shadow-md">
                  <Icon size={26} strokeWidth={1.5} className="shrink-0 text-blue" />
                  <p className="text-[15px] font-semibold text-ink">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky category nav ──────────────────────────────── */}
      <StickyServiceNav />

      {/* ── Category sections ────────────────────────────────── */}
      {SERVICE_CATEGORIES.map((category, ci) => (
        <section
          key={category.anchor}
          id={category.anchor}
          className={`py-16 lg:py-24 ${ci % 2 === 1 ? "bg-surface" : ""}`}
        >
          <div className="container-site">
            <SectionHeading
              eyebrow="Category"
              title={category.heading}
              intro={category.intro}
            />
            <div
              className={`mt-10 grid gap-6 sm:grid-cols-2 ${
                category.columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              }`}
            >
              {category.cards.map((card, i) => (
                <Reveal key={card.title} delay={(i % category.columns) * 0.08}>
                  <div className="group flex h-full min-h-[260px] flex-col rounded-3xl border border-line bg-surface p-8 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-lg hover:shadow-gold/10">
                    <div className="h-0.5 w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                    <h3 className="mt-5 font-display text-[22px] font-semibold leading-snug text-ink lg:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                      {card.description}
                    </p>
                    <Link
                      href={`/contact#consultation-form`}
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold-deep"
                    >
                      Discuss This Service
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Final CTA ────────────────────────────────────────── */}
      <CtaBand
        heading="Need the Right Service for Your Business Requirement?"
        body="Speak with our team to identify the most relevant compliance, accounting, taxation, HR or advisory solution for your business."
        primaryLabel="Book Consultation"
        primaryHref="/contact#consultation-form"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        supportLine="Practical guidance across setup, compliance, reporting and growth support."
      />
    </>
  );
}
