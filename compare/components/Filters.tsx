import type { City, Discipline } from "@/lib/types";
import { allDisciplines, cities } from "@/lib/studios";
import { ntd } from "@/lib/format";

export interface FilterState {
  city: City | "全部";
  disciplines: Set<Discipline>;
  maxPrice: number;
  mrt: string;
}

interface FiltersProps {
  state: FilterState;
  priceMin: number;
  priceMax: number;
  mrtOptions: string[];
  onCity: (c: City | "全部") => void;
  onToggleDiscipline: (d: Discipline) => void;
  onMaxPrice: (v: number) => void;
  onMrt: (v: string) => void;
  onReset: () => void;
}

export function Filters({
  state,
  priceMin,
  priceMax,
  mrtOptions,
  onCity,
  onToggleDiscipline,
  onMaxPrice,
  onMrt,
  onReset,
}: FiltersProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-stone-900">篩選條件</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-medium text-brand-600 hover:text-brand-700"
        >
          清除全部
        </button>
      </div>

      {/* 城市 */}
      <fieldset className="mt-4">
        <legend className="mb-1.5 text-xs font-semibold text-stone-500">城市</legend>
        <div className="flex flex-wrap gap-1.5">
          {(["全部", ...cities] as (City | "全部")[]).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCity(c)}
              aria-pressed={state.city === c}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                state.city === c
                  ? "bg-brand-600 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </fieldset>

      {/* 項目 */}
      <fieldset className="mt-4">
        <legend className="mb-1.5 text-xs font-semibold text-stone-500">
          項目（可複選）
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {allDisciplines.map((d) => {
            const on = state.disciplines.has(d);
            return (
              <button
                key={d}
                type="button"
                onClick={() => onToggleDiscipline(d)}
                aria-pressed={on}
                className={`rounded-full px-3 py-1.5 text-sm font-medium ring-1 ring-inset transition-colors ${
                  on
                    ? "bg-brand-600 text-white ring-brand-600"
                    : "bg-white text-stone-600 ring-stone-200 hover:bg-stone-50"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* 價格區間 */}
      <fieldset className="mt-4">
        <legend className="mb-1 flex items-center justify-between text-xs font-semibold text-stone-500">
          <span>單堂價格上限</span>
          <span className="font-bold text-brand-700">{ntd(state.maxPrice)}</span>
        </legend>
        <input
          type="range"
          min={priceMin}
          max={priceMax}
          step={50}
          value={state.maxPrice}
          onChange={(e) => onMaxPrice(Number(e.target.value))}
          className="w-full accent-brand-600"
          aria-label="單堂價格上限"
        />
        <div className="flex justify-between text-[11px] text-stone-400">
          <span>{ntd(priceMin)}</span>
          <span>{ntd(priceMax)} 以上不限</span>
        </div>
      </fieldset>

      {/* 捷運站 */}
      <fieldset className="mt-4">
        <legend className="mb-1.5 text-xs font-semibold text-stone-500">捷運站 / 車站</legend>
        <select
          value={state.mrt}
          onChange={(e) => onMrt(e.target.value)}
          className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          <option value="全部">全部車站</option>
          {mrtOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}
