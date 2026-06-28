import { ArrowRight, Check, Sparkles } from "lucide-react";
import { introOffer, plans } from "../data/pricing";
import { faqs } from "../data/faqs";
import { PageHeader } from "../components/PageHeader";
import { PricingCard } from "../components/PricingCard";
import { LinkButton } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { FAQItem } from "../components/FAQItem";
import { SilkRibbons } from "../components/art/SilkArt";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Pricing() {
  useDocumentTitle(
    "Pricing",
    "Simple, no-contract pricing — drop-ins, class packs, and unlimited memberships. New here? Start with the $30 two-week Intro Flight."
  );
  const bookingFaqs = faqs.filter((f) => f.category === "Booking & Membership");

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Simple pricing, <span className="text-gradient italic">no contracts</span></>}
        intro="Drop in once, grab a pack, or go unlimited. Every option includes your hammock, props, and the full attention of a small class."
      />

      {/* Intro offer */}
      <section className="container-page py-12">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-plum via-plum-deep to-ink p-8 text-linen sm:p-12">
          <SilkRibbons className="absolute right-0 top-0 h-full w-1/2" opacity={0.22} />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <span className="eyebrow text-clay-soft">New here? Start here</span>
              <h2 className="mt-4 font-display text-3xl text-linen sm:text-4xl">
                {introOffer.name}
              </h2>
              <p className="mt-3 max-w-lg text-linen/80">{introOffer.description}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {introOffer.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-linen/90">
                    <Check size={18} className="shrink-0 text-sage-soft" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-linen/10 p-7 text-center backdrop-blur-sm">
              <p className="text-sm text-linen/70">
                <span className="line-through">{introOffer.oldPrice} value</span>
              </p>
              <p className="mt-1 font-display text-6xl text-linen">{introOffer.price}</p>
              <p className="mt-1 text-sm text-linen/70">for two weeks, unlimited</p>
              <LinkButton to="/contact" variant="secondary" size="lg" className="mt-6 w-full">
                Claim the offer <ArrowRight size={18} />
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Plans */}
      <section className="container-page py-12">
        <SectionHeading
          align="center"
          eyebrow="Ways to fly"
          title={<>Find the rhythm that <span className="text-gradient italic">fits your life</span></>}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Reveal key={plan.id}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-plum/12 bg-white/60 p-5 text-center text-sm text-ink-soft">
          <Sparkles size={18} className="shrink-0 text-clay" />
          <p>
            Students, seniors, and key workers get 15% off packs and memberships —
            just bring ID to the front desk.
          </p>
        </Reveal>
      </section>

      {/* Booking FAQ */}
      <section className="container-page py-12 pb-20">
        <SectionHeading
          align="center"
          eyebrow="Good to know"
          title="Booking & membership questions"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {bookingFaqs.map((f) => (
            <FAQItem key={f.question} faq={f} />
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <LinkButton to="/faq" variant="ghost" size="md">
            See all FAQs <ArrowRight size={16} />
          </LinkButton>
        </Reveal>
      </section>
    </>
  );
}
