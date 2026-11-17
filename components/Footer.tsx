import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import {
  CONTACT_DETAILS,
  FOOTER_EVENT_LINKS,
  FOOTER_QUICK_LINKS,
  SITE_CONFIG,
  SITE_IMAGES,
} from "@/data/site";

export default function Footer() {
  const socialLinks = [
    { label: "Facebook", url: CONTACT_DETAILS.socials.facebook },
    { label: "Instagram", url: CONTACT_DETAILS.socials.instagram },
    { label: "TikTok", url: CONTACT_DETAILS.socials.tiktok },
    { label: "X", url: CONTACT_DETAILS.socials.x },
  ].filter((s) => Boolean(s.url && s.url.trim()));

  const hasDirectContact =
    Boolean(CONTACT_DETAILS.email.trim()) ||
    Boolean(CONTACT_DETAILS.phone.trim()) ||
    Boolean(CONTACT_DETAILS.whatsapp.trim());

  return (
    <footer className="bg-[#0d1f12] text-white/75 pt-[72px] pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 pb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src={SITE_IMAGES.logo}
                alt={`${SITE_CONFIG.name} official logo`}
                className="h-[116px] w-auto object-contain"
              />
            </Link>
            <h3 className="text-white text-lg font-semibold mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-white/75 leading-relaxed mb-3 max-w-xs">
              {SITE_CONFIG.tagline}.
            </p>
            <p className="text-xs text-[#74c69d] font-medium flex items-start gap-2 mb-5">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {SITE_CONFIG.eventDateDisplay} | {SITE_CONFIG.venue}, Elgeyo Marakwet County, Kenya.
              </span>
            </p>

            {socialLinks.length > 0 ? (
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60 mb-2">
                  Follow us on social media.
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] bg-white/10 hover:bg-[#2d6a4f] text-white text-xs font-medium transition"
                    >
                      {s.label}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs text-white/50">
                Follow us on social media — official channels to be added when available.
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#74c69d] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-[#74c69d] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Festival Info */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#74c69d] mb-5">
              Festival &amp; Updates
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_EVENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-[#74c69d] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#74c69d] mb-5">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-white/65">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#74c69d] shrink-0 mt-1" aria-hidden="true" />
                <span>{SITE_CONFIG.fullVenue}</span>
              </p>

              {CONTACT_DETAILS.email.trim() && (
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#74c69d] shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="hover:text-[#74c69d] transition break-all"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </p>
              )}

              {CONTACT_DETAILS.phone.trim() && (
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#74c69d] shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${CONTACT_DETAILS.phone}`}
                    className="hover:text-[#74c69d] transition"
                  >
                    {CONTACT_DETAILS.phone}
                  </a>
                </p>
              )}

              {!hasDirectContact && (
                <p className="text-xs text-white/50">
                  Official email, phone &amp; WhatsApp details to be added when available.{" "}
                  <Link href="/contact/" className="text-[#74c69d] underline">
                    Send an enquiry
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>{SITE_CONFIG.copyright}</p>
          <p className="text-white/35 text-center sm:text-right">
            Photography via Wikimedia Commons (CC-BY / CC-BY-SA) — see{" "}
            <Link href="/gallery/" className="underline hover:text-white/60">
              Gallery &amp; Credits
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
