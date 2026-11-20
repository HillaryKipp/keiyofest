"use client";

import { useEffect, useState, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  src: string;
  alt: string;
  caption: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  intervalMs?: number;
  children: ReactNode;
}

export default function HeroSlider({
  slides,
  intervalMs = 5500,
  children,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = slides.length;

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(goNext, intervalMs);
    return () => clearInterval(timer);
  }, [paused, count, intervalMs, goNext]);

  return (
    <section
      className="relative min-h-[760px] lg:min-h-[820px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-24 overflow-hidden bg-[#2a0e05]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="KEIYO CULTURAL FEST 2026 featured imagery"
    >
      {/* Background Image Slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={idx === 0 ? "eager" : "lazy"}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-100" : "scale-105"
              }`}
            />
          </div>
        );
      })}

      {/* Warm Poster-Matched Overlay */}
      <div className="absolute inset-0 hero-overlay z-[1]" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Slider Controls & Caption */}
      {count > 1 && (
        <div className="absolute bottom-5 left-0 right-0 z-20">
          <div className="container-site flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a0e05]/65 border border-white/15 backdrop-blur-md text-xs text-white/85">
              <span className="w-2 h-2 rounded-full bg-[#f7a21b] shrink-0" />
              <span>{slides[current]?.caption}</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
                {slides.map((slide, idx) => {
                  const isActive = idx === current;
                  return (
                    <button
                      key={slide.src}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Show slide ${idx + 1}: ${slide.caption}`}
                      onClick={() => setCurrent(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-7 bg-[#f7a21b]"
                          : "w-2 bg-white/45 hover:bg-white/75"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous hero image"
                  className="w-8 h-8 rounded-full bg-[#2a0e05]/65 hover:bg-[#6b2410] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next hero image"
                  className="w-8 h-8 rounded-full bg-[#2a0e05]/65 hover:bg-[#6b2410] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
