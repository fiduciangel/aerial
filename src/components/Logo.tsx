import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  tone?: "ink" | "linen";
}

/** Wordmark + silk glyph. */
export function Logo({ className = "", tone = "ink" }: LogoProps) {
  const text = tone === "linen" ? "text-linen" : "text-ink";
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Levity — home">
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:rotate-6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5B4B6E" />
            <stop offset="1" stopColor="#D98E6A" />
          </linearGradient>
        </defs>
        <path
          d="M12 4 C 12 17, 19 21, 20 33 C 21 21, 28 17, 28 4"
          fill="none"
          stroke="url(#logo-g)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="20" cy="15" r="3" fill="#D98E6A" />
      </svg>
      <span className={`font-display text-2xl tracking-tight ${text}`}>
        Levity
      </span>
    </Link>
  );
}
