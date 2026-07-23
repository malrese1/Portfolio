export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  headingId?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-wide uppercase ${
            light ? "text-blue-300" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
