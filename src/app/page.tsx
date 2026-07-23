import { Hero } from "@/components/Hero";
import { PerformanceSnapshot } from "@/components/PerformanceSnapshot";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Skills } from "@/components/Skills";
import { HowISell } from "@/components/HowISell";
import { TargetIndustries } from "@/components/TargetIndustries";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <PerformanceSnapshot />
      <About />
      <ExperienceTimeline />
      <Skills />
      <HowISell />
      <TargetIndustries />
      <Education />
      <Contact />
    </>
  );
}
