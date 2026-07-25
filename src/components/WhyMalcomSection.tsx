import { Handshake, Compass, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IconBadge } from "@/components/IconBadge";
import { strengths } from "@/data/whyMalcom";

const icons: LucideIcon[] = [Handshake, Compass, TrendingUp];

export function WhyMalcomSection() {
  return (
    <section
      id="why-malcom"
      aria-labelledby="why-malcom-heading"
      className="bg-cream py-20 sm:py-28 dark:bg-charcoal"
    >
      <Container>
        <Reveal>
          <SectionHeading title="Why Malcom?" headingId="why-malcom-heading" accent />
        </Reveal>

        <div className="mt-14 max-w-2xl">
          {strengths.map((strength, index) => {
            const Icon = icons[index] ?? Handshake;
            return (
              <Reveal key={strength.title} delay={index * 0.08}>
                <div
                  className={`flex items-start gap-5 py-7 ${
                    index > 0 ? "border-t border-navy/10 dark:border-cream/10" : ""
                  }`}
                >
                  <IconBadge icon={Icon} />
                  <div>
                    <h3 className="text-base font-bold tracking-wide text-navy uppercase dark:text-cream">
                      {strength.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-charcoal/80 dark:text-cream/80">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
