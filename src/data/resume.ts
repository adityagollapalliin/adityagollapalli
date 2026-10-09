// ── Single source of truth for site content ──

export const profile = {
  name: "Aditya Gollapalli",
  title: "Software Engineer · Data Analyst · Business Systems Analyst",
  tagline:
    "I build data pipelines, SaaS integrations, and workflow automation — mostly in Snowflake environments. I'm comfortable picking up an unfamiliar platform API, working out what it can and cannot do, and turning that into a spec another team can build against.",
  email: "adityagollapalli@gmail.com",
  location: "Hyderabad, India",
  links: [
    { label: "GitHub", url: "https://github.com/adityagollapalli" },
    { label: "LinkedIn", url: "https://linkedin.com/in/adityagollapalli" },
  ],
};

export const about = [
  "My work usually starts at early requirements conversations and runs through to testing and handoff. At Snowflake I built Python integrations across PagerDuty, Workday, Wrike, and ServiceNow — replacing manual reconciliation with scheduled pipelines and authoring the interface agreements that let partner teams build in parallel.",
  "I also apply ML and LLM techniques to real problems — including a stylometric AI-detection ensemble that reached 94.5% accuracy on court documents. I hold an MS in Computer Science (Data Science) from Seattle University.",
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  tech?: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer, AI Engineering",
    company: "EPAM Systems",
    period: "Aug 2026 - Present",
    location: "Hyderabad, India",
    points: [
      "My work entails: Building Custom LLM's, Researching on LLM's, RunPods GPU's",
      "Will add more as responsibilities as I am in onboarding",
    ],
    tech: ["Python", "ML", "Model Inferecing", "AI", "Research", "LLM's" ],
  },
  {
    role: "Business Systems Analyst, Enterprise Applications",
    company: "Snowflake Inc.",
    period: "Aug 2025 – Feb 2026",
    location: "Dublin, CA, USA",
    points: [
      "Built a Python integration ingesting PagerDuty on-call schedules and Workday compensation data into Snowflake, replacing a manual month-end reconciliation with a scheduled pipeline that computes on-call pay automatically.",
      "Migrated the pipeline to Snowflake-native execution with Snowpark and scheduled Tasks, adding cursor pagination, escalation-policy caching, and rate-limit-aware retry logic.",
      "Designed a bidirectional Wrike ↔ ServiceNow integration — a blocked task raises a routed ticket via signed webhook; resolution auto-unblocks the task and writes back the ticket reference.",
      "Authored the interface agreement — OAuth flows, payload schemas, HMAC verification, idempotency and rate-limit constraints — enabling the ServiceNow team to build in parallel without follow-up cycles.",
      "Ran discovery on an email-based legal review process and documented requirements for a ServiceNow build: conditional intake, risk-based routing, dynamic approvals, and SLA-driven escalation.",
      "Designed RBAC frameworks for secure data access across integrated systems; authored and executed test cases for every decision path and coordinated UAT with stakeholders.",
    ],
    tech: ["Python", "Snowflake", "Snowpark", "PagerDuty", "Workday", "Wrike", "ServiceNow"],
  },
  {
    role: "Junior Data Analyst",
    company: "HVACIntel Corp. (Mechasense)",
    period: "May 2025 – Aug 2025",
    location: "Seattle, WA, USA (Remote)",
    points: [
      "Proposed and framed the architecture for an AWS Bedrock field assistant: technicians photograph an equipment data plate and get answers grounded in that unit's manual.",
      "Designed retrieval as a routing layer — vector search identifies the correct manual from a partially legible model number, with a technician confirmation step before any answer is generated.",
      "Built Python scripts to extract, process, and validate outdoor-unit telemetry — pressures, line temperatures, compressor current — feeding downstream analytics.",
      "Benchmarked live telemetry against manufacturer specs at matched ambient conditions, tracking deviation over time to separate sustained faults from single-reading noise.",
      "Surfaced equipment degradation ahead of failure; one weekly stakeholder finding prompted a preventive repair before the unit failed in service.",
    ],
    tech: ["Python", "AWS Bedrock", "Vector Search", "Analytics"],
  },
  {
    role: "Trainee Developer Intern",
    company: "AdvanceSoft Inc.",
    period: "Jun 2024 – May 2025",
    location: "Seattle, WA, USA (Remote)",
    points: [
      "Translated business requirements into detailed technical specifications and use cases for engineering teams.",
      "Supported QA and UAT cycles by authoring test scenarios and coordinating feedback loops between users and developers.",
      "Contributed to Agile delivery through iterative requirement updates and feedback incorporation.",
    ],
    tech: ["Agile", "QA", "UAT"],
  },
  {
    role: "Cybersecurity Intern",
    company: "Verzeo EdTech",
    period: "May 2021 – Jul 2021",
    location: "Hyderabad, India",
    points: [
      "Gained foundational exposure to system vulnerabilities, security testing techniques, and prevention strategies.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Programming",
    items: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Data Engineering",
    items: ["Snowflake", "Snowpark", "ETL pipeline design", "Data modeling", "RBAC", "Data quality"],
  },
  {
    category: "AI & LLM",
    items: ["LLM / OpenAI APIs", "Prompt engineering", "Synthetic data generation"],
  },
  {
    category: "Backend & Integration",
    items: ["REST APIs", "Webhooks", "OAuth 2.0", "Scheduled jobs", "Error handling"],
  },
  {
    category: "ML & NLP",
    items: ["Supervised learning", "Ensemble methods", "Feature engineering", "TF-IDF", "scikit-learn", "LightGBM", "CatBoost"],
  },
  {
    category: "Platforms & Databases",
    items: ["PagerDuty", "Wrike", "Workday", "Jira", "Coda", "PostgreSQL", "MySQL"],
  },
];

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: "LegalSense — AI-Fabricated Legal Document Detection",
    description:
      "Data Science capstone. Built an 800-document corpus pairing Washington State court opinions with GPT-4 rewrites, engineered stylometric features (TF-IDF over 3–5 gram BPE tokens), and trained a four-model soft-voting ensemble reaching 94.5% accuracy — threshold tuned to favor precision and reduce false accusations against human-drafted work. Led execution and shipped a Streamlit UI.",
    tech: ["Python", "scikit-learn", "LightGBM", "CatBoost", "NLP", "Streamlit"],
  },
  {
    name: "Customer Churn Prediction",
    description:
      "Predictive models on ISP customer data achieving ~85% accuracy; identified leading churn drivers and deployed a lightweight Flask API for real-time inference.",
    tech: ["Python", "Flask", "scikit-learn"],
  },
  {
    name: "Twitter Data Pipeline",
    description:
      "Automated ETL pipeline with scheduled Airflow DAGs to ingest, transform, and load social media data.",
    tech: ["Python", "Data ETL"],
  },
];

