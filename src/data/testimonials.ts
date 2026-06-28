export interface Testimonial {
  name: string;
  context: string;
  quote: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Hannah R.",
    context: "Member since 2021",
    quote:
      "I walked in convinced I was 'not a yoga person.' Three years later the silks are the only hour of my week where my brain goes completely quiet. Levity changed my relationship with my own body.",
    rating: 5,
    location: "Southeast Portland",
  },
  {
    name: "Marcus B. & Dani",
    context: "Date-night regulars",
    quote:
      "We booked Aerial Flow as a one-off for our anniversary and accidentally found our shared hobby. The teachers make it feel safe to look ridiculous together — which, it turns out, is the whole point.",
    rating: 5,
    location: "Hawthorne",
  },
  {
    name: "Priscilla N.",
    context: "Desk worker, recovering sitter",
    quote:
      "Eight years of back pain from a desk job, and Aerial Restore did in six weeks what physio couldn't in two years. I leave every class feeling two inches taller.",
    rating: 5,
    location: "Buckman",
  },
  {
    name: "Tom Ableton",
    context: "Aerial Strength devotee",
    quote:
      "I came for a novelty workout and stayed because it's the hardest, most rewarding training I've ever done. My grip strength is absurd now and my first unassisted invert felt like a superpower.",
    rating: 5,
    location: "Sellwood",
  },
  {
    name: "The Okafor Family",
    context: "Little Wings parents",
    quote:
      "Our daughter counts down the days to Little Wings. She's more confident, sleeps better, and talks about Nina like she's a celebrity. Worth every penny.",
    rating: 5,
    location: "Laurelhurst",
  },
  {
    name: "Jess M.",
    context: "First Flight grad",
    quote:
      "I was genuinely terrified of going upside-down. The First Flight class met me exactly where I was — no pressure, endless patience. By week three I was inverting and laughing about my old fear.",
    rating: 5,
    location: "Mt. Tabor",
  },
  {
    name: "Renée DuPont",
    context: "Traveling for work, dropped in",
    quote:
      "I drop into studios all over the country and Levity is the gold standard. Immaculate equipment, genuinely warm front desk, and teaching that respects your body. I plan trips around their schedule now.",
    rating: 5,
    location: "Visiting from Seattle",
  },
  {
    name: "Aiden K.",
    context: "Inversions & Beyond",
    quote:
      "Théo taught me my first drop so methodically that fear never even entered the room. The advanced classes are serious, safe, and ridiculously fun. This place is a gem.",
    rating: 5,
    location: "Kerns",
  },
];
