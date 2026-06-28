import { Quote } from "lucide-react";
import type { Testimonial } from "../data/testimonials";
import { StarRating } from "./Bits";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-plum/10 bg-white/70 p-7 shadow-soft">
      <Quote size={28} className="text-clay-soft" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-plum/10 pt-4">
        <StarRating rating={t.rating} />
        <p className="mt-2 font-semibold text-ink">{t.name}</p>
        <p className="text-sm text-ink-soft">
          {t.context} · {t.location}
        </p>
      </figcaption>
    </figure>
  );
}
