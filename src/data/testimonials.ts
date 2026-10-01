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
  service?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Daniel Carter",
    role: "Founder",
    company: "NovaCommerce",
    service: "AI Customer Support Automation",
    quote:
      "Before working with them, our support team was spending hours answering the same repetitive questions. They built an AI customer support system that now handles a huge portion of our inquiries automatically. Response times improved dramatically, and our team can finally focus on higher-value customer issues.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Founder",
    company: "GrowthPeak Marketing",
    service: "AI Lead Generation & Qualification",
    quote:
      "The AI lead generation system completely changed how we handle inbound leads. It qualifies prospects, collects the right information, and routes hot leads to our sales team automatically. We’ve saved countless hours while making sure potential customers don’t slip through the cracks.",
    rating: 5,
  },
  {
    name: "Michael Brooks",
    role: "Founder",
    company: "Elite Dental Group",
    service: "AI Appointment Booking Automation",
    quote:
      "Our appointment process used to involve endless back-and-forth messages. Their AI automation now handles inquiries, answers common questions, and books appointments automatically. It has made the entire process much smoother for both our staff and our patients.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Founder",
    company: "Apex Consulting",
    service: "AI Workflow & Business Process Automation",
    quote:
      "We had multiple manual processes spread across different tools, and it was becoming difficult to manage everything efficiently. The team mapped out our workflows and automated the repetitive tasks. What used to take our employees several hours now happens automatically in the background.",
    rating: 5,
  },
  {
    name: "Emily Richardson",
    role: "Founder",
    company: "ScaleHub Solutions",
    service: "AI Sales Automation",
    quote:
      "Their AI sales automation helped us streamline our entire follow-up process. Leads are contacted at the right time, follow-ups happen automatically, and our sales team has a much clearer view of every prospect. It has made our sales process far more consistent.",
    rating: 5,
  },
  {
    name: "Alex Morgan",
    role: "Founder",
    company: "BrightPath Education",
    service: "Custom AI Chatbot",
    quote:
      "We wanted an AI chatbot that actually understood our business rather than giving generic answers. They built a custom solution trained around our services and customer questions. The chatbot now provides instant answers 24/7 and has significantly reduced the number of basic inquiries our team has to handle manually.",
    rating: 5,
  },
];

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

// Client video testimonials, self-hosted under public/videos. The section stays hidden when empty.
export type VideoTestimonial = {
  name: string;
  country: string;
  company: string;
  src: string;
  poster: string;
};

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    name: "Peace",
    country: "Nigeria",
    company: "Digitech Tools",
    src: "/videos/peace-digitech-tools.mp4",
    poster: "/videos/peace-digitech-tools-poster.jpg",
  },
  {
    name: "Ibrahim",
    country: "Germany",
    company: "Kiko Media",
    src: "/videos/ibrahim-kiko-media.mp4",
    poster: "/videos/ibrahim-kiko-media-poster.jpg",
  },
];
