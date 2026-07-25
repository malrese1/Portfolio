export function DotGrid({
  rows = 4,
  cols = 4,
  className = "",
}: {
  rows?: number;
  cols?: number;
  className?: string;
}) {
  const spacing = 10;
  const dotRadius = 1.6;
  const width = cols * spacing;
  const height = rows * spacing;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        cx: c * spacing + spacing / 2,
        cy: r * spacing + spacing / 2,
      });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      className={className}
    >
      {dots.map((dot, index) => (
        <circle key={index} cx={dot.cx} cy={dot.cy} r={dotRadius} fill="currentColor" />
      ))}
    </svg>
  );
}
