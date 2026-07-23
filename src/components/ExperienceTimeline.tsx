import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SketchDivider } from "@/components/SketchDivider";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-white py-20 sm:py-28"
    >
      <Container>
        <SketchDivider className="mb-10 h-3 w-28 text-navy/25" />

        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Can he do the job?"
            headingId="experience-heading"
            description="A path across SaaS, property management, hospitality, and real estate — each role built around the same core skill: understanding what someone needs and helping them get there."
          />
        </Reveal>

        <ol className="mt-10 space-y-4">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.role}`} delay={index * 0.06}>
              <ExperienceCard entry={entry} isFirst={index === 0} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
