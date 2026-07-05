import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M7 3c0 6 3 8 5 12 2-4 5-6 5-12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-base font-bold tracking-tight text-stone-900">
            北部空中運動<span className="text-brand-600">比較</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            教室列表
          </Link>
          <Link
            href="/compare"
            className="rounded-lg px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            費用比較
          </Link>
        </nav>
      </div>
    </header>
  );
}
