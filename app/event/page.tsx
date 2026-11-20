import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle2, ExternalLink, MapPin, Shirt, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import CountdownTimer from "@/components/CountdownTimer";
import { EVENT_DATA } from "@/data/event";
import { FEST_ACTIVITIES } from "@/data/site";

export const metadata: Metadata = {
  title: "Event Information",
  description:
    "Join us on Wednesday, 23rd December 2026 at Buffalo Safaris – Kolol, Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya for KEIYO CULTURAL FEST 2026.",
  alternates: { canonical: "/event/" },
};

export default function EventPage() {
  return (
    <>
      <PageHero
        eyebrow={EVENT_DATA.hero.eyebrow}
        title={EVENT_DATA.hero.title}
        subtitle={EVENT_DATA.hero.subtitle}
        breadcrumbLabel="Event Information"
        image={EVENT_DATA.hero.image}
        imageAlt={EVENT_DATA.hero.imageAlt}
      />

      {/* Countdown & Key Facts */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-md border border-[#f6dcb8]">
              <div className="section-label mb-3">Official Event Details</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3b1508] mb-6">
                {EVENT_DATA.details.event}
              </h2>

              <dl className="space-y-5 text-sm sm:text-base">
                <div className="flex items-start gap-3 pb-4 border-b border-[#fdf3e1]">
                  <Calendar className="w-5 h-5 text-[#6b2410] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-[#3b1508]">Date</dt>
                    <dd className="text-[#6b4334]">{EVENT_DATA.details.date}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-[#fdf3e1]">
                  <MapPin className="w-5 h-5 text-[#6b2410] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-[#3b1508]">Venue</dt>
                    <dd className="text-[#6b4334]">{EVENT_DATA.details.venue}</dd>
                    <dd className="text-[#6b4334] text-sm mt-0.5">
                      {EVENT_DATA.details.location}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-5 h-5 text-[#6b2410] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-[#3b1508]">{EVENT_DATA.dressCode.title}</dt>
                    <dd className="text-[#6b4334]">{EVENT_DATA.dressCode.description}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 pt-6 border-t border-[#f6dcb8]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6b2410] mb-3">
                  Countdown to 23rd December 2026
                </p>
                <div className="bg-[#2a0e05] rounded-2xl p-4 inline-block">
                  <CountdownTimer />
                </div>
              </div>
            </div>

            {/* Who is Welcome */}
            <div className="space-y-8">
              <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-md border border-[#f6dcb8]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#f6dcb8] text-[#6b2410] flex items-center justify-center">
                    <Users className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#3b1508]">
                    {EVENT_DATA.welcomeListTitle}
                  </h2>
                </div>

                <ul className="space-y-3 mt-5">
                  {EVENT_DATA.welcomeList.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[#6b4334] text-base"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-[#c2410c] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/tickets/" className="btn btn-primary">
                    Get Your Tickets
                  </Link>
                  <Link href="/partners/" className="btn btn-outline-dark">
                    Become a Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities (official poster) */}
      <section className="section-sm bg-[var(--cream)] border-t border-[#f6dcb8]">
        <div className="container-site max-w-5xl text-center">
          <h2 className="brush-label">Activities</h2>
          <ul className="activities-box mt-6 px-5 py-7 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {FEST_ACTIVITIES.map((activity) => (
              <li key={activity} className="flex items-center gap-3 font-bold text-[#3b1508]">
                <CheckCircle2 className="w-5 h-5 text-[#d9480f] shrink-0" aria-hidden="true" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Venue Map */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="section-label mb-2">Venue Location</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3b1508]">
                {EVENT_DATA.map.title}
              </h2>
              <p className="text-[#6b4334] mt-1">{EVENT_DATA.map.subtitle}</p>
            </div>
            <a
              href={EVENT_DATA.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-lg border border-[#f6dcb8] h-[380px] sm:h-[440px] bg-[#fdf3e1]">
            <iframe
              title="Map showing Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya"
              src={EVENT_DATA.map.embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
