import type { Metadata } from "next";
import Link from "next/link";
import { Binoculars, Compass, MapPin, Trees } from "lucide-react";
import PageHero from "@/components/PageHero";
import { TOURISM_DATA } from "@/data/tourism";
import { SITE_IMAGES } from "@/data/site";

export const metadata: Metadata = {
  title: "Tourism and Excursions",
  description:
    "Discover Elgeyo Marakwet County and organised excursions to Rimoi National Reserve for elephant and wildlife viewing during KEIYO CULTURAL FEST 2026.",
  alternates: { canonical: "/tourism/" },
};

export default function TourismPage() {
  return (
    <>
      <PageHero
        eyebrow={TOURISM_DATA.hero.eyebrow}
        title={TOURISM_DATA.hero.title}
        subtitle={TOURISM_DATA.hero.subtitle}
        breadcrumbLabel="Tourism & Excursions"
        image={TOURISM_DATA.hero.image}
        imageAlt={TOURISM_DATA.hero.imageAlt}
      />

      {/* Rimoi National Reserve Split Section */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="section-label mb-3">{TOURISM_DATA.rimoi.eyebrow}</div>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#3b1508] leading-tight">
                {TOURISM_DATA.rimoi.heading}
              </h2>
              <div className="divider" />
              <div className="space-y-4 text-[#6b4334] text-[16px] sm:text-[17px] leading-[1.8]">
                {TOURISM_DATA.rimoi.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-xl bg-[#fdf3e1] border-l-4 border-[#d9480f] text-[#3b1508] font-serif-heading italic text-lg">
                &ldquo;{TOURISM_DATA.rimoi.motto}&rdquo;
              </div>

              <p className="text-sm text-[#6b4334] mt-5">
                {TOURISM_DATA.rimoi.note}
              </p>
            </div>

            <div className="reveal">
              <div className="rounded-[24px] overflow-hidden shadow-lg h-[380px] sm:h-[460px]">
                <img
                  src={TOURISM_DATA.rimoi.image}
                  alt={TOURISM_DATA.rimoi.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sights & Flavours Photo Showcase */}
      <section className="section bg-[#fdf3e1]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-3">{TOURISM_DATA.showcase.eyebrow}</div>
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold text-[#3b1508]">
              {TOURISM_DATA.showcase.heading}
            </h2>
            <p className="text-[#6b4334] mt-3">{TOURISM_DATA.showcase.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOURISM_DATA.showcase.items.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-[20px] overflow-hidden border border-[#f6dcb8] shadow-sm hover:shadow-md transition flex flex-col reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="h-60 overflow-hidden bg-[#2a0e05]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="section-label mb-1.5">{item.tag}</div>
                  <h3 className="text-lg font-bold text-[#3b1508] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b4334] leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TOURISM_DATA.highlights.map((item, idx) => {
              const Icons = [Binoculars, Trees, Compass];
              const Icon = Icons[idx] || Compass;
              return (
                <div key={item.title} className="prog-card">
                  <Icon className="w-8 h-8 text-[#c2410c] mb-4" aria-hidden="true" />
                  <div className="section-label mb-2">{item.tag}</div>
                  <h3 className="text-xl font-bold text-[#3b1508] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b4334] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
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
          <MapPin className="w-9 h-9 text-[#fbbf3c] mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-[clamp(28px,3.8vw,44px)] font-bold mb-4">
            Plan Your Cultural &amp; Wildlife Trip
          </h2>
          <p className="text-white/85 mb-8">
            Combine KEIYO CULTURAL FEST 2026 at Buffalo Safaris – Kolol with an unforgettable excursion to Rimoi National Reserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/event/" className="btn btn-earth">
              View Event Information
            </Link>
            <Link href="/contact/" className="btn btn-outline">
              Enquire About Excursions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
