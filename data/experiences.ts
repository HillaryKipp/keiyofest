import { SITE_IMAGES } from "./site";

export const EXPERIENCES_DATA = {
  hero: {
    eyebrow: "Festival Experiences",
    title: "Experience the Best of Keiyo Culture",
    subtitle:
      "Six rich cultural experiences celebrating traditional dances, music, cuisine, exhibitions, storytelling, fashion and community unity.",
    image: SITE_IMAGES.traditionalDance.src,
    imageAlt: SITE_IMAGES.traditionalDance.alt,
  },
  intro: {
    eyebrow: "Programme Pillars",
    heading: "What Awaits You on 24th December 2026",
    description:
      "From ancestral rhythms and traditional Mursik to cultural fashion showcases and community networking, every element of KEIYO CULTURAL FEST 2026 is designed to honour our heritage.",
  },
  experiences: [
    {
      id: "dances-music",
      title: "Traditional Dances and Music",
      tagline: "Ancestral Rhythms & Live Performances",
      description:
        "Enjoy authentic Keiyo traditional dances, cultural songs, live performances and entertainment that showcase the beauty of our ancestral traditions.",
      image: SITE_IMAGES.traditionalDance.src,
      imageAlt: SITE_IMAGES.traditionalDance.alt,
    },
    {
      id: "food-cuisine",
      title: "Traditional Food and Cuisine",
      tagline: "Mursik & Traditional Delicacies",
      description:
        "Discover the unique flavours of Keiyo cuisine, including Mursik and other traditional delicacies.",
      image: SITE_IMAGES.mursikGourd.src,
      imageAlt: SITE_IMAGES.mursikGourd.alt,
    },
    {
      id: "cultural-exhibitions",
      title: "Cultural Exhibitions",
      tagline: "Artefacts, Ornaments & Craftsmanship",
      description:
        "Explore traditional artefacts, ornaments, clothing, craftsmanship, historical displays and cultural demonstrations.",
      image: SITE_IMAGES.culturalExhibitions.src,
      imageAlt: SITE_IMAGES.culturalExhibitions.alt,
    },
    {
      id: "heritage-storytelling",
      title: "Keiyo Heritage and Storytelling",
      tagline: "History, Ancestry & Values",
      description:
        "Learn about our history, ancestry, traditions, values and the stories that define the Keiyo people.",
      image: SITE_IMAGES.storytellingHeritage.src,
      imageAlt: SITE_IMAGES.storytellingHeritage.alt,
    },
    {
      id: "fashion-identity",
      title: "Fashion and Cultural Identity",
      tagline: "Traditional Attire & Contemporary Style",
      description:
        "Experience traditional Keiyo attire, cultural fashion showcases and contemporary interpretations of our heritage.",
      image: SITE_IMAGES.traditionalAttire.src,
      imageAlt: SITE_IMAGES.traditionalAttire.alt,
    },
    {
      id: "entertainment-networking",
      title: "Entertainment and Networking",
      tagline: "Celebration, Connection & Unity",
      description:
        "Connect with community leaders, artists, professionals, entrepreneurs, young people and visitors in an atmosphere of celebration and unity.",
      image: SITE_IMAGES.festivalCrowd.src,
      imageAlt: SITE_IMAGES.festivalCrowd.alt,
    },
  ],
};
