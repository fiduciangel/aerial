import { useMemo, useState } from "react";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { faqCategories, faqs } from "../data/faqs";
import type { FaqCategory } from "../data/faqs";
import { PageHeader } from "../components/PageHeader";
import { FAQItem } from "../components/FAQItem";
import { LinkButton } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function FAQ() {
  useDocumentTitle(
    "FAQ",
    "Everything you were about to ask about aerial yoga — what to wear, safety, getting started, booking, and memberships."
  );
  const [active, setActive] = useState<FaqCategory | "All">("All");

  const visible = useMemo(
    () => (active === "All" ? faqs : faqs.filter((f) => f.category === active)),
    [active]
  );

  const tabs: (FaqCategory | "All")[] = ["All", ...faqCategories];

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={<>Everything you were <span className="text-gradient italic">about to ask</span></>}
        intro="New to aerial? Curious about safety, what to wear, or how to book? Start here — and if your question isn't covered, we're always happy to help."
      />

      <section className="container-page py-12 sm:py-16">
        <div
          role="group"
          aria-label="Filter questions by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={active === t}
              onClick={() => setActive(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === t
                  ? "bg-plum text-linen shadow-soft"
                  : "border border-plum/15 text-ink-soft hover:border-plum/40 hover:text-plum"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <h2 className="sr-only">Frequently asked questions</h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {visible.map((f) => (
            <FAQItem key={f.question} faq={f} />
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-3xl border border-plum/12 bg-gradient-to-br from-blush-soft to-cream p-8 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum/10 text-plum">
            <MessageCircleQuestion size={24} />
          </span>
          <h2 className="mt-4 font-display text-2xl text-ink">
            Still have a question?
          </h2>
          <p className="mt-2 text-ink-soft">
            Our front desk is genuinely lovely and replies fast. Ask us anything.
          </p>
          <LinkButton to="/contact" variant="primary" size="md" className="mt-6">
            Get in touch <ArrowRight size={16} />
          </LinkButton>
        </Reveal>
      </section>
    </>
  );
}
