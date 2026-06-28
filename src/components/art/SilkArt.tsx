import type { Motif } from "../../data/gallery";

/**
 * Decorative, self-contained silk artwork. No external images — everything is
 * SVG + gradients so it always renders crisply and loads instantly.
 */

interface RibbonsProps {
  className?: string;
  opacity?: number;
}

/** Soft, layered draping ribbons used as a background flourish. */
export function SilkRibbons({ className = "", opacity = 0.5 }: RibbonsProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d="M70 -20 C 90 160, 30 300, 120 460 C 180 560, 150 620, 130 640"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="46"
        strokeLinecap="round"
      />
      <path
        d="M320 -20 C 300 150, 380 300, 280 470 C 220 570, 250 620, 270 640"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="40"
        strokeLinecap="round"
      />
      <path
        d="M200 -20 C 210 180, 170 320, 210 500 C 230 580, 210 620, 200 640"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="30"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Gestural, single-line glyphs evoking each aerial shape. */
const GLYPHS: Record<Motif, string> = {
  // A hanging silk with a suspended seated figure.
  silk: "M150 30 C 150 120, 120 150, 150 200 C 180 240, 150 280, 150 320 M250 30 C 250 120, 280 150, 250 200 C 220 240, 250 280, 250 320 M150 210 C 180 235, 220 235, 250 210",
  // An inversion — figure folded upside-down.
  invert:
    "M120 40 C 160 70, 240 70, 280 40 M200 55 C 200 140, 150 180, 160 250 C 165 290, 200 300, 200 330 M200 55 C 200 140, 250 180, 240 250",
  // A cocoon wrap.
  cocoon:
    "M140 60 C 110 160, 110 260, 200 340 C 290 260, 290 160, 260 60 C 230 120, 170 120, 140 60 Z M200 150 C 180 200, 180 260, 200 320",
  // Flowing fabric mid-movement (kept within the 0–400 viewBox).
  flow: "M120 60 C 190 120, 120 200, 200 260 C 265 310, 225 355, 290 350 M165 65 C 220 135, 165 210, 245 275",
  // A supported split.
  split:
    "M200 40 L 200 150 M200 150 C 140 200, 110 280, 90 340 M200 150 C 260 200, 290 280, 310 340 M200 150 L 200 120",
  // A joyful swing.
  swing:
    "M120 40 L 150 220 M280 40 L 250 220 M150 220 C 180 250, 220 250, 250 220 M180 235 C 170 280, 230 280, 220 235",
};

interface GlyphProps {
  motif: Motif;
  className?: string;
  strokeWidth?: number;
}

export function AerialGlyph({
  motif,
  className = "",
  strokeWidth = 6,
}: GlyphProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={GLYPHS[motif]}
        stroke="white"
        strokeOpacity="0.92"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PlateProps {
  motif: Motif;
  hue: string;
  caption?: string;
  className?: string;
}

/** A finished artwork "plate" — gradient + ribbons + glyph, used in the gallery. */
export function AerialPlate({ motif, hue, caption, className = "" }: PlateProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${hue} ${className}`}
    >
      <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.35} />
      <div className="bg-grain absolute inset-0 opacity-40" />
      <AerialGlyph
        motif={motif}
        className="absolute inset-0 h-full w-full p-10 transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-deep/70 to-transparent p-5">
          <p className="font-display text-lg text-linen">{caption}</p>
        </div>
      )}
    </div>
  );
}
