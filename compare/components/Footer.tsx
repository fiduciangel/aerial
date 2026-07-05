export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-500 sm:px-6">
        <p className="font-medium text-stone-700">北部空中運動教室比較</p>
        <p className="mt-1">
          整理台北、新北、桃園的空中瑜珈、空中舞綢、空中環與空中吊床教室,方便你比較費用與地點。
        </p>
        <p className="mt-3 text-xs text-stone-400">
          © {new Date().getFullYear()} 北部空中運動教室比較 · Phase 1 MVP ·
          目前為示範資料,實際費用與課程請以各教室官方公告為準。
        </p>
      </div>
    </footer>
  );
}
