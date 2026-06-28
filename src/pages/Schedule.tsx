import { CalendarDays, Info } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { ScheduleGrid } from "../components/ScheduleGrid";
import { LinkButton } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { CTABanner } from "../components/CTABanner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Schedule() {
  useDocumentTitle(
    "Schedule",
    "Our weekly aerial yoga timetable — over forty classes a week, from early risers to candlelit Friday restoratives."
  );
  return (
    <>
      <PageHeader
        eyebrow="Weekly schedule"
        title={<>Pick your moment to <span className="text-gradient italic">leave the ground</span></>}
        intro="Over forty classes a week, from 6:30am risers to candlelit Friday restoratives. Classes cap at 12 hammocks, so reserve a few days ahead."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton to="/contact" variant="primary" size="md">
            <CalendarDays size={16} /> Book a class
          </LinkButton>
          <LinkButton to="/pricing" variant="ghost" size="md">
            See pricing
          </LinkButton>
        </div>
      </PageHeader>

      <section className="container-page py-12 sm:py-16">
        <Reveal className="mb-8 flex items-start gap-3 rounded-2xl border border-plum/12 bg-white/60 p-5 text-sm text-ink-soft">
          <Info size={20} className="mt-0.5 shrink-0 text-clay" />
          <p>
            Spots update in real time on the booking app. A{" "}
            <span className="font-semibold text-clay-deep">left</span> tag means
            two or fewer hammocks remain — and you can always join a free
            waitlist if a class is full.
          </p>
        </Reveal>

        <ScheduleGrid />
      </section>

      <CTABanner />
    </>
  );
}
