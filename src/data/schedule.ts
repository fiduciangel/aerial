export type Spots = number | "Waitlist";

export interface Session {
  time: string;
  classId: string;
  instructorId: string;
  spots: Spots;
}

export interface ScheduleDay {
  day: string;
  short: string;
  sessions: Session[];
}

export const weeklySchedule: ScheduleDay[] = [
  {
    day: "Monday",
    short: "Mon",
    sessions: [
      { time: "7:00am", classId: "first-flight", instructorId: "nina-whitfield", spots: 5 },
      { time: "12:00pm", classId: "aerial-restore", instructorId: "priya-anand", spots: 8 },
      { time: "5:30pm", classId: "aerial-foundations", instructorId: "mara-lindqvist", spots: 2 },
      { time: "7:15pm", classId: "aerial-strength", instructorId: "daniel-reyes", spots: "Waitlist" },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    sessions: [
      { time: "6:30am", classId: "aerial-strength", instructorId: "daniel-reyes", spots: 6 },
      { time: "9:30am", classId: "open-sky-stretch", instructorId: "priya-anand", spots: 9 },
      { time: "5:30pm", classId: "aerial-flow", instructorId: "sofia-okonkwo", spots: 3 },
      { time: "7:30pm", classId: "inversions-and-beyond", instructorId: "theo-marchand", spots: 1 },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    sessions: [
      { time: "7:00am", classId: "aerial-foundations", instructorId: "sofia-okonkwo", spots: 7 },
      { time: "12:00pm", classId: "aerial-restore", instructorId: "priya-anand", spots: 10 },
      { time: "4:00pm", classId: "little-wings", instructorId: "nina-whitfield", spots: 4 },
      { time: "5:30pm", classId: "first-flight", instructorId: "nina-whitfield", spots: 6 },
      { time: "7:00pm", classId: "aerial-flow", instructorId: "mara-lindqvist", spots: "Waitlist" },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    sessions: [
      { time: "6:30am", classId: "aerial-flow", instructorId: "sofia-okonkwo", spots: 5 },
      { time: "9:30am", classId: "aerial-foundations", instructorId: "mara-lindqvist", spots: 8 },
      { time: "5:30pm", classId: "aerial-strength", instructorId: "daniel-reyes", spots: 2 },
      { time: "7:15pm", classId: "open-sky-stretch", instructorId: "sofia-okonkwo", spots: 6 },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    sessions: [
      { time: "7:00am", classId: "open-sky-stretch", instructorId: "priya-anand", spots: 7 },
      { time: "12:00pm", classId: "first-flight", instructorId: "nina-whitfield", spots: 9 },
      { time: "5:30pm", classId: "aerial-flow", instructorId: "sofia-okonkwo", spots: 3 },
      { time: "6:45pm", classId: "aerial-restore", instructorId: "priya-anand", spots: 4 },
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    sessions: [
      { time: "9:00am", classId: "aerial-foundations", instructorId: "mara-lindqvist", spots: 5 },
      { time: "10:45am", classId: "aerial-flow", instructorId: "sofia-okonkwo", spots: "Waitlist" },
      { time: "12:30pm", classId: "little-wings", instructorId: "nina-whitfield", spots: 6 },
      { time: "2:00pm", classId: "inversions-and-beyond", instructorId: "theo-marchand", spots: 2 },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    sessions: [
      { time: "9:30am", classId: "aerial-restore", instructorId: "priya-anand", spots: 8 },
      { time: "11:00am", classId: "first-flight", instructorId: "nina-whitfield", spots: 7 },
      { time: "12:30pm", classId: "open-sky-stretch", instructorId: "sofia-okonkwo", spots: 5 },
    ],
  },
];
