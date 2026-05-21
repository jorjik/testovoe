export interface SectionContent {
  headline?: string;
  subheadline?: string;
  cta?: string;
  [key: string]: any;
}

export interface AppContent {
  promoBar: {
    offer: string;
    cta: string;
  };
  header: {
    login: string;
    signup: string;
  };
  hero: SectionContent;
  socialProof: {
    headline: string;
    items: Array<{ name: string; action: string; time: string; likes: number }>;
  };
  games: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  faq: {
    headline: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    disclaimer: string;
    copyright: string;
    links: Array<{ label: string; href: string }>;
  };
}

const shared = {
  header: {
    login: "LOG IN",
    signup: "SIGN UP",
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "What is a social casino?",
        answer: "A social casino is an online platform where you can play casino-style games like slots, blackjack, roulette and craps purely for entertainment. Unlike traditional online casinos, social casinos do not offer real-money gaming. Instead, you play with virtual coins that have no cash value, which you can earn or claim for free.",
      },
      {
        question: "Is it free to play?",
        answer: "Yes! You can claim free coins daily and through ongoing promotions. Optional coin packages are available, but they're never required to enjoy the games.",
      },
      {
        question: "Why do players love SpinQuest?",
        answer: "SpinQuest is built by players, for players. We know what makes gameplay exciting because we're passionate about it ourselves. Our focus is on delivering a fun, rewarding experience with fresh content, a vibrant community, and a constantly growing selection of games.",
      },
    ],
  },
  footer: {
    disclaimer: "NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING. VOID WHERE PROHIBITED BY LAW. Must be 18+ to play.",
    copyright: "© 2026 Social Casino Inc. All Rights Reserved.",
    links: [
      { label: "Responsible Social Gameplay", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
};

export const themesContent: Record<string, AppContent> = {
  v1: {
    ...shared,
    promoBar: {
      offer: "All Players Get 30 Coins for just $10",
      cta: "CLAIM OFFER",
    },
    hero: {
      headline: "MADE BY PLAYERS. FOR PLAYERS.",
      subheadline: "Join the most vibrant social casino community in the US.",
      cta: "CREATE ACCOUNT",
      backgroundImage: "/assets/v1-hero.png",
    },
    socialProof: {
      headline: "Our Community",
      items: [
        { name: "John D.", action: "won 50,000 GC!", time: "2m ago", likes: 124 },
        { name: "Sarah K.", action: "unlocked Le Viking!", time: "5m ago", likes: 89 },
        { name: "Mike R.", action: "joined the journey!", time: "10m ago", likes: 45 },
      ],
    },
    games: {
      headline: "1,000+ GAMES & LIVE DEALERS",
      subheadline: "Top slots and Live games all in one place.",
      cta: "EXPLORE GAMES",
    },
  },
  v2: {
    ...shared,
    promoBar: {
      offer: "FREE TO PLAY. WIN REAL REWARDS.",
      cta: "START NOW",
    },
    hero: {
      headline: "LUCK ISN'T FOUND. IT'S FOLLOWED.",
      subheadline: "A new way to play. A new way to win. Follow the path. Take your chances. Discover rewards.",
      cta: "START YOUR JOURNEY",
      backgroundImage: "/assets/v2-hero.png",
    },
    socialProof: {
      headline: "Follow the Path",
      items: [
        { name: "Explorer John", action: "reached the Fortune Peak", time: "2m ago", likes: 302 },
        { name: "Adventurer Sarah", action: "found the Golden Compass", time: "5m ago", likes: 156 },
        { name: "Traveler Mike", action: "started his journey", time: "10m ago", likes: 78 },
      ],
    },
    games: {
      headline: "UNCOVER THE TREASURES",
      subheadline: "Play exciting games at each stop along your path.",
      cta: "TAKE CHANCES",
    },
  },
};
