"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { City, Discipline, Studio } from "@/lib/types";
import { representativePrice } from "@/lib/studios";
import { StudioCard } from "./StudioCard";
import { Filters, type FilterState } from "./Filters";

const MAX_COMPARE = 3;

export function StudioBrowser({ studios }: { studios: Studio[] }) {
  // Price slider bounds derived from the data.
  const { priceMin, priceMax } = useMemo(() => {
    const prices = studios
      .map((s) => representativePrice(s))
      .filter((p): p is number => p != null);
    const min = Math.floor(Math.min(...prices) / 50) * 50;
    const max = Math.ceil(Math.max(...prices) / 50) * 50;
    return { priceMin: min, priceMax: max };
  }, [studios]);

  const mrtOptions = useMemo(
    () =>
      Array.from(new Set(studios.map((s) => s.mrt_station))).sort((a, b) =>
        a.localeCompare(b, "zh-Hant")
      ),
    [studios]
  );

  const [state, setState] = useState<FilterState>({
    city: "全部",
    disciplines: new Set<Discipline>(),
    maxPrice: priceMax,
    mrt: "全部",
  });
  const [selected, setSelected] = useState<string[]>([]);

  const reset = () =>
    setState({ city: "全部", disciplines: new Set(), maxPrice: priceMax, mrt: "全部" });

  const toggleDiscipline = (d: Discipline) =>
    setState((s) => {
      const next = new Set(s.disciplines);
      next.has(d) ? next.delete(d) : next.add(d);
      return { ...s, disciplines: next };
    });

  const toggleSelect = (id: string) =>
    setSelected((cur) =>
      cur.includes(id)
        ? cur.filter((x) => x !== id)
        : cur.length < MAX_COMPARE
          ? [...cur, id]
          : cur
    );

  const filtered = useMemo(
    () =>
      studios.filter((s) => {
        if (state.city !== "全部" && s.city !== state.city) return false;
        if (
          state.disciplines.size > 0 &&
          !s.disciplines.some((d) => state.disciplines.has(d))
        )
          return false;
        if (state.mrt !== "全部" && s.mrt_station !== state.mrt) return false;
        const price = representativePrice(s);
        if (price != null && state.maxPrice < priceMax && price > state.maxPrice)
          return false;
        return true;
      }),
    [studios, state, priceMax]
  );

  const selectedStudios = selected
    .map((id) => studios.find((s) => s.id === id))
    .filter((s): s is Studio => Boolean(s));

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Filters */}
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <Filters
          state={state}
          priceMin={priceMin}
          priceMax={priceMax}
          mrtOptions={mrtOptions}
          onCity={(c: City | "全部") => setState((s) => ({ ...s, city: c }))}
          onToggleDiscipline={toggleDiscipline}
          onMaxPrice={(v) => setState((s) => ({ ...s, maxPrice: v }))}
          onMrt={(v) => setState((s) => ({ ...s, mrt: v }))}
          onReset={reset}
        />
      </aside>

      {/* Results */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-stone-500">
            共 <span className="font-bold text-stone-800">{filtered.length}</span> 間教室
          </p>
          {selected.length > 0 && (
            <p className="text-sm text-stone-500">
              已選 <span className="font-bold text-brand-700">{selected.length}</span>/
              {MAX_COMPARE} 間比較
            </p>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((s) => (
              <StudioCard
                key={s.id}
                studio={s}
                selected={selected.includes(s.id)}
                disabled={!selected.includes(s.id) && selected.length >= MAX_COMPARE}
                onToggle={toggleSelect}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-500">
            <p className="font-medium">找不到符合條件的教室</p>
            <button
              type="button"
              onClick={reset}
              className="mt-3 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              清除篩選
            </button>
          </div>
        )}
      </section>

      {/* Sticky compare bar */}
      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
            <div className="no-scrollbar flex flex-1 items-center gap-2 overflow-x-auto">
              {selectedStudios.map((s) => (
                <span
                  key={s.id}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-50 py-1 pl-3 pr-1.5 text-sm font-medium text-brand-700"
                >
                  {s.name.split(" ")[0]}
                  <button
                    type="button"
                    onClick={() => toggleSelect(s.id)}
                    aria-label={`移除 ${s.name}`}
                    className="flex h-5 w-5 items-center justify-center rounded-full text-brand-500 hover:bg-brand-100"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelected([])}
              className="shrink-0 text-sm text-stone-400 hover:text-stone-600"
            >
              清除
            </button>
            {selected.length >= 2 ? (
              <Link
                href={`/compare?ids=${selected.join(",")}`}
                className="shrink-0 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                比較費用 ({selected.length})
              </Link>
            ) : (
              <span className="shrink-0 rounded-xl bg-stone-100 px-5 py-2.5 text-sm font-semibold text-stone-400">
                再選 1 間
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
