import { CountUpValue } from "@/components/CountUpValue";

export function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 py-2 lg:px-2">
      <span className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        <CountUpValue value={value} />
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
