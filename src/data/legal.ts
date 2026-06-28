export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const legal: Record<"privacy" | "terms", LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    updated: "June 1, 2026",
    intro:
      "Levity Aerial Yoga respects your privacy. This policy explains what we collect, why, and the choices you have. This is a demonstration document and not legal advice.",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "When you book a class, create an account, or message us, we collect the details you provide — your name, email, phone number, and any health information you choose to share so we can keep you safe in class.",
          "We also collect basic, anonymous usage data (such as which pages are visited) to help us improve the site.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use your information to manage bookings and memberships, to keep you informed about classes you've reserved, and — only if you opt in — to send you our occasional newsletter. We never sell your personal information.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You can unsubscribe from marketing emails at any time using the link in any newsletter. You may request a copy of your data, or ask us to delete it, by emailing hello@levityaerial.com.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "We use a small number of cookies to remember your preferences and understand how the site is used. You can disable cookies in your browser settings, though some features may not work as smoothly.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "June 1, 2026",
    intro:
      "These terms govern your use of the Levity Aerial Yoga website and studio services. This is a demonstration document and not legal advice.",
    sections: [
      {
        heading: "Bookings & payment",
        paragraphs: [
          "Classes are reserved on a first-come basis and confirmed once payment or a valid pass is applied. Because hammocks are limited, we recommend booking ahead.",
          "Class packs and memberships are subject to the validity periods listed on the Pricing page.",
        ],
      },
      {
        heading: "Cancellations",
        paragraphs: [
          "You may cancel up to 12 hours before a class for a full credit. Cancellations inside 12 hours, or no-shows, forfeit the class so the spot can be offered to the waitlist.",
        ],
      },
      {
        heading: "Health & safety",
        paragraphs: [
          "Aerial yoga is a physical activity undertaken at your own risk. You agree to disclose relevant medical conditions and to follow your teacher's guidance. If you feel unwell, stop and tell your teacher.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "To the fullest extent permitted by law, Levity is not liable for injury or loss arising from use of our services where we have met our duty of care. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
    ],
  },
};
