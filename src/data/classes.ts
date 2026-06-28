export type Level = "Beginner" | "All Levels" | "Intermediate" | "Advanced" | "Kids";

export interface AerialClass {
  id: string;
  name: string;
  tagline: string;
  level: Level;
  durationMin: number;
  /** Physical intensity, 1 (gentle) – 5 (powerful). */
  intensity: number;
  focus: string;
  summary: string;
  description: string;
  whatToExpect: string;
  benefits: string[];
  goodFor: string;
  /** Tailwind gradient classes used for the class's silk swatch. */
  hue: string;
}

export const classes: AerialClass[] = [
  {
    id: "first-flight",
    name: "First Flight",
    tagline: "Your very first time off the ground.",
    level: "Beginner",
    durationMin: 60,
    intensity: 2,
    focus: "Fundamentals",
    summary:
      "A warm, unhurried welcome to the silks — perfect if you've never touched a hammock in your life.",
    description:
      "First Flight is where every Levity journey begins. We start on the ground, get comfortable trusting the fabric, then ease into your first supported inversions. Expect plenty of laughter, zero pressure, and a teacher within arm's reach the entire time.",
    whatToExpect:
      "Hammock set-up, basic wraps and grips, gentle seated and standing poses, your first assisted hang upside-down, and a blissful cocoon savasana to finish.",
    benefits: [
      "Learn the fundamentals safely",
      "Build confidence with the fabric",
      "Decompress the spine",
      "No strength or flexibility needed",
    ],
    goodFor: "Complete beginners and anyone returning after a long break.",
    hue: "from-blush via-mauve to-plum-light",
  },
  {
    id: "aerial-foundations",
    name: "Aerial Foundations",
    tagline: "Build the vocabulary of flight.",
    level: "All Levels",
    durationMin: 75,
    intensity: 3,
    focus: "Technique",
    summary:
      "The core curriculum — the wraps, transitions, and shapes that everything else is built on.",
    description:
      "Once you're comfortable hanging, Foundations layers in the technical building blocks: hip keys, single-leg locks, clean transitions, and the body awareness that makes advanced work possible. We move slowly and repeat often, because good technique is what keeps flying joyful for years.",
    whatToExpect:
      "A thorough warm-up, two or three new wraps per class, drills to lock them into muscle memory, and a short restorative sequence to close.",
    benefits: [
      "Master essential wraps & locks",
      "Develop body awareness",
      "Progress toward intermediate work",
      "Strengthen grip and core",
    ],
    goodFor: "Anyone who's completed a few First Flights and wants real technique.",
    hue: "from-sage-soft via-sage to-plum",
  },
  {
    id: "aerial-flow",
    name: "Aerial Flow",
    tagline: "Vinyasa, suspended in mid-air.",
    level: "Intermediate",
    durationMin: 75,
    intensity: 4,
    focus: "Flow & Grace",
    summary:
      "A continuous, music-led sequence that links wraps into one long, dance-like breath.",
    description:
      "Aerial Flow is our most meditative-yet-demanding class. We string familiar shapes into flowing sequences set to music, moving with the breath until the hammock feels like an extension of your body. Expect to sweat, to soar, and to lose track of time.",
    whatToExpect:
      "Dynamic warm-up, a choreographed flow taught in sections then run together, inversions woven throughout, and a long suspended savasana.",
    benefits: [
      "Improve fluidity & coordination",
      "Build cardiovascular stamina",
      "Move meditatively with music",
      "Refine transitions",
    ],
    goodFor: "Flyers comfortable with foundational wraps and inversions.",
    hue: "from-clay-soft via-clay to-plum",
  },
  {
    id: "aerial-restore",
    name: "Aerial Restore",
    tagline: "Let the hammock hold you.",
    level: "All Levels",
    durationMin: 60,
    intensity: 1,
    focus: "Restorative",
    summary:
      "Deeply passive, fully supported postures that unwind tension and quiet the nervous system.",
    description:
      "There is nothing quite like being cradled in fabric and doing absolutely nothing. Aerial Restore uses the hammock as a gentle support for long-held, passive shapes — letting gravity decompress your spine while your breath slows and your shoulders finally drop.",
    whatToExpect:
      "Soft lighting, slow breath work, fully supported back-bends and forward folds, a floating savasana, and a cup of tea afterward.",
    benefits: [
      "Release deep tension",
      "Calm the nervous system",
      "Gentle spinal traction",
      "Improve sleep & recovery",
    ],
    goodFor: "Everyone — especially stressed minds and tired bodies.",
    hue: "from-blush-soft via-blush to-mauve",
  },
  {
    id: "aerial-strength",
    name: "Aerial Strength",
    tagline: "Honest, full-body power.",
    level: "Intermediate",
    durationMin: 60,
    intensity: 5,
    focus: "Strength",
    summary:
      "A conditioning-focused class that turns the silks into the best bodyweight gym you've ever used.",
    description:
      "The hammock is a ruthless, beautiful strength tool. This class blends aerial-specific conditioning — pulls, holds, leg lifts, and controlled negatives — with the grip and core work that makes advanced inversions feel effortless. You'll be sore tomorrow, in the best way.",
    whatToExpect:
      "Mobility prep, strength circuits in and around the hammock, skill-specific drills, and a thorough stretch to cool down.",
    benefits: [
      "Build serious upper-body & core strength",
      "Increase grip endurance",
      "Unlock harder skills",
      "Scalable for every level",
    ],
    goodFor: "Anyone craving a strength challenge; modifications offered throughout.",
    hue: "from-plum-light via-plum to-plum-deep",
  },
  {
    id: "inversions-and-beyond",
    name: "Inversions & Beyond",
    tagline: "Drops, holds, and the upside-down world.",
    level: "Advanced",
    durationMin: 90,
    intensity: 5,
    focus: "Advanced Skills",
    summary:
      "Our most technical class — controlled drops, complex wraps, and signature shapes.",
    description:
      "For experienced flyers ready to push the edge. We work meticulously toward show-stopping skills: controlled drops, single-point balances, deep back-bends, and the kind of wraps that look impossible until they aren't. Safety, spotting, and clean technique lead every session.",
    whatToExpect:
      "Extended warm-up, progressive drills toward a target skill, careful spotting, and conditioning to support the advanced work.",
    benefits: [
      "Learn drops safely",
      "Refine advanced wraps",
      "Develop fearlessness with control",
      "Work toward performance skills",
    ],
    goodFor: "Confident flyers with solid foundations and comfortable inversions.",
    hue: "from-plum-deep via-plum to-clay",
  },
  {
    id: "open-sky-stretch",
    name: "Open Sky Stretch",
    tagline: "Flexibility, with the floor taken away.",
    level: "All Levels",
    durationMin: 60,
    intensity: 2,
    focus: "Flexibility",
    summary:
      "Use suspension and gentle leverage to open hips, hamstrings, shoulders, and spine.",
    description:
      "The hammock is an exceptional flexibility partner — it provides traction and leverage your body can't create on its own. Open Sky Stretch guides you through long, supported stretches for splits, backbends, and shoulder openness, all without straining a single joint.",
    whatToExpect:
      "Targeted warm-up, supported deep stretches held with the breath, active-flexibility drills, and a calming wind-down.",
    benefits: [
      "Increase range of motion",
      "Safely deepen splits & backbends",
      "Decompress the lower back",
      "Improve posture",
    ],
    goodFor: "Anyone wanting to get bendier — desk-bodies especially welcome.",
    hue: "from-sage-soft via-mauve to-clay-soft",
  },
  {
    id: "little-wings",
    name: "Little Wings",
    tagline: "Aerial play for ages 7–12.",
    level: "Kids",
    durationMin: 50,
    intensity: 3,
    focus: "Kids & Play",
    summary:
      "Imagination, climbing, and giggles — aerial movement built for growing bodies.",
    description:
      "Little Wings turns the studio into a playground. Through games, story-led sequences, and plenty of safe climbing and spinning, kids build coordination, confidence, and strength without ever realising it's exercise. Small groups, big smiles.",
    whatToExpect:
      "Energetic warm-up games, guided climbs and wraps, a creative challenge, and a cosy cocoon rest to finish.",
    benefits: [
      "Build coordination & confidence",
      "Burn energy, safely",
      "Develop focus & body control",
      "Make new friends",
    ],
    goodFor: "Active kids aged 7–12; no experience needed.",
    hue: "from-clay-soft via-gold to-sage",
  },
];

export const getClass = (id: string) => classes.find((c) => c.id === id);
