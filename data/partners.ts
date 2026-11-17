import { SITE_IMAGES } from "./site";

export interface PartnerGroup {
  id: string;
  title: string;
  description: string;
  slots: { name: string; logo?: string }[];
}

export const PARTNERS_DATA = {
  hero: {
    eyebrow: "Partners and Sponsors",
    title: "Partner With Us",
    subtitle:
      "KEIYO CULTURAL FEST 2026 welcomes partnerships and sponsorships from government institutions, corporate organisations, tourism stakeholders, businesses, development partners and individuals who share our vision of cultural preservation and community empowerment.",
    image: SITE_IMAGES.hero.src,
    imageAlt: SITE_IMAGES.hero.alt,
  },
  whyPartner: {
    eyebrow: "Partnership Value",
    heading: "Why Partner With Us?",
    items: [
      "Brand visibility and recognition.",
      "Direct engagement with diverse audiences.",
      "Support for cultural preservation.",
      "Promotion of tourism and local businesses.",
      "Youth empowerment and community development.",
      "Networking and partnership opportunities.",
    ],
    ctas: ["Become a Sponsor", "Become a Partner", "Support Our Heritage"],
  },
  groups: [
    {
      id: "official-sponsors",
      title: "Official Sponsors",
      description: "Logos will be added upon confirmation.",
      slots: [
        { name: "Official Sponsor Slot 1" },
        { name: "Official Sponsor Slot 2" },
        { name: "Official Sponsor Slot 3" },
      ],
    },
    {
      id: "media-partners",
      title: "Media Partners",
      description: "Logos will be added upon confirmation.",
      slots: [
        { name: "Media Partner Slot 1" },
        { name: "Media Partner Slot 2" },
        { name: "Media Partner Slot 3" },
      ],
    },
    {
      id: "tourism-partners",
      title: "Tourism Partners",
      description: "Logos will be added upon confirmation.",
      slots: [
        { name: "Tourism Partner Slot 1" },
        { name: "Tourism Partner Slot 2" },
        { name: "Tourism Partner Slot 3" },
      ],
    },
    {
      id: "supporting-organisations",
      title: "Supporting Organisations",
      description: "Logos will be added upon confirmation.",
      slots: [
        { name: "Supporting Organisation Slot 1" },
        { name: "Supporting Organisation Slot 2" },
        { name: "Supporting Organisation Slot 3" },
      ],
    },
  ] as PartnerGroup[],
};
