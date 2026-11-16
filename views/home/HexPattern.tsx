import { useId } from 'react';

interface HexPatternProps {
  /** Position, size, color (`text-*`), opacity and mask. */
  className: string;
  /** Size of the hexagons; 1 is 56×100px per tile. */
  scale?: number;
}

/**
 * Thin hexagon lines drawn as SVG, so they stay sharp at any size. Used behind the hero and the project
 * previews. Each copy gets its own pattern id, so several can be on the page at once.
 */
export default function HexPattern({ className, scale = 1.4 }: HexPatternProps) {
  // useId may include characters such as ':' that are awkward inside url(#…), so keep only safe ones.
  const id = `hex${useId().replace(/[^\w-]/g, '')}`;

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern id={id} width="56" height="100" patternUnits="userSpaceOnUse" patternTransform={`scale(${scale})`}>
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path d="M28 0L28 -34M0 50L-28 66M56 50L84 66" fill="none" stroke="currentColor" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
