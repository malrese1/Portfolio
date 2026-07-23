export function SketchDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M2,6 C60,2 100,9 160,5 C220,1 260,10 320,4 C350,2 370,7 398,5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
