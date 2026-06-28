import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "../data/faqs";

export function FAQItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="overflow-hidden rounded-2xl border border-plum/12 bg-white/60 transition-colors hover:border-plum/25">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-lg text-ink">{faq.question}</span>
          <Plus
            size={22}
            className={`shrink-0 text-clay transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        aria-hidden={!open}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-ink-soft">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
