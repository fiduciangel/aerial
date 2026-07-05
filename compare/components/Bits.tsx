import type { Discipline } from "@/lib/types";

// 莫蘭迪色系的項目標籤:霧玫瑰 / 灰藍 / 灰芥黃 / 灰綠。
const disciplineStyles: Record<Discipline, string> = {
  空中瑜珈: "bg-dust-50 text-dust-700 ring-dust-200",
  空中舞綢: "bg-brand-50 text-brand-700 ring-brand-200",
  空中環: "bg-ochre-50 text-ochre-700 ring-ochre-200",
  空中吊床: "bg-sage-50 text-sage-700 ring-sage-200",
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

export function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-label={`Google 評分 ${rating} 分`}
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-ochre-400" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
      </svg>
      <span className="text-sm font-semibold text-stone-700">{rating.toFixed(1)}</span>
    </span>
  );
}
