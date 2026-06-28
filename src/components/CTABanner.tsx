import { ArrowRight } from "lucide-react";
import { copy } from "../data/site";
import { LinkButton } from "./Button";
import { Reveal } from "./Reveal";
import { SilkRibbons } from "./art/SilkArt";

export function CTABanner() {
  return (
    <section className="container-page py-12">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-clay via-clay-deep to-plum px-6 py-16 sm:px-14 sm:py-20">
        <SilkRibbons
          className="absolute -right-10 top-0 h-full w-1/2"
          opacity={0.3}
        />
        <div className="relative max-w-xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl md:text-5xl">
            {copy.finalCta.title}
          </h2>
          <p className="mt-5 text-lg text-white/85">{copy.finalCta.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton to="/pricing" variant="light" size="lg">
              Claim the Intro Flight <ArrowRight size={18} />
            </LinkButton>
            <LinkButton
              to="/schedule"
              variant="ghost"
              size="lg"
              className="border-white/40 text-white hover:border-white hover:bg-white/10"
            >
              See the schedule
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
