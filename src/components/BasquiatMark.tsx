export function BasquiatMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 16"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M2 12.5C7 4.5 10.5 13.5 15 6.5C18.5 1 22 11 27.5 5.5C31 2 34 9.5 38 3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
