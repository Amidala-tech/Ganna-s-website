export const CONTACT = {
  phone: "+91 72760 13692",
  phoneHref: "tel:+917276013692",
  email: "info@gaunasconsultants.com",
  emailHref: "mailto:info@gaunasconsultants.com",
  address:
    "Office No. 404, 4th Floor, Tower B, City Vista, Kharadi, Pune, Maharashtra 411014",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=City+Vista+Tower+B+Kharadi+Pune+411014",
  hours: "Monday to Saturday, 10:00 AM to 7:00 PM",
  recruitmentFormUrl:
    "https://docs.google.com/forms/d/1swYaQrEiqy0UlywmShkMzFp1G4PC9jqce6Aq_3YBFdQ/edit",
  // All website inquiries are delivered here via FormSubmit (https://formsubmit.co).
  // No API key needed — the FIRST submission triggers a one-time activation email
  // to this address; click the link in it once and all submissions flow through.
  inquiryEmail: "info@gaunasconsultants.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_ANCHORS = [
  { label: "HR & Payroll", href: "/services#hr-payroll" },
  { label: "Incorporation & ROC", href: "/services#incorporation-roc" },
  { label: "Accounting", href: "/services#accounting" },
  { label: "Taxation", href: "/services#taxation" },
  { label: "Business Consulting", href: "/services#business-consulting" },
  { label: "Co-Working", href: "/services#co-working" },
];

export const CLIENT_LOGOS = [
  { name: "ARVV", src: "/images/logos/arvv.png" },
  { name: "Azcure", src: "/images/logos/azcure.png" },
  { name: "Nityam Reality", src: "/images/logos/nityam-reality.png" },
  { name: "Rudramalhar", src: "/images/logos/rudramalhar.png" },
  { name: "Shivshambhu Industry", src: "/images/logos/shivshambhu.png" },
];

export const HOME_SERVICES = [
  {
    title: "Business Incorporation & ROC Compliance",
    description:
      "Build your enterprise on the right legal structure with reliable incorporation support and ongoing ROC compliance management.",
    href: "/services#incorporation-roc",
    icon: "building",
  },
  {
    title: "Accounting & Bookkeeping Services",
    description:
      "Maintain accurate records, financial visibility and stronger reporting systems that support better business decisions.",
    href: "/services#accounting",
    icon: "ledger",
  },
  {
    title: "HR, Payroll & Labour Compliance",
    description:
      "Streamline payroll processes and stay aligned with labour and employment compliance requirements.",
    href: "/services#hr-payroll",
    icon: "people",
  },
  {
    title: "Domestic, International & Double Taxation Advisory",
    description:
      "Navigate direct and indirect taxation with structured guidance across domestic, cross-border and compliance-sensitive matters.",
    href: "/services#taxation",
    icon: "scale",
  },
  {
    title: "Business Consulting Services",
    description:
      "Gain strategic guidance to improve operational clarity, process discipline and long-term business readiness.",
    href: "/services#business-consulting",
    icon: "compass",
  },
  {
    title: "Co-Working & Virtual Office Solutions",
    description:
      "Access practical office support solutions that help businesses establish presence and operate with flexibility.",
    href: "/services#co-working",
    icon: "pin",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I was completely impressed with their professionalism and customer service. They went above and beyond to help me find the perfect solution. Kanchan and Namrata mam resolve issues with personal guidance. Thank you so much again.",
    name: "Abhishek Kumar",
    org: "Webhorizon Technologies Pvt. Ltd",
    location: "Pune",
  },
  {
    quote:
      "Genuine and professional team to work with. They respect clients' time in every event like communicating OTPs and emails. Prompt to receive calls, to-the-point communication, no-nonsense things, especially Kanchan. Good luck to your team.",
    name: "Nabhiraj Rukde",
    org: "",
    location: "Sangli, Maharashtra",
  },
  {
    quote:
      "Your understanding of complex tax regulations and ability to apply them to my situation is outstanding. You were always available to answer my questions. Your clear explanations and timely communication made the ITR preparation process seamless.",
    name: "Vikrant Choudhary",
    org: "BNY",
    location: "Pune",
  },
  {
    quote:
      "Kanchan has been quite helpful with our students of Udaan Foundation. She is committed to tasks assigned to her.",
    name: "Angita Verma",
    org: "Ekayan Foundation",
    location: "",
  },
  {
    quote:
      "I had lost hope about my income tax refund pending from the Income Tax department. Kanchan Singh helped me with very granular details and made me understand the bits and pieces of the income tax portal and process. I am very thankful for her help.",
    name: "Karnav Khabarial",
    org: "",
    location: "Pune",
  },
  {
    quote:
      "I took the service of new GST registration. It got rejected 3-4 times by the GST office but finally, I got GST registration with the help of Kanchan Ma'am. Nice and supportive team.",
    name: "Deepak Yadav",
    org: "",
    location: "Pune",
  },
];

