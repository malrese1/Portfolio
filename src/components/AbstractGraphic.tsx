import { BrushStroke } from "@/components/BrushStroke";
import { CrownMark } from "@/components/CrownMark";
import { DotGrid } from "@/components/DotGrid";
import { BasquiatMark } from "@/components/BasquiatMark";

export function AbstractGraphic() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#EFE7DA]">
      <BrushStroke
        color="mustard"
        opacity={0.35}
        className="absolute -top-6 -right-10 h-32 w-56 rotate-6"
      />
      <BrushStroke
        color="teal"
        opacity={0.3}
        className="absolute top-16 -left-14 h-32 w-56 -rotate-6"
      />

      <svg
        viewBox="0 0 380 320"
        role="img"
        aria-labelledby="abstract-graphic-title"
        className="absolute inset-0 h-full w-full"
      >
        <title id="abstract-graphic-title">
          Illustration blending Miami architecture, palm forms, and a sunset
          — visual motifs drawn from Malcom&rsquo;s brand identity
        </title>

        {/* horizon + water */}
        <rect x="0" y="230" width="380" height="90" fill="#5E8D89" opacity="0.18" />
        <rect x="0" y="252" width="380" height="4" fill="#5E8D89" opacity="0.4" />

        {/* sun */}
        <circle cx="260" cy="120" r="72" fill="#C96F56" opacity="0.85" />

        {/* distant skyline */}
        <rect x="215" y="190" width="10" height="42" fill="#183B5B" opacity="0.35" />
        <rect x="230" y="170" width="9" height="62" fill="#183B5B" opacity="0.35" />
        <rect x="244" y="200" width="10" height="32" fill="#183B5B" opacity="0.35" />
        <rect x="300" y="180" width="9" height="52" fill="#183B5B" opacity="0.35" />
        <rect x="314" y="205" width="10" height="27" fill="#183B5B" opacity="0.35" />

        {/* art deco building silhouette */}
        <g fill="#183B5B">
          <rect x="34" y="150" width="60" height="130" />
          <rect x="44" y="118" width="40" height="32" />
          <rect x="52" y="96" width="24" height="22" />
          <rect x="60" y="78" width="8" height="18" />
          {/* fluted accent lines */}
          <rect x="50" y="150" width="3" height="130" fill="#5E8D89" opacity="0.6" />
          <rect x="60" y="150" width="3" height="130" fill="#5E8D89" opacity="0.6" />
          <rect x="70" y="150" width="3" height="130" fill="#5E8D89" opacity="0.6" />
        </g>

        {/* palm silhouette */}
        <g fill="none" stroke="#183B5B" strokeWidth="5" strokeLinecap="round">
          <path d="M150 280 C148 230 156 190 168 158" />
          <path d="M168 158 C150 148 132 150 118 142" />
          <path d="M168 158 C155 138 148 122 140 108" />
          <path d="M168 158 C170 136 176 118 182 102" />
          <path d="M168 158 C182 144 198 140 214 136" />
          <path d="M168 158 C178 150 190 150 202 156" />
        </g>
      </svg>

      <CrownMark className="absolute top-6 right-6 h-8 w-9 text-navy/70" />
      <DotGrid rows={4} cols={4} className="absolute bottom-6 left-6 text-navy/25" />
      <BasquiatMark className="absolute top-8 left-8 h-3 w-10 text-coral/70" />
    </div>
  );
}
