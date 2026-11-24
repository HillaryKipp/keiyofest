import { SITE_IMAGES } from "./site";

export type NewsCategory =
  | "Official Announcements"
  | "Event Programme Updates"
  | "Featured Performers"
  | "Ticket Booking Announcements"
  | "Tourism Excursion Updates"
  | "Media Coverage & Press Releases";

export interface NewsPost {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string[];
}

export const NEWS_DATA = {
  hero: {
    eyebrow: "News and Updates",
    title: "Stay Connected",
    subtitle:
      "Get the latest announcements, event updates, ticket information, partnership opportunities and cultural stories.",
    image: SITE_IMAGES.itenLandscape.src,
    imageAlt: SITE_IMAGES.itenLandscape.alt,
  },
  categories: [
    "Official Announcements",
    "Event Programme Updates",
    "Featured Performers",
    "Ticket Booking Announcements",
    "Tourism Excursion Updates",
    "Media Coverage & Press Releases",
  ] as NewsCategory[],
  posts: [
    {
      slug: "keiyo-cultural-fest-2026-official-announcement",
      title: "KEIYO CULTURAL FEST 2026 Set for 23rd December at Buffalo Safaris – Kolol",
      category: "Official Announcements",
      date: "November 2026",
      excerpt:
        "Join us on Wednesday, 23rd December 2026 at Buffalo Safaris – Kolol along the Iten–Kabarnet Road in Elgeyo Marakwet County for an annual celebration of Keiyo heritage.",
      image: SITE_IMAGES.hero.src,
      imageAlt: SITE_IMAGES.hero.alt,
      content: [
        "KEIYO CULTURAL FEST 2026 will take place on Wednesday, 23rd December 2026 at Buffalo Safaris – Kolol, Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya.",
        "Guided by the theme 'Our Culture, Our Pride, Our Unity', the Fest brings together Keiyo community members, government leaders and representatives, cultural groups and performers, tourists and visitors, youth and professionals, corporate organisations and partners, and friends of the Keiyo community.",
        "Visitors can look forward to traditional Keiyo dances and music, traditional cuisine including Mursik, cultural exhibitions and artefacts, traditional attire and fashion, live entertainment, and tourism excursions to Rimoi National Reserve.",
      ],
    },
    {
      slug: "rimoi-national-reserve-excursion-updates",
      title: "Tourism Excursion Updates: Exploring Rimoi National Reserve",
      category: "Tourism Excursion Updates",
      date: "November 2026",
      excerpt:
        "For wildlife and nature lovers, organised excursions towards Rimoi National Reserve will offer an unforgettable cultural and tourism experience.",
      image: SITE_IMAGES.rimoiElephants.src,
      imageAlt: SITE_IMAGES.rimoiElephants.alt,
      content: [
        "KEIYO CULTURAL FEST 2026 will also provide an opportunity for visitors to explore the natural beauty and tourism attractions of Elgeyo Marakwet County.",
        "For wildlife and nature lovers, organised excursions towards Rimoi National Reserve will offer an opportunity to explore one of the region's unique wildlife destinations. Visitors will have an opportunity to experience wildlife viewing, particularly elephants, and discover the natural beauty of the reserve.",
        "Other tourism experiences and excursion arrangements will be added as they are confirmed.",
      ],
    },
    {
      slug: "tickets-and-partnership-opportunities-2026",
      title: "Ticket Categories & Partnership Opportunities Announced",
      category: "Ticket Booking Announcements",
      date: "November 2026",
      excerpt:
        "Three ticket categories — Early Bird Regular (KES 1,499), Early Bird VIP (KES 4,440) and Standard (KES 1,550) — alongside sponsorship and partnership opportunities.",
      image: SITE_IMAGES.festivalCrowd.src,
      imageAlt: SITE_IMAGES.festivalCrowd.alt,
      content: [
        "Visitors can now secure their tickets across three categories: Early Bird Regular at KES 1,499, Early Bird VIP at KES 4,440, and Standard at KES 1,550 via M-Pesa Paybill No: 522533, Account No: 8888529 (Account Name: KEIYO CULTURAL FEST). After payment, contact 0704 168 063 to verify your payment and attendance.",
        "KEIYO CULTURAL FEST 2026 also welcomes partnerships and sponsorships from government institutions, corporate organisations, tourism stakeholders, businesses, development partners and individuals who share our vision of cultural preservation and community empowerment.",
        "Organisations interested in sponsorship, partnership, exhibition or participation can reach out via our Partners page or Contact form.",
      ],
    },
  ] as NewsPost[],
};
