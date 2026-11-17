import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Compass,
  Drama,
  MapPin,
  Music,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
  Utensils,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import CountdownTimer from "@/components/CountdownTimer";
import FaqAccordion from "@/components/FaqAccordion";
import { HOME_DATA } from "@/data/home";
import { NEWS_DATA } from "@/data/news";
import { GALLERY_DATA } from "@/data/gallery";
import { SITE_CONFIG, SITE_IMAGES } from "@/data/site";

const highlightIcons = [Music, Utensils, Sparkles, Drama, Compass];

export default function HomePage() {
  const previewPhotos = GALLERY_DATA.photos.slice(0, 4);
  const previewNews = NEWS_DATA.posts.slice(0, 3);

  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[680px] h-screen max-h-[980px] flex items-end pb-16 sm:pb-20 pt-28 overflow-hidden bg-[#0d1f12]">
        <img
          src={SITE_IMAGES.hero.src}
          alt={SITE_IMAGES.hero.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Floating Date Badge (Desktop/Tablet) */}
        <div className="hidden md:block absolute top-[120px] right-12 z-10 hero-date-badge px-6 py-5 text-white max-w-[230px]">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#74c69d]">
            {SITE_CONFIG.eventType}
          </div>
          <div className="font-serif-heading text-5xl font-bold text-white leading-none my-1">
            24
          </div>
          <div className="text-sm font-semibold text-[#e8c06a]">
            December 2026
          </div>
          <div className="text-xs text-white/75 mt-1.5 flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#74c69d] shrink-0 mt-0.5" aria-hidden="true" />
            <span>{SITE_CONFIG.venue}</span>
          </div>
        </div>

        <div className="container-site relative z-10 w-full">
          <div className="section-label section-label-light mb-3">
            {HOME_DATA.hero.eyebrow}
          </div>

          <h1 className="text-white text-[clamp(38px,6vw,74px)] font-bold leading-[1.08] max-w-[760px]">
            {HOME_DATA.hero.headline}
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-[580px] mt-4 leading-relaxed">
            {HOME_DATA.hero.subcopy}
          </p>

          <div className="mt-6">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7">
            <Link href={HOME_DATA.hero.primaryCta.href} className="btn btn-earth">
              <Ticket className="w-4 h-4" aria-hidden="true" />
              <span>{HOME_DATA.hero.primaryCta.label}</span>
            </Link>
            <Link href={HOME_DATA.hero.secondaryCta.href} className="btn btn-outline">
              <span>{HOME_DATA.hero.secondaryCta.label}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href={HOME_DATA.hero.partnerCta.href} className="btn btn-outline">
              <span>{HOME_DATA.hero.partnerCta.label}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED STATS BAR */}
      <section aria-label="Festival at a glance" className="border-b border-[#d8f3dc]">
        <div className="counter-grid">
          {HOME_DATA.stats.map((stat) => (
            <div key={stat.label} className="counter-item">
              <div className="font-serif-heading text-4xl sm:text-[50px] font-bold text-[#2d6a4f] leading-none">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4a5568] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTRO / MISSION & EVENT HIGHLIGHTS */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="section-label mb-3">{HOME_DATA.intro.eyebrow}</div>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1a2e1a] leading-tight">
                {HOME_DATA.intro.heading}
              </h2>
              <div className="divider" />
              <div className="space-y-4 text-[#4a5568] text-[16px] sm:text-[17px] leading-[1.8]">
                {HOME_DATA.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={HOME_DATA.intro.ctaHref} className="btn btn-primary">
                  <span>{HOME_DATA.intro.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div className="mb-4 flex items-center justify-between">
                <span className="section-label">{HOME_DATA.intro.frameworkTitle}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {HOME_DATA.intro.highlights.map((item, idx) => {
                  const Icon = highlightIcons[idx] || Sparkles;
                  const centerFifth = idx === 4 ? "col-span-2 sm:col-span-1 sm:col-start-2" : "";
                  return (
                    <div key={item.title} className={`peace-item ${centerFifth}`}>
                      <Icon
                        className="peace-icon w-6 h-6 text-[#40916c] mx-auto mb-2"
                        aria-hidden="true"
                      />
                      <div className="peace-letter font-serif-heading text-3xl sm:text-[38px] font-bold text-[#2d6a4f] leading-none">
                        {item.letter}
                      </div>
                      <div className="peace-title text-xs font-bold uppercase tracking-wider text-[#1a2e1a] mt-2">
                        {item.title}
                      </div>
                      <p className="peace-desc text-xs text-[#4a5568] mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 bg-white border border-[#d8f3dc] rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f] mb-2">
                  Also Featured at the Fest
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#4a5568]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52b788]" />
                    Live entertainment and performances.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52b788]" />
                    Networking and community engagement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION PULL-QUOTE BAND */}
      <section className="bg-[#1a2e1a] py-[72px] text-center px-6">
        <div className="container-site">
          <blockquote className="font-serif-heading italic text-white text-[clamp(22px,3vw,36px)] leading-[1.45] max-w-[820px] mx-auto">
            &ldquo;{HOME_DATA.visionBand.quote}&rdquo;
          </blockquote>
          <p className="text-[#74c69d] text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mt-5">
            {HOME_DATA.visionBand.attribution}
          </p>
        </div>
      </section>

      {/* 5. THREE PILLARS CARDS — FESTIVAL EXPERIENCES */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="section-label mb-3">{HOME_DATA.pillars.eyebrow}</div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1a2e1a]">
              {HOME_DATA.pillars.heading}
            </h2>
            <p className="text-[#4a5568] mt-3 text-base sm:text-lg">
              {HOME_DATA.pillars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_DATA.pillars.items.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="pillar-card reveal"
                style={{ transitionDelay: `${idx * 0.12}s` }}
              >
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 pillar-card-overlay" />
                <div className="relative z-10 p-7 text-white">
                  <Sparkles className="w-8 h-8 text-[#e8c06a] mb-3" aria-hidden="true" />
                  <h3 className="text-2xl sm:text-[26px] font-bold leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                  <Link href={pillar.href} className="btn btn-outline btn-sm">
                    {pillar.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FLAGSHIP EVENT / TICKETS BANNER */}
      <section className="relative bg-[#0d1f12] py-24 overflow-hidden">
        <img
          src={SITE_IMAGES.festivalCrowd.src}
          alt={SITE_IMAGES.festivalCrowd.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f12]/95 via-[#0d1f12]/80 to-[#0d1f12]/70" />

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-left">
              <span className="tag tag-earth mb-4">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                {HOME_DATA.flagshipBanner.badge}
              </span>
              <h2 className="text-white text-[clamp(30px,4vw,50px)] font-bold leading-tight">
                {HOME_DATA.flagshipBanner.heading}
              </h2>
              <p className="text-white/85 text-base sm:text-lg mt-4 leading-relaxed">
                {HOME_DATA.flagshipBanner.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={HOME_DATA.flagshipBanner.primaryCta.href}
                  className="btn btn-earth"
                >
                  {HOME_DATA.flagshipBanner.primaryCta.label}
                </Link>
                <Link
                  href={HOME_DATA.flagshipBanner.secondaryCta.href}
                  className="btn btn-outline"
                >
                  {HOME_DATA.flagshipBanner.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="reveal space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {HOME_DATA.flagshipBanner.highlights.map((tile) => (
                  <div
                    key={tile.label}
                    className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md p-5 text-center"
                  >
                    <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#74c69d]">
                      {tile.value}
                    </div>
                    <div className="text-xs text-white/75 mt-1 font-medium">
                      {tile.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#52b788]/15 border border-[#52b788]/30 backdrop-blur-md p-6 text-white">
                <h3 className="text-lg font-bold text-[#74c69d] mb-3">
                  {HOME_DATA.flagshipBanner.targetCardTitle}
                </h3>
                <ul className="space-y-2 text-sm text-white/90">
                  {HOME_DATA.flagshipBanner.targetCardItems.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <ShieldCheck
                        className="w-4 h-4 text-[#e8c06a] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TOURISM TEASER — RIMOI NATIONAL RESERVE */}
      <section className="section bg-[#f0faf4]">
        <div className="container-site">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="section-label mb-3">{HOME_DATA.tourismTeaser.eyebrow}</div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#1a2e1a]">
              {HOME_DATA.tourismTeaser.heading}
            </h2>
            <p className="text-[#4a5568] mt-3 text-base sm:text-lg">
              {HOME_DATA.tourismTeaser.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_DATA.tourismTeaser.cards.map((card, idx) => (
              <div
                key={card.title}
                className="prog-card reveal"
                style={{ transitionDelay: `${idx * 0.12}s` }}
              >
                <Compass className="w-8 h-8 text-[#40916c] mb-4" aria-hidden="true" />
                <div className="section-label mb-2">{card.tag}</div>
                <h3 className="text-xl font-bold text-[#1a2e1a] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={HOME_DATA.tourismTeaser.ctaHref} className="btn btn-primary">
              <span>{HOME_DATA.tourismTeaser.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PARTNER CTA BAND */}
      <section className="cta-section section text-center text-white">
        <img
          src={SITE_IMAGES.itenLandscape.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="container-site relative z-10 max-w-3xl">
          <div className="section-label section-label-light mb-3">
            {HOME_DATA.partnerCta.eyebrow}
          </div>
          <h2 className="text-[clamp(30px,4vw,50px)] font-bold text-white mb-4">
            {HOME_DATA.partnerCta.heading}
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">
            {HOME_DATA.partnerCta.description}
          </p>
          <Link href={HOME_DATA.partnerCta.ctaHref} className="btn btn-earth btn-lg">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span>{HOME_DATA.partnerCta.ctaLabel}</span>
          </Link>
        </div>
      </section>

      {/* 9. PARTNERS MARQUEE */}
      <section className="bg-[var(--cream)] py-16 sm:py-20">
        <div className="container-site text-center mb-10">
          <div className="section-label mb-2">{HOME_DATA.marquee.eyebrow}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e1a]">
            {HOME_DATA.marquee.heading}
          </h2>
        </div>

        <div className="marquee-track">
          <div className="marquee-inner">
            {[0, 1].map((dup) => (
              <div key={dup} className="marquee-group" aria-hidden={dup === 1}>
                {HOME_DATA.marquee.slots.map((slot) => (
                  <div key={`${dup}-${slot}`} className="marquee-item">
                    <span className="text-xs font-semibold text-[#4a5568] text-center leading-snug">
                      {slot}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LATEST NEWS & GALLERY PREVIEW */}
      <section className="section bg-white">
        <div className="container-site space-y-20">
          {/* Latest News */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="section-label mb-2">News and Updates</div>
                <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold text-[#1a2e1a]">
                  Stay Connected
                </h2>
              </div>
              <Link href="/news/" className="btn btn-outline-dark btn-sm self-start sm:self-auto">
                All News &amp; Updates
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {previewNews.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-[#00000012] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="tag tag-green self-start mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1a2e1a] mb-2 leading-snug">
                      <Link
                        href={`/news/${post.slug}/`}
                        className="hover:text-[#2d6a4f] transition"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#4a5568] leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/news/${post.slug}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d6a4f] hover:text-[#40916c] mt-4"
                    >
                      <span>Read Update</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Gallery Preview */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="section-label mb-2">Gallery</div>
                <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold text-[#1a2e1a]">
                  Moments of Our Heritage
                </h2>
              </div>
              <Link href="/gallery/" className="btn btn-primary btn-sm self-start sm:self-auto">
                Explore Full Gallery
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {previewPhotos.map((photo) => (
                <Link
                  key={photo.id}
                  href="/gallery/"
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f12]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-white">
                      {photo.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="section bg-[#f0faf4]" id="faq">
        <div className="container-site max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Frequently Asked Questions</div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#1a2e1a]">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