export const INSIGHTS = [
  {
    title: "Compliance Updates for Growing Businesses",
    intro: "Stay ahead of statutory changes that affect your operations.",
  },
  {
    title: "Tax and Regulatory Guidance",
    intro: "Practical direction across domestic and cross-border tax matters.",
  },
  {
    title: "Business Structuring and Planning Insights",
    intro: "Build the right foundation for sustainable, compliant growth.",
  },
];

export type Job = {
  title: string;
  slug: string;
  department: "Finance" | "Operations" | "Administration" | "Sales" | "Support";
  status: string;
  summary: string;
  image: string;
  imagePosition?: string;
  applyUrl: string;
};

export const JOBS: Job[] = [
  {
    title: "Accounts Executive",
    slug: "accounts-executive",
    department: "Finance",
    status: "Open",
    summary:
      "Manage accounting records, bookkeeping support, GST-related coordination and financial documentation.",
    image: "/images/careers/accounts-executive.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Phone Operator",
    slug: "phone-operator",
    department: "Support",
    status: "Open",
    summary:
      "Handle incoming and outgoing calls, maintain communication logs and support call coordination.",
    image: "/images/careers/phone-operator.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Back Office Assistant",
    slug: "back-office-assistant",
    department: "Administration",
    status: "Open",
    summary:
      "Support data entry, documentation, follow-ups and internal coordination to maintain smooth workflow.",
    image: "/images/careers/admin-executive.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Quality Control Department",
    slug: "quality-control",
    department: "Operations",
    status: "Open",
    summary:
      "Assist in checking products, identifying quality issues and supporting process improvement.",
    image: "/images/careers/quality-control.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Sales Executive",
    slug: "sales-executive",
    department: "Sales",
    status: "Open",
    summary:
      "Generate leads, follow up with prospects and support customer acquisition and relationship management.",
    image: "/images/careers/sales-executive.png",
    imagePosition: "center 30%",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Personal Secretary",
    slug: "personal-secretary",
    department: "Administration",
    status: "Open",
    summary:
      "Manage schedules, meetings, communication and coordination tasks for senior management support.",
    image: "/images/careers/personal-secretary.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Production Head",
    slug: "production-head",
    department: "Operations",
    status: "Open",
    summary:
      "Plan, supervise and optimize production activities while coordinating teams and workflow efficiency.",
    image: "/images/careers/quality-control.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Admin Executive",
    slug: "admin-executive",
    department: "Administration",
    status: "Open",
    summary:
      "Handle office administration, internal coordination, vendor follow-ups and operational support.",
    image: "/images/careers/admin-executive.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Store Head",
    slug: "store-head",
    department: "Operations",
    status: "Open",
    summary:
      "Manage inventory, stock verification, inward-outward tracking and storage organization.",
    image: "/images/careers/store-head.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
  {
    title: "Dispatch Head",
    slug: "dispatch-head",
    department: "Operations",
    status: "Open",
    summary:
      "Coordinate packing, shipping logistics, dispatch scheduling and related documentation.",
    image: "/images/careers/dispatch-head.png",
    applyUrl: CONTACT.recruitmentFormUrl,
  },
];

export const TEAM = [
  {
    name: "Kanchan Singh",
    role: "Founder, Director",
    image: "/images/team/kanchan-singh.jpeg",
    linkedin: "https://www.linkedin.com/in/singhkanchan28/",
  },
  {
    name: "Harshad Bahirat",
    role: "Manager",
    image: "/images/team/harshad-bahirat.jpeg",
    linkedin: "https://www.linkedin.com/in/harshad-bahirat-747a90149/",
  },
  {
    name: "Priyanka Jagtap",
    role: "Accounts & Tax Executive",
    image: "/images/team/priyanka-jagtap.jpeg",
    linkedin: "",
  },
  {
    name: "Manish Singh",
    role: "Data Management Executive",
    image: "/images/team/manish-singh.jpeg",
    linkedin: "https://www.linkedin.com/in/manish-kumar-singh-ba56911b1/",
  },
  {
    name: "Prajval Shinde",
    role: "CMA Intern",
    image: "/images/team/prajval-shinde.jpeg",
    linkedin: "https://www.linkedin.com/in/prajval-shinde-63774b378/",
  },
  {
    name: "Vibhavari Kachare",
    role: "CMA Intern",
    image: "/images/team/vibhavari-kachare.jpeg",
    linkedin: "https://www.linkedin.com/in/vibhavari-kachare-47bb9b385/",
  },
];

export const ALUMNI = [
  {
    name: "Kartikey Hodage",
    role: "Assistant Manager",
    image: "/images/alumni/kartikey-hodage.webp",
    linkedin: "https://www.linkedin.com/in/kartikey-hodage-81951b2a2/",
  },
  {
    name: "Namrata Mehta",
    role: "Diploma in Computer Eng.",
    image: "/images/alumni/namrata-mehta.jpg",
    linkedin: "https://www.linkedin.com/in/namrata-mehta-180411144/",
  },
  {
    name: "Pallavi Gagre",
    role: "CMA Finalist",
    image: "/images/alumni/pallavi-gagre.jpg",
    linkedin: "https://www.linkedin.com/in/pallavi-gagre-695b302b0/",
  },
  {
    name: "Snehal Kamat",
    role: "B.Com, CA Intermediate",
    image: "/images/alumni/snehal-kamat.webp",
    linkedin: "https://www.linkedin.com/in/snehal-kamat-205b452b/",
  },
  {
    name: "Dhaneshwari Wahule",
    role: "BBA Finance",
    image: "/images/alumni/dhaneshwari-wahule.jpg",
    linkedin: "https://www.linkedin.com/in/dhaneshwari2405/",
  },
  {
    name: "Khushboo Chauhan",
    role: "BBA Finance",
    image: "/images/alumni/khushboo-chauhan.jpg",
    linkedin: "https://www.linkedin.com/in/khushboo-chauhan-on11022005/",
  },
  {
    name: "Ammar Vajwana",
    role: "Bachelor of Commerce",
    image: "/images/alumni/ammar-vajwana.jpg",
    linkedin: "https://www.linkedin.com/in/ammar-vajwana-38aa7a209/",
  },
  {
    name: "Pankaj Singh",
    role: "Bachelor of Commerce",
    image: "/images/alumni/pankaj-singh.webp",
    linkedin: "https://www.linkedin.com/in/pankajsingh90987/",
  },
];

export const CORE_VALUES = [
  {
    title: "Integrity & Ethics",
    body: "We believe in complete transparency, providing honest and unbiased insights without conflicts of interest. Confidentiality is at the core of our operations, ensuring client data is handled with the highest level of discretion.",
  },
  {
    title: "Objectivity & Independence",
    body: "Our analysis is purely fact-based and free from external influence. Every situation is approached with a critical and neutral mindset, ensuring unbiased, well-informed recommendations.",
  },
  {
    title: "Accuracy & Attention to Detail",
    body: "We conduct thorough reviews to identify potential risks and opportunities, relying on verified data, rigorous analysis, and cross-checking sources to deliver precise and reliable insights.",
  },
  {
    title: "Confidentiality & Trust",
    body: "Client information is safeguarded with strict data protection measures and shared only with authorized personnel. We foster long-term relationships built on trust, ensuring consistent and dependable service.",
  },
  {
    title: "Expertise & Continuous Growth",
    body: "Our team stays updated with industry trends, market changes, and evolving regulations to provide cutting-edge solutions. We encourage continuous learning and skill enhancement to maintain the highest professional standards.",
  },
  {
    title: "Client-Centric Approach",
    body: "Understanding each client's unique needs, we tailor our due diligence processes to deliver customized solutions. Our insights are actionable and designed to support strategic decision-making and business growth.",
  },
];

export const INDUSTRIES = [
  {
    name: "Professional Service Firms",
    description:
      "Supporting consulting firms, agencies and service-led businesses with structured finance, compliance, taxation and operational support.",
  },
  {
    name: "Small & Medium Enterprises (SMEs)",
    description:
      "Delivering end-to-end accounting, compliance, reporting and business support to help SMEs operate efficiently and grow sustainably.",
  },
  {
    name: "Trading & Distribution Businesses",
    description:
      "Supporting stock movement, documentation, dispatch coordination, taxation and operational processes for trading-driven businesses.",
  },
  {
    name: "Construction & Infrastructure",
    description:
      "Providing structured compliance, operational support and finance-related guidance for project-led and execution-heavy business environments.",
  },
  {
    name: "Media, Animation & Creative Studios",
    description:
      "Helping creative businesses manage finance, compliance, documentation and backend business operations with better structure.",
  },
  {
    name: "Logistics & Supply Chain Services",
    description:
      "Supporting workflow, coordination, documentation, compliance and operational efficiency across logistics-focused businesses.",
  },
  {
    name: "Ecommerce & Online Businesses",
    description:
      "Providing compliance, accounting and business process support for digitally operated businesses and growing online brands.",
  },
  {
    name: "IT & Software",
    description:
      "Helping technology and software businesses stay organized with finance, compliance, operational and entity-related support.",
  },
  {
    name: "Manufacturing & Engineering Industries",
    description:
      "Supporting production-oriented businesses with compliance, reporting, process discipline and operational business support.",
  },
  {
    name: "Startup & Emerging Businesses",
    description:
      "Helping new and growing ventures build the right foundation across structure, systems, compliance and business planning.",
  },
];

export type ServiceCategory = {
  anchor: string;
  heading: string;
  intro: string;
  columns: 3 | 4;
  cards: { title: string; description: string }[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    anchor: "hr-payroll",
    heading: "HR Services & Payroll Compliance",
    intro:
      "Structured workforce support covering recruitment, administration, payroll processing and statutory compliance requirements.",
    columns: 4,
    cards: [
      {
        title: "Human Resources & Recruitment Services",
        description:
          "We help identify, screen and place suitable talent while aligning recruitment support with your business and compliance requirements.",
      },
      {
        title: "HR Management & Administration",
        description:
          "End-to-end HR support covering onboarding, employee records, documentation and day-to-day administration processes.",
      },
      {
        title: "Payroll Compliance & Statutory Support",
        description:
          "Accurate payroll processing and support for PF, ESIC, PT and related statutory obligations with timely execution.",
      },
      {
        title: "Pan-India Recruitment Services",
        description:
          "Centralised hiring support for businesses operating across multiple locations, helping teams scale with better consistency.",
      },
    ],
  },
  {
    anchor: "incorporation-roc",
    heading: "Incorporation & ROC Compliance",
    intro:
      "Establish the right legal and regulatory foundation for your business with incorporation, registrations and ongoing compliance support.",
    columns: 4,
    cards: [
      {
        title: "Company / Business Incorporation Services",
        description:
          "Guidance on choosing the appropriate entity structure and completing incorporation formalities smoothly and correctly.",
      },
      {
        title: "Licenses & Statutory Registrations",
        description:
          "Support for essential registrations and licences tailored to your business activity, sector and operational requirements.",
      },
      {
        title: "Corporate Legal & Regulatory Assistance",
        description:
          "Ongoing support to help your organisation stay aligned with evolving legal and regulatory obligations.",
      },
      {
        title: "ROC Filings & Compliance",
        description:
          "Timely ROC filings and secretarial compliance support to help maintain good corporate standing.",
      },
    ],
  },
  {
    anchor: "accounting",
    heading: "Accounting & Bookkeeping Services",
    intro:
      "Financial recordkeeping, reporting support and review processes that improve accuracy, visibility and decision-making.",
    columns: 3,
    cards: [
      {
        title: "Accounting & Financial Services",
        description:
          "Clean books, MIS reporting and financial insights designed to support stronger business control and better decisions.",
      },
      {
        title: "Internal Audit & Due Diligence",
        description:
          "Risk-focused reviews that strengthen internal controls and provide clarity before important transactions or decisions.",
      },
      {
        title: "Bookkeeping & Reporting Support",
        description:
          "Ongoing financial organisation and reporting assistance to keep accounts accurate, current and management-ready.",
      },
    ],
  },
  {
    anchor: "taxation",
    heading: "Domestic, Double Taxation & International Taxation Services",
    intro:
      "Advisory and execution support across domestic tax planning, cross-border tax matters and treaty-based compliance requirements.",
    columns: 3,
    cards: [
      {
        title: "Domestic Taxation Services",
        description:
          "End-to-end tax planning and compliance support for Indian income and business operations.",
      },
      {
        title: "Withholding Tax (TDS) on Foreign Payments",
        description:
          "Guidance on correct TDS treatment for cross-border payments to reduce notices, disputes and disallowances.",
      },
      {
        title: "Tax Residency Certificate (TRC) & Form 10F Assistance",
        description:
          "Support in obtaining TRC and filing Form 10F to help claim applicable treaty benefits more smoothly.",
      },
      {
        title: "Cross-Border Transaction Tax Advisory",
        description:
          "Structuring guidance for international transactions to improve tax efficiency while remaining compliant.",
      },
      {
        title: "Double Taxation Avoidance Agreement (DTAA) Advisory",
        description:
          "Practical guidance on applying DTAA provisions to reduce the risk of being taxed twice on the same income.",
      },
    ],
  },
  {
    anchor: "business-consulting",
    heading: "Business Consulting Services",
    intro:
      "Advisory support for structuring businesses, improving decision-making, streamlining operations and guiding growth-stage planning.",
    columns: 4,
    cards: [
      {
        title: "Business Setup & Strategic Advisory",
        description:
          "Guidance on building the right structure and roadmap for businesses from idea stage to execution.",
      },
      {
        title: "Financial & Operational Consulting",
        description:
          "Analysis of numbers and processes to improve profitability, visibility and day-to-day efficiency.",
      },
      {
        title: "Business Process Improvement",
        description:
          "Streamlining workflows and controls so business operations run faster, cleaner and with fewer errors.",
      },
      {
        title: "Startup & Growth Strategy Advisory",
        description:
          "Practical consulting on systems, scaling, funding readiness and growth planning for startups and emerging firms.",
      },
    ],
  },
  {
    anchor: "co-working",
    heading: "Co-Working Space Services",
    intro:
      "Flexible workspace and business presence solutions designed for convenience, professionalism and operational ease.",
    columns: 3,
    cards: [
      {
        title: "Fully Equipped Co-Working Office Spaces",
        description:
          "Plug-and-play workspaces with essential amenities so teams and professionals can work efficiently.",
      },
      {
        title: "Virtual Office & Business Address Services",
        description:
          "Professional address and business presence support for companies that need flexibility without a full-time office setup.",
      },
      {
        title: "Meeting / Conference Room Facilities",
        description:
          "On-demand meeting spaces for client presentations, reviews, interviews and internal sessions.",
      },
    ],
  },
];