export const education = [
  {
    degree: "MS, Computer Science (Data Science)",
    institution: "Seattle University — Seattle, WA, USA",
    period: "Sep 2022 – Mar 2024",
    detail: "Dean's Honor Roll (Spring 2024) · Capstone project leader and co-presenter.",
  },
  {
    degree: "BTech, Computer Science",
    institution: "Mahatma Gandhi Institute of Technology — Hyderabad, India",
    period: "Aug 2018 – Aug 2022",
    detail: "",
  },
];

export interface Certification {
  label: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    label: "AWS Certified Cloud Practitioner (Aug 2026 – Aug 2029)",
    url: "https://www.credly.com/badges/e4c85e20-52f9-4cec-b872-472d72fd9490",
  },
  {
    label: "DataCamp: Data Analyst Associate",
    url: "https://www.datacamp.com/certificate/DAA0016527998969",
  },
  {
    label: "DataCamp: Intermediate SQL · Introduction to SQL",
  },
];

export interface Badge {
  name: string;
  issuer: string;
  validity: string;
  image: string;
  url: string;
}

export const badges: Badge[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    validity: "Aug 2026 – Aug 2029",
    image:
      "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    url: "https://www.credly.com/badges/e4c85e20-52f9-4cec-b872-472d72fd9490",
  },
];
