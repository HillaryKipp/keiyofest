import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbLabel: string;
  image: string;
  imageAlt: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbLabel,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] flex items-end pt-32 pb-16 overflow-hidden bg-[#0d1f12]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 page-hero-overlay" />

      <div className="container-site relative z-10 w-full">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-white/70 mb-5"
        >
          <Link href="/" className="hover:text-[#74c69d] transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/50" aria-hidden="true" />
          <span className="text-[#74c69d]">{breadcrumbLabel}</span>
        </nav>

        <div className="section-label section-label-light mb-3">{eyebrow}</div>
        <h1 className="text-white text-[clamp(34px,5vw,60px)] font-bold leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
