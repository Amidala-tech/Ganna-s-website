import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JobsGrid from "@/components/JobsGrid";
import { CONTACT, INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers | Gauna's Management Consultants",
  description:
    "Build your career with a team that values growth and responsibility. Explore current openings across finance, administration, operations, sales and business support roles.",
};

const APPLY_STEPS = [
  "Select the role that best matches your profile.",
  "Complete the application through our Google Form.",
  "Shortlisted candidates will be contacted by our team.",
];

const STAT_CHIPS = [
  "10 Current Openings",
  "Multi-Department Hiring",
  "Growth-Oriented Roles",
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark">
        <Image
          src="/images/careers-hero.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
        <div className="container-site relative flex min-h-[72vh] flex-col justify-center pb-20 pt-[140px] lg:pt-[160px]">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 !text-gold">
                <span className="h-6 w-px bg-gold" />
                Careers at Gauna&apos;s Management Consultants
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[52px]">
                Build Your Career with a Team That Values{" "}
                <span className="text-gold">Growth and Responsibility</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c4c9d2] sm:text-lg">
                We&apos;re building a team of capable, committed professionals
                across finance, administration, operations, sales and business
                support roles. Explore current openings and apply through our
                recruitment form.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#openings" className="btn-primary">
                  View Open Positions <ArrowRight size={18} />
                </a>
                <a
                  href={CONTACT.recruitmentFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-dark"
                >
                  Apply Now <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#9aa1ad]">
                <span>Multiple departments</span>
                <span>Structured hiring process</span>
                <span>Practical career growth</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Join us ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Why Join" title="Join Us" />
            <Reveal delay={0.15}>
              <p className="mt-6 rounded-2xl border-l-2 border-gold bg-surface p-6 text-lg font-medium leading-relaxed text-ink/85">
                Take the next step in your career by applying for a role
                aligned with your skills and interests.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {STAT_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="max-w-[760px] space-y-5 text-base leading-relaxed text-muted">
              <p>
                As a growing and forward-thinking organization, we are
                continually looking for talented and motivated professionals
                who want to build meaningful careers and contribute to
                practical business solutions. With a strong foundation of
                professional expertise and a diverse work environment, we offer
                opportunities to work on impactful assignments, collaborate
                with experienced professionals, and develop valuable industry
                knowledge.
              </p>
              <p>
                By joining our team, you gain the opportunity to grow,
                contribute with purpose, and be part of an organization that
                values integrity, accountability, and continuous professional
                development.
              </p>
              <p>
                Explore our current openings and apply through our recruitment
                form. Our team reviews each application and connects with
                shortlisted candidates for the next steps in the hiring
                process.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Current openings ─────────────────────────────────── */}
      <section id="openings" className="bg-surface-alt/50 py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Openings"
            title="Current Openings"
            intro="Explore current opportunities across business support, administration, operations, sales, quality control and finance-related functions."
          />
          <div className="mt-10">
            <JobsGrid />
          </div>
        </div>
      </section>

      {/* ── How to apply ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Process" title="How to Apply" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {APPLY_STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 0.12}>
                <div className="h-full rounded-3xl border border-line bg-surface p-8 text-center">
                  <span className="font-display text-4xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-base font-medium leading-relaxed text-ink/85">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-8 text-center text-sm text-muted">
              Please ensure your contact details, experience information and
              selected role are entered correctly before submission.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Industries we serve ──────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Exposure"
            title="Industries We Serve"
            intro="We support businesses across diverse sectors with finance, compliance, operational and business advisory solutions tailored to their working realities, regulatory needs and growth stage."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry.name} delay={(i % 2) * 0.1}>
                <div className="group h-full rounded-3xl border border-line bg-bg p-7 transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 hover:shadow-md">
                  <div className="h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-14" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {industry.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Careers CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(217,161,26,0.55) 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative grid items-center gap-10 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-[44px]">
              Ready to Apply?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#aab0bb] sm:text-lg">
              Explore the role that fits your profile and complete your
              application through our recruitment form.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={CONTACT.recruitmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply Through Google Form <ArrowUpRight size={17} />
              </a>
              <a href="#openings" className="btn-secondary-dark">
                View Open Positions
              </a>
            </div>
            <p className="mt-5 text-sm text-[#8a909c]">
              Recruitment queries:{" "}
              <Link
                href="/contact?type=careers"
                className="text-gold transition-colors hover:text-white"
              >
                contact our team
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
