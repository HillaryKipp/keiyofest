import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, HeartHandshake, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ABOUT_DATA } from "@/data/about";
import { SITE_IMAGES } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KEIYO CULTURAL FEST 2026 — our story, Vision, Mission, and seven core objectives celebrating Keiyo heritage, identity and unity.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={ABOUT_DATA.hero.eyebrow}
        title={ABOUT_DATA.hero.title}
        subtitle={ABOUT_DATA.hero.subtitle}
        breadcrumbLabel="About Us"
        image={ABOUT_DATA.hero.image}
        imageAlt={ABOUT_DATA.hero.imageAlt}
      />

      {/* Story Split Section */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="section-label mb-3">{ABOUT_DATA.story.eyebrow}</div>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#3b1508] leading-tight">
                {ABOUT_DATA.story.heading}
              </h2>
              <div className="divider" />
              <div className="space-y-4 text-[#6b4334] text-[16px] sm:text-[17px] leading-[1.8]">
                {ABOUT_DATA.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="reveal relative">
              <div className="relative h-[420px] sm:h-[480px] rounded-[24px] overflow-hidden shadow-lg">
                <img
                  src={ABOUT_DATA.story.image}
                  alt={ABOUT_DATA.story.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0e05]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5 text-white">
                  <p className="font-serif-heading text-xl font-bold">
                    {ABOUT_DATA.story.badgeTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#f6dcb8] mt-1">
                    {ABOUT_DATA.story.badgeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote Band */}
      <section className="bg-[#3b1508] py-20 text-center px-6">
        <div className="container-site max-w-4xl">
          <div className="section-label section-label-light mb-4">
            {ABOUT_DATA.vision.eyebrow}
          </div>
          <blockquote className="font-serif-heading italic text-white text-[clamp(22px,3vw,34px)] leading-[1.5]">
            &ldquo;{ABOUT_DATA.vision.statement}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site max-w-4xl text-center">
          <div className="w-16 h-16 rounded-[18px] bg-[#f6dcb8] text-[#6b2410] flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8" aria-hidden="true" />
          </div>
          <div className="section-label mb-3">{ABOUT_DATA.mission.eyebrow}</div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#3b1508] mb-5">
            {ABOUT_DATA.mission.heading}
          </h2>
          <p className="text-lg sm:text-xl text-[#6b4334] leading-relaxed">
            {ABOUT_DATA.mission.statement}
          </p>
        </div>
      </section>

      {/* 7 Objectives */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3">{ABOUT_DATA.objectives.eyebrow}</div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#3b1508]">
              {ABOUT_DATA.objectives.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DATA.objectives.items.map((obj, idx) => (
              <div
                key={obj}
                className={`prog-card reveal ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-[#f6dcb8] text-[#6b2410] font-serif-heading font-bold text-lg flex items-center justify-center mb-4">
                  {idx + 1}
                </div>
                <p className="text-[#3b1508] font-medium text-base leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography / Venue */}
      <section className="bg-[#2a0e05] py-20 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label section-label-light mb-3">
                {ABOUT_DATA.geography.eyebrow}
              </div>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white mb-4">
                {ABOUT_DATA.geography.heading}
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                {ABOUT_DATA.geography.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_DATA.geography.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/10 border border-white/15 p-5"
                  >
                    <div className="font-serif-heading text-3xl font-bold text-[#f7a21b]">
                      {s.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] overflow-hidden shadow-lg h-[340px] sm:h-[400px]">
              <img
                src={ABOUT_DATA.geography.image}
                alt={ABOUT_DATA.geography.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section text-center text-white">
        <img
          src={SITE_IMAGES.hero.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="container-site relative z-10 max-w-2xl">
          <Calendar className="w-9 h-9 text-[#fbbf3c] mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-[clamp(28px,3.8vw,44px)] font-bold mb-4">
            Come and Experience the Spirit of Keiyo!
          </h2>
          <p className="text-white/85 mb-8">
            Join us on Wednesday, 23rd December 2026 at Buffalo Safaris – Kolol, Elgeyo Marakwet County.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tickets/" className="btn btn-earth">
              Get Your Tickets
            </Link>
            <Link href="/partners/" className="btn btn-outline">
              <HeartHandshake className="w-4 h-4" aria-hidden="true" />
              <span>Become a Partner</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
