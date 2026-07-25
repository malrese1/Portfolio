import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SketchDivider } from "@/components/SketchDivider";
import { personal } from "@/data/personal";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-cream py-16 sm:py-20"
    >
      <Container>
        <SketchDivider className="mb-10 h-3 w-28 text-navy/25" />

        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="education-heading"
                className="text-sm font-semibold tracking-wide text-navy uppercase"
              >
                Education
              </h2>
              <p className="mt-1 text-lg font-bold text-navy">
                {personal.education.degree}
              </p>
              <p className="text-sm text-muted">{personal.education.school}</p>
            </div>
          </div>

          {personal.certifications.map((cert) => (
            <div
              key={cert.name}
              className="mt-6 flex flex-col items-start gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Award className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold tracking-wide text-navy uppercase">
                  Certification
                </p>
                <p className="mt-1 text-lg font-bold text-navy">{cert.name}</p>
                <p className="text-sm text-muted">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
