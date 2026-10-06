import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Gauna's Management Consultants",
  description:
    "How Gauna's Management Consultants collects, processes, stores and protects personal and professional information in accordance with applicable Indian data protection laws.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="GAUNAS is committed to protecting the privacy, confidentiality, and security of all personal and professional information received from clients, website visitors, applicants, and associated partners."
    >
      <p>
        GAUNAS (&ldquo;the Firm&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
        &ldquo;us&rdquo;) is committed to protecting the privacy,
        confidentiality, and security of all personal and professional
        information received from clients, website visitors, applicants, and
        associated partners. This Privacy Policy explains the manner in which
        information is collected, processed, stored, and protected when
        individuals access our website, communicate with us, or use our
        professional services. The Firm undertakes to handle all personal data
        responsibly and in accordance with applicable legal and regulatory
        frameworks governing data protection and information security in India.
      </p>
      <p>
        This policy is formulated in compliance with the provisions of the
        Information Technology Act, 2000, the Information Technology (Reasonable
        Security Practices and Procedures and Sensitive Personal Data or
        Information) Rules, 2011, and the Digital Personal Data Protection Act,
        2023, along with other applicable laws, rules, and regulatory guidelines
        issued by competent authorities from time to time. By accessing this
        website or providing any information to the Firm, users acknowledge that
        they have read and understood this Privacy Policy and consent to the
        collection and use of information in accordance with the terms described
        herein.
      </p>
      <p>
        The Firm may collect certain personal, professional, or technical
        information including but not limited to name, contact details, email
        address, professional qualifications, employment details, resumes,
        business information, and other relevant data submitted through contact
        forms, registration, service engagements, job applications, or
        communication channels. Such information is collected solely for
        legitimate professional purposes including responding to inquiries,
        providing consultancy and advisory services, managing client
        relationships, processing employment applications, complying with
        regulatory requirements, maintaining professional records, and improving
        service delivery and website functionality.
      </p>
      <p>
        All information collected by the Firm is treated with strict
        confidentiality and is protected through reasonable administrative,
        technical, and organizational security measures designed to safeguard
        data against unauthorized access, misuse, disclosure, alteration, or
        destruction. Access to such information is restricted to authorized
        personnel strictly on a need-to-know basis and subject to professional
        confidentiality obligations.
      </p>
      <p>
        The Firm does not sell, trade, rent, or commercially distribute personal
        information to third parties. Information may be disclosed only where such
        disclosure is necessary for the provision of professional services,
        compliance with legal or statutory obligations, fulfillment of
        regulatory requirements, or when required under applicable law by courts,
        governmental authorities, or regulatory bodies.
      </p>
      <p>
        Personal data shall be retained only for as long as necessary to fulfill
        the purposes for which it was collected or as required under applicable
        laws, regulatory obligations, or professional record-keeping standards.
        Upon completion of such purposes, the Firm shall take reasonable steps to
        securely delete, anonymize, or dispose of the information in accordance
        with applicable legal and professional standards.
      </p>
      <p>
        The Firm may also collect limited technical information such as IP
        address, browser type, device information, and website usage data for
        analytical purposes and to improve the performance, security, and user
        experience of the website. Such information does not typically identify
        individuals personally unless voluntarily provided by the user.
      </p>
      <p>
        This Privacy Policy may be updated or modified periodically to reflect
        changes in applicable laws, regulatory requirements, or internal
        practices. Any revised version shall become effective upon publication on
        the website. Users are encouraged to review this policy periodically to
        remain informed of how their information is protected.
      </p>
      <p>
        This Privacy Policy shall be governed by and interpreted in accordance
        with the laws of India, and any matters relating to the interpretation or
        implementation of this policy shall be subject to the jurisdiction of the
        competent courts in India.
      </p>
      <p>
        For any queries, clarifications, or requests relating to this Privacy
        Policy or the handling of personal information, users may contact the
        Firm at{" "}
        <a href={CONTACT.emailHref}>{CONTACT.email}</a> or through the official
        contact details provided on the website.
      </p>
    </LegalLayout>
  );
}
