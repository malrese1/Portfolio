import { GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { personal } from "@/data/personal";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-navy/10 bg-white py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-navy/10 bg-cream/60 p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="education-heading"
                className="text-sm font-semibold tracking-wide text-blue uppercase"
              >
                Education
              </h2>
              <p className="mt-1 font-display text-lg font-bold text-navy">
                {personal.education.degree}
              </p>
              <p className="text-sm text-muted">{personal.education.school}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
