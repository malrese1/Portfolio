export interface ExperienceEntry {
  company: string;
  title: string;
  location: string;
  dates: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "VIDA Fitness",
    title: "Front Desk Associate",
    location: "Washington, DC",
    dates: "Current",
    current: true,
    bullets: [
      "Engages prospective members, uncovers fitness goals, explains membership options, and connects qualified prospects with Membership Advisors.",
      "Builds rapport quickly while handling account, billing, and scheduling questions in a fast-paced luxury fitness environment.",
      "Partners with Membership Advisors, Personal Trainers, and Operations to create seamless customer handoffs and support retention.",
    ],
  },
  {
    company: "ZoomInfo",
    title: "Sales Development Representative",
    location: "Remote",
    dates: "January 2022 – June 2022",
    bullets: [
      "Recognized four times during the first three months for booking the highest number of qualified product demonstrations on the team.",
      "Consistently exceeded daily prospecting and lead-qualification expectations across inbound and self-generated opportunities.",
      "Conducted high-volume phone, email, and LinkedIn outreach while identifying business needs and aligning prospects with relevant solutions.",
      "Partnered with Account Executives to generate sales-qualified meetings and provide clear context for discovery and follow-up.",
      "Maintained accurate Salesforce records, activity notes, and opportunity details.",
    ],
  },
  {
    company: "eXp Realty",
    title: "Real Estate Agent",
    location: "Washington, DC",
    dates: "May 2020 – July 2024",
    bullets: [
      "Researched local markets and generated new business through referrals, social media, networking, cold calling, and warm outreach.",
      "Averaged approximately five qualified meetings per week through consultative discovery and consistent follow-up.",
      "Qualified buyers and renters, coordinated tours and appointments, and maintained an active pipeline.",
      "Collaborated with senior agents to advance qualified prospects.",
    ],
  },
  {
    company: "Greystar",
    title: "Lease Renewal Specialist",
    location: "Washington, DC",
    dates: "July 2024 – March 2025",
    bullets: [
      "Managed resident renewal conversations, identified needs, addressed objections, and recommended appropriate options.",
      "Maintained accurate CRM documentation and collaborated across leasing and operations teams to support retention.",
    ],
  },
  {
    company: "District of Columbia Public Schools",
    title: "Teaching Assistant",
    location: "Washington, DC",
    dates: "September 2015 – May 2020",
    bullets: [
      "Built trusted relationships with students, families, and faculty while managing competing priorities.",
      "Developed strong communication, adaptability, coaching, and presentation skills.",
      "Earned recognition for professionalism and collaboration.",
    ],
  },
];
