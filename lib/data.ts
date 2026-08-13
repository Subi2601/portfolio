export const profile = {
  name: "Subalakshmi V",
  role: "Senior Software Engineer",
  tagline: "Backend Engineer, transitioning into AI & Data Science",
  intro:
    "I design async, event-driven backend systems in Python and FastAPI — and I'm applying that same rigor to data analysis and AI/ML integration, using Pandas, NumPy, and the Claude API to solve real data problems.",
  email: "subalakshmi2601@gmail.com",
  linkedin: "https://www.linkedin.com/in/subalakshmi-v-53058627a/",
  github: "https://github.com/Subi2601",
  yearsExperience: "4.5+",
};

// Every number here traces back to a resume bullet. Nothing rounded up for effect.
export const achievements = [
  { value: "4.5+", label: "Years of Experience" },
  { value: "10,000+", label: "Async Jobs Processed / Day" },
  { value: "500+", label: "Vehicles Managed (TESS)" },
  { value: "50,000+", label: "Transactions Supported" },
  { value: "99.9%", label: "Uptime Achieved" },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Django", "DRF", "Flask", "REST APIs", "OpenAPI / Swagger"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLAlchemy", "Alembic"],
  },
  {
    category: "Async & Real-time",
    skills: ["RabbitMQ", "Celery", "AsyncIO", "Redis", "Socket.IO"],
  },
  {
    category: "AI / Data",
    skills: ["Claude", "Prompt Techniques", "Pandas", "NumPy", "OCR", "n8n", "LLM-Basics", "RAG-Basics", "Ollama"],
  },
  {
    category: "Auth & Security",
    skills: ["JWT", "RBAC"],
  },
  // {
  //   category: "Cloud & DevOps",
  //   skills: ["AWS Lambda", "AWS S3", "Docker", "Nginx", "CI/CD", "Linux"],
  // },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  focus: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Indsys Holdings",
    role: "Senior Software Engineer",
    duration: "Sep 2025 — Present",
    focus: "Automation / Label Processing",
    bullets: [
      "Designed a Python/FastAPI label automation platform, cutting manual effort ~60% and processing 10,000+ async jobs daily through RabbitMQ event pipelines.",
      "Deployed Redis + Socket.IO for real-time order tracking across 200+ daily orders; Celery workers handle scheduled reporting.",
      "Embedded the Claude API for automated QA and artwork validation, and systematized Excel-PDF comparison workflows — cutting discrepancy detection time by 40%.",
    ],
  },
  {
    company: "GatesCloud Technologies",
    role: "Senior Software Engineer",
    duration: "Jan 2025 — Aug 2025",
    focus: "Fintech Wallet & Referral Platform",
    bullets: [
      "Engineered RESTful APIs with FastAPI & PostgreSQL supporting 50,000+ transactions — wallet management, referral logic, tree-structured account hierarchies.",
      "Built real-time dashboards on Socket.IO; optimized SQL queries and indexing strategies.",
      "Automated commission payouts via cron jobs, holding 99.9% uptime; authored full OpenAPI documentation.",
    ],
  },
  {
    company: "Applogiq",
    role: "Software Engineer",
    duration: "Aug 2023 — Jul 2024",
    focus: "SaaS / CRM",
    bullets: [
      "Built REST APIs with FastAPI & PostgreSQL for CRM, e-commerce, and gaming backends, with JWT/OAuth2 auth.",
      "Deployed microservices with Docker on AWS Lambda serverless workflows.",
      "Ran Pytest-based unit testing and performance tuning, reducing bug escape rate by 30%; integrated across 5+ product modules with the React team.",
    ],
  },
  {
    company: "Osiz Technologies",
    role: "Programmer",
    duration: "Aug 2021 — Aug 2023",
    focus: "Blockchain / Web3",
    bullets: [
      "Built blockchain backends with Python, Django & DRF; used Web3.js for smart contract interaction, NFT minting, and token transfers.",
      "Optimized a high-traffic dApp with Redis caching, cutting API response times by up to 50%.",
      "Enforced data integrity through encryption and secure wallet architecture.",
    ],
  },
];

export type ClientProject = {
  title: string;
  type: string;
  stack: string[];
  description: string;
  outcomes: string[];
  github?: string;
  demo?: string;
};

