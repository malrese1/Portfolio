import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-navy/10 bg-cream py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Career timeline"
            headingId="experience-heading"
            description="A path across SaaS, real estate, luxury fitness, leasing, and education — each role sharpening the same core skill: connecting with people and helping them take the next step."
          />
        </Reveal>

        <ol className="mt-12 space-y-6">
          {experience.map((role, index) => (
            <Reveal key={`${role.company}-${role.title}`} delay={index * 0.06}>
              <li className="relative rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
                {role.current ? (
                  <span className="absolute top-6 right-6 inline-flex items-center rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                    Current
                  </span>
                ) : null}

                <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold text-navy">
                    {role.title}
                  </h3>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-base font-medium text-blue">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  {role.company}
                </p>

                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {role.dates}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-navy/10 pt-5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-charcoal/85 sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
