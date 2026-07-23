import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-navy/10 bg-white py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Can he do the job?"
            headingId="experience-heading"
            description="A path across SaaS, property management, hospitality, and real estate — each role built around the same core skill: understanding what someone needs and helping them get there."
          />
        </Reveal>

        <ol className="mt-12 space-y-6">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.role}`} delay={index * 0.06}>
              <ExperienceCard entry={entry} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
