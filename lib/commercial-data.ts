export interface ServiceOffering {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  summary: string;
  summaryAr: string;
  benefits: { title: string; description: string }[];
  deliverables: string[];
  commercialModels: ('One-Time Purchase' | 'Monthly Rental' | 'Annual Rental' | 'Custom Quote' | 'Recurring Retainer')[];
  pricingSummaryEgp: string;
  pricingSummaryUsd: string;
  pricingNote: string;
  faqs: { question: string; answer: string }[];
}

export interface PricingPackage {
  id: string;
  serviceSlug: string;
  serviceCategory: string;
  name: string;
  nameAr: string;
  model: 'one-time' | 'rental-monthly' | 'rental-annual' | 'recurring-support' | 'custom-quote';
  badge: string;
  priceEgp: string;
  priceUsd: string;
  periodText?: string;
  description: string;
  deliverables: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  details: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  scopeSummary: string;
  demonstrationType: 'Interactive Demo' | 'Verified Build' | 'Design System Demo';
  deliverables: string[];
  techStack: string[];
  previewNote: string;
}

export const COMMERCIAL_SERVICES: ServiceOffering[] = [
  {
    id: 'web-design',
    slug: 'web-design',
    number: '01',
    title: 'Website Design & Development',
    titleAr: 'تصميم وتطوير المواقع والمتاجر الإلكترونية',
    tagline: 'High-converting, responsive websites and online stores built for real business growth.',
    taglineAr: 'مواقع عصرية ومتاجر إلكترونية سريعة ومصممة لتحويل الزوار إلى عملاء فعليين.',
    summary:
      'We design and build bespoke business websites, company portals, and e-commerce stores. Every site is created mobile-first with high contrast, fast loading, and bilingual Arabic/English layouts.',
    summaryAr:
      'نصمم ونطور مواقع الشركات والمتاجر الإلكترونية المخصصة بأعلى معايير السرعة وسهولة الاستخدام على الهواتف مع دعم كامل للغتين العربية والإنجليزية.',
    benefits: [
      {
        title: 'Built to Convert Visitors',
        description: 'Clear layouts, prominent call-to-actions, and straightforward navigation that guide clients toward buying or contacting you.',
      },
      {
        title: 'First-Class Arabic & English',
        description: 'Natural right-to-left (RTL) reading flow for Arabic alongside clean English typography without awkward machine translations.',
      },
      {
        title: 'Fast Loading & Mobile-First',
        description: 'Optimized images and lightweight code ensure pages load quickly on cellular connections in Egypt and abroad.',
      },
      {
        title: 'Ready for Payments',
        description: 'Configurable for domestic Egyptian payment methods (cards, Meeza, mobile wallets via Paymob) or international credit cards via Stripe.',
      },
    ],
    deliverables: [
      'Custom visual layout tailored to your brand identity',
      'Fully responsive mobile, tablet, and desktop interfaces',
      'Product catalogue or content management setup',
      'Contact forms with email alerts and spam protection',
      'Search engine optimization (SEO) foundation and social preview cards',
      'Deployment to high-speed hosting with SSL security certificate',
    ],
    commercialModels: ['One-Time Purchase', 'Custom Quote'],
    pricingSummaryEgp: 'Starting at 35,000 EGP',
    pricingSummaryUsd: 'Starting at $1,400 USD',
    pricingNote: 'Final pricing depends on scope, page count, and e-commerce complexity. Custom quotes provided upon scope review.',
    faqs: [
      {
        question: 'Do I own the website after development?',
        answer: 'Yes. With our Website Design & Development service, you own 100% of your website code, design assets, and content upon completion.',
      },
      {
        question: 'Can I update the content myself later?',
        answer: 'Yes. We configure an easy-to-use content management area so your team can add products, publish news, and update text without writing code.',
      },
      {
        question: 'How long does a typical website take to launch?',
        answer: 'A standard company website typically takes 3 to 5 weeks from approved design to final launch. E-commerce platforms take 5 to 8 weeks depending on product catalogue size.',
      },
    ],
  },
  {
    id: 'crm',
    slug: 'crm',
    number: '02',
    title: 'CRM Systems — Rent or Buy',
    titleAr: 'أنظمة إدارة العملاء (CRM) — للإيجار أو الشراء',
    tagline: 'Organize your leads, sales pipelines, and customer records with zero hassle.',
    taglineAr: 'نظم بيانات عملائك ومبيعاتك وفريق العمل بسهولة مع خيارات مرنة للإيجار الشهري أو التملك.',
    summary:
      'Keep your business organized with a dedicated Customer Relationship Management (CRM) system. Rent our ready-to-run system on an affordable monthly plan, or buy a fully owned, customized version tailored to your exact workflow.',
    summaryAr:
      'احصل على نظام متكامل لإدارة العملاء والمبيعات ومتابعة فريق العمل، مع إمكانية الإيجار الشهري دون تكاليف تأسيس ضخمة، أو شراء النظام وتخصيصه بالكامل.',
    benefits: [
      {
        title: 'Rent or Buy — You Choose',
        description: 'Choose an affordable monthly rental to start immediately, or purchase a perpetual solution customized specifically for your team.',
      },
      {
        title: 'Never Lose a Lead Again',
        description: 'Track incoming inquiries from your website, WhatsApp, and phone calls in a unified visual pipeline with follow-up reminders.',
      },
      {
        title: 'Private & Secure Database',
        description: 'Your customer data is stored in a private, isolated database that only your authorized team members can access.',
      },
      {
        title: 'Multi-Role Team Permissions',
        description: 'Assign distinct roles for sales reps, managers, and accountants so staff only view the records they need.',
      },
    ],
    deliverables: [
      'Visual deal and sales pipeline management',
      'Client contact history, notes, and activity timeline',
      'Task assignments and automated follow-up reminders',
      'Role-based permissions (sales agent, supervisor, executive)',
      'Custom branding with your company logo and custom domain',
      'Data export to Excel / CSV whenever you need it',
    ],
    commercialModels: ['Monthly Rental', 'Annual Rental', 'One-Time Purchase', 'Custom Quote'],
    pricingSummaryEgp: 'Rent from 1,750 EGP / mo · Buy from 65,000 EGP',
    pricingSummaryUsd: 'Rent from $65 USD / mo · Buy from $2,500 USD',
    pricingNote: 'Rental plans include hosting, software updates, and backups. Buy option includes complete source setup and 1 year of maintenance.',
    faqs: [
      {
        question: 'What is the difference between renting and buying the CRM?',
        answer: 'Renting provides a ready-to-use CRM on our cloud servers with a low monthly fee that includes hosting, automated backups, and software updates. Buying means you acquire the software for a one-time fee and can request custom feature development.',
      },
      {
        question: 'Can I switch from renting to buying later?',
        answer: 'Yes! If you start on a rental plan and later decide you want a customized or self-hosted system, we will credit a portion of your rental payments toward the purchase price and transfer your data seamlessly.',
      },
      {
        question: 'Can you customize fields to fit my specific industry?',
        answer: 'Absolutely. We regularly customize lead statuses, custom fields, invoice formats, and sales stages for real estate, contracting, retail, medical, and consulting businesses.',
      },
    ],
  },
  {
    id: 'automation',
    slug: 'automation',
    number: '03',
    title: 'Business Automation & n8n Workflows',
    titleAr: 'أتمتة الأعمال وربط الأنظمة عبر n8n',
    tagline: 'Connect your software, eliminate repetitive tasks, and save hours every week.',
    taglineAr: 'اربط برامجك وتطبيقاتك معاً وتخلص من المهام الروتينية ووفر وقت فريقك.',
    summary:
      'We design and deploy automated workflows that link your website, CRM, WhatsApp, spreadsheets, and accounting tools. Using reliable workflow engines like n8n and direct API integrations, we automate the repetitive manual work that slows your team down.',
    summaryAr:
      'نصمم ونبني مسارات عمل آلية تربط موقعك بنظام CRM وواتساب وجداول البيانات والبريد الإلكتروني، مما يوفر ساعات طويلة من الإدخال اليدوي المتكرر.',
    benefits: [
      {
        title: 'Zero Manual Copy-Pasting',
        description: 'New leads from your website or social ads automatically appear in your CRM and notify your sales team instantly.',
      },
      {
        title: 'Instant Customer Alerts',
        description: 'Send automated WhatsApp or email notifications when orders are placed, appointments booked, or invoices paid.',
      },
      {
        title: 'Private & Cost-Effective',
        description: 'We deploy self-hosted n8n workflows that do not charge exorbitant per-task fees like traditional SaaS automation tools.',
      },
      {
        title: 'Reliable Error Handling',
        description: 'Every workflow includes automatic retry mechanisms and error alerts so you never miss a customer request.',
      },
    ],
    deliverables: [
      'Workflow assessment and systems architecture mapping',
      'Configured n8n automation engine on dedicated compute',
      'Webhooks connecting your website, forms, and CRM',
      'WhatsApp Business API or email notification triggers',
      'Automated invoice generation and payment sync',
      'Complete workflow documentation and handover training',
    ],
    commercialModels: ['One-Time Purchase', 'Recurring Retainer', 'Custom Quote'],
    pricingSummaryEgp: 'Starting at 18,000 EGP per workflow',
    pricingSummaryUsd: 'Starting at $750 USD per workflow',
    pricingNote: 'Pricing scales based on number of integrated systems, webhook complexity, and API requirements.',
    faqs: [
      {
        question: 'What is n8n and why do you recommend it?',
        answer: 'n8n is an enterprise-grade workflow automation platform. Unlike cloud platforms that charge high fees for every single task executed, n8n can run privately on a dedicated server with unlimited workflow runs and total privacy for your business data.',
      },
      {
        question: 'Can you connect my existing software?',
        answer: 'As long as your software offers an API, webhook, or database connection (such as Google Sheets, WhatsApp, Slack, Stripe, Paymob, WooCommerce, or custom databases), we can integrate it.',
      },
      {
        question: 'What happens if an external service goes down?',
        answer: 'Our workflows are built with queue retry logic and dead-letter alerts. If an external service is temporarily unreachable, the request is queued and retried automatically without data loss.',
      },
    ],
  },
  {
    id: 'branding',
    slug: 'branding',
    number: '04',
    title: 'Branding & Creative Design',
    titleAr: 'الهوية البصرية والتصميم الإبداعي',
    tagline: 'Distinctive visual identities, logos, and digital design systems that build trust.',
    taglineAr: 'هويات بصرية متكاملة وشعارات احترافية تمنح شركتك مظهراً موثوقاً ومميزاً بين المنافسين.',
    summary:
      'We craft bold, memorable brand identities that help your company stand out in crowded markets. From logos and bilingual typography guidelines to complete stationery and digital social kits, we make sure your business looks credible and premium.',
    summaryAr:
      'نبتكر هويات بصرية قوية تبدأ من تصميم الشعار والألوان والخطوط المتناسقة باللغتين العربية والإنجليزية، وتصل إلى قوالب السوشيال ميديا ومطبوعات الشركات.',
    benefits: [
      {
        title: 'A Cohesive, Premium Image',
        description: 'Present your business with authority through matched color palettes, typography, and logo variations.',
      },
      {
        title: 'Arabic & English Harmony',
        description: 'Bilingual typography chosen specifically to ensure both Arabic and English look unified and balanced.',
      },
      {
        title: 'Production-Ready Asset Kits',
        description: 'Receive your logo and brand files in all required formats (SVG, PNG, PDF, print-ready CMYK, and web-ready RGB).',
      },
      {
        title: 'Clear Brand Style Guidelines',
        description: 'A practical brand guide so your team and outside agencies always apply your logo, fonts, and colors correctly.',
      },
    ],
    deliverables: [
      'Primary, secondary, and monochrome logo variations',
      'Harmonized color palette (HEX, RGB, CMYK codes)',
      'Bilingual typography pairing guidelines',
      'Social media profile avatars and header banners',
      'Business card, letterhead, and invoice layout templates',
      'Digital brand guidelines PDF',
    ],
    commercialModels: ['One-Time Purchase', 'Custom Quote'],
    pricingSummaryEgp: 'Starting at 22,000 EGP',
    pricingSummaryUsd: 'Starting at $900 USD',
    pricingNote: 'Packages range from essential logo identities to comprehensive 360-degree brand redesigns.',
    faqs: [
      {
        question: 'What files do I receive when the branding project is complete?',
        answer: 'You receive vector master files (AI, EPS, SVG) that can scale infinitely for giant billboards, high-resolution PNGs with transparent backgrounds, and print-ready PDFs for printers.',
      },
      {
        question: 'Do you design specifically for bilingual brands?',
        answer: 'Yes. Most of our clients operate in Egypt and international markets, so ensuring that Arabic and Latin typographic characters complement each other is one of our primary design disciplines.',
      },
    ],
  },
  {
    id: 'domains-hosting-vps',
    slug: 'domains-hosting-vps',
    number: '05',
    title: 'Domains, Hosting & VPS Management',
    titleAr: 'حجز الدومينات، الاستضافة السحابية وإدارة السيرفرات',
    tagline: 'Reliable cloud servers, high-speed DNS, and managed web hosting.',
    taglineAr: 'استضافة سحابية سريعة وسيرفرات VPS مخصصة مع إدارة كاملة للدومينات وسجلات DNS.',
    summary:
      'We provide fast, secure web hosting and dedicated Virtual Private Server (VPS) configurations. We handle domain registration, DNS records, SSL encryption certificates, and server hardening so your website remains online and accessible around the clock.',
    summaryAr:
      'نوفر استضافة سحابية عالية السرعة وسيرفرات VPS مخصصة، مع تولي كافة الإعدادات التقنية من حجز الدومينات وشهادات الأمان SSL وحماية السيرفرات.',
    benefits: [
      {
        title: 'Hands-Free Technical Management',
        description: 'We manage server provisioning, OS updates, firewall rules, and DNS records so you never have to deal with complex server consoles.',
      },
      {
        title: 'Fast SSD Cloud Infrastructure',
        description: 'Modern NVMe SSD cloud instances with low latency for Egyptian visitors and international traffic.',
      },
      {
        title: 'Free Automated SSL Certificates',
        description: 'Every domain and subdomain is secured with automatic HTTPS encryption renewals.',
      },
      {
        title: 'Routine Automated Backups',
        description: 'Scheduled daily and weekly snapshots protect your files and databases against unexpected hardware failures.',
      },
    ],
    deliverables: [
      'Domain registration and global DNS orchestration',
      'Managed cloud hosting or dedicated VPS configuration',
      'Automatic SSL/TLS certificate installation and renewal',
      'Server-level firewall setup and brute-force protection',
      'Automated daily/weekly offsite database backups',
      'Performance tuning for PHP, Node.js, and databases',
    ],
    commercialModels: ['Monthly Rental', 'Annual Rental', 'Custom Quote'],
    pricingSummaryEgp: 'Hosting from 450 EGP / mo · VPS from 1,800 EGP / mo',
    pricingSummaryUsd: 'Hosting from $18 USD / mo · VPS from $70 USD / mo',
    pricingNote: 'Annual billing includes 2 months free and complimentary domain registration assistance.',
    faqs: [
      {
        question: 'Can you migrate my existing website from another hosting provider?',
        answer: 'Yes. We offer zero-downtime website and database migration from your current host (cPanel, GoDaddy, Namecheap, Hostinger, etc.) to your new server.',
      },
      {
        question: 'Do I get access to my server controls?',
        answer: 'Yes. You receive full credentials and ownership of your server, while our team remains available to manage maintenance and technical configuration.',
      },
    ],
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    number: '06',
    title: 'Website Maintenance & Technical Support',
    titleAr: 'الصيانة المستمرة والدعم الفني للمواقع',
    tagline: 'Keep your website secure, updated, and running smoothly every month.',
    taglineAr: 'حافظ على أمان موقعك وتحديثاته وسرعته مع خطط صيانة شهرية ودعم فني مستمر.',
    summary:
      'Do not wait for your website to break to seek help. Our ongoing maintenance plans provide regular software updates, security monitoring, daily backups, and dedicated developer hours each month to make changes and improvements whenever you need them.',
    summaryAr:
      'احمِ استثمارك الرقمي من خلال المتابعة الدورية، وتحديثات الأمان، والنسخ الاحتياطي اليومي، مع تخصيص ساعات عمل شهرية لإجراء أي تعديلات تطلبها.',
    benefits: [
      {
        title: 'Proactive Security & Updates',
        description: 'We update frameworks, plugins, and core dependencies monthly to patch security vulnerabilities before issues arise.',
      },
      {
        title: 'Dedicated Monthly Change Hours',
        description: 'Need new banners, text revisions, or a new landing page? Your maintenance retainer includes developer hours every month.',
      },
      {
        title: 'Fast Emergency Response',
        description: 'Direct WhatsApp and email support with prioritized response times for urgent technical problems.',
      },
      {
        title: 'Peace of Mind',
        description: 'Rest easy knowing that technical experts are watching your systems, verifying backups, and keeping your site online.',
      },
    ],
    deliverables: [
      'Monthly software, framework, and security patches',
      'Daily offsite database and file backups',
      'Uptime monitoring with immediate incident notification',
      'Dedicated monthly hours for content edits and feature tweaks',
      'Monthly health report summarizing site visits and updates',
      'Direct WhatsApp and email support channel',
    ],
    commercialModels: ['Recurring Retainer', 'Custom Quote'],
    pricingSummaryEgp: 'Starting at 2,500 EGP / mo',
    pricingSummaryUsd: 'Starting at $95 USD / mo',
    pricingNote: 'Retainers scale according to site size, traffic, and monthly developer hours required.',
    faqs: [
      {
        question: 'Can you maintain a website you did not originally build?',
        answer: 'Yes. We conduct a preliminary technical review of your existing code and hosting to verify stability, then onboard your site into our monthly maintenance cycle.',
      },
      {
        question: 'What happens if our site experiences an urgent issue?',
        answer: 'Maintenance clients receive direct priority contact channels. In urgent downtime situations, an engineer investigates and begins remediation promptly.',
      },
    ],
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter-website',
    serviceSlug: 'web-design',
    serviceCategory: 'Website Design & Development',
    name: 'Business Launch Website',
    nameAr: 'موقع إلكتروني للشركات الناشئة',
    model: 'one-time',
    badge: 'One-Time Project',
    priceEgp: '35,000 EGP',
    priceUsd: '$1,400 USD',
    periodText: 'one-time build fee',
    description: 'Perfect for established businesses or new ventures that need a polished, modern, high-converting digital presence.',
    deliverables: [
      'Up to 5 bespoke pages (Home, About, Services, Case Studies, Contact)',
      'Bilingual Arabic (RTL) & English layout',
      'Mobile-first responsive design',
      'Contact form with email alerts and spam prevention',
      'Google SEO setup and social preview tags',
      '30 days of post-launch technical support',
    ],
    ctaText: 'Start This Project',
  },
  {
    id: 'ecommerce-platform',
    serviceSlug: 'web-design',
    serviceCategory: 'Website Design & Development',
    name: 'Custom Online Store',
    nameAr: 'متجر إلكتروني متكامل',
    model: 'one-time',
    badge: 'Popular for Commerce',
    priceEgp: '60,000 EGP',
    priceUsd: '$2,400 USD',
    periodText: 'one-time build fee',
    description: 'Complete e-commerce store with product catalogue, inventory controls, coupon codes, and integrated payment gateway.',
    deliverables: [
      'Full e-commerce catalogue and shopping cart',
      'Paymob integration (Egypt domestic) or Stripe (Global)',
      'Order management & customer notification emails',
      'Mobile wallet and credit card checkout flows',
      'Product categorization and inventory management',
      '60 days of post-launch technical support',
    ],
    isPopular: true,
    ctaText: 'Build an Online Store',
  },
  {
    id: 'crm-rental-pro',
    serviceSlug: 'crm',
    serviceCategory: 'CRM Systems',
    name: 'CRM Software Rental — Pro',
    nameAr: 'إيجار نظام CRM — الباقة الاحترافية',
    model: 'rental-monthly',
    badge: 'Monthly Rental',
    priceEgp: '1,750 EGP',
    priceUsd: '$65 USD',
    periodText: '/ month (billed monthly)',
    description: 'Turnkey sales and customer management software hosted on our cloud. No large upfront development cost.',
    deliverables: [
      'Up to 10 team member seats',
      'Visual deal pipeline & client contact database',
      'Task assignments and follow-up reminders',
      'Dedicated private database instance',
      'Automated daily backups and SSL security',
      'Software updates and technical support included',
    ],
    isPopular: true,
    ctaText: 'Rent This CRM',
  },
  {
    id: 'crm-purchase-perpetual',
    serviceSlug: 'crm',
    serviceCategory: 'CRM Systems',
    name: 'CRM Software — Full Purchase',
    nameAr: 'شراء نظام CRM وتخصيصه بالكامل',
    model: 'one-time',
    badge: 'Perpetual License',
    priceEgp: '65,000 EGP',
    priceUsd: '$2,500 USD',
    periodText: 'one-time purchase + customization',
    description: 'You own the software. We deploy and customize the CRM on your own private server with your company workflows.',
    deliverables: [
      'Unlimited user seats on your own server',
      'Custom fields, stages, and reports tailored to your company',
      'Direct integration with your website and lead forms',
      'Full ownership of database and records',
      'Staff onboarding and administrator training session',
      '6 months of included maintenance and bug fixes',
    ],
    ctaText: 'Buy & Customize CRM',
  },
  {
    id: 'n8n-automation-starter',
    serviceSlug: 'automation',
    serviceCategory: 'Business Automation',
    name: 'Core Workflow Automation',
    nameAr: 'حزمة أتمتة الأعمال الأساسية',
    model: 'one-time',
    badge: 'Workflow Setup',
    priceEgp: '18,000 EGP',
    priceUsd: '$750 USD',
    periodText: 'setup & deployment fee',
    description: 'Connect up to 3 business tools (e.g. Website leads → CRM → WhatsApp / Email alerts) to run automatically.',
    deliverables: [
      'Private n8n automation engine configuration',
      'Up to 3 interconnected business workflows',
      'Automated WhatsApp or email instant notifications',
      'Error handling and retry alerts',
      'Complete workflow handover documentation',
      '30 days of monitoring and adjustment',
    ],
    ctaText: 'Automate My Workflows',
  },
  {
    id: 'branding-identity-pack',
    serviceSlug: 'branding',
    serviceCategory: 'Branding & Design',
    name: 'Brand Identity Package',
    nameAr: 'باقة الهوية البصرية المتكاملة',
    model: 'one-time',
    badge: 'Design Package',
    priceEgp: '22,000 EGP',
    priceUsd: '$900 USD',
    periodText: 'one-time design project',
    description: 'A comprehensive visual brand identity designed to give your company immediate credibility in Egypt and abroad.',
    deliverables: [
      'Primary, secondary, and mark logo variations',
      'Harmonized Arabic and English typography guide',
      'Complete color palette specifications (print & web)',
      'Stationery suite: Business card, letterhead, email signature',
      'Social media profile avatars and cover templates',
      'Brand guideline PDF manual',
    ],
    ctaText: 'Order Brand Identity',
  },
  {
    id: 'managed-vps-pro',
    serviceSlug: 'domains-hosting-vps',
    serviceCategory: 'Hosting & Infrastructure',
    name: 'Managed Cloud VPS',
    nameAr: 'سيرفر سحابي مدار بالكامل (VPS)',
    model: 'rental-monthly',
    badge: 'Monthly Cloud Server',
    priceEgp: '1,800 EGP',
    priceUsd: '$70 USD',
    periodText: '/ month (billed monthly)',
    description: 'Dedicated high-speed cloud VPS managed by our team. Fast NVMe storage, daily backups, and security hardening.',
    deliverables: [
      'High-performance NVMe cloud compute instance',
      'Full technical setup and server hardening',
      'Free automated SSL encryption certificate renewals',
      'Managed DNS setup and domain linking',
      'Daily automated offsite backup snapshots',
      'Ongoing server OS updates and security monitoring',
    ],
    ctaText: 'Get Managed Cloud Server',
  },
  {
    id: 'monthly-maintenance-retainer',
    serviceSlug: 'maintenance',
    serviceCategory: 'Support & Maintenance',
    name: 'Care & Maintenance Retainer',
    nameAr: 'خطة الرعاية والصيانة الشهرية',
    model: 'recurring-support',
    badge: 'Monthly Retainer',
    priceEgp: '2,500 EGP',
    priceUsd: '$95 USD',
    periodText: '/ month (flexible cancellation)',
    description: 'Ongoing technical care, security patches, regular backups, and dedicated developer hours every month.',
    deliverables: [
      'Monthly core, plugin, and security updates',
      'Daily offsite database and file backups',
      'Up to 4 hours of content and layout edits per month',
      'Uptime monitoring with immediate incident response',
      'Direct WhatsApp and email priority communication',
      'Monthly site performance and health summary',
    ],
    ctaText: 'Protect My Website',
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Choose Your Service',
    titleAr: 'اختر الخدمة المناسبة',
    summary: 'Browse our service categories or tell us the specific business challenge you want to solve.',
    summaryAr: 'تصفح خدماتنا المتاحة أو شاركنا هدفك التجاري والتحدي الذي تسعى لحله.',
    details: [
      'Select website development, software rental, automation, or hosting',
      'Transparent starting rates in Egyptian Pounds (EGP) or US Dollars (USD)',
      'Clear comparison between buying outright and renting monthly',
    ],
  },
  {
    number: '02',
    title: 'Tell Us What You Need',
    titleAr: 'أخبرنا بتفاصيل مشروعك',
    summary: 'Submit a simple project inquiry outlining your scope, timeline, and preferred setup.',
    summaryAr: 'أرسل لنا متطلباتك وميزانيتك والجدول الزمني المتوقع من خلال نموذج التواصل البسيط.',
    details: [
      'Quick consultation form that takes under 2 minutes to complete',
      'Immediate confirmation code provided upon server receipt',
      'An engineer reviews your specific requirements before replying',
    ],
  },
  {
    number: '03',
    title: 'Receive a Clear Proposal',
    titleAr: 'استلم عرض عمل محدد وواضح',
    summary: 'We send you a transparent, plain-language proposal detailing deliverables, timeline, and exact costs.',
    summaryAr: 'نرسل لك مقترح عمل تفصيلي باللغة العربية أو الإنجليزية يوضح مراحل العمل والتكلفة الدقيقة.',
    details: [
      'No surprise charges, hidden fees, or sudden exchange-rate markups',
      'Clear project milestones and estimated completion dates',
      'Flexible payment terms appropriate for Egyptian and international clients',
    ],
  },
  {
    number: '04',
    title: 'We Build & Deliver',
    titleAr: 'نقوم بالبناء والتنفيذ والتسليم',
    summary: 'Our team designs, programs, configures, and tests your solution with regular progress updates.',
    summaryAr: 'يبدأ فريقنا في التصميم والبرمجة والإعداد مع إطلاعك على التقدم خطوة بخطوة حتى التسليم النهائي.',
    details: [
      'Clean, thoroughly tested code and responsive design',
      'Bilingual Arabic (RTL) and English interfaces',
      'Full handover session with documentation so your team feels confident',
    ],
  },
  {
    number: '05',
    title: 'Ongoing Support & Care',
    titleAr: 'دعم فني وصيانة مستمرة',
    summary: 'We remain by your side with regular updates, backups, security monitoring, and fast support.',
    summaryAr: 'نبقى معك لدعم موقعك وسيرفراتك بالتحديثات الدورية والنسخ الاحتياطي وحل أي طارئ بسرعة.',
    details: [
      'Optional monthly maintenance retainers to keep systems running smoothly',
      'Direct WhatsApp and email channels for fast assistance',
      'Seamless scaling as your company expands',
    ],
  },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'demo-ecommerce',
    title: 'Modern Retail & Direct-to-Consumer Online Store',
    category: 'Website Design & E-Commerce',
    scopeSummary: 'A lightning-fast bilingual e-commerce store with mobile wallet checkout and automated order notifications.',
    demonstrationType: 'Interactive Demo',
    deliverables: [
      'Sub-second page transitions with responsive mobile layout',
      'Arabic (RTL) and English dual-language catalogue',
      'Paymob domestic payment integration with Meeza and mobile wallet support',
      'Dynamic inventory tracker and automated WhatsApp receipt notifications',
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'Paymob Gateway', 'PostgreSQL'],
    previewNote: 'Verified production architecture build demonstrated for retail and apparel clients.',
  },
  {
    id: 'demo-crm',
    title: 'Multi-Tenant Sales CRM & Pipeline Management',
    category: 'CRM Software Rentals',
    scopeSummary: 'A turnkey customer management tool allowing sales teams to track leads from first call to signed contract.',
    demonstrationType: 'Verified Build',
    deliverables: [
      'Visual drag-and-drop deal stages with custom status tags',
      'Multi-user team roles (Sales Representative, Manager, Administrator)',
      'Isolated tenant database architecture keeping customer records private',
      'Scheduled automated follow-up reminders and activity audit trails',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    previewNote: 'Standard software rental template deployed for service and consulting firms.',
  },
  {
    id: 'demo-automation',
    title: 'Multi-Channel Lead Sync & n8n Workflow Hub',
    category: 'Business Process Automation',
    scopeSummary: 'Automated workflow engine syncing website inquiries with CRM records, WhatsApp sales alerts, and Google Sheets.',
    demonstrationType: 'Verified Build',
    deliverables: [
      'Instant lead capture webhook from public landing pages',
      'Automated customer acknowledgment email and sales rep WhatsApp ping',
      'Dead-letter queue ensuring zero lost inquiries during API downtime',
      'Self-hosted n8n instance avoiding expensive per-task third-party charges',
    ],
    techStack: ['n8n Engine', 'REST Webhooks', 'WhatsApp Business API', 'Docker'],
    previewNote: 'Production workflow demonstration saving client teams 15+ hours of manual data entry weekly.',
  },
  {
    id: 'demo-branding',
    title: 'Bilingual Corporate Identity & Digital Asset System',
    category: 'Branding & Creative Design',
    scopeSummary: 'Complete brand language uniting modern Arabic calligraphy with bold geometric Latin typography for a technology company.',
    demonstrationType: 'Design System Demo',
    deliverables: [
      'Primary wordmark and responsive favicon symbol',
      'Harmonized high-contrast graphite, signal lime, and warm off-white palette',
      'Social media graphics suite and stationery templates',
      'Brand guidelines manual detailing typography hierarchy and spacing discipline',
    ],
    techStack: ['Vector Systems', 'Bilingual Typography', 'CSS Design Tokens'],
    previewNote: 'Our own Gonnsen Tech brand system serving as proof of our design discipline.',
  },
];

export const COMMERCIAL_FAQS = [
  {
    question: 'How do you price projects, and can I pay in Egyptian Pounds?',
    answer: 'Yes! Egyptian clients are billed directly in Egyptian Pounds (EGP) with zero foreign exchange fees. International clients are invoiced in US Dollars (USD). We provide fixed-price package rates or custom quotes based on your exact scope, so you always know the total cost before work begins.',
  },
  {
    question: 'Can I rent a CRM instead of spending a large sum to build one?',
    answer: 'Yes. Our CRM software rentals are designed specifically for this purpose. You pay an affordable monthly fee that includes the software, secure cloud hosting, daily backups, and updates without any large upfront development fee.',
  },
  {
    question: 'Do I own the code and design for custom websites?',
    answer: 'Yes. When you hire us to build a custom website or application, you own all the custom code, designs, and content upon project completion and final settlement.',
  },
  {
    question: 'How do we get started on a new project?',
    answer: 'Simply choose a service and submit our short project inquiry form. An engineer will review your requirements, confirm feasibility, and send a clear written proposal within 24–48 hours.',
  },
];
