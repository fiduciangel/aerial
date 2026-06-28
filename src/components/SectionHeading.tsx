import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${centered ? "is-centered" : ""}`}>{eyebrow}</span>
      )}
      <h2 className="mt-4 text-3xl text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
      )}
    </Reveal>
  );
}
