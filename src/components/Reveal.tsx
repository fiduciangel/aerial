import type { ReactNode, ElementType } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: ElementType;
}

/** Wraps children in a scroll-triggered fade-up animation. */
export function Reveal({ children, className = "", delay = 0, as }: RevealProps) {
  const { ref, inView } = useInView();
  const Tag = as ?? "div";
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
