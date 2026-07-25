import { CountUpValue } from "@/components/CountUpValue";

export function MetricCard({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const isNumeric = /\d/.test(value);

  return (
    <div
      className={`-mx-3 flex flex-col gap-1.5 rounded-xl px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md ${className}`}
    >
      <span
        className={`font-bold tracking-tight text-navy ${
          isNumeric ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
        }`}
      >
        <CountUpValue value={value} />
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
