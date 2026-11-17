import { SITE_IMAGES } from "./site";

export interface TicketCategory {
  id: string;
  name: string;
  price: string; // Leave empty ("") to show "Prices coming soon"
  badge?: string;
  benefits: string[];
  highlighted?: boolean;
}

export const TICKETS_DATA = {
  hero: {
    eyebrow: "Tickets and Bookings",
    title: "Secure Your Place at KEIYO CULTURAL FEST 2026",
    subtitle:
      "Be part of this extraordinary celebration of culture, heritage and unity.",
    image: SITE_IMAGES.festivalCrowd.src,
    imageAlt: SITE_IMAGES.festivalCrowd.alt,
  },
  intro:
    "Visitors will be able to purchase tickets through the official event booking platform and designated payment channels.",
  /**
   * PLACEHOLDER: Set official booking platform URL when available (e.g. "https://tickets.keiyoculturalfest.co.ke")
   */
  bookingPlatformUrl: "",
  categories: [
    {
      id: "early-bird-regular",
      name: "Early Bird Regular",
      price: "", // PLACEHOLDER: e.g. "KES 1,000"
      badge: "Early Bird",
      benefits: [
        "Full-day general admission to KEIYO CULTURAL FEST 2026",
        "Access to traditional dances, music and live entertainment",
        "Access to cultural exhibitions and heritage showcases",
        "Electronic ticket confirmation upon booking",
      ],
    },
    {
      id: "early-bird-vip",
      name: "Early Bird VIP",
      price: "", // PLACEHOLDER: e.g. "KES 3,000"
      badge: "Best Value",
      highlighted: true,
      benefits: [
        "Priority VIP seating and reserved viewing area",
        "Full access to traditional dances, music and exhibitions",
        "Dedicated VIP hospitality and networking access",
        "Electronic ticket confirmation upon booking",
      ],
    },
    {
      id: "standard-general",
      name: "Standard / General Admission",
      price: "", // PLACEHOLDER: e.g. "KES 1,500"
      benefits: [
        "Full-day general admission on 24th December 2026",
        "Access to cultural performances, cuisine & exhibition grounds",
        "Access to community networking spaces",
        "Electronic ticket confirmation upon booking",
      ],
    },
    {
      id: "vip-admission",
      name: "VIP Admission",
      price: "", // PLACEHOLDER: e.g. "KES 4,000"
      badge: "VIP",
      benefits: [
        "Priority VIP seating and dedicated hospitality zone",
        "Full access to all performances, exhibitions and showcases",
        "Executive networking with leaders, artists & partners",
        "Electronic ticket confirmation upon booking",
      ],
    },
  ] as TicketCategory[],
  paymentInstructions: {
    title: "Payment Instructions",
    description:
      "Official payment channels (M-Pesa Paybill / Till and online card payment details) will be published here once confirmed.",
    channels: [
      "Official event booking platform (link to be added upon confirmation).",
      "Designated mobile money & bank payment channels (details to be added when available).",
    ],
  },
  confirmationNote: {
    title: "Confirmation and Electronic Ticket Delivery",
    description:
      "Once your booking and payment are confirmed, an electronic ticket with a unique booking reference will be delivered to your registered email address and phone number. Start booking today and secure your place!",
  },
};
