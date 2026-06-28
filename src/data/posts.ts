export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMin: number;
  date: string; // ISO
  authorId: string;
  tags: string[];
  hue: string;
  body: PostSection[];
}

export const posts: Post[] = [
  {
    id: "first-aerial-class-what-to-expect",
    title: "Your First Aerial Class: Everything Nobody Tells You",
    excerpt:
      "The nerves are normal, the head-rush is temporary, and you absolutely do not need to be strong or bendy. Here's what your first flight actually looks like.",
    category: "Beginners",
    readTimeMin: 6,
    date: "2025-09-18",
    authorId: "nina-whitfield",
    tags: ["beginners", "first class", "nerves"],
    hue: "from-blush via-mauve to-plum-light",
    body: [
      {
        paragraphs: [
          "If you've booked your first aerial class, you're probably feeling two things at once: excitement and a low hum of 'what have I done?' Good. That's exactly the right mix. After teaching hundreds of first-timers, I can tell you the gap between how scary it feels and how it actually goes is enormous — and almost always in your favour.",
          "Here's the honest, unglamorous truth about what your first hour in the silks is really like.",
        ],
      },
      {
        heading: "You'll spend more time on the ground than you think",
        paragraphs: [
          "Nobody gets winched into the air the moment they arrive. We start with the hammock low, learning how to sit in it, lean against it, and trust that it holds you. Most of the first twenty minutes happens with at least one foot on the floor. By the time you invert, you've already built a quiet confidence in the fabric.",
        ],
      },
      {
        heading: "The head-rush is real, and it fades fast",
        paragraphs: [
          "The first time you hang upside-down, blood rushes to your head and your brain briefly files a complaint. This is completely normal. We hold those first inversions for just a few breaths, then come up. Within a class or two your body recalibrates, and that head-rush turns into the delicious decompression people get addicted to.",
        ],
      },
      {
        heading: "You will not be the least graceful person there",
        paragraphs: [
          "Everyone fumbles the wraps at first. Everyone gets tangled. The person next to you who looks like they were born in the silks took months to get there. Aerial is one of the rare adult activities where being a beginner is genuinely celebrated — there's a kind of joyful clumsiness to it that even seasoned flyers miss.",
        ],
      },
      {
        heading: "A few practical things",
        paragraphs: [
          "Wear leggings and a fitted top with sleeves — the fabric presses behind your knees and under your arms. Don't eat a big meal right before (inversions plus a full stomach is a bad combo). Take off your rings and watch. Arrive fifteen minutes early so we can set your hammock height and answer your questions.",
          "And then? Just let go. The hardest part of your first class is walking through the door — and you've already done that.",
        ],
      },
    ],
  },
  {
    id: "what-to-wear-aerial-yoga",
    title: "What to Wear (and What to Never Wear) to Aerial Yoga",
    excerpt:
      "Zippers are the enemy. Sleeves are your friend. A short, practical guide to dressing for the silks so you can focus on flying.",
    category: "Practical",
    readTimeMin: 4,
    date: "2025-10-02",
    authorId: "sofia-okonkwo",
    tags: ["what to wear", "beginners", "practical"],
    hue: "from-clay-soft via-clay to-plum",
    body: [
      {
        paragraphs: [
          "Aerial yoga has one quirk most studios forget to mention: what you wear genuinely affects how the class feels. The fabric grips your skin in specific places, and the wrong outfit can turn a blissful stretch into a pinch. Here's the cheat sheet.",
        ],
      },
      {
        heading: "Cover the backs of your knees and your armpits",
        paragraphs: [
          "These are the two spots where the hammock bears your weight against bare skin. Fitted leggings and a top with at least short sleeves keep the fabric comfortable. Capri-length leggings are fine; shorts and sleeveless tanks are the most common first-class regret.",
        ],
      },
      {
        heading: "Fitted, not loose",
        paragraphs: [
          "When you invert, loose clothing inverts with you — and a baggy t-shirt over your face mid-pose is nobody's idea of zen. Snug, stretchy layers move with you and stay put.",
        ],
      },
      {
        heading: "The zipper rule",
        paragraphs: [
          "No zippers, buttons, hooks, belts, or anything sharp. They snag the silk (which is expensive) and dig into you (which is unpleasant). The same goes for jewellery — rings and watches can catch on the fabric, so leave them in your bag.",
        ],
      },
      {
        heading: "A few finishing touches",
        paragraphs: [
          "Skip heavy lotions and oils on class day; slippery skin makes grips harder. We practise barefoot or in grippy socks. Tie long hair back. And bring a light layer for savasana — body temperature drops fast when you go still in the air.",
        ],
      },
    ],
  },
  {
    id: "science-of-spinal-decompression",
    title: "The Surprising Science of Spinal Decompression",
    excerpt:
      "Why hanging upside-down feels so good — and what's actually happening to your spine, your nervous system, and your stress levels when you do.",
    category: "Wellbeing",
    readTimeMin: 7,
    date: "2025-10-21",
    authorId: "priya-anand",
    tags: ["wellbeing", "spine", "stress", "science"],
    hue: "from-blush-soft via-blush to-mauve",
    body: [
      {
        paragraphs: [
          "Ask anyone who practises aerial regularly what keeps them coming back and, sooner or later, they'll say something like 'I just feel taller afterward.' They're not imagining it. Inverting in a supportive hammock does measurable, lovely things to the body. Let's unpack a few.",
        ],
      },
      {
        heading: "Gentle traction for a compressed spine",
        paragraphs: [
          "We spend our days fighting gravity — sitting, hunching, carrying. Over a day, the discs between your vertebrae lose a little height as they're compressed. When you hang inverted, gravity reverses its pull and gently decompresses the spine, creating space between the vertebrae and easing pressure on the discs and surrounding nerves.",
          "Unlike a hard inversion table, the hammock distributes that traction softly across a wide band of fabric, so the stretch feels supported rather than forced.",
        ],
      },
      {
        heading: "A reset for your nervous system",
        paragraphs: [
          "Inversions and slow, supported back-bends stimulate the vagus nerve and encourage a shift from 'fight or flight' toward 'rest and digest.' Pair that with the cocooning sensation of being wrapped in fabric — which many people find deeply soothing, a little like a weighted blanket — and you have a potent recipe for downshifting a busy mind.",
        ],
      },
      {
        heading: "Circulation, lymph, and that 'lighter' feeling",
        paragraphs: [
          "Flipping your relationship with gravity gives your circulatory and lymphatic systems a change of direction, which can leave you feeling refreshed and clear-headed. It's part of why a gentle Aerial Restore class can feel as restorative as a nap — except you leave looser, taller, and quietly elated.",
        ],
      },
      {
        heading: "A gentle caveat",
        paragraphs: [
          "Inversions aren't for everyone — if you have glaucoma, uncontrolled blood pressure, are early in pregnancy, or have specific medical conditions, talk to your doctor and your teacher first. The beautiful thing about aerial is how adaptable it is: even mostly-upright, supported work delivers a lot of these benefits without ever turning you over.",
        ],
      },
    ],
  },
  {
    id: "first-flight-to-first-drop-timeline",
    title: "From First Flight to Your First Drop: A Realistic Timeline",
    excerpt:
      "How long does it really take to go from terrified beginner to confidently dropping through the silks? An honest, no-hype roadmap.",
    category: "Progress",
    readTimeMin: 6,
    date: "2025-11-09",
    authorId: "theo-marchand",
    tags: ["progress", "skills", "drops"],
    hue: "from-plum-deep via-plum to-clay",
    body: [
      {
        paragraphs: [
          "Everyone wants to know the same thing eventually: when do I get to do the cool stuff? Drops, dynamic shapes, the moves that make onlookers gasp. The honest answer is 'it depends' — but here's a realistic map based on what I see with students who come consistently.",
        ],
      },
      {
        heading: "Weeks 1–6: Trust",
        paragraphs: [
          "Your only job at the start is to get comfortable. You'll learn basic wraps, your first inversions, and how to read the fabric. Progress here is mostly mental — building the trust that the hammock holds you. Come once or twice a week and this phase flies by.",
        ],
      },
      {
        heading: "Months 2–4: Vocabulary",
        paragraphs: [
          "Now Foundations does its work. You accumulate wraps, locks, and transitions, and you start linking them. This is where aerial stops feeling like individual tricks and starts feeling like a language. Your grip strength quietly doubles without you noticing.",
        ],
      },
      {
        heading: "Months 4–9: Strength and flow",
        paragraphs: [
          "With a solid base, you branch into Flow and Strength. You can invert without thinking, hold shapes longer, and string together sequences. Many flyers feel their first real 'I'm actually good at this' moment somewhere in here. It's a great feeling — savour it.",
        ],
      },
      {
        heading: "9+ months: The upside-down world",
        paragraphs: [
          "Once you're strong and fluent, Inversions & Beyond opens up. Your first controlled drop usually comes well into this phase — and only after we've drilled the entry, the lock, and the catch until they're boring. That's the secret nobody posts about: the spectacular stuff is built on hundreds of unspectacular, careful repetitions. Respect the process and the process rewards you.",
        ],
      },
    ],
  },
  {
    id: "grip-strength-drills-at-home",
    title: "5 Grip-Strength Drills You Can Do at Home",
    excerpt:
      "Grip is the quiet bottleneck in aerial. Here are five simple, equipment-light drills to build hands of steel between classes.",
    category: "Training",
    readTimeMin: 5,
    date: "2025-12-04",
    authorId: "daniel-reyes",
    tags: ["training", "strength", "grip", "home"],
    hue: "from-plum-light via-plum to-plum-deep",
    body: [
      {
        paragraphs: [
          "If there's one thing that holds new flyers back, it's not core strength or flexibility — it's grip. Your hands fatigue before the rest of you is ready to quit. The good news: grip responds quickly to a little focused work. Here are five drills you can sprinkle through your week, no fancy equipment required.",
        ],
      },
      {
        heading: "1. Dead hangs",
        paragraphs: [
          "Find a pull-up bar (or a sturdy tree branch) and simply hang. Start with three sets of 20–30 seconds and build from there. Dead hangs train raw grip endurance and decompress your shoulders as a bonus.",
        ],
      },
      {
        heading: "2. Towel twists",
        paragraphs: [
          "Roll a hand towel, grip each end, and wring it as if squeezing out water — hard, in both directions. Three sets of 30 seconds. It looks silly and it works alarmingly well.",
        ],
      },
      {
        heading: "3. Farmer's carries",
        paragraphs: [
          "Pick up something heavy in each hand — kettlebells, full water jugs, grocery bags — and walk. Aim for a minute of total walking. Carries build grip, core, and full-body stability all at once, which is exactly the cocktail aerial demands.",
        ],
      },
      {
        heading: "4. Plate or book pinches",
        paragraphs: [
          "Pinch a thick book or a weight plate between your thumb and fingers and hold. This trains the often-neglected pinch grip that makes certain wraps feel secure instead of scary.",
        ],
      },
      {
        heading: "5. Wrist rolls",
        paragraphs: [
          "Strong wrists protect your grip and your joints. Slow, controlled wrist circles and gentle loaded flexion/extension keep the whole forearm resilient. Two minutes, most days.",
          "Consistency beats intensity here. Five focused minutes, three or four times a week, and you'll feel the difference in your next class — that's a promise.",
        ],
      },
    ],
  },
];

export const getPost = (id: string) => posts.find((p) => p.id === id);
