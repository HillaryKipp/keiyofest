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
    "Pay securely via M-Pesa Paybill (522533, Account No: 8888529 — KEIYO CULTURAL FEST) and contact 0704 168 063 to verify your payment and attendance.",
  /**
   * PLACEHOLDER: Set official booking platform URL when available (e.g. "https://tickets.keiyoculturalfest.co.ke")
   */
  bookingPlatformUrl: "",
  paymentDetails: {
    method: "M-Pesa Paybill",
    paybill: "522533",
    accountNumber: "8888529",
    accountName: "KEIYO CULTURAL FEST",
    verificationPhone: "0704168063",
    verificationPhoneDisplay: "0704 168 063",
    verificationPhoneTel: "+254704168063",
    verificationWhatsapp: "254704168063",
  },
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
        "Payment & attendance verification via 0704 168 063",
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
        "Payment & attendance verification via 0704 168 063",
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
        "Payment & attendance verification via 0704 168 063",
      ],
    },
  ] as TicketCategory[],
  paymentInstructions: {
    title: "M-Pesa Payment Instructions",
    description:
      "Pay for your ticket via M-Pesa Paybill using the official details below, then contact our verification desk to confirm your attendance.",
    channels: [
      "Go to M-Pesa → Lipa na M-Pesa → Pay Bill.",
      "Enter Business / Paybill No: 522533.",
      "Enter Account No: 8888529 (Account Name: KEIYO CULTURAL FEST).",
      "Enter the ticket amount for your chosen category and complete payment with your M-Pesa PIN.",
    ],
  },
  confirmationNote: {
    title: "Verify Payment & Confirm Attendance",
    description:
      "After making your payment, please call, SMS, or WhatsApp 0704 168 063 with your full name, ticket category, and M-Pesa confirmation message so our team can verify your payment and confirm your attendance.",
  },
};
