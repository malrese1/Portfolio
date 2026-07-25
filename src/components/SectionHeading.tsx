import { BasquiatMark } from "@/components/BasquiatMark";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  headingId,
  accent = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  headingId?: string;
  accent?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {accent && !eyebrow ? (
        <BasquiatMark className="mb-3 h-3 w-8 text-coral" />
      ) : null}
      {eyebrow ? (
        <div className="mb-3 flex items-center gap-2.5">
          {accent ? <BasquiatMark className="h-3 w-8 text-coral" /> : null}
          <p
            className={`text-sm font-semibold tracking-wide uppercase ${
              light ? "text-white" : "text-navy dark:text-cream"
            }`}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        id={headingId}
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy dark:text-cream"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-muted dark:text-cream/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
