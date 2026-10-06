import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Target } from "lucide-react";
import LinkedinIcon from "@/components/LinkedinIcon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SunArc from "@/components/SunArc";
import CtaBand from "@/components/CtaBand";
import { TEAM, ALUMNI, CORE_VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Gauna's Management Consultants",
  description:
    "We're on a mission to help businesses grow fearlessly. Learn about Gauna's Management Consultants — our story, vision, mission, values and team.",
};

const WHY_REASONS = [
  "Personalized expert attention for every client engagement",
  "Structured, technology-driven processes for accuracy and timeliness",
  "Transparent, proactive support backed by dependable follow-up",
  "A responsive professional team focused on practical business outcomes",
];

const NARRATIVE = [
  "We provide reliable and professional services to businesses, individuals, startups, and all types of entities, combining personalized expert support with structured, technology-driven processes. Every client receives dedicated individual attention, practical guidance, and timely professional support, enabling them to manage their financial, regulatory, and business responsibilities efficiently and confidently.",
  "Our commitment to excellence and client satisfaction is reflected in our strong client retention and steadily growing portfolio, demonstrating the trust and confidence our clients place in our services. With emotional intelligence, we anticipate client needs, understand their challenges, and remain prepared to provide proactive solutions even before requests arise.",
  "Our workflow is supported by well-defined automation systems and structured monitoring mechanisms, helping us track deadlines, maintain accurate documentation, and ensure timely completion of statutory and compliance requirements. With a strong follow-up and response system, we deliver services with transparency, empathy, and reliability, ensuring every client feels supported and confident.",
  "Backed by a young, energetic, and responsive professional team, we combine human expertise with systematic processes to provide result-oriented, dependable, and client-focused solutions that empower businesses and individuals to grow while we manage their compliance, operational, and strategic needs seamlessly.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[104px] lg:pt-[132px]">
        <SunArc className="pointer-events-none absolute -left-48 -top-20 w-[640px] text-gold opacity-[0.12]" />
        <div className="container-site relative grid items-center gap-12 pb-20 pt-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-6 w-px bg-gold" />
                About Gauna&apos;s Management Consultants
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[52px]">
                We&apos;re on a Mission to Help Businesses{" "}
                <span className="text-blue">Grow Fearlessly</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Our role is to stay behind the scenes—handling registrations,
                filings, licences and documentation—so founders can focus on
                building, selling and scaling.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Contact Us <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="overflow-hidden rounded-[28px] border border-line shadow-2xl shadow-ink/10">
              <Image
                src="/images/about-hero.png"
                alt="Gauna's Management Consultants team environment"
                width={1000}
                height={760}
                priority
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 max-w-[280px] rounded-2xl border border-line bg-surface px-6 py-4 shadow-xl shadow-ink/10">
              <p className="text-sm font-semibold leading-snug text-ink">
                Trusted advisory across compliance, finance and business
                operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Narrative ────────────────────────────────────────── */}
      <section className="border-y border-line/70 bg-surface py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:border-l lg:border-gold/50 lg:pl-8">
            <SectionHeading
              eyebrow="About Us"
              title="Professional Advisory Built on Reliability, Structure and Trust"
            />
          </div>
          <Reveal delay={0.15}>
            <div className="max-w-[720px] space-y-5 text-base leading-relaxed text-muted">
              {NARRATIVE.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Businesses Trust Gauna's Management Consultants"
            intro="We combine personalized advisory, process discipline, and responsive execution to deliver dependable support across finance, compliance, and business operations."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHY_REASONS.map((reason, i) => (
              <Reveal key={reason} delay={i * 0.1}>
                <div className="flex h-full gap-6 rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10">
                  <span className="font-display text-3xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-medium leading-relaxed text-ink/85">
                    {reason}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(44,93,170,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-bg p-9 shadow-sm">
              <div className="h-1 w-14 rounded-full bg-gold" />
              <div className="mt-6 flex items-center gap-3">
                <Eye size={26} strokeWidth={1.5} className="text-blue" />
                <h2 className="font-display text-3xl font-semibold text-ink">
                  Our Vision
                </h2>
              </div>
              <p className="mt-5 leading-relaxed text-muted">
                We aspire to combine digitization, advanced analytics, and
                human-centric insights. We believe in understanding, caring,
                and teaching rather than ordering and preaching to our clients
                and employees. We don&apos;t just advise; we make sure you
                understand why we advise what we do so that you can grow and
                evolve.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl border border-line bg-bg p-9 shadow-sm">
              <div className="h-1 w-14 rounded-full bg-blue" />
              <div className="mt-6 flex items-center gap-3">
                <Target size={26} strokeWidth={1.5} className="text-gold-deep" />
                <h2 className="font-display text-3xl font-semibold text-ink">
                  Our Mission
                </h2>
              </div>
              <p className="mt-5 leading-relaxed text-muted">
                Our mission is to provide our clients with clarity and
                confidence in navigating complex business environments by
                combining meticulous analysis, innovative strategies, and a
                deep understanding of individual challenges. By fostering trust
                and transparency, we aid our clients in making informed
                decisions, mitigating risks, and seizing opportunities
                confidently in an ever-evolving marketplace. We aim to be your
                trusted partner and advisor in every walk of your business
                journey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Core values ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Our Values" title="Our Core Values" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 0.1}>
                <div className="h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <div className="h-0.5 w-10 bg-gold" />
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our People"
            title="Our Team"
            intro="A dedicated team bringing together finance, compliance, taxation, operations, and business support expertise."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.1}>
                <div className="group overflow-hidden rounded-3xl border border-line bg-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                  <div className="relative aspect-[4/4.4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-start justify-between gap-3 p-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{member.role}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-gold-deep"
                      >
                        <LinkedinIcon size={16} /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alumni ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Alumni Network"
            title="Professionals Who Shaped Our Journey"
            intro="Professionals who have been part of the Gauna's journey and contributed to our growth."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {ALUMNI.map((person, i) => (
              <Reveal key={person.name} delay={(i % 4) * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-line bg-surface-alt/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-2 p-4">
                    <div>
                      <h3 className="text-sm font-bold text-ink">
                        {person.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted">{person.role}</p>
                    </div>
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on LinkedIn`}
                        className="mt-0.5 shrink-0 text-blue transition-colors hover:text-gold-deep"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <CtaBand
        heading="Schedule a Visit"
        body="Connect with our team to discuss your business, compliance, accounting, or advisory requirements."
        primaryLabel="Contact Us"
        primaryHref="/contact#contact-form"
        secondaryLabel="Call Now"
        secondaryHref="tel:+917276013692"
        secondaryIsPhone
      />
    </>
  );
}
