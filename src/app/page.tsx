import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SunArc from "@/components/SunArc";
import CtaBand from "@/components/CtaBand";
import ServiceIcon from "@/components/ServiceIcon";
import { HOME_SERVICES, TESTIMONIALS } from "@/lib/data";
import LogoMarquee from "@/components/LogoMarquee";

const HERO_STATS = [
  "16+ Years of Experience",
  "500+ Clients Served",
  "Multi-Domain Advisory Support",
  "4.9 Rated Client Experience",
];

const WHY_PILLARS = [
  "Multi-disciplinary support across finance, taxation, compliance and advisory",
  "Practical solutions tailored to businesses, NRIs, institutions and entrepreneurs",
  "Structured guidance designed for clarity, control and sustainable growth",
  "Responsive engagement with long-term relationship value",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[104px] lg:min-h-[88vh] lg:pt-[120px]">
        <SunArc className="pointer-events-none absolute -right-40 -top-24 w-[720px] text-gold opacity-[0.12]" />
        <div
          className="pointer-events-none absolute -left-40 top-20 h-[560px] w-[560px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(217,161,26,0.25) 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative grid items-center gap-12 pb-14 pt-8 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-6 w-px bg-gold" />
                Gauna&apos;s Management Consultants
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[54px]">
                Strategic Finance, Compliance &amp; Business Advisory for{" "}
                <span className="text-blue">Growth-Focused Enterprises</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                We partner with businesses, NRIs, foundations and institutions
                to bring structure to finance, confidence to compliance, and
                clarity to decision-making.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact#consultation-form" className="btn-primary">
                  Book Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted">
                Trusted by businesses, professionals and institutions across
                multiple service domains.
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-line shadow-2xl shadow-ink/10">
                <Image
                  src="/images/home-services.png"
                  alt="Gauna's consulting team at work"
                  width={1200}
                  height={860}
                  priority
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-2xl border border-line bg-surface px-6 py-4 shadow-xl shadow-ink/10 sm:left-8">
                <p className="font-display text-3xl font-semibold text-ink">
                  16<span className="text-gold">+</span>
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Years of Experience
                </p>
              </div>
              <div className="absolute -top-5 right-4 hidden rounded-2xl border border-line bg-surface px-6 py-4 shadow-xl shadow-ink/10 sm:block lg:right-8">
                <div className="flex items-center gap-1.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  4.9 Rated Client Experience
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trust strip */}
        <div className="container-site relative pb-16">
          <Reveal delay={0.35}>
            <div className="gold-divider mb-7" />
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <p
                  key={stat}
                  className="text-center text-sm font-semibold text-ink/80"
                >
                  {stat}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust logo bar ───────────────────────────────────── */}
      <section className="border-y border-line/70 bg-surface py-14">
        <div className="container-site">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              Trusted by enterprises, founders, institutions and professionals
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <LogoMarquee />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About preview ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="pointer-events-none absolute right-10 top-10 h-40 w-40 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(217,161,26,0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative ml-4 max-w-[440px] overflow-hidden rounded-[28px] border border-line shadow-xl shadow-ink/10">
              <Image
                src="/images/about-narrative.png"
                alt="Advisory discussion at Gauna's"
                width={880}
                height={1100}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute -left-1 bottom-10 rounded-2xl border border-line bg-surface px-6 py-4 shadow-xl shadow-ink/10">
              <p className="font-display text-3xl font-semibold text-ink">
                500<span className="text-gold">+</span>
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Clients Supported
              </p>
            </div>
            <div className="absolute -right-1 top-10 hidden rounded-2xl border border-line bg-surface px-6 py-4 shadow-xl shadow-ink/10 sm:block lg:-right-4">
              <p className="font-display text-2xl font-semibold text-ink">
                End-to-End
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Business Guidance
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Strategic Guidance for Entrepreneurs and Growing Businesses"
            />
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Gauna&apos;s Management Consultants delivers integrated
                  support across finance, compliance, taxation, accounting,
                  payroll and business advisory. Our approach is built to help
                  organisations strengthen processes, stay compliant, and make
                  better business decisions with confidence.
                </p>
                <p>
                  With a practical, hands-on consulting model, we support
                  business owners, institutions, NRIs and growing enterprises
                  with solutions that are structured, responsive and aligned
                  with long-term growth.
                </p>
              </div>
              <Link
                href="/about"
                className="btn-secondary mt-8 border-gold/60 text-blue"
              >
                More About Us <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Integrated Services for Business Clarity and Compliant Growth"
              intro="We support businesses through every essential stage, from setup and statutory compliance to accounting, reporting, payroll and strategic business consulting."
            />
            <Reveal delay={0.2}>
              <Link href="/services" className="btn-secondary shrink-0">
                View All Services <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.1}
                className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-bg p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-xl hover:shadow-gold/10"
                >
                  <ServiceIcon name={service.icon} />
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-blue">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold-deep">
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────────── */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Businesses Choose Gauna's"
            intro="Professional expertise, practical execution and dependable support across critical business functions."
            dark
          />
          <div className="mt-14 grid gap-x-16 gap-y-10 lg:grid-cols-2">
            {WHY_PILLARS.map((pillar, i) => (
              <Reveal key={pillar} delay={i * 0.1}>
                <div className="flex gap-6 border-t border-white/10 pt-8">
                  <span className="font-display text-3xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-[#d6d3ca]">
                    {pillar}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <Quote
          size={280}
          className="pointer-events-none absolute -right-16 top-8 text-gold opacity-[0.07]"
        />
        <div className="container-site relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Client Feedback"
              title="What Clients Value Most"
              intro="Our clients value responsive support, clear guidance and dependable execution across finance, compliance and advisory matters."
            />
            <Reveal delay={0.2}>
              <div className="shrink-0 rounded-3xl border border-line bg-surface px-7 py-6">
                <div className="flex items-center gap-2 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 font-display text-3xl font-semibold text-ink">
                  4.9 Rated Client Experience
                </p>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted">
                  Trusted across business consulting, taxation, compliance and
                  reporting support.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.1}>
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-sm">
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/85">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto pt-5">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-muted">
                      {[t.org, t.location].filter(Boolean).join(" · ")}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ─────────────────────────────────── */}
      <CtaBand
        heading="Let's Bring Structure to Your Next Business Move"
        body="Speak with our team about compliance, taxation, accounting, business consulting or entity support requirements."
        primaryLabel="Book Consultation"
        primaryHref="/contact#consultation-form"
        secondaryLabel="Call Now"
        secondaryHref="tel:+917276013692"
        secondaryIsPhone
      />
    </>
  );
}
