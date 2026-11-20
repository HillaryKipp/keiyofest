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
      price: "KES 1,499",
      badge: "Early Bird",
      benefits: [
        "Full-day general admission to KEIYO CULTURAL FEST 2026",
        "Live Kalenjin music performances & traditional dances",
        "Access to Keiyo cultural artifacts, art & crafts exhibitions",
        "Electronic ticket confirmation upon booking",
      ],
    },
    {
      id: "early-bird-vip",
      name: "Early Bird VIP",
      price: "KES 4,440",
      badge: "VIP",
      highlighted: true,
      benefits: [
        "Priority VIP seating and reserved viewing area",
        "Full access to performances, dances, exhibitions & seminars",
        "Dedicated VIP hospitality and networking access",
        "Electronic ticket confirmation upon booking",
      ],
    },
    {
      id: "standard",
      name: "Standard",
      price: "KES 1,550",
      benefits: [
        "Full-day general admission on 23rd December 2026",
        "Access to Mursik & local cuisine and exhibition grounds",
        "Access to leadership seminars & community discussions",
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
