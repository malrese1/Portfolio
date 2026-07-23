import { Search, Wrench, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

const categoryIcons: LucideIcon[] = [Search, Wrench, Handshake];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-navy/10 bg-white py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What he brings to the table"
            headingId="skills-heading"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Search;
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-navy/10 bg-cream/60 p-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {category.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <span className="inline-flex rounded-full border border-navy/15 bg-white px-3 py-1.5 text-sm text-charcoal/80">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
