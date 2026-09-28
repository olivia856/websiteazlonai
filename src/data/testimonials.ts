// Client testimonials. While there are no real ones yet, the site shows the
// example use cases below instead (labeled as examples, no names or ratings).
// To add a real testimonial, push an entry like:
//   { name: "Jane Doe", role: "Founder", company: "Acme Co", quote: "...", rating: 5 }
// As soon as TESTIMONIALS has entries, the site switches to showing them.
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [];

export type UseCase = {
  industry: string;
  who: string;
  problem: string;
  solution: string;
  tools: string[];
};

export const USE_CASES: UseCase[] = [
  {
    industry: "Healthcare",
    who: "Clinic owner",
    problem: "Missed calls and WhatsApp messages after hours meant lost appointments.",
    solution:
      "A WhatsApp AI receptionist that answers FAQs, books slots into the calendar and sends reminders 24/7.",
    tools: ["WhatsApp", "OpenAI", "Google Sheets"],
  },
  {
    industry: "Real Estate",
    who: "Agency founder",
    problem: "Leads from ads sat in a spreadsheet for hours before anyone called them back.",
    solution:
      "An AI agent that qualifies every new lead within minutes, scores it and pushes hot leads straight to the CRM.",
    tools: ["n8n", "HubSpot", "Claude"],
  },
  {
    industry: "E-commerce",
    who: "Store owner",
    problem: "The team spent hours a day answering “where is my order?” messages.",
    solution:
      "A support agent that looks up order status, handles returns and hands edge cases to a human.",
    tools: ["Make", "OpenAI", "WhatsApp"],
  },
  {
    industry: "Agencies",
    who: "Operations manager",
    problem: "Client onboarding meant copying the same details across five different tools.",
    solution:
      "One intake form that creates the project, folders, invoices and welcome emails automatically.",
    tools: ["Zapier", "Google Sheets"],
  },
  {
    industry: "Coaching & Education",
    who: "Founder",
    problem: "Content repurposing and follow-up emails were eating the founder’s week.",
    solution:
      "An AI workflow that turns each session into notes, social posts and personalised follow-ups.",
    tools: ["n8n", "Claude"],
  },
  {
    industry: "Professional Services",
    who: "Head of sales",
    problem: "Reps wasted time researching prospects and writing proposals from scratch.",
    solution:
      "An AI research assistant that drafts prospect briefs and first-pass proposals from CRM data.",
    tools: ["HubSpot", "OpenAI"],
  },
];

// Add client video testimonials here; the section stays hidden until one has a youtubeId.
export const VIDEO_TESTIMONIALS: { title: string; youtubeId: string }[] = [];
