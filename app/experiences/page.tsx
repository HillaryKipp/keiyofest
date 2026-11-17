import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  Drama,
  Music,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { EXPERIENCES_DATA } from "@/data/experiences";
import { SITE_IMAGES } from "@/data/site";

export const metadata: Metadata = {
  title: "Festival Experiences",
  description:
    "Experience the best of Keiyo culture: traditional dances and music, Mursik and traditional cuisine, cultural exhibitions, heritage storytelling, fashion and entertainment.",
  alternates: { canonical: "/experiences/" },
};

const icons = [Music, Utensils, Sparkles, BookOpen, Drama, Users];

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow={EXPERIENCES_DATA.hero.eyebrow}
        title={EXPERIENCES_DATA.hero.title}
        subtitle={EXPERIENCES_DATA.hero.subtitle}
        breadcrumbLabel="Experiences"
        image={EXPERIENCES_DATA.hero.image}
        imageAlt={EXPERIENCES_DATA.hero.imageAlt}
      />

      {/* Intro Band */}
      <section className="section-sm bg-[var(--cream)] border-b border-[#d8f3dc]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16 items-center">
            <div>
              <div className="section-label mb-2">{EXPERIENCES_DATA.intro.eyebrow}</div>
              <h2 className="text-[clamp(26px,3.2vw,38px)] font-bold text-[#1a2e1a] leading-tight">
                {EXPERIENCES_DATA.intro.heading}
              </h2>
            </div>
            <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed">
              {EXPERIENCES_DATA.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* 6 Experiences Alternating Rows (matching /our-projects layout) */}
      {EXPERIENCES_DATA.experiences.map((exp, idx) => {
        const Icon = icons[idx] || Sparkles;
        const isEven = idx % 2 === 1;
        return (
          <section
            key={exp.id}
            id={exp.id}
            className={`py-[72px] border-b border-[#d8f3dc] ${
              isEven ? "bg-[#f0faf4]" : "bg-white"
            }`}
          >
            <div className="container-site">
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-center">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#2d6a4f] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e1a] leading-snug">
                    {exp.title}
                  </h2>
                  <p className="font-serif-heading italic text-[#2d6a4f] text-sm mt-2">
                    {exp.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center">
                  <p className="text-[#4a5568] text-base sm:text-lg leading-[1.8]">
                    {exp.description}
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-md h-[220px]">
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="cta-section section text-center text-white">
        <img
          src={SITE_IMAGES.festivalCrowd.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="container-site relative z-10 max-w-2xl">
          <Compass className="w-9 h-9 text-[#e8c06a] mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-[clamp(28px,3.8vw,44px)] font-bold mb-4">
            Ready to Experience Keiyo Culture?
          </h2>
          <p className="text-white/85 mb-8">
            Book your ticket for 24th December 2026 or explore our Rimoi National Reserve excursions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tickets/" className="btn btn-earth">
              Get Your Tickets
            </Link>
            <Link href="/tourism/" className="btn btn-outline">
              Explore Tourism &amp; Excursions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
