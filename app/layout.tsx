import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { SITE_CONFIG, SITE_IMAGES } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Join us on 24th December 2026 at Buffalo Safaris – Kolol, Iten–Kabarnet Road, Elgeyo Marakwet County, Kenya, for KEIYO CULTURAL FEST 2026 — Celebrating Our Heritage, Identity and Unity.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Experience the beauty, richness and uniqueness of Keiyo culture on 24th December 2026 at Buffalo Safaris – Kolol, Elgeyo Marakwet County, Kenya.",
    images: [
      {
        url: SITE_IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "24th December 2026 at Buffalo Safaris – Kolol, Elgeyo Marakwet County, Kenya.",
    images: [SITE_IMAGES.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: SITE_CONFIG.name,
  startDate: "2026-12-24",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "Celebrating Our Heritage, Preserving Our Identity and Promoting Unity. Traditional Keiyo dances, music, cuisine including Mursik, cultural exhibitions, attire, entertainment and tourism excursions to Rimoi National Reserve.",
  image: [`${SITE_CONFIG.domain}${SITE_IMAGES.ogImage}`],
  location: {
    "@type": "Place",
    name: "Buffalo Safaris – Kolol",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Iten–Kabarnet Road",
      addressRegion: "Elgeyo Marakwet County",
      addressCountry: "KE",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "KEIYO CULTURAL FEST Organising Committee",
    url: SITE_CONFIG.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-KE"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#1a2e1a] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <Navbar />
        <RevealObserver />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
