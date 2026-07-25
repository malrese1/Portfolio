import { Calendar, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ExperienceEntry } from "@/data/experience";
import { CrownMark } from "@/components/CrownMark";
import { IconBadge } from "@/components/IconBadge";

export function ExperienceCard({
  entry,
  icon,
  isFirst = false,
}: {
  entry: ExperienceEntry;
  icon: LucideIcon;
  isFirst?: boolean;
}) {
  const {
    company,
    role,
    location,
    dates,
    current,
    emphasis,
    story,
    highlights,
    impact,
    tools,
  } = entry;

  return (
    <li
      className={
        emphasis
          ? "relative -mx-4 rounded-2xl border border-teal/25 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:-mx-6 sm:p-9"
          : `relative -mx-4 rounded-2xl px-4 py-8 transition-all duration-200 hover:bg-white hover:shadow-md sm:-mx-6 sm:px-6 sm:py-9 ${
              isFirst ? "" : "border-t border-navy/10"
            }`
      }
    >
      {emphasis ? (
        <CrownMark className="absolute top-7 right-7 hidden h-8 w-9 text-coral/60 sm:block" />
      ) : null}

      <div className="flex items-start gap-4 sm:gap-5">
        <IconBadge icon={icon} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-2xl font-bold tracking-tight text-navy">
              {role}
            </h3>
            {current ? (
              <span className="inline-flex items-center rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-white">
                Current
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 text-sm font-bold tracking-wide text-navy/80 uppercase">
            {company}
          </p>

          <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {dates}
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/85">
            {story}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <li key={highlight}>
                <span className="inline-flex rounded-full border border-navy/15 px-3 py-1 text-xs font-medium text-navy/75">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-2xl border-l-2 border-coral pl-4 text-base leading-relaxed font-medium text-charcoal">
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
        </div>
      </div>
    </li>
  );
}
