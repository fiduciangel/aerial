export type PlanCategory = "Drop-in" | "Class Pack" | "Membership";

export interface Plan {
  id: string;
  category: PlanCategory;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface IntroOffer {
  name: string;
  price: string;
  oldPrice: string;
  description: string;
  features: string[];
}

export const introOffer: IntroOffer = {
  name: "Intro Flight",
  price: "$30",
  oldPrice: "$120",
  description:
    "Two weeks of unlimited beginner-friendly classes for the price of a single drop-in. The best — and gentlest — way to find out if flying is for you.",
  features: [
    "14 days of unlimited classes",
    "First Flight, Foundations & Restore included",
    "All hammocks & props provided",
    "New students only",
  ],
};

export const plans: Plan[] = [
  {
    id: "drop-in",
    category: "Drop-in",
    name: "Single Class",
    price: "$28",
    unit: "per class",
    description: "Perfect for the occasional flyer or a one-off visit.",
    features: [
      "Any class, any level",
      "Book up to 30 days ahead",
      "Hammock & props included",
      "No commitment",
    ],
  },
  {
    id: "pack-5",
    category: "Class Pack",
    name: "5-Class Pack",
    price: "$130",
    unit: "$26 / class",
    description: "A little flexibility and a little saving.",
    features: [
      "5 classes, your schedule",
      "Valid for 3 months",
      "Shareable with a +1",
      "Hammock & props included",
    ],
  },
  {
    id: "pack-10",
    category: "Class Pack",
    name: "10-Class Pack",
    price: "$240",
    unit: "$24 / class",
    description: "Our most popular pack for steady, no-pressure practice.",
    features: [
      "10 classes, your schedule",
      "Valid for 6 months",
      "Shareable with a +1",
      "Priority waitlist access",
    ],
    badge: "Most popular",
    highlighted: true,
  },
  {
    id: "membership-monthly",
    category: "Membership",
    name: "Unlimited Monthly",
    price: "$169",
    unit: "per month",
    description: "For the truly hooked. Fly as often as you like.",
    features: [
      "Unlimited classes",
      "20% off workshops & retreats",
      "Bring a friend free each month",
      "Pause up to 2 months a year",
      "Cancel anytime",
    ],
  },
  {
    id: "membership-flight-club",
    category: "Membership",
    name: "Flight Club Annual",
    price: "$1,690",
    unit: "per year",
    description: "Unlimited flying with two months on the house.",
    features: [
      "Everything in Unlimited Monthly",
      "Two months free vs. monthly",
      "Free guest pass every week",
      "First access to new workshops",
      "Members-only socials",
    ],
    badge: "Best value",
  },
  {
    id: "kids-pack",
    category: "Class Pack",
    name: "Little Wings Pack",
    price: "$120",
    unit: "6 kids' classes",
    description: "A term of aerial play for ages 7–12.",
    features: [
      "6 Little Wings classes",
      "Valid for one school term",
      "Small groups, expert care",
      "All equipment provided",
    ],
  },
];
