import { ExternalLink, FileDown, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { BasquiatMark } from "@/components/BasquiatMark";
import { personal } from "@/data/personal";

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/10 bg-navy py-20 text-white sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <BasquiatMark className="mx-auto mb-4 h-3 w-8 text-coral" />
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {personal.finalCta.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {personal.finalCta.copy}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <CTAButton
                href={personal.resumeHref}
                download
                icon={FileDown}
                size="lg"
                onDark
              >
                Download Resume
              </CTAButton>
              <CTAButton
                href={personal.linkedinUrl}
                external
                icon={ExternalLink}
                variant="secondary"
                size="lg"
                onDark
              >
                Connect on LinkedIn
              </CTAButton>
              <CTAButton
                href={personal.emailHref}
                icon={Mail}
                variant="ghost"
                size="lg"
                onDark
              >
                Email Me
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
