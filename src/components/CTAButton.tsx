import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary: "bg-navy text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-navy/20 bg-transparent text-navy hover:border-navy/40 hover:bg-navy/5 hover:-translate-y-0.5",
  ghost: "text-navy hover:text-teal",
};

const variantStylesOnDark: Record<Variant, string> = {
  primary: "bg-white text-navy shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  download,
  external,
  onDark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  download?: boolean;
  external?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  const colors = onDark ? variantStylesOnDark[variant] : variantStyles[variant];

  return (
    <a
      href={href}
      download={download ? true : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] active:shadow-none active:translate-y-0 ${colors} ${sizeStyles[size]} ${className}`}
    >
      {children}
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
