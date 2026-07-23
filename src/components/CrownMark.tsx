export function CrownMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 52"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M6 34 L14 9 L22 27 L30 6 L38 28 L47 10 L54 34"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 35.5 L53 35.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M29 39 C28 43 31 45 29 49"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
