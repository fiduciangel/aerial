export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  credentials: string[];
  yearsTeaching: number;
  funFact: string;
  favoritePose: string;
  /** Initials shown in the illustrated portrait. */
  initials: string;
  hue: string;
}

export const instructors: Instructor[] = [
  {
    id: "mara-lindqvist",
    name: "Mara Lindqvist",
    role: "Founder & Lead Teacher",
    specialties: ["Foundations", "Aerial Flow", "Teacher Training"],
    bio: "Mara opened Levity in 2017 after a decade splitting her life between contemporary dance and Hatha yoga. She believes the silks are the fastest way she's ever found to help people trust their own bodies again — and she's built the whole studio around that single, stubborn idea.",
    credentials: [
      "500-hr RYT (Yoga Alliance)",
      "Certified Aerial Yoga Instructor (AYTT)",
      "Aerial Rigging & Safety certified",
    ],
    yearsTeaching: 14,
    funFact: "Learned to rig her first point from a circus aerialist in Montreal.",
    favoritePose: "Floating pigeon",
    initials: "ML",
    hue: "from-plum to-clay",
  },
  {
    id: "sofia-okonkwo",
    name: "Sofia Okonkwo",
    role: "Senior Aerial Instructor",
    specialties: ["Aerial Flow", "Open Sky Stretch", "Choreography"],
    bio: "A former competitive gymnast, Sofia brings precision and musicality to everything she teaches. Her flow classes are legendary for sequencing that feels less like a workout and more like a conversation with the fabric.",
    credentials: [
      "200-hr RYT",
      "Certified Aerial Yoga Instructor",
      "Contemporary Dance, BFA",
    ],
    yearsTeaching: 9,
    funFact: "Can write her name in cursive — with her feet, mid-air.",
    favoritePose: "Gemini wrap",
    initials: "SO",
    hue: "from-clay to-gold",
  },
  {
    id: "daniel-reyes",
    name: "Daniel Reyes",
    role: "Aerial & Strength Coach",
    specialties: ["Aerial Strength", "Conditioning", "Inversions"],
    bio: "Daniel came to aerial from rock climbing and never looked back. He's obsessed with the mechanics of strength — how to build it patiently, scale it for any body, and turn it into the kind of control that makes hard skills look easy.",
    credentials: [
      "Certified Aerial Yoga Instructor",
      "NASM Personal Trainer",
      "Functional Range Conditioning (FRC)",
    ],
    yearsTeaching: 7,
    funFact: "Keeps a spreadsheet ranking every coffee shop within a mile of the studio.",
    favoritePose: "Straddle invert hold",
    initials: "DR",
    hue: "from-plum-deep to-plum-light",
  },
  {
    id: "priya-anand",
    name: "Priya Anand",
    role: "Restorative & Yin Aerial",
    specialties: ["Aerial Restore", "Breathwork", "Yin"],
    bio: "Priya's classes are a soft place to land. With roots in yin yoga and trauma-informed breathwork, she uses the hammock to help people slow down, feel held, and let go of the tension they've been carrying for years.",
    credentials: [
      "300-hr RYT",
      "Yin Yoga certified",
      "Trauma-Informed Breathwork facilitator",
    ],
    yearsTeaching: 11,
    funFact: "Brews the post-class chai from her grandmother's recipe.",
    favoritePose: "Supported floating fish",
    initials: "PA",
    hue: "from-mauve to-plum",
  },
  {
    id: "theo-marchand",
    name: "Théo Marchand",
    role: "Inversions & Advanced Skills",
    specialties: ["Inversions & Beyond", "Drops", "Performance"],
    bio: "Théo spent six years performing aerial silks before turning to teaching. He's the person you want spotting you the first time you try a drop — equal parts fearless and meticulous, with a sixth sense for exactly when to cue and when to catch.",
    credentials: [
      "Professional Aerial Silks performer",
      "Certified Aerial Yoga Instructor",
      "Advanced Rigging & Spotting",
    ],
    yearsTeaching: 8,
    funFact: "Has performed suspended from a hot-air balloon. Once. On purpose.",
    favoritePose: "Star drop",
    initials: "TM",
    hue: "from-plum-deep to-clay-deep",
  },
  {
    id: "nina-whitfield",
    name: "Nina Whitfield",
    role: "Kids & Beginners",
    specialties: ["Little Wings", "First Flight", "Family Aerial"],
    bio: "Nina has the rare gift of making everyone — six or sixty — feel instantly safe upside-down. A former primary-school teacher, she runs our kids' program and most First Flight classes, and her warmth is the reason so many nervous first-timers come back.",
    credentials: [
      "200-hr RYT",
      "Certified Aerial Yoga Instructor",
      "Children's Yoga certified",
    ],
    yearsTeaching: 6,
    funFact: "Owns more rainbow leg-warmers than any human reasonably should.",
    favoritePose: "Hammock swing (and the giggles that follow)",
    initials: "NW",
    hue: "from-gold to-sage",
  },
];

export const getInstructor = (id: string) =>
  instructors.find((i) => i.id === id);
