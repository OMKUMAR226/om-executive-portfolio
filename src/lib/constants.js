// ============================================================
// CONSTANTS — Single source of truth for all static data
// ============================================================

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Research', href: '/research' },
  { label: 'Contact', href: '/contact' },
];

export const PERSONAL = {
  name: 'Om Kumar Garg',
  initials: 'OKG',
  title: 'India Market Lead · Ecosystem Architect · Operations Partner',
  tagline: "I don't just enter markets — I build the infrastructure that owns them.",
  email: 'salesverse.connect@gmail.com',
  phone: '+91 83052 61866',
  whatsapp: 'wa.me/918305261866',
  linkedin: 'https://linkedin.com/in/kumarom266',
  location: 'Pune, India',
  locationFull: 'Pune, Maharashtra, India (Remote-First Globally)',
  calendly: 'https://wa.me/918305261866',
};

export const TYPEWRITER_WORDS = [
  'India Market Lead',
  'Ecosystem Architect',
  'Operations Partner',
  'Co-Founder',
  'Board Member',
  'COO',
];

export const STATS = [
  { value: 6000, suffix: '+', label: 'Community Members Built', prefix: '' },
  { value: 4, suffix: '', label: 'National Hackathons Organized', prefix: '' },
  { value: 6, suffix: 'L+', label: 'Revenue Generated', prefix: '₹' },
  { value: '30-40', suffix: '%', label: 'Consistent Budget Surplus', prefix: '' },
  { value: 30, suffix: '+', label: 'Partner Agencies Network', prefix: '' },
  { value: 3, suffix: '', label: 'Patents & Indexed Publications', prefix: '' },
];

export const WHAT_I_BRING = [
  {
    id: 'agency-network',
    icon: 'network',
    accentColor: 'cyan',
    badge: '30+ Vetted Agencies',
    title: 'Instant Execution Infrastructure',
    headline: '30+ Agency Network',
    body: 'Active white-label partner for full-stack dev shops, B2B growth firms, CRM specialists, and creative studios across India. Deploy in days, not months.',
  },
  {
    id: 'talent-pipeline',
    icon: 'users',
    accentColor: 'violet',
    badge: '6,000+ Engineers',
    title: 'Pre-Vetted Talent Pipeline',
    headline: '6,000+ Developer Pipeline',
    body: "Direct access to engineering students and early-career developers from India's top institutions. Hire, beta-test, and build before your competitors even know they exist.",
  },
  {
    id: 'ecosystems',
    icon: 'globe',
    accentColor: 'orange',
    badge: '13+ Communities',
    title: 'Government & Institutional Access',
    headline: '13+ Active Ecosystems',
    body: 'Established lines into key tech hubs, academic incubators, and government networks. Unmatched navigational speed for compliance, networking, and rapid India market entry.',
  },
];

export const QUICK_SERVICES = [
  { label: '📈 India Market Entry', href: '/services#market-entry' },
  { label: '🏗️ Ecosystem Building', href: '/services#ecosystem' },
  { label: '🔧 Tech Operations', href: '/services#tech-ops' },
  { label: '📡 Distribution Networks', href: '/services#distribution' },
  { label: '🎯 Go-to-Market Strategy', href: '/services#gtm' },
  { label: '🤝 Partnership Architecture', href: '/services#partnerships' },
];

export const CASE_STUDY_PREVIEWS = [
  {
    id: 'ezodrop',
    title: 'Ezodrop — Amazon Scale Engine',
    tags: ['Dropshipping', 'GTM Strategy'],
    result: '185% Growth in Monthly Client Onboardings',
    href: '/case-studies#ezodrop',
  },
  {
    id: 'jkaur-ev',
    title: 'J_Kaur EV — National EV Network',
    tags: ['Electric Vehicles', 'Distribution'],
    result: '+23% Monthly Sales Increase',
    href: '/case-studies#jkaur-ev',
  },
  {
    id: 'aidn',
    title: 'AISF Pune — Zero to 6,000+',
    tags: ['Community Building', 'Non-Profit'],
    result: '6,000+ Members, Company-Sponsored',
    href: '/case-studies#aidn',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'foreign',
    icon: '🌏',
    title: 'Foreign Startups',
    rate: '$1,500 / month base',
    details: ['+ Revenue share %', '+ Equity consideration', 'Remote from Day 1'],
    note: 'Countries: US · AUS · UAE · NZ · UK',
    accentColor: 'cyan',
  },
  {
    id: 'indian',
    icon: '🇮🇳',
    title: 'Indian Startups',
    rate: 'Trial → Revenue Share',
    details: ['1-1.5 month trial period', 'Then: flat pay + revenue %', 'Post revenue-generation only'],
    note: 'Stage: Seed → Series A',
    accentColor: 'violet',
  },
  {
    id: 'advisory',
    icon: '🤝',
    title: 'Strategic Advisory',
    rate: 'Co-Founder / Board / Equity',
    details: ['Long-term partnership', 'Co-Founder consideration', 'Board Member roles'],
    note: 'Open to: Any stage, global scope',
    accentColor: 'orange',
  },
];

