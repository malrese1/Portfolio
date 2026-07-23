import { Handshake, Compass, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { strengths } from "@/data/whyMalcom";

const icons: LucideIcon[] = [Handshake, Compass, TrendingUp];

export function WhyMalcomSection() {
  return (
    <section
      id="why-malcom"
      aria-labelledby="why-malcom-heading"
      className="bg-cream py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            title="Why Malcom?"
            headingId="why-malcom-heading"
            accent
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {strengths.map((strength, index) => {
            const Icon = icons[index] ?? Handshake;
            return (
              <Reveal key={strength.title} delay={index * 0.08}>
                <div>
                  <Icon
                    className="h-6 w-6 text-teal"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {strength.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal/80">
                    {strength.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
