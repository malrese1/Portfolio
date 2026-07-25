import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BrushStroke } from "@/components/BrushStroke";
import { DotGrid } from "@/components/DotGrid";
import { toolCategories } from "@/data/tools";

export function ToolsSection() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative overflow-hidden border-t border-navy/10 bg-cream py-20 sm:py-28 dark:border-cream/10 dark:bg-charcoal"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="absolute top-10 -right-16 h-52 w-96 rotate-3 opacity-[0.07] dark:opacity-[0.02]">
          <BrushStroke color="coral" className="h-full w-full" />
        </div>
        <DotGrid
          rows={4}
          cols={6}
          className="absolute top-6 right-8 text-navy/15 dark:text-cream/15"
        />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Tools"
            title="What he works in"
            headingId="tools-heading"
            accent
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
