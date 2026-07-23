import type { LucideIcon } from "lucide-react";
import { Trophy, Target, Users, Layers } from "lucide-react";

export interface ResultStat {
  icon: LucideIcon;
  stat: string;
  description: string;
}

export const results: ResultStat[] = [
  {
    icon: Trophy,
    stat: "4x",
    description:
      "Team-leading demo recognition at ZoomInfo during his first three months",
  },
  {
    icon: Target,
    stat: "Consistent",
    description:
      "Consistently exceeded daily prospecting and qualification expectations",
  },
  {
    icon: Users,
    stat: "~5 / week",
    description: "Qualified real-estate meetings generated weekly",
  },
  {
    icon: Layers,
    stat: "5 industries",
    description:
      "Experience across SaaS, real estate, luxury fitness, leasing, and education",
  },
];
