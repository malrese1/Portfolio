import { ArrowRight, ExternalLink, FileDown, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { AbstractGraphic } from "@/components/AbstractGraphic";
import { personal } from "@/data/personal";

export function Hero() {
  return (
    <section id="top" className="border-b border-navy/10 bg-cream pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue/30 bg-blue/5 px-4 py-1.5 text-sm font-medium text-blue">
              {personal.targetingLabel}
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-3 font-display text-xl font-semibold text-blue sm:text-2xl">
              {personal.primaryHeadline}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
              {personal.supportingHeadline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {personal.location} &middot; {personal.region}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{personal.availability}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue"
              >
                View Experience
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={personal.resumeHref}
                download
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-navy transition-colors hover:text-blue"
              >
                Contact Malcom
              </a>
            </div>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-blue"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              View Malcom&rsquo;s LinkedIn profile
            </a>
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
