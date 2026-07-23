import { ExternalLink, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { AbstractGraphic } from "@/components/AbstractGraphic";
import { CTAButton } from "@/components/CTAButton";
import { personal } from "@/data/personal";

export function Hero() {
  return (
    <section id="top" className="bg-cream pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-3 text-2xl font-semibold text-teal sm:text-3xl">
              {personal.primaryHeadline}
            </p>
            <p className="mt-5 max-w-xl text-2xl leading-snug font-medium text-charcoal">
              {personal.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
              {personal.valueProp}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href={personal.resumeHref} download size="lg">
                Download Resume
              </CTAButton>
              <CTAButton
                href={personal.linkedinUrl}
                variant="secondary"
                size="lg"
                icon={ExternalLink}
                external
              >
                Connect on LinkedIn
              </CTAButton>
            </div>

            <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {personal.location} &middot; {personal.availability}
            </p>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-square w-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
              <AbstractGraphic />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
