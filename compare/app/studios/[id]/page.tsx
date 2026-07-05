import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStudio, studios } from "@/lib/studios";
import { ntd } from "@/lib/format";
import { DisciplineTag, Stars } from "@/components/Bits";

export function generateStaticParams() {
  return studios.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const studio = getStudio(params.id);
  if (!studio) return { title: "找不到教室" };
  return {
    title: `${studio.name}｜${studio.city}${studio.district}`,
    description: studio.notes,
  };
}

export default function StudioDetailPage({ params }: { params: { id: string } }) {
  const studio = getStudio(params.id);
  if (!studio) notFound();

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    studio.address
  )}&z=16&hl=zh-TW&output=embed`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-stone-800"
      >
        <span aria-hidden="true">←</span> 回教室列表
      </Link>

      {/* Header */}
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <span className="rounded bg-stone-100 px-2 py-0.5 font-medium text-stone-600">
              {studio.city}
            </span>
            <span>{studio.district}</span>
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            {studio.name}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Stars rating={studio.google_rating} />
            <span className="text-sm text-stone-500">
              捷運 <span className="font-medium text-stone-700">{studio.mrt_station}</span>
            </span>
          </div>
        </div>
        <Link
          href={`/compare?ids=${studio.id}`}
          className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100"
        >
          加入比較
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {studio.disciplines.map((d) => (
          <DisciplineTag key={d} value={d} />
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Left: pricing + notes */}
        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-stone-900">費用</h2>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <PriceStat label="體驗課" value={ntd(studio.pricing.trial)} />
              <PriceStat label="單堂" value={ntd(studio.pricing.single)} />
              <PriceStat label="月費吃到飽" value={ntd(studio.pricing.monthly)} />
              <PriceStat
                label="評分"
                value={studio.google_rating.toFixed(1)}
                accent
              />
            </div>

            {studio.pricing.package.length > 0 && (
              <div className="mt-4 overflow-hidden rounded-xl border border-stone-200">
                <table className="w-full text-sm">
                  <thead className="bg-stone-50 text-left text-xs text-stone-500">
                    <tr>
                      <th className="px-4 py-2 font-semibold">堂數套票</th>
                      <th className="px-4 py-2 font-semibold">總價</th>
                      <th className="px-4 py-2 text-right font-semibold">每堂平均</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {studio.pricing.package.map((p) => (
                      <tr key={p.sessions}>
                        <td className="px-4 py-2.5 font-medium text-stone-700">
                          {p.sessions} 堂
                        </td>
                        <td className="px-4 py-2.5 text-stone-700">{ntd(p.price)}</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-brand-700">
                          {ntd(Math.round(p.price / p.sessions))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-900">關於這間教室</h2>
            <p className="mt-2 leading-relaxed text-stone-600">{studio.notes}</p>
          </section>

          <section className="flex flex-wrap gap-3">
            <a
              href={studio.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              官方網站 ↗
            </a>
            <a
              href={`https://instagram.com/${studio.ig}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              Instagram @{studio.ig}
            </a>
          </section>
        </div>

        {/* Right: location + map */}
        <aside className="space-y-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <h2 className="text-sm font-bold text-stone-900">地點</h2>
            <p className="mt-1 text-sm text-stone-600">{studio.address}</p>
            <p className="mt-1 text-sm text-stone-500">鄰近 {studio.mrt_station}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            <iframe
              title={`${studio.name} 地圖`}
              src={mapSrc}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              studio.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-stone-100 py-2 text-center text-sm font-semibold text-stone-700 hover:bg-stone-200"
          >
            在 Google 地圖開啟
          </a>
        </aside>
      </div>
    </div>
  );
}

function PriceStat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl bg-stone-50 p-3 text-center">
      <p className="text-xs text-stone-500">{label}</p>
      <p className={`mt-0.5 text-lg font-bold ${accent ? "text-ochre-500" : "text-stone-800"}`}>
        {value}
      </p>
    </div>
  );
}
