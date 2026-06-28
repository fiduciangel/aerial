import type { ReactNode } from "react";
import { SilkRibbons } from "./art/SilkArt";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-blush-soft via-linen to-linen pt-32 pb-16 sm:pt-36 sm:pb-20">
      <SilkRibbons
        className="absolute -right-16 -top-10 h-[140%] w-1/2 max-w-md"
        opacity={0.22}
      />
      <div className="bg-grain absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container-page relative">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
