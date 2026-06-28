import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-plum text-linen shadow-[0_14px_30px_-12px_rgba(63,51,84,0.7)] hover:bg-plum-deep hover:-translate-y-0.5",
  secondary:
    "bg-clay text-white shadow-[0_14px_30px_-12px_rgba(191,115,81,0.7)] hover:bg-clay-deep hover:-translate-y-0.5",
  ghost:
    "border border-plum/30 text-plum hover:border-plum hover:bg-plum/5",
  light:
    "bg-linen text-plum-deep hover:bg-white hover:-translate-y-0.5 shadow-soft",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function classes(variant: Variant, size: Size, className: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

interface LinkButtonProps extends BaseProps {
  to: string;
}
export function LinkButton({
  to,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: LinkButtonProps) {
  return (
    <Link to={to} className={classes(variant, size, className)}>
      {children}
    </Link>
  );
}
