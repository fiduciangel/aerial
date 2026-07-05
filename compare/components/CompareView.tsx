"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Studio } from "@/lib/types";
import { getStudios, bestPerSession } from "@/lib/studios";
import { ntd } from "@/lib/format";
import { DisciplineTag, Stars } from "./Bits";

const MAX = 3;

/** 回傳「最佳」值(min 或 max),用來在比較表中標示最划算 / 評分最高。 */
function bestValue(values: (number | null)[], mode: "min" | "max"): number | null {
  const nums = values.filter((v): v is number => v != null);
  if (!nums.length) return null;
  return mode === "min" ? Math.min(...nums) : Math.max(...nums);
}

export function CompareView() {
  const params = useSearchParams();
  const ids = (params.get("ids") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, MAX);
  const studios = getStudios(ids);

  if (studios.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="font-medium text-slate-700">還沒有選擇要比較的教室</p>
        <p className="mt-1 text-sm text-slate-500">
          回到教室列表,勾選 2–3 間教室的「＋ 比較」再回來。
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          去挑教室
        </Link>
      </div>
    );
  }

  const bestTrial = bestValue(studios.map((s) => s.pricing.trial), "min");
  const bestSingle = bestValue(studios.map((s) => s.pricing.single), "min");
  const bestPer = bestValue(studios.map((s) => bestPerSession(s)), "min");
  const bestMonthly = bestValue(studios.map((s) => s.pricing.monthly), "min");
  const bestRating = bestValue(studios.map((s) => s.google_rating), "max");

  const removeHref = (id: string) => {
    const rest = ids.filter((x) => x !== id);
    return rest.length ? `/compare?ids=${rest.join(",")}` : "/compare";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 w-28 bg-slate-50 p-3 text-left align-bottom text-xs font-semibold text-slate-400">
              比較項目
            </th>
            {studios.map((s) => (
              <th
                key={s.id}
                className="min-w-[160px] border-b border-slate-200 p-3 text-left align-top"
              >
                <div className="flex items-start justify-between gap-2">
                  <Link href={`/studios/${s.id}`} className="font-bold text-slate-900 hover:text-brand-700">
                    {s.name}
                  </Link>
                  <Link
                    href={removeHref(s.id)}
                    aria-label={`移除 ${s.name}`}
                    className="shrink-0 rounded-full px-1.5 text-slate-300 hover:bg-slate-100 hover:text-slate-500"
                  >
                    ✕
                  </Link>
                </div>
                <p className="mt-0.5 text-xs font-normal text-slate-500">
                  {s.city}
                  {s.district}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          <Row label="捷運 / 車站">
            {studios.map((s) => (
              <Cell key={s.id}>{s.mrt_station}</Cell>
            ))}
          </Row>

          <Row label="Google 評分">
            {studios.map((s) => (
              <Cell key={s.id} best={s.google_rating === bestRating}>
                <Stars rating={s.google_rating} />
              </Cell>
            ))}
          </Row>

          <Row label="項目">
            {studios.map((s) => (
              <Cell key={s.id}>
                <div className="flex flex-wrap gap-1">
                  {s.disciplines.map((d) => (
                    <DisciplineTag key={d} value={d} />
                  ))}
                </div>
              </Cell>
            ))}
          </Row>

          <PriceRow label="體驗課" studios={studios} pick={(s) => s.pricing.trial} best={bestTrial} />
          <PriceRow label="單堂" studios={studios} pick={(s) => s.pricing.single} best={bestSingle} />
          <PriceRow
            label="每堂最低"
            studios={studios}
            pick={(s) => bestPerSession(s)}
            best={bestPer}
          />
          <PriceRow
            label="月費吃到飽"
            studios={studios}
            pick={(s) => s.pricing.monthly}
            best={bestMonthly}
          />

          <Row label="堂數套票">
            {studios.map((s) => (
              <Cell key={s.id}>
                {s.pricing.package.length ? (
                  <ul className="space-y-0.5 text-slate-600">
                    {s.pricing.package.map((p) => (
                      <li key={p.sessions}>
                        {p.sessions} 堂 {ntd(p.price)}
                        <span className="text-xs text-slate-400">
                          （每堂 {ntd(Math.round(p.price / p.sessions))}）
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-slate-400">—</span>
                )}
              </Cell>
            ))}
          </Row>
        </tbody>
      </table>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr>
      <th
        scope="row"
        className="sticky left-0 z-10 bg-slate-50 p-3 text-left align-top text-xs font-semibold text-slate-500"
      >
        {label}
      </th>
      {children}
    </tr>
  );
}

function Cell({ children, best }: { children: React.ReactNode; best?: boolean }) {
  return (
    <td
      className={`border-b border-slate-100 p-3 align-top ${
        best ? "bg-sage-50" : ""
      }`}
    >
      <div className="flex items-center gap-1.5">
        {children}
        {best && (
          <span className="rounded bg-sage-100 px-1.5 py-0.5 text-[10px] font-bold text-sage-700">
            最佳
          </span>
        )}
      </div>
    </td>
  );
}

function PriceRow({
  label,
  studios,
  pick,
  best,
}: {
  label: string;
  studios: Studio[];
  pick: (s: Studio) => number | null;
  best: number | null;
}) {
  return (
    <Row label={label}>
      {studios.map((s) => {
        const v = pick(s);
        const isBest = v != null && v === best;
        return (
          <Cell key={s.id} best={isBest}>
            <span className={`font-semibold ${isBest ? "text-sage-700" : "text-slate-800"}`}>
              {ntd(v)}
            </span>
          </Cell>
        );
      })}
    </Row>
  );
}