export const SERVICES = [
  {
    id: 'market-entry',
    icon: '🇮🇳',
    title: 'India Market Entry',
    headline: 'Enter India in Days, Not Quarters',
    description:
      'Foreign companies typically spend 6-12 months and significant capital trying to crack India. I cut that to weeks. I bring pre-built agency relationships, government connections, institutional access, and ground-level execution infrastructure that took years to build — directly into your organization.',
    deliverables: ['Partner Identification', 'Regulatory Navigation', 'Team Building', 'First Revenue'],
  },
  {
    id: 'ecosystem',
    icon: '🏗️',
    title: 'Ecosystem & Community Building',
    headline: 'Build the Audience Before You Need It',
    description:
      'I built AISF from zero to 6,000+ active members with no paid advertising. The same organic community-building framework applies to your product, brand, or service. Beta testers, early adopters, power users, and advocates — I create them organically.',
    deliverables: ['Community Architecture', 'Zero-Ad Growth', 'Beta Testing Pipeline', 'Organic Advocacy'],
  },
  {
    id: 'app-growth',
    icon: '📱',
    title: 'App Growth & Optimization',
    headline: 'Real Users. Real Retention.',
    description: 'Increasing organic app downloads, app registrations, Play Store reviews and ratings, and app usage with guaranteed results. Driving real user acquisition through community networks.',
    deliverables: ['Organic Downloads', 'Registration Drives', 'Store Optimization', 'Usage Campaigns'],
  },
  {
    id: 'initial-audit',
    icon: '🔍',
    title: 'Initial India Market Audit',
    headline: 'Uncensored Truth.',
    description: 'An initial audit for any company considering India. I provide an uncensored market opportunity brief with TAM analysis. India has 1.47 billion people. Capturing even 0.01% means steady recurring income.',
    deliverables: ['Market Entry Playbook', 'TAM & Competition Analysis', 'Regulatory Red Flags', 'Local Vendor Costs'],
  },
  {
    id: 'tech-ops',
    icon: '⚙️',
    title: 'Operations & Execution',
    headline: 'I Become the Epicenter of Execution',
    description:
      "I don't manage from a distance. I integrate directly into your team as the operational hub — coordinating developers, agencies, vendors, and partners. Every operation I've run has maintained a 30-40% budget surplus while delivering full-scope results.",
    deliverables: ['Process Architecture', 'Vendor Management', 'P&L Oversight', 'Cross-Team Coordination'],
  },
  {
    id: 'distribution',
    icon: '📡',
    title: 'Distribution & Sales Network',
    headline: 'Reach India Without Building a Sales Team',
    description:
      'Through my 30+ agency network and student sales infrastructure, I can build and deploy distribution at scale across Indian cities — EV sales, SaaS client acquisition, D2C conversion, app downloads, product trials, and more.',
    deliverables: ['Multi-City Distribution', 'Student Sales Force', 'Agency Partnerships', 'WhatsApp Commerce'],
  },
  {
    id: 'gtm',
    icon: '📱',
    title: 'Product Activation & Beta Testing',
    headline: 'Launch to Real Users from Day 1',
    description:
      'My 6,000+ developer pipeline is a live beta testing army. New product? New app? Need 500 real users in 72 hours? I deploy campus activation, micro-influencer seeding, and institutional outreach to get your product in the hands of qualified early adopters fast — before your competitors react.',
    deliverables: ['Beta Recruitment', 'Feedback Systems', 'Campus Activation', 'Product Testimonials'],
  },
  {
    id: 'partnerships',
    icon: '🔬',
    title: 'Technical Operations & Development',
    headline: 'Bridge the Gap Between Tech and Business',
    description:
      'I review technology, vet development agencies, and coordinate technical delivery with the scrutiny of someone who holds a patent and has published AI research. I manage engineering teams and translate technical complexity into business outcomes.',
    deliverables: ['Tech Team Vetting', 'White-Label Coordination', 'AI Integration', 'DevOps Oversight'],
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Intro Call (20 min)',
    description:
      'Align on your goals, current India position, and where I can add the most value fastest.',
  },
  {
    step: '02',
    title: 'Strategy Session',
    description:
      'Deep-dive on your product, market, and what India needs to look like for you. I map the infrastructure and present an action plan.',
  },
  {
    step: '03',
    title: 'Integration',
    description:
      'I embed inside your team as the India operations hub. Day 1 execution begins immediately — no ramp-up, no orientation period.',
  },
  {
    step: '04',
    title: 'Ongoing Deployment',
    description:
      "Consistent reporting, milestone tracking, and adaptive strategy. Revenue-share model means my success is aligned with yours.",
  },
];

