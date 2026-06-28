import {
  ArrowRight,
  Feather,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";
import { copy, site, stats } from "../data/site";
import { classes } from "../data/classes";
import { instructors } from "../data/instructors";
import { testimonials } from "../data/testimonials";
import { posts } from "../data/posts";
import { about } from "../data/about";
import { LinkButton } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ClassCard } from "../components/ClassCard";
import { InstructorCard } from "../components/InstructorCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { PostCard } from "../components/PostCard";
import { CTABanner } from "../components/CTABanner";
import { Newsletter } from "../components/Newsletter";
import { AerialPlate, SilkRibbons } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const benefits = [
  {
    icon: Wind,
    title: "Decompress your spine",
    text: "Let gravity reverse and gently lengthen what a day of sitting compresses.",
  },
  {
    icon: HeartPulse,
    title: "Build honest strength",
    text: "The hammock is the best bodyweight gym you'll ever use — for every level.",
  },
  {
    icon: Feather,
    title: "Move with ease",
    text: "Supported poses unlock flexibility and range without straining a joint.",
  },
  {
    icon: Sparkles,
    title: "Quiet a busy mind",
    text: "Being cradled in fabric soothes the nervous system like nothing else.",
  },
];

const steps = [
  {
    n: "01",
    title: "Book your first flight",
    text: "Grab the Intro Flight offer and reserve a beginner-friendly class. No experience needed.",
  },
  {
    n: "02",
    title: "Arrive & settle in",
    text: "Come 15 minutes early. We'll set your hammock, show you around, and ease any nerves.",
  },
  {
    n: "03",
    title: "Leave the ground",
    text: "Start on the floor, build trust with the silk, and take your first weightless breath.",
  },
];

