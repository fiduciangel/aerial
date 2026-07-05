import Link from "next/link";
import type { Metadata } from "next";
import { disciplineInfos } from "@/lib/disciplines";

export const metadata: Metadata = {
  title: "認識空中運動｜什麼是空中瑜珈、舞綢、空中環",
  description:
    "空中瑜珈、空中舞綢、空中環、空中吊床有什麼不同?一次看懂四種空中運動的特色、強度與適合的人。",
};

export default function DisciplinesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      {/* Hero */}
      <div className="mb-8">
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          新手指南
        </span>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          什麼是空中運動?
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          「空中運動」泛指借助懸掛道具、把身體帶離地面的運動。北部教室最常見的有以下四種
          —— 特色與強度各不同,先認識一下,再挑最適合你的教室。
        </p>
      </div>

      {/* Discipline cards */}
      <div className="space-y-5">
        {disciplineInfos.map((d) => (
          <article
            key={d.name}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:p-6">
              {/* Left: identity */}
              <div className="sm:w-48 sm:shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${d.accent.dot}`} />
                  <h2 className="text-xl font-bold text-stone-900">{d.name}</h2>
                </div>
                <p className="mt-0.5 text-sm text-stone-400">{d.en}</p>

                {/* Intensity meter */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span>體能強度</span>
                    <span className="font-semibold text-stone-700">{d.intensityLabel}</span>
                  </div>
                  <div className="mt-1 flex gap-1" aria-label={`強度 ${d.intensity} / 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < d.intensity ? d.accent.bar : "bg-stone-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div className="flex-1">
                <p className="font-medium text-stone-700">{d.oneLiner}</p>
                <p className="mt-2 leading-relaxed text-stone-600">{d.intro}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.features.map((f) => (
                    <span
                      key={f}
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${d.accent.chip}`}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-sm text-stone-500">
                  <span className="font-semibold text-stone-600">適合誰:</span> {d.goodFor}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
        <h2 className="text-lg font-bold text-stone-900">找到有興趣的項目了嗎?</h2>
        <p className="mt-1 text-sm text-stone-600">
          回教室列表,用「項目」篩選出有開這堂課的教室,再比較費用與地點。
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          去看教室列表
        </Link>
      </div>
    </div>
  );
}
