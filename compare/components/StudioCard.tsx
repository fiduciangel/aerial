import Link from "next/link";
import type { Studio } from "@/lib/types";
import { bestPerSession } from "@/lib/studios";
import { ntd } from "@/lib/format";
import { DisciplineTag, LevelTag, Stars } from "./Bits";

interface StudioCardProps {
  studio: Studio;
  selected: boolean;
  disabled: boolean;
  onToggle: (id: string) => void;
}

export function StudioCard({ studio, selected, disabled, onToggle }: StudioCardProps) {
  const perSession = bestPerSession(studio);

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${
        selected ? "border-brand-400 ring-1 ring-brand-300" : "border-slate-200"
      }`}
    >
      {/* Compare toggle */}
      <button
        type="button"
        onClick={() => onToggle(studio.id)}
        disabled={disabled}
        aria-pressed={selected}
        className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          selected
            ? "bg-brand-600 text-white"
            : disabled
              ? "cursor-not-allowed bg-slate-100 text-slate-300"
              : "bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-700"
        }`}
      >
        {selected ? "✓ 比較中" : "＋ 比較"}
      </button>

      <Link href={`/studios/${studio.id}`} className="flex flex-1 flex-col">
        <div className="pr-16">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600">
              {studio.city}
            </span>
            <span>{studio.district}</span>
          </div>
          <h3 className="mt-1.5 text-lg font-bold leading-snug text-slate-900 group-hover:text-brand-700">
            {studio.name}
          </h3>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <Stars rating={studio.google_rating} />
          <span className="inline-flex items-center gap-1 text-sm text-slate-500">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 2a5 5 0 00-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
                clipRule="evenodd"
              />
            </svg>
            {studio.mrt_station}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {studio.disciplines.map((d) => (
            <DisciplineTag key={d} value={d} />
          ))}
        </div>

        {/* Price highlights */}
        <dl className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center">
          <div>
            <dt className="text-[11px] text-slate-500">體驗課</dt>
            <dd className="text-sm font-bold text-slate-800">{ntd(studio.pricing.trial)}</dd>
          </div>
          <div className="border-x border-slate-200">
            <dt className="text-[11px] text-slate-500">單堂</dt>
            <dd className="text-sm font-bold text-slate-800">{ntd(studio.pricing.single)}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-slate-500">每堂最低</dt>
            <dd className="text-sm font-bold text-brand-700">{ntd(perSession)}</dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {studio.level.map((l) => (
            <LevelTag key={l} value={l} />
          ))}
          {studio.pricing.monthly != null && (
            <span className="ml-auto text-xs text-slate-500">
              月費 <span className="font-semibold text-slate-700">{ntd(studio.pricing.monthly)}</span>
            </span>
          )}
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-1.5">
          看完整資訊
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L11.6 10 7.3 5.7a1 1 0 010-1.4z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}
