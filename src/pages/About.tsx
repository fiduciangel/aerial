import { Feather, ShieldCheck, Sparkles, Users } from "lucide-react";
import { about } from "../data/about";
import { stats } from "../data/site";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { CTABanner } from "../components/CTABanner";
import { AerialPlate, SilkRibbons } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const valueIcons = [ShieldCheck, Users, Sparkles, Feather];

export default function About() {
  useDocumentTitle(
    "Our Studio",
    "The story behind Levity — a boutique aerial yoga studio in Portland built on a stubborn belief that everybody can fly."
  );
  return (
    <>
      <PageHeader
        eyebrow="Our studio"
        title={<>Built on a stubborn belief: <span className="text-gradient italic">everybody can fly</span></>}
        intro={about.mission}
      />

      {/* Story */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <span className="eyebrow">Our story</span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            From one hammock to a home for thousands
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {about.storyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <AerialPlate
            motif="silk"
            hue="from-blush via-mauve to-plum"
            className="h-96 w-full shadow-lift"
          />
        </Reveal>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-plum py-16 text-linen">
        <SilkRibbons className="absolute right-0 top-0 h-full w-1/3" opacity={0.15} />
        <div className="container-page relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-4xl text-linen sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-linen/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="What we stand for"
          title={<>Four things we'll <span className="text-gradient italic">never compromise</span></>}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {about.values.map((v, i) => {
            const Icon = valueIcons[i] ?? Sparkles;
            return (
              <Reveal
                key={v.title}
                delay={(i % 2) * 80}
                className="flex gap-5 rounded-3xl border border-plum/10 bg-white/60 p-7"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-plum/10 text-plum">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-ink-soft">{v.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* The space */}
      <section className="bg-cream/60 py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <AerialPlate
              motif="cocoon"
              hue="from-sage-soft via-sage to-plum-light"
              className="h-80 w-full shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">The space</span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              A room you won't want to leave
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {about.studioParagraph}
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {about.differentiators.map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-ink-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="The journey"
          title="How we got off the ground"
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-plum/15 sm:left-1/2" />
          <div className="space-y-10">
            {about.milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={m.year}
                  className={`relative flex gap-6 sm:w-1/2 ${
                    left ? "sm:flex-row-reverse sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  {/* Dot sits on the centre spine for both columns. */}
                  <span
                    className={`absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-clay ring-4 ring-linen ${
                      left
                        ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
                        : "sm:left-0 sm:right-auto sm:-translate-x-1/2"
                    }`}
                  />
                  <div className={`ml-12 sm:ml-0 ${left ? "sm:pr-8" : "sm:pl-8"}`}>
                    <span className="font-display text-2xl text-clay">{m.year}</span>
                    <h3 className="mt-1 font-display text-xl text-ink">{m.title}</h3>
                    <p className="mt-1 text-ink-soft">{m.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
