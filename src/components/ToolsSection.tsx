import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { toolCategories } from "@/data/tools";

export function ToolsSection() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="border-t border-navy/10 bg-cream py-20 sm:py-28 dark:border-cream/10 dark:bg-charcoal"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tools"
            title="What he works in"
            headingId="tools-heading"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.05}>
              <div className="rounded-2xl border border-navy/10 bg-white p-6 dark:border-cream/10 dark:bg-white/5">
                <p className="text-xs font-semibold tracking-wide text-navy uppercase dark:text-cream">
                  {category.category}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <li key={tool}>
                      <span className="inline-flex rounded-full bg-navy/5 px-3 py-1.5 text-sm font-medium text-navy dark:bg-cream/10 dark:text-cream">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
