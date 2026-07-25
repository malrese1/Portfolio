const COLOR_MAP = {
  teal: "#5E8D89",
  coral: "#C96F56",
  mustard: "#D6A329",
  navy: "#183B5B",
} as const;

export function BrushStroke({
  color,
  opacity = 1,
  className = "",
}: {
  color: keyof typeof COLOR_MAP;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3,14 C22,4 58,9 95,5 C134,1 168,10 197,7 L195,60 C176,68 150,58 118,64 C82,71 48,60 22,68 C10,72 4,58 3,44 Z"
        fill={COLOR_MAP[color]}
        opacity={opacity}
      />
    </svg>
  );
}
