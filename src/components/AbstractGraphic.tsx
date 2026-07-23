export function AbstractGraphic() {
  const nodes = [
    { x: 60, y: 70 },
    { x: 230, y: 40 },
    { x: 340, y: 130 },
    { x: 180, y: 190 },
    { x: 40, y: 220 },
    { x: 300, y: 260 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [0, 3],
    [3, 4],
    [3, 5],
    [2, 5],
  ];

  return (
    <svg
      viewBox="0 0 380 320"
      role="img"
      aria-labelledby="abstract-graphic-title"
      className="h-full w-full"
    >
      <title id="abstract-graphic-title">
        Abstract network graphic representing connection and pipeline
        building
      </title>
      <rect width="380" height="320" rx="24" fill="#0B2038" />
      {edges.map(([from, to], index) => (
        <line
          key={index}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="#2563EB"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          r={index === 3 ? 10 : 6}
          fill={index === 3 ? "#2563EB" : "#F7F4EE"}
          fillOpacity={index === 3 ? 1 : 0.9}
        />
      ))}
    </svg>
  );
}
