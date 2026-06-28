import { useMemo, useState } from "react";
import { classes } from "../data/classes";
import type { Level } from "../data/classes";
import { PageHeader } from "../components/PageHeader";
import { ClassCard } from "../components/ClassCard";
import { Reveal } from "../components/Reveal";
import { CTABanner } from "../components/CTABanner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const filters: (Level | "All")[] = [
  "All",
  "Beginner",
  "All Levels",
  "Intermediate",
  "Advanced",
  "Kids",
];

export default function Classes() {
  useDocumentTitle(
    "Classes",
    "Eight distinct aerial yoga classes for every body and every level — from First Flight for beginners to advanced inversions and drops."
  );
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? classes : classes.filter((c) => c.level === filter)),
    [filter]
  );

  return (
    <>
      <PageHeader
        eyebrow="Classes"
        title={<>A class for every body, <span className="text-gradient italic">at every altitude</span></>}
        intro="Eight distinct ways to meet the silks — whether you want to decompress, get strong, get bendy, or simply find out what flying feels like."
      />

      <section className="container-page py-12 sm:py-16">
        <div
          role="group"
          aria-label="Filter classes by level"
          className="mb-10 flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-plum text-linen shadow-soft"
                  : "border border-plum/15 text-ink-soft hover:border-plum/40 hover:text-plum"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cls) => (
            <Reveal key={cls.id}>
              <ClassCard cls={cls} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-ink-soft">
            No classes in this category yet — check back soon.
          </p>
        )}
      </section>

      <CTABanner />
    </>
  );
}
