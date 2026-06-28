import { Star } from "lucide-react";
import type { Level } from "../data/classes";

// All badges use dark plum-deep text on a light tint for reliable contrast.
const levelStyles: Record<Level, string> = {
  Beginner: "bg-sage-soft/70 text-plum-deep",
  "All Levels": "bg-blush/80 text-plum-deep",
  Intermediate: "bg-clay-soft/80 text-plum-deep",
  Advanced: "bg-plum/15 text-plum-deep",
  Kids: "bg-gold/40 text-plum-deep",
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

/** Five-dot intensity meter, 1–5. Use tone="light" on dark backgrounds. */
export function IntensityMeter({
  value,
  label = true,
  tone = "dark",
}: {
  value: number;
  label?: boolean;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <span className="inline-flex items-center gap-2" title={`Intensity ${value} of 5`}>
      <span className="flex gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full transition-colors ${
              i < value
                ? light
                  ? "bg-clay-soft"
                  : "bg-clay"
                : light
                  ? "bg-linen/30"
                  : "bg-plum/15"
            }`}
          />
        ))}
      </span>
      {label && (
        <span
          className={`text-xs font-medium ${light ? "text-linen/90" : "text-ink-soft"}`}
        >
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
