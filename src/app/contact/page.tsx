import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  MessageSquare,
  Users,
  Building2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SunArc from "@/components/SunArc";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Gauna's Management Consultants",
  description:
    "Let's discuss your business requirement. Reach Gauna's Management Consultants for accounting, compliance, taxation, business consulting and office support inquiries.",
};

const CONTACT_PATHS = [
  {
    title: "Business Consultation",
    description:
      "For service inquiries, compliance support, accounting, taxation and advisory discussions.",
    action: { label: "Call the Team", href: CONTACT.phoneHref, external: false },
    icon: Briefcase,
  },
  {
    title: "General Inquiry",
    description:
      "For general questions, collaboration requests and non-service-specific communication.",
    action: { label: "Email Us", href: CONTACT.emailHref, external: false },
    icon: MessageSquare,
  },
  {
    title: "Careers",
    description: "For job-related communication and recruitment questions.",
    action: { label: "Visit Careers", href: "/careers#openings", external: false },
    icon: Users,
  },
  {
    title: "Visit / Office Coordination",
    description:
      "For office visits, meeting scheduling and location-related queries.",
    action: { label: "Get Directions", href: CONTACT.mapsUrl, external: true },
    icon: Building2,
  },
];

const OFFICE_INFO = [
  { icon: MapPin, label: "Office Address", value: CONTACT.address, href: CONTACT.mapsUrl },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
  { icon: Clock, label: "Working Hours", value: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[104px] lg:pt-[128px]">
        <SunArc className="pointer-events-none absolute -right-44 -top-28 w-[640px] text-gold opacity-[0.12]" />
        <div className="container-site relative grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-6 w-px bg-gold" />
                Contact Gauna&apos;s Management Consultants
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[50px]">
                Let&apos;s Discuss Your{" "}
                <span className="text-blue">Business Requirement</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Reach out for accounting, compliance, taxation, business
                consulting, staffing support, or office-related inquiries. Our
                team will review your message and respond through the
                appropriate channel.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact-form" className="btn-primary">
                  Send an Inquiry <ArrowRight size={18} />
                </a>
                <a href={CONTACT.phoneHref} className="btn-secondary">
                  <Phone size={17} /> Call Now
                </a>
              </div>
              <p className="mt-5 text-sm text-muted">
                Response-focused communication across finance, compliance and
                business support needs.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-line shadow-2xl shadow-ink/10">
              <Image
                src="/images/contact-hero.png"
                alt="Connect with the Gauna's team"
                width={1000}
                height={720}
                priority
                className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact options ──────────────────────────────────── */}
      <section className="border-y border-line/70 bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Contact Paths"
            title="Choose the Best Way to Reach Us"
            intro="Whether you need a consultation, service information, career guidance, or office assistance, you can connect with us through the most relevant channel below."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_PATHS.map(({ title, description, action, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-bg p-7 transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 hover:shadow-md">
                  <Icon size={28} strokeWidth={1.5} className="text-blue" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                  {action.external ? (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-gold-deep hover:text-blue"
                    >
                      {action.label} <ArrowUpRight size={15} />
                    </a>
                  ) : action.href.startsWith("/") ? (
                    <Link
                      href={action.href}
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-gold-deep hover:text-blue"
                    >
                      {action.label} <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <a
                      href={action.href}
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-gold-deep hover:text-blue"
                    >
                      {action.label} <ArrowRight size={15} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + office info ───────────────────────────────── */}
      <section id="contact-form" className="py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <h3 className="font-display text-3xl font-semibold text-ink">
                Office Information
              </h3>
              <ul className="mt-7 space-y-6">
                {OFFICE_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-gold-deep">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-1 block text-[15px] font-medium leading-relaxed text-ink transition-colors hover:text-blue"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[15px] font-medium leading-relaxed text-ink">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5">
                <p className="text-sm font-medium leading-relaxed text-ink/85">
                  For urgent matters, please call us directly during working
                  hours.
                </p>
              </div>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 w-full"
              >
                Get Directions <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Map / location ───────────────────────────────────── */}
      <section id="map-section" className="bg-surface py-20 lg:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Location"
            title="Visit Our Office"
            intro="Our office is located in Kharadi, Pune, making it accessible for in-person meetings and scheduled consultations."
            align="center"
          />
          <Reveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-line shadow-lg shadow-ink/5">
              <iframe
                title="Gauna's Management Consultants office location"
                src="https://www.google.com/maps?q=City%20Vista%20Tower%20B%20Kharadi%20Pune%20411014&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-bg p-6 sm:flex-row">
              <p className="text-sm font-medium text-ink/85">{CONTACT.address}</p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0 !px-6 !py-2.5"
              >
                Get Directions <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quick help ───────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="FAQ" title="Quick Help" align="center" />
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(217,161,26,0.55) 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative grid items-center gap-10 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-[44px]">
              Ready to Start the Conversation?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#aab0bb] sm:text-lg">
              Tell us about your requirement and our team will connect you with
              the right support.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <a href="#contact-form" className="btn-primary">
                Send an Inquiry <ArrowRight size={18} />
              </a>
              <a href={CONTACT.phoneHref} className="btn-secondary-dark">
                <Phone size={17} /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
