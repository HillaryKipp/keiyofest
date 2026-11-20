import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Compass,
  Drama,
  Landmark,
  MapPin,
  Music,
  ShieldCheck,
  Ticket,
  Users,
  Utensils,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import CountdownTimer from "@/components/CountdownTimer";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSlider, { type HeroSlide } from "@/components/HeroSlider";
import { HOME_DATA } from "@/data/home";
import { NEWS_DATA } from "@/data/news";
import { GALLERY_DATA } from "@/data/gallery";
import { TICKETS_DATA } from "@/data/tickets";
import { EVENT_DATE_PARTS, FEST_ACTIVITIES, SITE_CONFIG, SITE_IMAGES } from "@/data/site";

const highlightIcons = [Music, Utensils, Landmark, Drama, Compass];
const pillarIcons = [Music, Utensils, Landmark];

const HERO_SLIDES: HeroSlide[] = [
  {
    src: SITE_IMAGES.hero.src,
    alt: SITE_IMAGES.hero.alt,
    caption: "Kerio Valley & Elgeyo Escarpment",
  },
  {
    src: SITE_IMAGES.traditionalDance.src,
    alt: SITE_IMAGES.traditionalDance.alt,
    caption: "Traditional Kalenjin Dances & Live Music",
  },
  {
    src: SITE_IMAGES.festivalCrowd.src,
    alt: SITE_IMAGES.festivalCrowd.alt,
    caption: "Community Celebration & Unity",
  },
  {
    src: SITE_IMAGES.culturalPerformers.src,
    alt: SITE_IMAGES.culturalPerformers.alt,
    caption: "Cultural Performances & Heritage Showcases",
  },
  {
    src: SITE_IMAGES.rimoiElephants.src,
    alt: SITE_IMAGES.rimoiElephants.alt,
    caption: "Rimoi National Reserve Wildlife Excursions",
  },
];

