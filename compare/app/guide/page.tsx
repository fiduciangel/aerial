import Link from "next/link";
import type { Metadata } from "next";
import { disciplineInfos } from "@/lib/disciplines";

export const metadata: Metadata = {
  title: "新手須知｜第一次上課穿什麼",
  description:
    "第一次上空中課要穿什麼?一次看懂空瑜、舞綢、空環的穿著重點與原因——合身、包覆、防摩擦、好抓握,穿對了更安全也更舒服。",
};

/** 通用原則(三種項目都適用) */
const basics: { do: string; why: string }[] = [
  {
    do: "合身、有彈性的衣服",
    why: "太寬鬆會卡進器材,教練也看不清動作線條、難以即時調整。",
  },
  {
    do: "上衣要能蓋住腰腹",
    why: "倒掛時衣服會往下翻、容易走光;裸露的腰腹也容易被布或環夾磨。",
  },
  {
    do: "把頭髮綁起來",
    why: "長髮會纏進布料或圓環裡,鬆脫時很危險。",
  },
  {
    do: "拿掉戒指、手錶、手鍊、項鍊",
    why: "金屬會勾破絲綢、卡住手指、刮傷自己。",
  },
  {
    do: "赤腳,或穿防滑襪",
    why: "腳要勾住布或環,赤腳的抓握力最好。",
  },
  {
    do: "別擦乳液或油、指甲別留太長",
    why: "身體太滑會抓不住器材;過長指甲會勾破絲綢、刮傷皮膚。",
  },
  {
    do: "避免拉鍊、鈕扣、亮片、粗毛料",
    why: "硬物與粗糙布料會刮壞嬌貴的絲綢器材。",
  },
];

/** 各項目穿著重點(顏色沿用「運動類型」頁的色系) */
const perDiscipline: Record<string, { dress: string; why: string }> = {
  空瑜: {
    dress: "合身上衣蓋住腰腹、短袖可、長褲或七分褲、赤腳。",
    why: "以布料包覆、倒掛伸展為主;蓋住腰腹能防走光,也避免布兜住腰時摩擦。",
  },
  舞綢: {
    dress: "長袖＋長褲、不要擦乳液、避免拉鍊亮片。",
    why: "攀爬纏繞會大量摩擦手臂、腋下、膝窩與腳背,長袖長褲能防「布燒傷」與瘀青;皮膚乾爽才抓得住布。",
  },
  空環: {
    dress: "貼身長褲護膝窩／腳背／髖骨、上衣蓋住背腰、拆下首飾。",
    why: "金屬環較硬,動作時會壓磨膝窩、腳背、髖骨與背部,貼身衣物才不會被夾到。",
  },
};

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      {/* Hero */}
      <div className="mb-8">
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          新手須知
        </span>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          第一次上課,穿什麼?
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          空中運動的穿著不只是好看——穿對了才
          <span className="font-semibold text-slate-700">安全、不走光、不磨傷,也才抓得住器材</span>
          。下面先看三種項目通用的原則,再看各項目的重點。
        </p>
      </div>

      {/* 通用原則 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">穿著通用原則</h2>
        <p className="mt-1 text-sm text-slate-500">不管上哪一種課,這幾點都適用。</p>
        <ul className="mt-4 divide-y divide-slate-100">
          {basics.map((b) => (
            <li key={b.do} className="flex gap-3 py-3">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <p className="font-semibold text-slate-800">{b.do}</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  <span className="font-medium text-slate-600">為什麼:</span> {b.why}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 各項目重點 */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">各項目穿著重點</h2>
        <p className="mt-1 text-sm text-slate-500">
          不同項目摩擦與包覆需求不同,重點也不一樣。
        </p>
        <div className="mt-4 space-y-4">
          {disciplineInfos.map((d) => {
            const tip = perDiscipline[d.name];
            if (!tip) return null;
            return (
              <article
                key={d.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${d.accent.dot}`} />
                  <h3 className="text-base font-bold text-slate-900">{d.name}</h3>
                  <span className="text-xs text-slate-400">{d.en}</span>
                </div>
                <p className="mt-3 font-medium text-slate-800">{tip.dress}</p>
                <p className="mt-2 text-sm text-slate-500">
                  <span className="font-medium text-slate-600">為什麼:</span> {tip.why}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 小提醒 */}
      <p className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-slate-500">
        以上為一般性建議,僅供參考。每間教室的規定可能不同,實際請以各教室的公告與教練說明為準。
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/disciplines"
          className="inline-block rounded-lg border border-brand-200 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-100"
        >
          先認識三種空中運動
        </Link>
        <Link
          href="/"
          className="inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          去看教室列表
        </Link>
      </div>
    </div>
  );
}
