import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CompareView } from "@/components/CompareView";

export const metadata: Metadata = {
  title: "費用比較",
  description: "並排比較 2–3 間北部空中運動教室的費用、地點與課程。",
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-stone-800"
      >
        <span aria-hidden="true">←</span> 回教室列表
      </Link>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
        費用比較
      </h1>
      <p className="mt-1 text-stone-600">
        並排比較最多 3 間教室,綠色標示為該項目最划算 / 評分最高。
      </p>

      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm sm:p-5">
        <Suspense fallback={<p className="p-6 text-center text-stone-400">載入中…</p>}>
          <CompareView />
        </Suspense>
      </div>
    </div>
  );
}
