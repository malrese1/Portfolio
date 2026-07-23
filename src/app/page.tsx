import { Hero } from "@/components/Hero";
import { MetricsSection } from "@/components/MetricsSection";
import { WhyMalcomSection } from "@/components/WhyMalcomSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ToolsSection } from "@/components/ToolsSection";
import { Education } from "@/components/Education";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsSection />
      <WhyMalcomSection />
      <ExperienceTimeline />
      <ToolsSection />
      <Education />
      <FinalCta />
    </>
  );
}
