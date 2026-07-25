import { ExternalLink, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { MetricCard } from "@/components/MetricCard";
import { personal } from "@/data/personal";
import { metrics } from "@/data/metrics";

export function Hero() {
  return (
    <section id="top" className="bg-cream pt-16 pb-16 sm:pt-24 sm:pb-20 dark:bg-charcoal">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl dark:text-cream">
            {personal.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-teal sm:text-3xl">
            {personal.primaryHeadline}
          </p>
          <p className="mt-5 max-w-xl text-2xl leading-snug font-medium text-charcoal dark:text-cream">
            {personal.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75 dark:text-cream/75">
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

          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted dark:text-cream/60">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {personal.location}
          </p>
        </div>

        <div className="mt-14 border-t border-navy/10 pt-10 sm:mt-16 sm:pt-12 dark:border-cream/10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-6 lg:divide-x lg:divide-navy/10 dark:lg:divide-cream/10">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                className={
                  index === metrics.length - 1
                    ? "col-span-2 sm:col-span-3 md:col-span-1"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