export const WHAT_I_AM_NOT = [
  "I am NOT a cold-calling salesman who will door-knock for you",
  "I am NOT a traditional outsourcing agency or vendor",
  "I am NOT looking to manage a project and leave — I build to stay",
  "I WILL connect you with the right people for sales execution",
  "I WILL create the systems that enable others to sell effectively",
];

export const EDUCATION = [
  {
    id: 'btech',
    degree: 'B.Tech — Computer Science & Artificial Intelligence',
    institution: 'Vishwakarma Institute of Technology, Pune',
    period: 'Oct 2023 → June 2027 (Expected)',
    metrics: ['SGPA 9.58', 'CGPA 8.78', '≈ 3.5-3.8 US GPA'],
    note: 'Top 10% of CSAI department',
  },
  {
    id: 'ibm',
    degree: 'IBM Full Stack Software Developer',
    institution: 'IBM / Coursera',
    period: '2024',
    metrics: ['15-Course Professional Certificate'],
    note: 'React · Node.js · Django · Docker · Kubernetes · Gen AI',
  },
  {
    id: 'dt',
    degree: 'Design Thinking for Innovation',
    institution: 'Simplilearn',
    period: '2024',
    metrics: ['Certified'],
    note: 'Human-centered design & innovation frameworks',
  },
  {
    id: 'wd',
    degree: 'Web Development Bootcamp',
    institution: 'Udemy',
    period: '2023',
    metrics: ['Certified'],
    note: 'Full-stack web development fundamentals and advanced topics',
  },
];

export const DIFFERENCES = [
  {
    id: 'technical',
    title: 'Technical Depth with Business Instinct',
    body: 'I hold an active Indian patent, two Scopus/Springer-indexed research publications, and hands-on expertise in AI, IoT, YOLOv8, full-stack development, cloud, and DevOps. But I use this knowledge to make better business decisions — not to write code all day.',
    tags: ['Patent Holder', 'Published Researcher'],
  },
  {
    id: 'network',
    title: 'The Network Is the Product',
    body: "I didn't just build skills — I built infrastructure. A 30+ agency network, 6,000+ developer pipeline, C-suite executive relationships, and direct lines into government and institutional nodes. This network comes inside your organization when you bring me in.",
    tags: ['30+ Agencies', '6K+ Developers'],
  },
  {
    id: 'financial',
    title: 'Proven Financial Discipline',
    body: 'Every operation I\'ve run — 4 national hackathons, multiple startup engagements, agency partnerships — has closed revenue-positive with a consistent 30-40% budget surplus. I don\'t just execute; I protect capital while delivering outcomes.',
    tags: ['Revenue-Positive', 'Budget Surplus'],
  },
  {
    id: 'india',
    title: 'India is My Home Turf',
    body: "Navigating India's market — its relationships, its regulatory environment, its cultural nuances, its talent landscape — requires someone who lives here, not someone who visits. I'm not your India consultant. I'm your India operator.",
    tags: ['Ground-Level Access', 'India-Native'],
  },
];

export const OPERATING_VALUES = [
  {
    title: 'Speed Without Chaos',
    body: 'I move fast but never create disorder. Every operation I run has clear roles, clean handoffs, and documented processes.',
  },
  {
    title: 'Results, Not Reports',
    body: "I don't believe in status updates that substitute for progress. I build things, ship things, and report outcomes — not activity.",
  },
  {
    title: 'Skin in the Game',
    body: "I'm open to performance-based, revenue-share, and equity arrangements because I'm confident in what I deliver. If you win, I should win with you.",
  },
];

export const TECH_SKILLS = [
  'React.js', 'Node.js', 'Python', 'TensorFlow', 'YOLOv8', 'AI/ML',
  'SQL', 'NoSQL', 'Docker', 'Kubernetes', 'Arduino', 'IoT',
];

export const BUSINESS_SKILLS = [
  'Market Entry', 'GTM Strategy', 'P&L Management',
  'Ecosystem Building', 'B2B Sales', 'Community Building',
  'Stakeholder Relations', 'Operations', 'Brand Positioning',
];

