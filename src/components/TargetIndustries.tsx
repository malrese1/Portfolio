import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { targetIndustries } from "@/data/industries";

export function TargetIndustries() {
  return (
    <section
      id="target-industries"
      aria-labelledby="target-industries-heading"
      className="border-t border-navy/10 bg-cream py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where He's Headed"
            title="Target industries"
            headingId="target-industries-heading"
            description="Areas of interest for his next role — not prior work experience."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Target industries of interest">
            {targetIndustries.map((industry) => (
              <li key={industry}>
                <span className="inline-flex items-center rounded-full border border-blue/25 bg-white px-4 py-2 text-sm font-medium text-navy">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
