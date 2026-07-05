import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <p className="text-5xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-3 text-xl font-bold text-stone-900">找不到這個頁面</h1>
      <p className="mt-2 text-stone-500">你要找的教室或頁面可能已移除或網址有誤。</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
      >
        回教室列表
      </Link>
    </div>
  );
}