export default function Home() {
  useDocumentTitle();
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blush-soft via-linen to-linen" />
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="eyebrow">{copy.hero.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] text-ink sm:text-6xl md:text-7xl">
                {copy.hero.headline}{" "}
                <span className="text-gradient italic">{copy.hero.headlineAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {copy.hero.subhead}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LinkButton to="/pricing" variant="primary" size="lg">
                  Start with $30 Intro <ArrowRight size={18} />
                </LinkButton>
                <LinkButton to="/classes" variant="ghost" size="lg">
                  Explore classes
                </LinkButton>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl text-plum">{s.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-ink-soft">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Hero artwork */}
          <Reveal delay={200} className="relative hidden h-[30rem] lg:block">
            <div className="absolute right-0 top-0 h-[26rem] w-64 animate-float">
              <AerialPlate
                motif="silk"
                hue="from-blush via-mauve to-plum"
                className="h-full w-full shadow-lift"
              />
            </div>
            <div className="animate-float-slow absolute bottom-0 left-2 h-64 w-56">
              <AerialPlate
                motif="invert"
                hue="from-clay-soft via-clay to-plum-deep"
                className="h-full w-full shadow-lift"
              />
            </div>
            <div className="absolute left-1/2 top-8 h-40 w-44 animate-float">
              <AerialPlate
                motif="cocoon"
                hue="from-sage-soft via-sage to-plum-light"
                className="h-full w-full shadow-lift"
              />
            </div>
          </Reveal>

          {/* Mobile artwork */}
          <Reveal className="lg:hidden">
            <AerialPlate
              motif="silk"
              hue="from-blush via-mauve to-plum"
              caption="Morning light in Studio One"
              className="h-72 w-full shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div className="relative overflow-hidden border-y border-plum/10 bg-plum-deep py-4">
        <div className="animate-marquee pause-on-hover flex w-max gap-8 whitespace-nowrap text-linen/70">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-8">
              {[
                "Spinal decompression",
                "Every body welcome",
                "Strength & flexibility",
                "Cap of 12 per class",
                "Beginner-first teaching",
                "Find your float",
              ].map((word) => (
                <span key={word} className="flex items-center gap-8 font-display text-xl italic">
                  {word}
                  <span className="text-clay-soft">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Benefits ---------- */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          align="center"
          eyebrow="Why aerial"
          title={<>Gravity, gently <span className="text-gradient italic">rewritten</span></>}
          intro="Aerial yoga uses a soft silk hammock to support your weight — making hard things accessible, and simple things blissful. Here's what a regular practice gives back."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 80}
              className="rounded-3xl border border-plum/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum/10 text-plum">
                <b.icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-xl text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Featured classes ---------- */}
      <section className="bg-cream/60 py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Find your class"
              title={<>Classes for every <span className="text-gradient italic">altitude</span></>}
              intro="From your very first nervous hang to controlled drops through the silk — there's a hammock here with your name on it."
            />
            <Reveal>
              <LinkButton to="/classes" variant="ghost" size="md">
                View all classes <ArrowRight size={16} />
              </LinkButton>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {classes.slice(0, 6).map((cls) => (
              <Reveal key={cls.id}>
                <ClassCard cls={cls} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative">
            <AerialPlate
              motif="flow"
              hue="from-plum-light via-mauve to-clay-soft"
              className="h-80 w-full shadow-lift"
            />
            <div className="card-surface absolute -bottom-6 -right-2 hidden max-w-[14rem] rounded-2xl p-5 sm:block">
              <p className="font-display text-2xl text-plum">No experience?</p>
              <p className="mt-1 text-sm text-ink-soft">
                Perfect. {site.name} was built for first-timers.
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="How it works"
              title={<>Your first flight, in <span className="text-gradient italic">three steps</span></>}
              intro="Starting something new is the hard part. We've made it as gentle as the landing."
            />
            <ol className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80} as="li" className="flex gap-5">
                  <span className="font-display text-3xl text-clay/60">{s.n}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{s.title}</h3>
                    <p className="mt-1 text-ink-soft">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={260}>
              <LinkButton to="/contact" variant="primary" size="lg" className="mt-8">
                Book your first flight <ArrowRight size={18} />
              </LinkButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Values strip ---------- */}
      <section className="relative overflow-hidden bg-plum py-20 text-linen sm:py-24">
        <SilkRibbons className="absolute right-0 top-0 h-full w-1/3" opacity={0.18} />
        <div className="container-page relative">
          <SectionHeading
            align="center"
            eyebrow="The Levity difference"
            title={<span className="text-linen">Safe enough to trust. Warm enough to stay.</span>}
            className="[&_.eyebrow]:text-clay-soft [&_p]:text-linen/75"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="rounded-3xl border border-linen/15 bg-linen/5 p-7 backdrop-blur-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay/20 text-clay-soft">
                  {[<ShieldCheck key="a" size={22} />, <Users key="b" size={22} />, <Sparkles key="c" size={22} />, <Feather key="d" size={22} />][i]}
                </span>
                <h3 className="mt-5 font-display text-xl text-linen">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-linen/70">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Instructors teaser ---------- */}
      <section className="container-page py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Meet your teachers"
            title={<>Obsessive about your <span className="text-gradient italic">safety & joy</span></>}
            intro="Every Levity teacher is certified in aerial technique, rigging, and spotting — and chosen for the warmth they bring to the room."
          />
          <Reveal>
            <LinkButton to="/instructors" variant="ghost" size="md">
              Meet the whole team <ArrowRight size={16} />
            </LinkButton>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.slice(0, 3).map((it) => (
            <Reveal key={it.id}>
              <InstructorCard instructor={it} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="bg-cream/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Loved by flyers"
            title={<>Don't take our word for it — <span className="text-gradient italic">take theirs</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <Reveal key={t.name}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Journal teaser ---------- */}
      <section className="container-page py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="From the journal"
            title={<>Notes from the <span className="text-gradient italic">silks</span></>}
            intro="Guides, science, and gentle encouragement for wherever you are in your practice."
          />
          <Reveal>
            <LinkButton to="/journal" variant="ghost" size="md">
              Read the journal <ArrowRight size={16} />
            </LinkButton>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Reveal key={p.id}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
      <Newsletter />
    </>
  );
}
