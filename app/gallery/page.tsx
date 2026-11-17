import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryClient from "@/components/GalleryClient";
import { GALLERY_DATA } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments of Our Heritage — explore photographs and videos of Keiyo traditional dances, attire, Mursik, cultural exhibitions, performers and Rimoi wildlife.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={GALLERY_DATA.hero.eyebrow}
        title={GALLERY_DATA.hero.title}
        subtitle={GALLERY_DATA.hero.subtitle}
        breadcrumbLabel="Gallery"
        image={GALLERY_DATA.hero.image}
        imageAlt={GALLERY_DATA.hero.imageAlt}
      />
      <GalleryClient />
    </>
  );
}
