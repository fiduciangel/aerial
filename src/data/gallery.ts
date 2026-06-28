export type Motif = "silk" | "invert" | "cocoon" | "flow" | "split" | "swing";

export interface GalleryItem {
  id: string;
  caption: string;
  alt: string;
  motif: Motif;
  hue: string;
  /** Spans two columns on wide screens for a more editorial layout. */
  wide?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    caption: "Morning light, Studio One",
    alt: "Illustration of an aerial silk hammock suspended in a sunlit studio.",
    motif: "silk",
    hue: "from-blush-soft via-blush to-mauve",
    wide: true,
  },
  {
    id: "g2",
    caption: "First inversion",
    alt: "Illustration of a figure hanging upside-down in an aerial hammock.",
    motif: "invert",
    hue: "from-mauve via-plum-light to-plum",
  },
  {
    id: "g3",
    caption: "The cocoon, mid-savasana",
    alt: "Illustration of a person wrapped and resting inside a silk cocoon.",
    motif: "cocoon",
    hue: "from-clay-soft via-clay to-plum",
  },
  {
    id: "g4",
    caption: "Flow, in motion",
    alt: "Illustration of flowing aerial silk fabric mid-movement.",
    motif: "flow",
    hue: "from-sage-soft via-sage to-plum-light",
  },
  {
    id: "g5",
    caption: "Open Sky Stretch",
    alt: "Illustration of a supported aerial split in the silks.",
    motif: "split",
    hue: "from-gold via-clay to-plum-deep",
  },
  {
    id: "g6",
    caption: "Little Wings, big smiles",
    alt: "Illustration of a child swinging joyfully in an aerial hammock.",
    motif: "swing",
    hue: "from-clay-soft via-gold to-sage",
    wide: true,
  },
  {
    id: "g7",
    caption: "Suspended stillness",
    alt: "Illustration of a calm seated pose held in the silks.",
    motif: "silk",
    hue: "from-plum-light via-mauve to-blush",
  },
  {
    id: "g8",
    caption: "Upside-down world",
    alt: "Illustration of a deep inverted backbend in an aerial hammock.",
    motif: "invert",
    hue: "from-plum-deep via-plum to-clay",
  },
];
