export interface Value {
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const about = {
  mission:
    "We exist to give people back a sense of lightness — in their bodies, and in how they move through the world.",
  storyParagraphs: [
    "Levity began with a single hammock strung from the rafters of a borrowed dance studio. Our founder, Mara, had spent years chasing the feeling of weightlessness through dance and yoga, and the first time she hung upside-down in a length of silk, she found it. She also found something she hadn't expected: people who'd never felt at home in a gym or a yoga class suddenly lit up off the ground.",
    "So in 2017 we opened our doors in Portland's Belmont District with a stubborn belief — that flying isn't reserved for acrobats and the impossibly bendy. It's for desk workers with stiff backs, for nervous beginners, for kids and grandparents and everyone who'd quietly decided their adventurous years were behind them.",
    "Today Levity is a full studio with a team of obsessive, generous teachers and a community of thousands. But the heart of it hasn't changed: warm light, clean silks, and the particular kind of joy that only arrives when your feet leave the floor.",
  ],
  values: [
    {
      title: "Safety is sacred",
      description:
        "Professionally rigged points, load-tested far beyond bodyweight, inspected on a schedule, and never more than 12 flyers per class. We earn your trust before we ask you to hang from it.",
    },
    {
      title: "Every body flies",
      description:
        "No prerequisite strength, flexibility, age, or shape. We teach to the person in front of us and offer a modification for every single thing we do.",
    },
    {
      title: "Progress over performance",
      description:
        "We're not here to make you Instagrammable. We're here to help you feel capable. The wins that matter are the quiet ones — a fear faced, a spine decompressed, a body trusted.",
    },
    {
      title: "Joy is the point",
      description:
        "Flying is allowed to be fun. We take safety seriously and ourselves lightly, and we think the giggles mid-inversion are just as important as the technique.",
    },
  ] as Value[],
  differentiators: [
    "Classes capped at 12 hammocks",
    "Teachers certified in rigging & spotting",
    "A genuine beginner pathway",
    "Equipment cleaned after every class",
  ],
  studioParagraph:
    "Our space is a converted Belmont warehouse: fourteen-foot ceilings, skylights that pour afternoon light across the floor, sustainably sourced silks in every shade of dusk, heated floors for the cold months, and a tea corner for lingering afterward. It's the kind of room you don't want to leave.",
  milestones: [
    {
      year: "2017",
      title: "One hammock, one big idea",
      description: "Levity opens with two teachers and a stubborn belief that everyone can fly.",
    },
    {
      year: "2019",
      title: "We grow our wings",
      description: "A second studio room and the launch of our beginner-first First Flight programme.",
    },
    {
      year: "2021",
      title: "Little Wings takes off",
      description: "Our kids' programme launches — and promptly develops a waitlist.",
    },
    {
      year: "2024",
      title: "A community of thousands",
      description: "Over 2,400 flyers have taken their first class with us — and we're just getting started.",
    },
  ] as Milestone[],
};
