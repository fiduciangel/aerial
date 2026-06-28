import { Check } from "lucide-react";
import type { Plan } from "../data/pricing";
import { LinkButton } from "./Button";

export function PricingCard({ plan }: { plan: Plan }) {
  const highlighted = plan.highlighted;
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? "border-transparent bg-gradient-to-br from-plum to-plum-deep text-linen shadow-lift"
          : "border-plum/12 bg-white/70 text-ink shadow-soft hover:shadow-lift"
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold ${
            highlighted ? "bg-clay text-white" : "bg-plum text-linen"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <span
        className={`text-xs font-semibold uppercase tracking-widest ${
          highlighted ? "text-clay-soft" : "text-clay-deep"
        }`}
      >
        {plan.category}
      </span>
      <h3
        className={`mt-2 font-display text-2xl ${highlighted ? "text-linen" : "text-ink"}`}
      >
        {plan.name}
      </h3>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-4xl">{plan.price}</span>
        <span
          className={`text-sm ${highlighted ? "text-linen/70" : "text-ink-soft"}`}
        >
          {plan.unit}
        </span>
      </div>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          highlighted ? "text-linen/75" : "text-ink-soft"
        }`}
      >
        {plan.description}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              size={18}
              className={`mt-0.5 shrink-0 ${
                highlighted ? "text-sage-soft" : "text-sage"
              }`}
            />
            <span className={highlighted ? "text-linen/90" : "text-ink-soft"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <LinkButton
        to="/contact"
        variant={highlighted ? "light" : "ghost"}
        size="md"
        className="mt-7 w-full"
      >
        Choose {plan.name}
      </LinkButton>
    </div>
  );
}
