import type { Instructor } from "../data/instructors";
import { SilkRibbons } from "./art/SilkArt";

export function InstructorPortrait({
  instructor,
  className = "",
}: {
  instructor: Instructor;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${instructor.hue} ${className}`}
    >
      <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.35} />
      <div className="bg-grain absolute inset-0 opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl text-white/90 drop-shadow-sm">
          {instructor.initials}
        </span>
      </div>
    </div>
  );
}

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-plum/10 bg-white/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <InstructorPortrait
        instructor={instructor}
        className="h-56 transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{instructor.name}</h3>
        <p className="mt-1 text-sm font-semibold text-clay-deep">
          {instructor.role}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {instructor.bio}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {instructor.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full bg-plum/8 px-3 py-1 text-xs font-medium text-plum"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