export const clientProjects: ClientProject[] = [
  {
    title: "Vehicle Access Management System (TESS)",
    type: "Enterprise",
    stack: ["FastAPI", "PostgreSQL", "HikCentral OpenAPI", "RFID/UHF", "RBAC"],
    description:
      "Enterprise vehicle access platform managing 500+ vehicles across a barrier-gate network, with automated RFID/UHF tag registration and role-based access for contractors, employees, and visitors.",
    outcomes: ["500+ vehicles managed", "Automated tag registration", "3-tier RBAC"],
  },
  {
    title: "AI Label Validation Platform",
    type: "Production",
    stack: ["FastAPI", "Claude API", "OCR", "Pandas"],
    description:
      "Embedded the Claude API into a FastAPI service for automated document validation — an Excel-to-PDF comparison engine that catches label/artwork discrepancies before they ship.",
    outcomes: ["~60% less manual QA effort", "40% faster discrepancy detection"],
  },
  {
    title: "Wallet & Referral Platform",
    type: "Enterprise",
    stack: ["FastAPI", "PostgreSQL", "Socket.IO", "Cron"],
    description:
      "Backend for a financial wallet system: tree-structured referral accounts, real-time balance dashboards, and fully automated commission payouts run on schedule.",
    outcomes: ["50,000+ transactions supported", "99.9% uptime", "Automated payouts"],
  },
];

export type PersonalProject = {
  title: string;
  stack: string[];
  description: string;
  faqs: { question: string; answer: string }[];
  github?: string;
  demo?: string;
  sampleUrl?: string;
  sampleLabel?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    title: "AI Diet Recommendation System",
    stack: ["Python", "FastAPI", "LLM Prompting", "PDF Generation"],
    description:
      "An AI-assisted diet planning app built for a gym: clients submit their stats and goals, an LLM drafts a plan, a trainer reviews and modifies it as needed, and the client receives an exported PDF.",
    sampleUrl: "/samples/diet-plan-sample.pdf",
    sampleLabel: "View Sample Diet Plan",
    faqs: [
      {
        question: "Why did I build this?",
        answer:
          "The gym's trainers were writing every diet plan by hand — same structure, different numbers, every time. I wanted an LLM to draft the first version from the client's stats and goals, so trainers could spend their time reviewing and personalizing instead of writing from scratch.",
      },
      {
        question: "What was the hardest part?",
        answer:
          "Keeping a human in the loop without slowing things down. The AI draft had to land in a format a trainer could actually review and edit quickly, then flow straight into a clean PDF — not a wall of text that needed reformatting before anyone could use it.",
      },
      {
        question: "What did it achieve?",
        answer:
          "An end-to-end flow: client submits stats and goals, an LLM drafts the plan, a trainer reviews and modifies it as needed, and the client gets a formatted PDF automatically — no manual copy-pasting or formatting on the trainer's end.",
      },
    ],
  },
  {
    title: "AI Job Search & Screening Automation",
    stack: ["n8n", "Adzuna API", "Google Gemini", "Automation"],
    description:
      "An n8n pipeline that pulls fresh job listings on a schedule, scores each one against my skills with an LLM, and emails me a ranked digest — so I only spend time on roles that are actually a fit.",
    sampleUrl: "/samples/jobsearch_op.png",
    sampleLabel: "View Sample Output",
    faqs: [
      {
        question: "What does it do, and why did I build it?",
        answer:
          "It's an end-to-end job discovery and screening automation. It runs on a schedule, pulls fresh listings from multiple search queries, scores each one against my resume and skills with an LLM, and delivers a ranked digest by email. I built it so I'd only spend time reviewing and applying to roles that are actually a fit, instead of manually browsing job boards every day.",
      },
      {
        question: "How does the matching actually work?",
        answer:
          "Listings are sourced via the Adzuna API, with parallel queries covering Software Engineer and AI/GenAI roles across two location filters — Coimbatore-based and Remote. Results are merged and deduplicated, then each listing is passed to Google Gemini with a custom prompt encoding my skill profile (Python, FastAPI, Django, backend stack, GenAI/LLM tooling). The model returns a Fit Score (0–100), matched vs. missing skills, required experience, company type/size, a Target/Practice classification, and a one-line reasoning for the score.",
      },
      {
        question: "What did it actually achieve?",
        answer:
          "It runs automatically 3x a day, screening ~20–30 listings per run and surfacing ~5–8 high-fit \"Target\" matches after AI filtering. That's cut my manual job-search browsing from ~45–60 minutes a day down to a 5-minute review of an already-sorted, formatted digest ranked by Fit Score.",
      },
    ],
  },
];
