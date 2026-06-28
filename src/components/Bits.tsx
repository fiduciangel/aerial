import type { ReactNode } from "react";
import { Star } from "lucide-react";
import type { Level } from "../data/classes";

const levelStyles: Record<Level, string> = {
  Beginner: "bg-sage-soft/60 text-plum-deep",
  "All Levels": "bg-blush/70 text-plum-deep",
  Intermediate: "bg-clay-soft/60 text-clay-deep",
  Advanced: "bg-plum/15 text-plum-deep",
  Kids: "bg-gold/30 text-clay-deep",
};

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[level]}`}
    >
      {level}
    </span>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}

/** Five-dot intensity meter, 1–5. */
export function IntensityMeter({
  value,
  label = true,
}: {
  value: number;
  label?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2" title={`Intensity ${value} of 5`}>
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full transition-colors ${
              i < value ? "bg-clay" : "bg-plum/15"
            }`}
          />
        ))}
      </span>
      {label && (
        <span className="text-xs font-medium text-ink-soft">
          Intensity {value}/5
        </span>
      )}
    </span>
  );
}

export function StarRating({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-clay"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-clay" : "fill-none opacity-30"}
        />
      ))}
    </span>
  );
}