export const PATENT = {
  title: 'WallBreach: Real-Time Wall Breach & Intrusion Detection System',
  authority: 'Office of the Controller General of Patents, Designs & Trade Marks — Intellectual Property India',
  applicationNo: '202521028062',
  field: 'Electronics / Security Systems',
  dateFiled: 'March 10, 2025',
  publicationDate: 'May 1, 2025 (L/S 11A)',
  status: 'Active — Awaiting Request for Examination',
  inventors: 'Smita Bhosale, Mrunal Nikalje, Om Kumar Garg, Om Dapke, Onkar Adhav',
  description:
    'Designed and co-invented a proprietary algorithmic system for real-time wall breach detection and network intrusion security mitigation. The system leverages embedded sensor arrays and intelligent decision logic to detect structural intrusion events and trigger automated security responses in real-time.',
};

export const PUBLICATIONS = [
  {
    id: 'csct2025',
    badge: 'SCOPUS INDEXED',
    badgeColor: 'cyan',
    conference: 'CSCT 2025',
    title:
      'AI-Enforced Construction Safety Compliance System: Real-Time Hazard and PPE Monitoring using YOLOv8 and Deep Learning',
    fullConference: '4th Congress on Smart Computing Technologies (CSCT 2025)',
    location: 'December 13-14, 2025 · Vishwakarma Institute of Technology, Pune',
    paperId: '518',
    role: 'Co-Author and Presenter',
    summary:
      'Applied advanced computer vision (YOLOv8) and deep learning models to create a real-time automated compliance enforcement system for construction sites — detecting PPE violations, hazard zones, and safety protocol breaches with high accuracy. The system enables zero-human-oversight safety monitoring at scale.',
    techStack: ['YOLOv8', 'Deep Learning', 'Computer Vision', 'Python', 'AI/ML'],
  },
  {
    id: 'rasesia2024',
    badge: 'SPRINGER INDEXED',
    badgeColor: 'violet',
    conference: 'RASESIA 2024',
    title: 'SafetySync: Intelligent Collision Detection and Notification Device',
    fullConference:
      '1st International Conference on Recent Advances in Smart Energy Systems & Intelligent Automation (RASESIA 2024)',
    location: 'NIT Kurukshetra, Haryana — July 14, 2024',
    paperId: 'Certificate of Presentation',
    role: 'Co-Author',
    summary:
      'Published a framework for intelligent vehicular safety systems designed for instantaneous collision detection using IoT sensor networks, with automated emergency notification via GPS and communication protocols. Addresses the real-time response gap in vehicular accident management.',
    techStack: ['IoT', 'GPS Modules', 'Arduino', 'Embedded Systems', 'Sensor Integration'],
  },
];

export const CERTIFICATIONS = [
  {
    id: 'ibm',
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM / Coursera',
    detail: '15-Course Specialization',
    courses: 'Cloud Computing · Node.js · React.js · Django · Docker · Kubernetes · Microservices · Gen AI Integration',
    glowColor: '#0062ff',
  },
  {
    id: 'dt',
    title: 'Design Thinking for Innovation',
    issuer: 'Simplilearn',
    detail: 'Certified',
    courses: 'Human-centered design, product ideation, innovation frameworks',
    glowColor: '#00D4FF',
  },
  {
    id: 'wd',
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    detail: 'Certified',
    courses: 'Full-stack web development fundamentals and advanced topics',
    glowColor: '#7C3AED',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'Python, TensorFlow, PyTorch, YOLOv8, Computer Vision', percent: 90 },
      { name: 'NLP & LLMs, Prompt Engineering', percent: 85 },
      { name: 'Agentic AI Workflows', percent: 80 },
    ],
  },
  {
    category: 'Software Development',
    skills: [
      { name: 'JavaScript, HTML/CSS', percent: 92 },
      { name: 'React.js, Node.js, Express', percent: 85 },
      { name: 'Python, SQL, NoSQL', percent: 88 },
      { name: 'Docker, Kubernetes, DevOps', percent: 75 },
    ],
  },
  {
    category: 'IoT & Hardware',
    skills: [
      { name: 'Arduino, GPS Modules, MPU6050', percent: 80 },
      { name: 'Sensor Integration, Camera Modules', percent: 78 },
    ],
  },
  {
    category: 'Business & Operations',
    skills: [
      { name: 'GTM Strategy, Market Entry', percent: 95 },
      { name: 'P&L Management, Operations', percent: 92 },
      { name: 'Community Building, Ecosystem Arch.', percent: 96 },
      { name: 'B2B Sales Systems', percent: 88 },
    ],
  },
];

export const INQUIRY_TYPES = [
  'Exploring co-founder opportunity',
  'Looking for India market entry support',
  'Discussing a board/advisory role',
  'Need technical operations help',
  'Partnership or collaboration',
  'Just want to connect',
];
