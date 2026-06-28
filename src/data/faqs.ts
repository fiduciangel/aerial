export type FaqCategory =
  | "Getting Started"
  | "Classes & Levels"
  | "Safety & Health"
  | "Booking & Membership";

export interface Faq {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqCategories: FaqCategory[] = [
  "Getting Started",
  "Classes & Levels",
  "Safety & Health",
  "Booking & Membership",
];

export const faqs: Faq[] = [
  {
    category: "Getting Started",
    question: "I've never done aerial yoga — where do I start?",
    answer:
      "Start with First Flight. It's our beginner class designed for people who have never touched a hammock, and you'll always have a teacher within arm's reach. No strength, flexibility, or yoga background is required — just curiosity.",
  },
  {
    category: "Getting Started",
    question: "What should I wear?",
    answer:
      "Fitted clothing that covers the backs of your knees and your armpits — these are the areas that press into the fabric. Think leggings and a snug t-shirt or tank with sleeves. Avoid shorts, zippers, buttons, and anything loose that could snag. We practice barefoot or in grippy socks.",
  },
  {
    category: "Getting Started",
    question: "Do I need to be fit or flexible already?",
    answer:
      "Not at all. The hammock actually supports your weight, which makes many poses more accessible than they are on a mat. You'll build the strength and flexibility you need over time — that's the point. Every class offers modifications for every body.",
  },
  {
    category: "Getting Started",
    question: "What should I bring to my first class?",
    answer:
      "Just yourself, a water bottle, and an open mind. We provide all hammocks and props. Arrive 15 minutes early so we can show you around, fit your hammock height, and answer any nervous questions. Remove jewelry and skip heavy lotions or oils on class day — they make the silks slippery.",
  },
  {
    category: "Classes & Levels",
    question: "How do I know which class is right for me?",
    answer:
      "Every class lists a level and intensity rating. Beginners should start with First Flight, then move into Aerial Foundations. Aerial Restore and Open Sky Stretch welcome all levels. Flow, Strength, Inversions and the advanced classes assume you're comfortable with basic wraps and inversions — when in doubt, ask us and we'll point you to the right hammock.",
  },
  {
    category: "Classes & Levels",
    question: "How often should I come to see progress?",
    answer:
      "Once a week builds steady, noticeable progress. Two to three times a week is where the magic really accelerates — many regulars mix a technique class, a strength class, and a restorative one for a balanced week.",
  },
  {
    category: "Classes & Levels",
    question: "Do you offer private or small-group sessions?",
    answer:
      "Yes. Private sessions are perfect for focused skill work, nervous first-timers, or special occasions. We also host private group bookings for birthdays, team events, and hen parties. Reach out and we'll build something for you.",
  },
  {
    category: "Safety & Health",
    question: "Is aerial yoga safe?",
    answer:
      "When taught properly, yes. Every hammock is professionally rigged, load-tested far beyond bodyweight, and inspected regularly. Our teachers are trained in spotting and safe progressions, and we cap classes at 12 so everyone gets attention. We never push you past where you're ready to go.",
  },
  {
    category: "Safety & Health",
    question: "Are there any conditions where I shouldn't fly?",
    answer:
      "Aerial inversions aren't recommended if you have glaucoma, very high or unmanaged blood pressure, recent surgery, a heart condition, or are in the first trimester of pregnancy. If you have any medical concerns, check with your doctor first and let your teacher know — we can almost always adapt, and Aerial Restore is a gentle, mostly-upright option.",
  },
  {
    category: "Safety & Health",
    question: "Can I practice while pregnant?",
    answer:
      "Many people enjoy gentle, mostly-upright aerial work during the second and third trimesters with their doctor's clearance, but full inversions are off the table. Please talk to us before booking so we can recommend the right class and modifications — Aerial Restore is usually the best fit.",
  },
  {
    category: "Safety & Health",
    question: "Will I get dizzy or nauseous upside-down?",
    answer:
      "Some people feel a little disoriented the first few times — it's completely normal. We introduce inversions gradually and hold them briefly at first, giving your body time to adjust. The feeling fades quickly, and most flyers come to love the head rush of a good decompression.",
  },
  {
    category: "Booking & Membership",
    question: "How do I book a class?",
    answer:
      "Book online through our schedule page or the Levity app. Because classes cap at 12 hammocks, we recommend reserving a few days ahead — popular evening classes fill fast. New here? Grab the Intro Flight offer first.",
  },
  {
    category: "Booking & Membership",
    question: "What's your cancellation policy?",
    answer:
      "Plans change — we get it. Cancel up to 12 hours before class for a full credit back to your account. Cancellations inside 12 hours, or no-shows, forfeit the class so we can offer the spot to someone on the waitlist.",
  },
  {
    category: "Booking & Membership",
    question: "Do memberships auto-renew, and can I pause them?",
    answer:
      "Monthly memberships renew automatically and you can cancel anytime with no long-term contract. Need a break? You can pause any membership for up to two months a year — just let us know before your billing date.",
  },
];
