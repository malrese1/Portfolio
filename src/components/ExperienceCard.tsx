import { Calendar, MapPin } from "lucide-react";
import type { ExperienceEntry } from "@/data/experience";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const { company, role, location, dates, current, emphasis, story, highlights, impact, tools } =
    entry;

  return (
    <li
      className={`relative rounded-2xl p-6 sm:p-8 ${
        emphasis
          ? "border-2 border-teal/30 bg-white shadow-md"
          : "border border-navy/10 bg-white/60"
      }`}
    >
      {current ? (
        <span className="absolute top-6 right-6 inline-flex items-center rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
          Current
        </span>
      ) : null}

      <h3 className="text-xl font-bold text-navy">{role}</h3>
      <p className="mt-1 text-base font-semibold text-navy/80">{company}</p>

      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {dates}
        </span>
      </div>

      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/85">
        {story}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {highlights.map((highlight) => (
          <li key={highlight}>
            <span className="inline-flex rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/80">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-l-2 border-coral pl-4 text-[15px] leading-relaxed font-medium text-charcoal">
        {impact}
      </p>

      {tools && tools.length > 0 ? (
        <div className="mt-6 border-t border-navy/10 pt-5">
          <p className="mb-2.5 text-xs font-semibold tracking-wide text-muted uppercase">
            Tools
          </p>
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool}>
                <span className="inline-flex rounded-full border border-navy/15 px-3 py-1 text-xs font-medium text-navy/80">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}
