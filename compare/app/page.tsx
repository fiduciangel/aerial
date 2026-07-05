import Link from "next/link";
import { studios } from "@/lib/studios";
import { StudioBrowser } from "@/components/StudioBrowser";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-6 sm:pt-10">
      {/* Hero */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          台北 · 新北 · 桃園
        </span>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          北部空中運動教室,費用地點一次比清楚
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          整理北部的空中瑜珈、空中舞綢、空中環與空中吊床教室。用城市、項目、價格與捷運站篩選,勾選
          2–3 間就能並排比較費用。
        </p>
        <Link
          href="/disciplines"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-1.5 hover:text-brand-700"
        >
          第一次接觸?先看什麼是空中瑜珈・舞綢・空中環
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <StudioBrowser studios={studios} />
    </div>
  );
}
