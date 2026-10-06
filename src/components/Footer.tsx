import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICE_ANCHORS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-[#EDE7DA]">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Gauna's Management Consultants"
              width={120}
              height={120}
              className="h-24 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#9aa1ad]">
            Strategic advisory for finance, compliance and business growth.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#b9bfc9] transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICE_ANCHORS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-[#b9bfc9] transition-colors hover:text-gold"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-[#b9bfc9]">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                {CONTACT.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={CONTACT.phoneHref}
                className="transition-colors hover:text-gold"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={CONTACT.emailHref}
                className="transition-colors hover:text-gold"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-xs text-[#8a909c] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Gauna&apos;s Management Consultants.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="transition-colors hover:text-gold"
            >
              Terms &amp; Conditions
            </Link>
            <span className="h-3 w-px bg-white/15" />
            <Link
              href="/privacy"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
