import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import type { AerialClass } from "../data/classes";
import { AerialGlyph, SilkRibbons } from "./art/SilkArt";
import { IntensityMeter, LevelBadge } from "./Bits";

const motifFor: Record<string, "silk" | "invert" | "cocoon" | "flow" | "split" | "swing"> = {
  "first-flight": "silk",
  "aerial-foundations": "flow",
  "aerial-flow": "flow",
  "aerial-restore": "cocoon",
  "aerial-strength": "invert",
  "inversions-and-beyond": "invert",
  "open-sky-stretch": "split",
  "little-wings": "swing",
};

export function ClassCard({ cls }: { cls: AerialClass }) {
  return (
    <Link
      to={`/classes/${cls.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-plum/10 bg-white/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${cls.hue}`}>
        <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.4} />
        <AerialGlyph
          motif={motifFor[cls.id] ?? "silk"}
          className="absolute inset-0 h-full w-full p-8 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4">
          <LevelBadge level={cls.level} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{cls.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {cls.summary}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-plum/10 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
            <Clock size={14} /> {cls.durationMin} min
          </span>
          <IntensityMeter value={cls.intensity} label={false} />
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-plum transition-colors group-hover:text-clay">
          Explore class
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
