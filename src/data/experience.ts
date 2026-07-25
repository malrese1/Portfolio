export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  current?: boolean;
  emphasis?: boolean;
  story: string;
  highlights: string[];
  impact: string;
  tools?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "ZoomInfo",
    role: "Sales Development Representative",
    location: "Remote",
    dates: "January 2022 – June 2022",
    emphasis: true,
    story:
      "Malcom supported the early stages of the sales cycle across inbound and outbound pipeline at one of the fastest-moving teams in sales technology. He worked inbound-qualified leads alongside self-sourced outbound prospecting — cold calling, multi-channel outreach, and consultative discovery — to help prospects identify real business challenges before qualifying them as opportunities and handing them to Account Executives.",
    highlights: [
      "Inbound and outbound pipeline coverage",
      "Cold calling",
      "Multi-channel outreach",
      "Consultative discovery with enterprise prospects",
      "Consistently exceeded quota",
    ],
    impact:
      "4× SDR of the Week — built on roughly 80 sales conversations and 75 personalized emails a day, turning that volume into 2–3 qualified opportunities daily.",
    tools: [
      "Salesforce",
      "ZoomInfo Engage",
      "LinkedIn Sales Navigator",
      "Gong",
      "SalesOS",
      "OperationsOS",
    ],
  },
  {
    company: "Greystar",
    role: "Lease Renewal Specialist",
    location: "Washington, DC",
    dates: "July 2024 – March 2025",
    story:
      "Malcom owned renewal conversations for an active resident portfolio — understanding what mattered to each resident, addressing objections directly, and recommending the option that actually fit their situation.",
    highlights: [
      "Resident renewal conversations",
      "Objection handling",
      "CRM documentation",
      "Cross-team collaboration with leasing and operations",
    ],
    impact: "Renewed 60–70% of the residents in his portfolio.",
  },
  {
    company: "VIDA Fitness",
    role: "Fitness Sales",
    location: "Washington, DC",
    dates: "Current",
    current: true,
    story:
      "Malcom builds rapport with prospective members, uncovers their goals, and qualifies opportunities through consultative conversations. He goes beyond his core responsibilities to schedule facility tours and proactively generate membership sales — introducing membership options, personal training, and additional services based on what each person actually needs. He thrives in a fast-paced, relationship-driven environment where responsiveness and customer experience are critical.",
    highlights: [
      "Consultative membership conversations",
      "Goal discovery",
      "Facility tours",
      "Proactive membership sales",
      "Partners with Membership Advisors, Personal Trainers, and Operations",
    ],
    impact:
      "Serves as one of the first points of contact for roughly 250 members and prospective members a day.",
  },
  {
    company: "eXp Realty",
    role: "Real Estate Agent",
    location: "Washington, DC",
    dates: "May 2020 – July 2024",
    story:
      "Malcom built his own pipeline from nothing — referrals, social media, cold calling, and warm outreach — in a fully commission-based market where no one hands you a lead list.",
    highlights: [
      "Self-generated pipeline",
      "Referral and network development",
      "Buyer and renter qualification",
      "Tour and appointment coordination",
    ],
    impact:
      "Averaged about five qualified meetings a week, consistently, for four years.",
  },
  {
    company: "District of Columbia Public Schools",
    role: "Teaching Assistant",
    location: "Washington, DC",
    dates: "September 2015 – May 2020",
    story:
      "Before sales, Malcom spent five years building relationships with students, families, and faculty — managing competing priorities and communicating clearly with people who all needed something different from him.",
    highlights: [
      "Relationship building",
      "Communication and adaptability",
      "Recognized for professionalism and collaboration",
    ],
    impact:
      "Built the communication foundation that carries into every conversation he has today.",
  },
];
