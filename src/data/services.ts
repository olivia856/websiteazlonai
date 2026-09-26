export type Service = {
  slug: string;
  icon:
    | "bot"
    | "zap"
    | "mail"
    | "workflow"
    | "message-circle"
    | "database";
  title: string;
  description: string;
  outcomes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-ai-agents",
    icon: "bot",
    title: "Custom AI Agents",
    description:
      "AI assistants that handle support, sales and internal tasks 24/7 — no breaks, no missed handoffs.",
    outcomes: [
      "Round-the-clock customer support coverage",
      "Consistent, on-brand responses every time",
      "Frees your team from repetitive tickets",
    ],
  },
  {
    slug: "lead-generation-automation",
    icon: "zap",
    title: "Lead Generation & Speed-to-Lead Automation",
    description:
      "Instantly capture, qualify and respond to new leads before your competitors even see them.",
    outcomes: [
      "Sub-minute response times on new leads",
      "Automatic qualification and routing",
      "Higher conversion from the same ad spend",
    ],
  },
  {
    slug: "cold-email-outreach",
    icon: "mail",
    title: "Cold Email & Outreach Automation",
    description:
      "Personalised outreach at scale, with sequencing and follow-ups running entirely on autopilot.",
    outcomes: [
      "Hyper-personalised messages at volume",
      "Automated multi-step follow-up sequences",
      "More booked meetings, less manual sending",
    ],
  },
  {
    slug: "workflow-automation",
    icon: "workflow",
    title: "Workflow Automation (n8n / Make / Zapier)",
    description:
      "Connect your tools and eliminate repetitive manual work across your entire tech stack.",
    outcomes: [
      "Systems that talk to each other automatically",
      "Fewer manual data-entry errors",
      "Hours reclaimed every single week",
    ],
  },
  {
    slug: "ai-chatbots-whatsapp",
    icon: "message-circle",
    title: "AI Chatbots & WhatsApp Agents",
    description:
      "Conversational agents for your website, WhatsApp and Instagram that feel genuinely helpful.",
    outcomes: [
      "Instant answers on the channels customers use",
      "Seamless handoff to your team when needed",
      "More engagement without more headcount",
    ],
  },
  {
    slug: "crm-data-automation",
    icon: "database",
    title: "CRM & Data Automation",
    description:
      "Auto-update CRMs, sync data across platforms, and generate reports without lifting a finger.",
    outcomes: [
      "Always up-to-date, clean CRM records",
      "Real-time data sync across your tools",
      "Reports generated and delivered automatically",
    ],
  },
];

export const FAQS = [
  {
    question: "How long does a project take?",
    answer:
      "Most custom AI agents and automations are built and launched within 1–3 weeks, depending on scope and how many systems we're integrating with. We'll give you a clear timeline on our Strategy Call before any work begins.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. We handle all the technical build, testing and setup. You just tell us what's slowing your team down — we design, build and train your team on the rest.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We build with n8n, Make, Zapier, OpenAI, Claude, and direct integrations with tools like HubSpot, WhatsApp, Google Sheets and your CRM — whatever fits your existing stack best.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. Every project includes post-launch support and training for your team, plus optional ongoing maintenance to keep your agents and automations running smoothly as your business grows.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing depends on the complexity and number of automations or agents involved. After our Strategy Call, you'll receive a clear, fixed quote — no vague hourly estimates or surprise costs.",
  },
];
