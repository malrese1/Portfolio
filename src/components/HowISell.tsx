import { Compass, RefreshCw, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { sellingPrinciples } from "@/data/skills";

const principleIcons: LucideIcon[] = [Compass, RefreshCw, Handshake];

export function HowISell() {
  return (
    <section
      id="how-i-sell"
      aria-labelledby="how-i-sell-heading"
      className="border-t border-white/10 bg-navy py-20 text-white sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How I Sell"
            title="The principles behind the approach"
            headingId="how-i-sell-heading"
            light
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {sellingPrinciples.map((principle, index) => {
            const Icon = principleIcons[index] ?? Compass;
            return (
              <Reveal key={principle.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {principle.description}
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