export default function HomePage() {
  const previewPhotos = GALLERY_DATA.photos.slice(0, 4);
  const previewNews = NEWS_DATA.posts.slice(0, 3);

  return (
    <>
      {/* 1. HERO SLIDER */}
      <HeroSlider slides={HERO_SLIDES}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1.28fr_0.72fr] gap-10 lg:gap-12 items-center">
            {/* Left Column: Title, Theme, Countdown & CTAs */}
            <div>
              <h1 className="text-white leading-[1.04]">
                <span className="sr-only">{HOME_DATA.hero.headline}</span>
                <span
                  aria-hidden="true"
                  className="poster-title-plate text-[clamp(30px,4.8vw,60px)]"
                >
                  KEIYO CULTURAL
                </span>
                <span
                  aria-hidden="true"
                  className="block mt-2.5 text-[clamp(32px,4.8vw,58px)] font-black text-[#fbecd3] drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 900 }}
                >
                  FEST 2026
                </span>
              </h1>

              <p className="mt-4 pl-3.5 border-l-4 border-[#d9480f] text-base sm:text-xl font-extrabold text-[#fbbf3c] tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                {SITE_CONFIG.theme.replace(/\.$/, "")}
              </p>

              <p className="text-white text-[15px] sm:text-base max-w-[540px] mt-4 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {HOME_DATA.hero.subcopy}
              </p>

              <div className="mt-6">
                <CountdownTimer />
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-7">
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

            {/* Right Column: Poster-Style Date, Venue & Ticket Summary Card */}
            <div className="lg:justify-self-end w-full max-w-[380px]">
              <div className="poster-date-box border border-[#f7a21b]/40 overflow-hidden">
                <div className="p-6 sm:p-7">
                  <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#fbbf3c] mb-3">
                    Official Event Date
                  </div>

                  {/* WED | 23RD | DEC 2026 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-[#fbbf3c]" aria-hidden="true" />
                    </div>
                    <div className="flex items-center divide-x divide-white/35">
                      <span className="pr-3 text-lg sm:text-xl font-extrabold text-white tracking-wide">
                        {EVENT_DATE_PARTS.weekday}
                      </span>
                      <span className="px-3 text-2xl sm:text-3xl font-black text-white leading-none">
                        {EVENT_DATE_PARTS.day}
                        <sup className="text-xs font-extrabold align-super ml-0.5">
                          {EVENT_DATE_PARTS.daySuffix}
                        </sup>
                      </span>
                      <div className="pl-3 leading-tight">
                        <div className="text-sm sm:text-base font-extrabold text-[#fbbf3c]">
                          {EVENT_DATE_PARTS.month}
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-white">
                          {EVENT_DATE_PARTS.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-5 border-t border-white/20" />

                  {/* Venue */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#d9480f]/25 border border-[#d9480f]/50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#fbbf3c]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-extrabold text-white leading-snug">
                        {SITE_CONFIG.venue}
                      </div>
                      <div className="text-xs sm:text-sm italic text-[#fbecd3]/85 mt-0.5">
                        (Iten–Kabarnet Road)
                      </div>
                      <div className="text-[11px] text-white/65 mt-1">
                        Elgeyo Marakwet County, Kenya
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amber Ticket Bar */}
                <Link
                  href="/tickets/"
                  className="flex items-center justify-between gap-3 bg-[#f7a21b] hover:bg-[#fbbf3c] text-[#3b1508] px-6 py-3.5 transition"
                >
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#3b1508]/75">
                      Early Bird Tickets Open
                    </div>
                    <div className="text-sm sm:text-base font-black leading-tight">
                      From KES 1,499 • VIP KES 4,440
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeroSlider>

      {/* 2. ANIMATED STATS BAR */}
      <section aria-label="Festival at a glance" className="border-b border-[#f6dcb8]">
        <div className="counter-grid">
          {HOME_DATA.stats.map((stat) => (
            <div key={stat.label} className="counter-item">
              <div className="font-serif-heading text-4xl sm:text-[50px] font-bold text-[#6b2410] leading-none">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6b4334] mt-2">
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
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#3b1508] leading-tight">
                {HOME_DATA.intro.heading}
              </h2>
              <div className="divider" />
              <div className="space-y-4 text-[#6b4334] text-[16px] sm:text-[17px] leading-[1.8]">
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
                  const Icon = highlightIcons[idx] || Landmark;
                  const centerFifth = idx === 4 ? "col-span-2 sm:col-span-1 sm:col-start-2" : "";
                  return (
                    <div key={item.title} className={`peace-item ${centerFifth}`}>
                      <Icon
                        className="peace-icon w-6 h-6 text-[#c2410c] mx-auto mb-2"
                        aria-hidden="true"
                      />
                      <div className="peace-letter font-serif-heading text-3xl sm:text-[38px] font-bold text-[#6b2410] leading-none">
                        {item.letter}
                      </div>
                      <div className="peace-title text-xs font-bold uppercase tracking-wider text-[#3b1508] mt-2">
                        {item.title}
                      </div>
                      <p className="peace-desc text-xs text-[#6b4334] mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 bg-white border border-[#f6dcb8] rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6b2410] mb-2">
                  Also Featured at the Fest
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#6b4334]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d9480f]" />
                    Live entertainment and performances.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d9480f]" />
                    Networking and community engagement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THEME BAND (poster theme) */}
      <section className="bg-[#3b1508] py-[72px] text-center px-6">
        <div className="container-site">
          <p className="text-[#fbecd3] text-2xl sm:text-3xl font-extrabold mb-2">Theme</p>
          <blockquote className="font-extrabold text-[#f7a21b] text-[clamp(24px,3.4vw,40px)] leading-[1.3] max-w-[860px] mx-auto">
            {HOME_DATA.visionBand.quote.replace(/\.$/, "")}
          </blockquote>
          <p className="text-white/70 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mt-5">
            {HOME_DATA.visionBand.attribution}
          </p>
        </div>
      </section>

      {/* 4b. ACTIVITIES & TICKET PRICING (from official poster) */}
      <section className="section bg-[var(--cream)]" id="activities">
        <div className="container-site max-w-5xl">
          <div className="text-center reveal">
            <h2 className="brush-label">{HOME_DATA.activities.heading}</h2>
          </div>

          <div className="activities-box mt-6 px-5 py-7 sm:px-10 reveal">
            <ul className="flex flex-wrap justify-center gap-x-1 gap-y-3 text-center">
              {FEST_ACTIVITIES.map((activity, idx) => (
                <li
                  key={activity}
                  className="flex items-center text-[15px] sm:text-lg font-bold text-[#3b1508]"
                >
                  {activity}
                  {idx < FEST_ACTIVITIES.length - 1 && (
                    <span className="mx-3 text-[#d9480f]" aria-hidden="true">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="ticket-brush mt-12 px-5 py-8 sm:px-10 text-center reveal">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#3b1508] mb-5">
              {HOME_DATA.activities.ticketsHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x-2 divide-[#3b1508]/70">
              {TICKETS_DATA.categories.map((cat) => (
                <div key={cat.id} className="py-3 sm:py-0 px-4">
                  <div className="text-base sm:text-lg font-semibold text-[#3b1508]">
                    {cat.name}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#3b1508] leading-tight">
                    {cat.price.replace(/^KES\s*/, "")}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-semibold text-[#3b1508]/75 mt-4">All prices in Kenya Shillings (KES)</p>
            <Link
              href={HOME_DATA.activities.ticketsCta.href}
              className="btn btn-primary mt-5"
            >
              <Ticket className="w-4 h-4" aria-hidden="true" />
              <span>{HOME_DATA.activities.ticketsCta.label}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THREE PILLARS CARDS — FESTIVAL EXPERIENCES */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="section-label mb-3">{HOME_DATA.pillars.eyebrow}</div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#3b1508]">
              {HOME_DATA.pillars.heading}
            </h2>
            <p className="text-[#6b4334] mt-3 text-base sm:text-lg">
              {HOME_DATA.pillars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_DATA.pillars.items.map((pillar, idx) => {
              const PillarIcon = pillarIcons[idx] || Landmark;
              return (
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
                    <PillarIcon className="w-8 h-8 text-[#fbbf3c] mb-3" aria-hidden="true" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FLAGSHIP EVENT / TICKETS BANNER */}
      <section className="relative bg-[#2a0e05] py-24 overflow-hidden">
        <img
          src={SITE_IMAGES.festivalCrowd.src}
          alt={SITE_IMAGES.festivalCrowd.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0e05]/95 via-[#2a0e05]/80 to-[#2a0e05]/70" />

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
                    <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f7a21b]">
                      {tile.value}
                    </div>
                    <div className="text-xs text-white/75 mt-1 font-medium">
                      {tile.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#d9480f]/15 border border-[#d9480f]/30 backdrop-blur-md p-6 text-white">
                <h3 className="text-lg font-bold text-[#f7a21b] mb-3">
                  {HOME_DATA.flagshipBanner.targetCardTitle}
                </h3>
                <ul className="space-y-2 text-sm text-white/90">
                  {HOME_DATA.flagshipBanner.targetCardItems.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <ShieldCheck
                        className="w-4 h-4 text-[#fbbf3c] shrink-0 mt-0.5"
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
      <section className="section bg-[#fdf3e1]">
        <div className="container-site">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="section-label mb-3">{HOME_DATA.tourismTeaser.eyebrow}</div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-[#3b1508]">
              {HOME_DATA.tourismTeaser.heading}
            </h2>
            <p className="text-[#6b4334] mt-3 text-base sm:text-lg">
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
                <Compass className="w-8 h-8 text-[#c2410c] mb-4" aria-hidden="true" />
                <div className="section-label mb-2">{card.tag}</div>
                <h3 className="text-xl font-bold text-[#3b1508] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#6b4334] leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3b1508]">
            {HOME_DATA.marquee.heading}
          </h2>
        </div>

        <div className="marquee-track">
          <div className="marquee-inner">
            {[0, 1].map((dup) => (
              <div key={dup} className="marquee-group" aria-hidden={dup === 1}>
                {HOME_DATA.marquee.slots.map((slot) => (
                  <div key={`${dup}-${slot}`} className="marquee-item">
                    <span className="text-xs font-semibold text-[#6b4334] text-center leading-snug">
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
                <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold text-[#3b1508]">
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
                    <h3 className="text-lg font-bold text-[#3b1508] mb-2 leading-snug">
                      <Link
                        href={`/news/${post.slug}/`}
                        className="hover:text-[#6b2410] transition"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#6b4334] leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/news/${post.slug}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6b2410] hover:text-[#c2410c] mt-4"
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
                <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold text-[#3b1508]">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a0e05]/80 via-transparent to-transparent flex items-end p-4">
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
      <section className="section bg-[#fdf3e1]" id="faq">
        <div className="container-site max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Frequently Asked Questions</div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#3b1508]">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
