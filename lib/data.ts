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
    skills: ["FastAPI", "Django", "DRF", "Flask", "REST APIs", "OpenAPI / Swagger"],
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
    skills: ["Claude API", "Prompt Engineering", "Pandas", "NumPy", "OCR", "Web Scraping"],
  },
  {
    category: "Auth & Security",
    skills: ["JWT", "OAuth2", "RBAC"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS S3", "Docker", "Nginx", "CI/CD", "Linux"],
  },
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

export type Project = {
  title: string;
  type: string;
  stack: string[];
  description: string;
  outcomes: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Vehicle Access Management System (TESS)",
    type: "Enterprise · Client Work",
    stack: ["FastAPI", "PostgreSQL", "HikCentral OpenAPI", "RFID/UHF", "RBAC"],
    description:
      "Enterprise vehicle access platform managing 500+ vehicles across a barrier-gate network, with automated RFID/UHF tag registration and role-based access for contractors, employees, and visitors.",
    outcomes: ["500+ vehicles managed", "Automated tag registration", "3-tier RBAC"],
  },
  {
    title: "AI Label Validation Platform",
    type: "Production · Client Work",
    stack: ["FastAPI", "Claude API", "OCR", "Pandas"],
    description:
      "Embedded the Claude API into a FastAPI service for automated document validation — an Excel-to-PDF comparison engine that catches label/artwork discrepancies before they ship.",
    outcomes: ["~60% less manual QA effort", "40% faster discrepancy detection"],
  },
  {
    title: "AI Diet Recommendation System",
    type: "Personal / Freelance Project",
    stack: ["Python", "FastAPI", "LLM Prompting", "PDF Generation"],
    description:
      "An AI-assisted diet planning app built for a gym: clients submit their stats and goals, an LLM drafts a plan, a trainer reviews and approves it, and the client receives an exported PDF.",
    outcomes: ["End-to-end AI → human-review workflow", "Automated PDF export"],
  },
  {
    title: "Wallet & Referral Platform",
    type: "Enterprise · Client Work",
    stack: ["FastAPI", "PostgreSQL", "Socket.IO", "Cron"],
    description:
      "Backend for a financial wallet system: tree-structured referral accounts, real-time balance dashboards, and fully automated commission payouts run on schedule.",
    outcomes: ["50,000+ transactions supported", "99.9% uptime", "Automated payouts"],
  },
];
