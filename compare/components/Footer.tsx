export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 sm:px-6">
        <p className="font-medium lowercase text-slate-700">airsoul</p>
        <p className="mt-1">
          整理台北、新北、桃園的空瑜、舞綢與空環教室,方便你比較費用與地點。
        </p>
        <p className="mt-3 text-xs text-slate-400">
          所有金額以新台幣（$，TWD）計價,資料僅供參考;實際費用與課程請以各教室官方公告為準。
        </p>
        <p className="mt-1 text-xs text-slate-400">
          © {new Date().getFullYear()} airsoul · Phase 1 MVP · 示範資料
        </p>
      </div>
    </footer>
  );
}
