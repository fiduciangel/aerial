import { Link } from "react-router-dom";
import type { Spots } from "../data/schedule";
import { weeklySchedule } from "../data/schedule";
import { getClass } from "../data/classes";
import { getInstructor } from "../data/instructors";
import { Reveal } from "./Reveal";

function SpotsBadge({ spots }: { spots: Spots }) {
  if (spots === "Waitlist") {
    return (
      <span className="rounded-full bg-plum/10 px-2 py-0.5 text-[0.7rem] font-semibold text-plum-deep">
        Waitlist
      </span>
    );
  }
  const low = spots <= 2;
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ${
        low ? "bg-clay/15 text-clay-deep" : "bg-sage-soft/50 text-plum-deep"
      }`}
    >
      {spots} {low ? "left" : "spots"}
    </span>
  );
}

export function ScheduleGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {weeklySchedule.map((day, di) => (
        <Reveal
          key={day.day}
          delay={di * 40}
          className="rounded-3xl border border-plum/10 bg-white/60 p-5"
        >
          <h3 className="font-display text-xl text-ink">{day.day}</h3>
          <ul className="mt-4 space-y-3">
            {day.sessions.map((s, i) => {
              const cls = getClass(s.classId);
              const teacher = getInstructor(s.instructorId);
              if (!cls) return null;
              return (
                <li key={i}>
                  <Link
                    to={`/classes/${cls.id}`}
                    className="group block rounded-2xl border border-transparent bg-linen/60 p-3.5 transition-colors hover:border-plum/20 hover:bg-white"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-plum">
                        {s.time}
                      </span>
                      <SpotsBadge spots={s.spots} />
                    </div>
                    <p className="mt-1 font-display text-lg leading-tight text-ink group-hover:text-plum">
                      {cls.name}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft">
                      {cls.durationMin} min · {teacher?.name.split(" ")[0]}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
