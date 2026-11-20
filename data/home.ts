import { SITE_IMAGES } from "./site";

export const HOME_DATA = {
  hero: {
    eyebrow: "Annual Cultural Celebration • Elgeyo Marakwet County",
    headline: "Welcome to KEIYO CULTURAL FEST 2026",
    subcopy:
      "Experience the beauty, richness and uniqueness of Keiyo culture at KEIYO CULTURAL FEST 2026, a spectacular celebration bringing together communities, leaders, cultural enthusiasts, tourists and friends of the Keiyo people.",
    primaryCta: { label: "Get Your Tickets", href: "/tickets/" },
    secondaryCta: { label: "Explore the Fest", href: "/experiences/" },
    partnerCta: { label: "Become a Partner", href: "/partners/" },
  },
  stats: [
    { value: 23, suffix: " Dec", label: "2026 Celebration Date" },
    { value: 8, suffix: "", label: "Festival Activities" },
    { value: 7, suffix: "", label: "Core Objectives" },
    { value: 3, suffix: "", label: "Ticket Categories" },
  ],
  intro: {
    eyebrow: "Our Culture, Our Pride, Our Unity",
    heading: "More Than a Celebration",
    paragraphs: [
      "Join us on 23rd December 2026 at Buffalo Safaris – Kolol, Elgeyo Marakwet County, as we celebrate our heritage through traditional dances, music, food, cultural exhibitions, tourism and entertainment.",
      "This is more than a celebration. It is an opportunity to reconnect with our roots, preserve our identity, promote cultural tourism and unite generations. Come and experience the spirit of Keiyo!",
    ],
    ctaLabel: "Read More About Us",
    ctaHref: "/about/",
    frameworkTitle: "Event Highlights",
    highlights: [
      {
        letter: "D",
        title: "Dances & Music",
        desc: "Traditional Keiyo dances and music.",
      },
      {
        letter: "M",
        title: "Cuisine & Mursik",
        desc: "Keiyo traditional cuisine and Mursik.",
      },
      {
        letter: "E",
        title: "Exhibitions",
        desc: "Cultural exhibitions and artefacts.",
      },
      {
        letter: "A",
        title: "Attire & Fashion",
        desc: "Traditional attire and fashion.",
      },
      {
        letter: "T",
        title: "Tourism & Unity",
        desc: "Tourism excursions to Rimoi National Reserve.",
      },
    ],
  },
  visionBand: {
    quote: "Our Culture, Our Pride, Our Unity.",
    attribution: "Theme — KEIYO CULTURAL FEST 2026",
  },
  activities: {
    eyebrow: "What to Expect",
    heading: "Activities",
    ticketsHeading: "Tickets Pricing",
    ticketsCta: { label: "Book Your Ticket", href: "/tickets/" },
  },
  pillars: {
    eyebrow: "Festival Experiences",
    heading: "Experience the Best of Keiyo Culture",
    subtitle:
      "Immerse yourself in authentic traditions, cuisine, storytelling, attire and community celebration.",
    items: [
      {
        title: "Traditional Dances and Music",
        description:
          "Enjoy authentic Keiyo traditional dances, cultural songs, live performances and entertainment that showcase the beauty of our ancestral traditions.",
        image: SITE_IMAGES.traditionalDance.src,
        imageAlt: SITE_IMAGES.traditionalDance.alt,
        href: "/experiences/",
        cta: "Explore Experiences",
      },
      {
        title: "Traditional Food and Cuisine",
        description:
          "Discover the unique flavours of Keiyo cuisine, including Mursik and other traditional delicacies.",
        image: SITE_IMAGES.mursikGourd.src,
        imageAlt: SITE_IMAGES.mursikGourd.alt,
        href: "/experiences/",
        cta: "Taste the Heritage",
      },
      {
        title: "Cultural Exhibitions",
        description:
          "Explore traditional artefacts, ornaments, clothing, craftsmanship, historical displays and cultural demonstrations.",
        image: SITE_IMAGES.culturalExhibitions.src,
        imageAlt: SITE_IMAGES.culturalExhibitions.alt,
        href: "/experiences/",
        cta: "View Exhibitions",
      },
    ],
  },
  flagshipBanner: {
    badge: "Wednesday, 23rd December 2026",
    heading: "Secure Your Place at KEIYO CULTURAL FEST 2026",
    description:
      "Be part of this extraordinary celebration of culture, heritage and unity at Buffalo Safaris – Kolol, Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya.",
    primaryCta: { label: "Get Your Tickets", href: "/tickets/" },
    secondaryCta: { label: "Event Information", href: "/event/" },
    highlights: [
      { value: "Kolol", label: "Buffalo Safaris Venue" },
      { value: "3", label: "Ticket Categories" },
      { value: "Rimoi", label: "Wildlife Excursions" },
    ],
    targetCardTitle: "Event Highlights",
    targetCardItems: [
      "Live entertainment and performances.",
      "Networking and community engagement.",
      "Traditional attire and cultural-inspired fashion are welcome.",
    ],
  },
  tourismTeaser: {
    eyebrow: "Tourism and Excursions",
    heading: "Discover Elgeyo Marakwet & Rimoi National Reserve",
    subtitle:
      "KEIYO CULTURAL FEST 2026 will also provide an opportunity for visitors to explore the natural beauty and tourism attractions of Elgeyo Marakwet County.",
    cards: [
      {
        tag: "Wildlife Excursion",
        title: "Rimoi National Reserve",
        description:
          "For wildlife and nature lovers, organised excursions towards Rimoi National Reserve will offer an opportunity to explore one of the region's unique wildlife destinations.",
      },
      {
        tag: "Nature Viewing",
        title: "Elephants & Landscapes",
        description:
          "Visitors will have an opportunity to experience wildlife viewing, particularly elephants, and discover the natural beauty of the reserve.",
      },
      {
        tag: "Cultural Tourism",
        title: "Unforgettable Experience",
        description:
          "The excursion will be an additional attraction for visitors seeking an unforgettable cultural and tourism experience. Discover our culture. Explore our landscapes.",
      },
    ],
    ctaLabel: "Explore Tourism & Excursions",
    ctaHref: "/tourism/",
  },
  partnerCta: {
    eyebrow: "Partners and Sponsors",
    heading: "Partner With Us",
    description:
      "KEIYO CULTURAL FEST 2026 welcomes partnerships and sponsorships from government institutions, corporate organisations, tourism stakeholders, businesses, development partners and individuals who share our vision of cultural preservation and community empowerment.",
    ctaLabel: "Become a Partner",
    ctaHref: "/partners/",
  },
  marquee: {
    eyebrow: "Official Sponsors & Partners",
    heading: "Logos will be added upon confirmation",
    slots: [
      "Official Sponsors — To Be Confirmed",
      "Media Partners — To Be Confirmed",
      "Tourism Partners — To Be Confirmed",
      "Supporting Organisations — To Be Confirmed",
      "Community Partners — To Be Confirmed",
      "Cultural Institutions — To Be Confirmed",
    ],
  },
};
