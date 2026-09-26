export type ProcessStep = {
  number: string;
  icon: "search" | "phone-call" | "rocket";
  title: string;
  description: string;
  deliverables: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    icon: "search",
    title: "Discovery",
    description:
      "We learn about your business, goals, and the repetitive tasks slowing your team down.",
    deliverables: [
      "Deep dive into your current workflows",
      "Identification of high-impact automation opportunities",
      "Clarity on your goals and priorities",
    ],
  },
  {
    number: "02",
    icon: "phone-call",
    title: "Strategy Call",
    description:
      "We map out exactly which AI agents and automations will give you the biggest ROI, with a clear plan, timeline and quote.",
    deliverables: [
      "Tailored automation roadmap",
      "Transparent timeline and fixed quote",
      "No-obligation recommendation",
    ],
  },
  {
    number: "03",
    icon: "rocket",
    title: "Start Project",
    description:
      "We build, test and launch your automation, then train your team and support you after go-live.",
    deliverables: [
      "Fully built and tested AI agents / automations",
      "Team training and documentation",
      "Post-launch support",
    ],
  },
];
