"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { HEADER_NAV, SITE_CONFIG, SITE_IMAGES } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = openForPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenForPath(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#74c69d] rounded-lg"
            aria-label={SITE_CONFIG.name}
          >
            <img
              src={SITE_IMAGES.logo}
              alt={`${SITE_CONFIG.name} official logo`}
              className="h-[52px] sm:h-[68px] lg:h-[80px] w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href="/tickets/" className="btn btn-earth btn-sm">
              Get Your Tickets
            </Link>
          </div>

          <button
            type="button"
            className="hamburger"
            onClick={() => setOpenForPath(pathname)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          onClick={() => setOpenForPath(null)}
          className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/10 transition"
          aria-label="Close navigation menu"
        >
          <X className="w-8 h-8" aria-hidden="true" />
        </button>

        {HEADER_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpenForPath(null)}
            className={`mobile-nav-link ${isActive(item.href) ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/tickets/"
          onClick={() => setOpenForPath(null)}
          className="btn btn-earth mt-4"
        >
          Get Your Tickets
        </Link>
      </div>
    </>
  );
}
