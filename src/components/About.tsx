import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-navy/10 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="His story, in short"
            headingId="about-heading"
          />
        </Reveal>

        <div className="mt-8 max-w-3xl space-y-5">
          {personal.aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-lg leading-relaxed text-charcoal/85">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
