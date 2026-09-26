export type TeamMember = {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  email?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Sanjay V",
    title: "Founder",
    image: "/images/sanjay.png",
    linkedin: "https://www.linkedin.com/in/sanjay-v-572482313/",
    instagram: "https://www.instagram.com/sanjayv_ai/",
    youtube: "https://www.youtube.com/@sanjayv_ai",
    email: "sanjayv@azlon-ai.com",
  },
  {
    name: "Saran B",
    title: "Co-Founder",
    image: "/images/saran.png",
    linkedin: "https://www.linkedin.com/in/saran-b-a37782242/",
  },
];
