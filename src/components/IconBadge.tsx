import type { LucideIcon } from "lucide-react";

export function IconBadge({
  icon: Icon,
  size = "md",
}: {
  icon: LucideIcon;
  size?: "md" | "lg";
}) {
  const dimensions = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const iconSize = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-navy ${dimensions}`}
    >
      <Icon className={`${iconSize} text-white`} aria-hidden="true" strokeWidth={1.75} />
    </span>
  );
}
