import { Award, Heart, Sparkles } from "lucide-react";
import { instructors } from "../data/instructors";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { InstructorPortrait } from "../components/InstructorCard";
import { CTABanner } from "../components/CTABanner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Instructors() {
  useDocumentTitle(
    "Teachers",
    "Meet the Levity team — certified in aerial technique, rigging, and spotting, and chosen for the warmth they bring to the studio."
  );
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title={<>The people who'll <span className="text-gradient italic">catch you</span></>}
        intro="Certified in aerial technique, rigging, and spotting — and chosen, above all, for the warmth they bring to the studio. Meet the teachers who'll guide your flight."
      />

      <section className="container-page space-y-16 py-16">
        {instructors.map((it, i) => (
          <Reveal
            key={it.id}
            className={`grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <InstructorPortrait
              instructor={it}
              className="aspect-[4/5] w-full rounded-[2rem] shadow-lift"
            />
            <div>
              <h2 className="font-display text-3xl text-ink sm:text-4xl">{it.name}</h2>
              <p className="mt-1 font-semibold text-clay-deep">{it.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-plum/8 px-3 py-1 text-xs font-medium text-plum"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{it.bio}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream/70 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-plum">
                    <Award size={16} /> Credentials
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                    {it.credentials.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-cream/70 p-5">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-plum">
                      <Heart size={16} /> Favorite pose
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">{it.favoritePose}</p>
                  </div>
                  <div className="rounded-2xl bg-cream/70 p-5">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-plum">
                      <Sparkles size={16} /> {it.yearsTeaching} years teaching
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">{it.funFact}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTABanner />
    </>
  );
}
