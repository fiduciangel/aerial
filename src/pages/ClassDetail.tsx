import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Clock, Sparkles, Users } from "lucide-react";
import { classes, getClass } from "../data/classes";
import { weeklySchedule } from "../data/schedule";
import { getInstructor } from "../data/instructors";
import { LinkButton } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { IntensityMeter, LevelBadge } from "../components/Bits";
import { ClassCard } from "../components/ClassCard";
import { AerialGlyph, SilkRibbons } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import NotFound from "./NotFound";

const motifFor: Record<string, "silk" | "invert" | "cocoon" | "flow" | "split" | "swing"> = {
  "first-flight": "silk",
  "aerial-foundations": "flow",
  "aerial-flow": "flow",
  "aerial-restore": "cocoon",
  "aerial-strength": "invert",
  "inversions-and-beyond": "invert",
  "open-sky-stretch": "split",
  "little-wings": "swing",
};

export default function ClassDetail() {
  const { id } = useParams();
  const cls = id ? getClass(id) : undefined;

  useDocumentTitle(cls ? cls.name : "Class not found", cls?.summary);

  if (!cls) return <NotFound />;

  // Upcoming sessions for this class across the week.
  const sessions = weeklySchedule.flatMap((day) =>
    day.sessions
      .filter((s) => s.classId === cls.id)
      .map((s) => ({ ...s, day: day.short }))
  );

  const related = classes.filter((c) => c.id !== cls.id).slice(0, 3);

  return (
    <>
      <header className={`relative overflow-hidden bg-gradient-to-br ${cls.hue} pt-32 pb-20 sm:pt-36`}>
        <SilkRibbons className="absolute inset-0 h-full w-full" opacity={0.3} />
        <div className="bg-grain absolute inset-0 opacity-30" />
        {/* Left-weighted scrim keeps text readable over any class hue. */}
        <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/85 via-plum-deep/45 to-transparent" />
        <AerialGlyph
          motif={motifFor[cls.id] ?? "silk"}
          className="absolute -right-10 top-10 hidden h-[26rem] w-[26rem] opacity-50 md:block"
        />
        <div className="container-page relative">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-sm font-medium text-linen/85 transition-colors hover:text-linen"
          >
            <ArrowLeft size={16} /> All classes
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <LevelBadge level={cls.level} />
            <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-plum-deep">
              {cls.focus}
            </span>
          </div>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-linen sm:text-5xl md:text-6xl">
            {cls.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg italic text-linen/85">
            {cls.tagline}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium text-linen">
            <span className="inline-flex items-center gap-2">
              <Clock size={18} /> {cls.durationMin} minutes
            </span>
            <IntensityMeter value={cls.intensity} tone="light" />
          </div>
        </div>
      </header>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl text-ink">About this class</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {cls.description}
            </p>
          </Reveal>

          <Reveal className="mt-10 rounded-3xl border border-plum/10 bg-white/60 p-7">
            <h3 className="flex items-center gap-2 font-display text-2xl text-ink">
              <Sparkles size={22} className="text-clay" /> What to expect
            </h3>
            <p className="mt-3 text-ink-soft">{cls.whatToExpect}</p>
          </Reveal>

          <Reveal className="mt-8">
            <h3 className="font-display text-2xl text-ink">What you'll gain</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {cls.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl bg-cream/70 px-4 py-3"
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-sage" />
                  <span className="text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-clay/20 bg-clay-soft/15 p-5">
            <Users size={20} className="mt-0.5 shrink-0 text-clay-deep" />
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-clay-deep">Good for: </span>
              {cls.goodFor}
            </p>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="rounded-3xl border border-plum/10 bg-white/70 p-6 shadow-soft">
            <h3 className="font-display text-xl text-ink">This week</h3>
            {sessions.length > 0 ? (
              <ul className="mt-4 space-y-2.5">
                {sessions.map((s, i) => {
                  const teacher = getInstructor(s.instructorId);
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-cream/70 px-4 py-3 text-sm"
                    >
                      <span className="font-semibold text-plum">
                        {s.day} · {s.time}
                      </span>
                      <span className="text-ink-soft">
                        {teacher?.name.split(" ")[0]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-ink-soft">
                Not on the current timetable — get in touch and we'll find you a spot.
              </p>
            )}
            <LinkButton to="/contact" variant="primary" size="md" className="mt-5 w-full">
              Book this class <ArrowRight size={16} />
            </LinkButton>
            <LinkButton to="/schedule" variant="ghost" size="md" className="mt-3 w-full">
              Full schedule
            </LinkButton>
          </Reveal>
        </aside>
      </section>

      {/* Related */}
      <section className="bg-cream/60 py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl text-ink">Keep exploring</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <Reveal key={c.id}>
                <ClassCard cls={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
