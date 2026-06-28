export interface NavLink {
  label: string;
  to: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const site = {
  name: "Levity",
  fullName: "Levity Aerial Yoga",
  tagline: "Find your float.",
  description:
    "A boutique aerial yoga studio where gravity lets go. Build strength, unwind your spine, and learn to fly — supported by silk hammocks and teachers who have your back.",
  location: {
    neighborhood: "Belmont District",
    city: "Portland",
    region: "Oregon",
    address: "1142 SE Belmont Street",
    postal: "Portland, OR 97214",
  },
  contact: {
    email: "hello@levityaerial.com",
    phone: "(503) 555-0142",
    bookingNote: "Reserve your hammock — most classes cap at 12 flyers.",
  },
  hours: [
    { day: "Mon – Thu", hours: "6:30am – 9:00pm" },
    { day: "Friday", hours: "6:30am – 7:30pm" },
    { day: "Saturday", hours: "8:00am – 4:00pm" },
    { day: "Sunday", hours: "9:00am – 2:00pm" },
  ],
  socials: [
    { label: "Instagram", handle: "@levityaerial", href: "https://instagram.com" },
    { label: "TikTok", handle: "@levity.aerial", href: "https://tiktok.com" },
    { label: "YouTube", handle: "Levity Aerial", href: "https://youtube.com" },
  ],
} as const;

export const navLinks: NavLink[] = [
  { label: "Classes", to: "/classes" },
  { label: "Schedule", to: "/schedule" },
  { label: "Pricing", to: "/pricing" },
  { label: "Teachers", to: "/instructors" },
  { label: "Studio", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Journal", to: "/journal" },
];

export const stats: Stat[] = [
  { value: "2,400+", label: "flyers lifted off" },
  { value: "12", label: "max per class" },
  { value: "28", label: "classes each week" },
  { value: "4.9★", label: "average studio rating" },
];

/** High-level microcopy reused across the site. */
export const copy = {
  hero: {
    eyebrow: "Aerial yoga in Portland",
    headline: "Let gravity",
    headlineAccent: "let go.",
    subhead:
      "Wrap yourself in a silk hammock and rediscover your body — decompress your spine, build honest strength, and float through poses you never thought possible. No experience required, just a willingness to leave the ground.",
  },
  finalCta: {
    title: "Your first flight is closer than you think.",
    body: "New to the silks? Begin with our Intro Flight offer — two weeks of unlimited beginner-friendly classes for the price of a single drop-in.",
  },
  newsletter: {
    title: "Notes from the silks",
    body: "A gentle once-a-month letter — new class drops, workshops, and small reflections on moving with less gravity. No spam, unsubscribe anytime.",
  },
} as const;
