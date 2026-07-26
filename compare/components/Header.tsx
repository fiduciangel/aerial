import Link from "next/link";

const navItems = [
  { href: "/", label: "教室列表" },
  { href: "/disciplines", label: "運動類型" },
  { href: "/guide", label: "新手須知" },
  { href: "/compare", label: "費用比較" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-6">
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
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold lowercase tracking-tight text-slate-900">
              air<span className="text-brand-600">soul</span>
            </span>
            <span className="mt-0.5 hidden text-[10px] font-medium tracking-wide text-slate-400 sm:block">
              讓靈魂在空中飛舞
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 text-sm font-medium sm:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
