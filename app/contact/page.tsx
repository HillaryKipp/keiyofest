import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import StaticForm from "@/components/StaticForm";
import FaqAccordion from "@/components/FaqAccordion";
import { EVENT_DATA } from "@/data/event";
import { CONTACT_DETAILS, SITE_CONFIG, SITE_IMAGES } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the KEIYO CULTURAL FEST 2026 organising team for enquiries, partnerships, sponsorships, media engagements and general questions.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const socialLinks = [
    { label: "Facebook", url: CONTACT_DETAILS.socials.facebook },
    { label: "Instagram", url: CONTACT_DETAILS.socials.instagram },
    { label: "TikTok", url: CONTACT_DETAILS.socials.tiktok },
    { label: "X", url: CONTACT_DETAILS.socials.x },
  ].filter((s) => Boolean(s.url && s.url.trim()));

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        subtitle="We welcome enquiries, partnerships, sponsorship proposals, media engagements and general questions about KEIYO CULTURAL FEST 2026."
        breadcrumbLabel="Contact Us"
        image={SITE_IMAGES.itenLandscape.src}
        imageAlt={SITE_IMAGES.itenLandscape.alt}
      />

      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="section-label mb-3">Official Event</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e1a]">
                  {SITE_CONFIG.name}
                </h2>
                <div className="divider" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#d8f3dc] shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#d8f3dc] text-[#2d6a4f] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2e1a] text-base">Venue</h3>
                    <p className="text-sm text-[#4a5568] mt-0.5">
                      {SITE_CONFIG.fullVenue}
                    </p>
                  </div>
                </div>

                {CONTACT_DETAILS.email.trim() && (
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#d8f3dc] shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-[#d8f3dc] text-[#2d6a4f] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a2e1a] text-base">
                        Official Email
                      </h3>
                      <a
                        href={`mailto:${CONTACT_DETAILS.email}`}
                        className="text-sm text-[#2d6a4f] hover:underline"
                      >
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>
                )}

                {CONTACT_DETAILS.phone.trim() && (
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#d8f3dc] shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-[#d8f3dc] text-[#2d6a4f] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a2e1a] text-base">
                        Event Telephone
                      </h3>
                      <a
                        href={`tel:${CONTACT_DETAILS.phone}`}
                        className="text-sm text-[#2d6a4f] hover:underline"
                      >
                        {CONTACT_DETAILS.phone}
                      </a>
                    </div>
                  </div>
                )}

                {CONTACT_DETAILS.whatsapp.trim() && (
                  <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#d8f3dc] shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-[#d8f3dc] text-[#2d6a4f] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a2e1a] text-base">
                        WhatsApp Contact
                      </h3>
                      <a
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#2d6a4f] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Chat on WhatsApp</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}

                {!CONTACT_DETAILS.email.trim() &&
                  !CONTACT_DETAILS.phone.trim() &&
                  !CONTACT_DETAILS.whatsapp.trim() && (
                    <div className="bg-white/80 p-5 rounded-2xl border border-dashed border-[#95d5b2] text-sm text-[#4a5568]">
                      Official email address, event telephone number, WhatsApp contact, and social media links will be added here once confirmed.
                    </div>
                  )}

                {socialLinks.length > 0 && (
                  <div className="bg-white p-5 rounded-2xl border border-[#d8f3dc] shadow-sm">
                    <h3 className="font-bold text-[#1a2e1a] text-base mb-3">
                      Social Media
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map((s) => (
                        <a
                          key={s.label}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark btn-sm"
                        >
                          <span>{s.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-md border border-[#d8f3dc]">
              <div className="section-label mb-2">Enquiry Form</div>
              <h2 className="text-2xl font-bold text-[#1a2e1a] mb-6">
                Send Us a Message
              </h2>

              <StaticForm
                formTitle="General Enquiry"
                formType="enquiry"
                submitLabel="Send Enquiry"
                fields={[
                  {
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Your full name",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "you@example.com",
                    required: true,
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+254 7XX XXX XXX",
                    required: true,
                  },
                  {
                    name: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "Enquiry, partnership, media or tickets",
                    required: true,
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    placeholder: "Write your message here...",
                    required: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Map */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="section-label mb-2">Venue &amp; Directions</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e1a]">
                {EVENT_DATA.map.title}
              </h2>
              <p className="text-[#4a5568] mt-1">{EVENT_DATA.map.subtitle}</p>
            </div>
            <a
              href={EVENT_DATA.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm self-start sm:self-auto"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-lg border border-[#d8f3dc] h-[360px] bg-[#f0faf4]">
            <iframe
              title="Map showing Buffalo Safaris – Kolol, Iten–Kabarnet Road"
              src={EVENT_DATA.map.embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
