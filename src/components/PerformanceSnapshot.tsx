import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { results } from "@/data/results";

export function PerformanceSnapshot() {
  return (
    <section id="results" aria-labelledby="results-heading" className="bg-cream py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 id="results-heading" className="sr-only">
            Performance snapshot
          </h2>
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue uppercase">
            Performance Snapshot
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Reveal key={result.description} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="font-display text-2xl font-bold text-navy">
                    {result.stat}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {result.description}
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
