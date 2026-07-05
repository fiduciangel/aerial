import type { Discipline, Level } from "@/lib/types";

const disciplineStyles: Record<Discipline, string> = {
  空中瑜珈: "bg-brand-50 text-brand-700 ring-brand-200",
  空中舞綢: "bg-rose-50 text-rose-700 ring-rose-200",
  空中環: "bg-amber-50 text-amber-700 ring-amber-200",
  空中吊床: "bg-teal-50 text-teal-700 ring-teal-200",
};

export function DisciplineTag({ value }: { value: Discipline }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${disciplineStyles[value]}`}
    >
      {value}
    </span>
  );
}

export function LevelTag({ value }: { value: Level }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
      {value}
    </span>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-label={`Google 評分 ${rating} 分`}
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
      </svg>
      <span className="text-sm font-semibold text-slate-700">{rating.toFixed(1)}</span>
    </span>
  );
}
