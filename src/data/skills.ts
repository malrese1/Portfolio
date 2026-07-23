export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Prospecting & Pipeline",
    skills: [
      "Account research",
      "Inbound outreach",
      "Outbound prospecting",
      "Cold calling",
      "Email outreach",
      "Lead qualification",
      "Discovery conversations",
      "Pipeline generation",
      "Meeting scheduling",
      "Objection handling",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Salesforce",
      "ZoomInfo",
      "LinkedIn Sales Navigator",
      "Outreach",
      "CRM systems",
      "Google Workspace",
      "Microsoft Office",
    ],
  },
  {
    title: "Sales Strengths",
    skills: [
      "Consultative selling",
      "Relationship building",
      "Active listening",
      "Customer discovery",
      "Cross-functional collaboration",
      "CRM data hygiene",
      "Follow-up",
      "Written and verbal communication",
    ],
  },
];

export interface SellingPrinciple {
  title: string;
  description: string;
}

export const sellingPrinciples: SellingPrinciple[] = [
  {
    title: "Curiosity before pitching",
    description:
      "I ask thoughtful questions to understand the customer's goals, challenges, and priorities before recommending a next step.",
  },
  {
    title: "Consistency builds pipeline",
    description:
      "I believe strong results come from disciplined outreach, organized follow-up, and accurate CRM habits.",
  },
  {
    title: "Trust creates momentum",
    description:
      "Whether I'm speaking with a software buyer, prospective resident, or fitness member, I focus on creating a helpful and credible experience.",
  },
];
