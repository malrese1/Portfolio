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
      <rect width="380" height="320" rx="24" fill="#12293F" />
      {edges.map(([from, to], index) => (
        <line
          key={index}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="#5E8D89"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          r={index === 3 ? 10 : 6}
          fill={index === 3 ? "#C96F56" : "#F8F5F0"}
          fillOpacity={index === 3 ? 1 : 0.9}
        />
      ))}
      <path
        d="M300 60C305 52 310 58 314 51"
        stroke="#C96F56"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
