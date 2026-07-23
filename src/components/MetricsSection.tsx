import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { MetricCard } from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export function MetricsSection() {
  return (
    <section
      id="results"
      aria-label="Performance metrics"
      className="border-y border-navy/10 bg-white py-14 sm:py-16"
    >
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
