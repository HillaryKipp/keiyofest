import { SITE_IMAGES } from "./site";

export type GalleryCategory =
  | "All"
  | "Dances"
  | "Attire"
  | "Food"
  | "Exhibitions"
  | "Preparations"
  | "Performers"
  | "Tourism & Wildlife";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
}

export interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // Leave empty ("") until an official festival YouTube video ID is available
}

export const GALLERY_DATA = {
  hero: {
    eyebrow: "Gallery",
    title: "Moments of Our Heritage",
    subtitle:
      "Include photographs and videos from the 2026 Fest and future editions.",
    image: SITE_IMAGES.culturalPerformers.src,
    imageAlt: SITE_IMAGES.culturalPerformers.alt,
  },
  categories: [
    "All",
    "Dances",
    "Attire",
    "Food",
    "Exhibitions",
    "Preparations",
    "Performers",
    "Tourism & Wildlife",
  ] as GalleryCategory[],
  photos: [
    {
      id: "g-1",
      src: SITE_IMAGES.traditionalDance.src,
      alt: SITE_IMAGES.traditionalDance.alt,
      caption: "Keiyo traditional dances and cultural music",
      category: "Dances",
    },
    {
      id: "g-2",
      src: SITE_IMAGES.traditionalAttire.src,
      alt: SITE_IMAGES.traditionalAttire.alt,
      caption: "Cultural attire and traditional fashion",
      category: "Attire",
    },
    {
      id: "g-3",
      src: SITE_IMAGES.mursikGourd.src,
      alt: SITE_IMAGES.mursikGourd.alt,
      caption: "Traditional food, Mursik and calabash (sotet)",
      category: "Food",
    },
    {
      id: "g-4",
      src: SITE_IMAGES.culturalExhibitions.src,
      alt: SITE_IMAGES.culturalExhibitions.alt,
      caption: "Cultural exhibitions, artefacts and craftsmanship",
      category: "Exhibitions",
    },
    {
      id: "g-5",
      src: SITE_IMAGES.kalenjinHomestead.src,
      alt: SITE_IMAGES.kalenjinHomestead.alt,
      caption: "Heritage grounds and event preparations",
      category: "Preparations",
    },
    {
      id: "g-6",
      src: SITE_IMAGES.culturalPerformers.src,
      alt: SITE_IMAGES.culturalPerformers.alt,
      caption: "Performers and live cultural entertainment",
      category: "Performers",
    },
    {
      id: "g-7",
      src: SITE_IMAGES.rimoiElephants.src,
      alt: SITE_IMAGES.rimoiElephants.alt,
      caption: "Rimoi National Reserve — elephant viewing excursion",
      category: "Tourism & Wildlife",
    },
    {
      id: "g-8",
      src: SITE_IMAGES.hero.src,
      alt: SITE_IMAGES.hero.alt,
      caption: "Kerio Valley and Elgeyo Escarpment panorama",
      category: "Tourism & Wildlife",
    },
    {
      id: "g-9",
      src: SITE_IMAGES.storytellingHeritage.src,
      alt: SITE_IMAGES.storytellingHeritage.alt,
      caption: "Heritage storytelling and intergenerational dialogue",
      category: "Exhibitions",
    },
    {
      id: "g-10",
      src: SITE_IMAGES.festivalCrowd.src,
      alt: SITE_IMAGES.festivalCrowd.alt,
      caption: "Community celebration and gathering",
      category: "Performers",
    },
    {
      id: "g-11",
      src: SITE_IMAGES.elephantsHerd.src,
      alt: SITE_IMAGES.elephantsHerd.alt,
      caption: "Wildlife experiences in the Rift Valley corridor",
      category: "Tourism & Wildlife",
    },
    {
      id: "g-12",
      src: SITE_IMAGES.itenLandscape.src,
      alt: SITE_IMAGES.itenLandscape.alt,
      caption: "Iten — gateway to Elgeyo Marakwet County",
      category: "Preparations",
    },
    {
      id: "g-13",
      src: SITE_IMAGES.torokFalls.src,
      alt: SITE_IMAGES.torokFalls.alt,
      caption: "Torok Falls plunging down the Elgeyo Escarpment",
      category: "Tourism & Wildlife",
    },
    {
      id: "g-14",
      src: SITE_IMAGES.itenKabarnetRoad.src,
      alt: SITE_IMAGES.itenKabarnetRoad.alt,
      caption: "Scenic winding Iten–Kabarnet Road into Kerio Valley",
      category: "Tourism & Wildlife",
    },
    {
      id: "g-15",
      src: SITE_IMAGES.kerioMangoes.src,
      alt: SITE_IMAGES.kerioMangoes.alt,
      caption: "Fresh sun-ripened mangoes from Kerio Valley",
      category: "Food",
    },
    {
      id: "g-16",
      src: SITE_IMAGES.rimoiElephantsHerd.src,
      alt: SITE_IMAGES.rimoiElephantsHerd.alt,
      caption: "Elephants roaming Rimoi National Reserve, Elgeyo Marakwet",
      category: "Tourism & Wildlife",
    },
  ] as GalleryPhoto[],
  videos: [
    {
      id: "v-1",
      title: "KEIYO CULTURAL FEST 2026 — Official Highlights & Video Archive",
      description:
        "Official festival videos and highlights from KEIYO CULTURAL FEST 2026 will be featured here. Add a YouTube video ID in data/gallery.ts to embed.",
      youtubeId: "", // PLACEHOLDER: e.g. "dQw4w9WgXcQ"
    },
  ] as GalleryVideo[],
};
