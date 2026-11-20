export const SITE_CONFIG = {
  name: "KEIYO CULTURAL FEST 2026",
  shortName: "KEIYO FEST",
  tagline: "Our Culture, Our Pride, Our Unity",
  theme: "Our Culture, Our Pride, Our Unity.",
  eventDateDisplay: "23rd December 2026",
  eventDateFull: "Wednesday, 23rd December 2026",
  eventDateISO: "2026-12-23T09:00:00+03:00",
  eventType: "Annual Cultural Celebration",
  venue: "Buffalo Safaris – Kolol",
  location: "Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya",
  fullVenue: "Buffalo Safaris – Kolol, Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya",
  domain: "https://keiyoculturalfest.co.ke",
  copyright: "© 2026 KEIYO CULTURAL FEST. All Rights Reserved.",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};

/** Event date parts, as displayed on the official poster */
export const EVENT_DATE_PARTS = {
  weekday: "WED",
  day: "23",
  daySuffix: "RD",
  month: "DEC",
  year: "2026",
};

/** Official festival activities (from the event poster) */
export const FEST_ACTIVITIES: string[] = [
  "Live Kalenjin Music Performance",
  "Traditional Dances",
  "Mursik & Local Cuisine",
  "Keiyo Cultural Artifacts",
  "Environment Conservation",
  "Art & Crafts",
  "Leadership Seminars",
  "Community Discussions",
];

export const FEST_HASHTAGS: string[] = [
  "#KEIYOCULTUREFEST",
  "#HERITAGE",
  "#KEIYO",
  "#CULTURALEXCHANGE",
  "#UNITY",
];

/**
 * Contact details & social links.
 * Leave values empty ("") until confirmed; any empty link is automatically hidden in the UI.
 */
export const CONTACT_DETAILS = {
  email: "keiyoculturalfest@gmail.com",
  phone: "", // PLACEHOLDER: e.g. "+254 700 000 000"
  whatsapp: "", // PLACEHOLDER: digits with country code, e.g. "254700000000"
  socials: {
    facebook: "", // PLACEHOLDER: e.g. "https://facebook.com/keiyoculturalfest"
    instagram: "", // PLACEHOLDER: e.g. "https://instagram.com/keiyoculturalfest"
    tiktok: "", // PLACEHOLDER: e.g. "https://tiktok.com/@keiyoculturalfest"
    x: "", // PLACEHOLDER: e.g. "https://x.com/keiyoculturalfest"
  },
};

/**
 * Centralised image paths (local WebP files in /public/images/).
 * Replace any image by updating its path here or overwriting the file in /public/images/.
 */
export const SITE_IMAGES = {
  logo: "/logo.png",
  ogImage: "/og-image.png",
  hero: {
    src: "/images/hero-kerio-valley.webp",
    alt: "Panoramic view of the Kerio Valley and Elgeyo Escarpment near Iten in Elgeyo Marakwet County, Kenya",
  },
  itenLandscape: {
    src: "/images/iten-landscape.webp",
    alt: "Gateway to Iten town in Elgeyo Marakwet County, Kenya",
  },
  rimoiElephants: {
    src: "/images/rimoi-elephants.webp",
    alt: "African elephants in the Kenyan savanna near Rimoi National Reserve",
  },
  elephantsHerd: {
    src: "/images/elephants-herd.webp",
    alt: "Herd of African elephants in their natural habitat in Kenya",
  },
  mursikGourd: {
    src: "/images/mursik-gourd.webp",
    alt: "Traditional Kalenjin calabash gourd (sotet) used for preparing Mursik",
  },
  kalenjinHomestead: {
    src: "/images/kalenjin-homestead.webp",
    alt: "Traditional Kalenjin homestead and architectural heritage",
  },
  traditionalDance: {
    src: "/images/traditional-dance.webp",
    alt: "Kenyan traditional dancer performing cultural music and dance",
  },
  culturalPerformers: {
    src: "/images/cultural-performers.webp",
    alt: "Cultural performers in celebratory traditional dance",
  },
  traditionalAttire: {
    src: "/images/traditional-attire.webp",
    alt: "Traditional Kenyan cultural attire and beaded ornaments",
  },
  culturalExhibitions: {
    src: "/images/cultural-exhibitions.webp",
    alt: "Handcrafted traditional Kenyan baskets and cultural artefacts",
  },
  storytellingHeritage: {
    src: "/images/storytelling-heritage.webp",
    alt: "Community elder sharing cultural heritage and storytelling",
  },
  festivalCrowd: {
    src: "/images/festival-crowd.webp",
    alt: "Kenyan cultural festival celebration and community gathering",
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const HEADER_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Experiences", href: "/experiences/" },
  { label: "Tourism", href: "/tourism/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "News", href: "/news/" },
  { label: "Partners", href: "/partners/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Experiences", href: "/experiences/" },
  { label: "Tourism", href: "/tourism/" },
  { label: "Tickets", href: "/tickets/" },
  { label: "Partners", href: "/partners/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/contact/" },
];

export const FOOTER_EVENT_LINKS: NavItem[] = [
  { label: "Event Information", href: "/event/" },
  { label: "News & Updates", href: "/news/" },
  { label: "Get Your Tickets", href: "/tickets/" },
  { label: "Become a Partner", href: "/partners/" },
  { label: "FAQs", href: "/contact/#faq" },
];
