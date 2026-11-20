"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG, SITE_IMAGES } from "@/data/site";

let hasCompletedInitialLoad = false;

function PageLoaderOverlay() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isInitial = !hasCompletedInitialLoad;
    hasCompletedInitialLoad = true;

    const holdMs = prefersReduced ? 250 : isInitial ? 1400 : 900;
    const fadeMs = prefersReduced ? 200 : 500;

    let unmountTimer: ReturnType<typeof setTimeout> | undefined;
    const fadeTimer = setTimeout(() => {
      setFading(true);
      unmountTimer = setTimeout(() => {
        setVisible(false);
      }, fadeMs);
    }, holdMs);

    return () => {
      clearTimeout(fadeTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Loading page"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#2a0e05] select-none transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="preloader-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute size-96 rounded-full bg-gradient-to-tr from-[#d9480f]/20 via-[#f7a21b]/20 to-[#f5c27a]/20 blur-3xl animate-preloader-glow" />

      <div className="relative flex flex-col items-center text-center px-4">
        <div className="relative mb-6 flex size-24 items-center justify-center sm:size-28">
          {/* Outer blurred spinning conic halo */}
          <div
            className="absolute -inset-2.5 rounded-full opacity-75 blur-md animate-spin [animation-duration:2.8s]"
            style={{
              background:
                "conic-gradient(from 0deg, #d9480f 0%, #f7a21b 33.33%, #f5c27a 66.66%, #d9480f 100%)",
            }}
          />

          {/* Crisp spinning conic-gradient ring */}
          <div
            className="absolute -inset-1 rounded-full p-[2.5px] animate-spin [animation-duration:2s]"
            style={{
              background:
                "conic-gradient(from 0deg, #d9480f 0%, #f7a21b 33.33%, #f5c27a 66.66%, #d9480f 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Reverse-spinning segmented SVG arc ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute -inset-3 size-[calc(100%+24px)] animate-spin [animation-duration:4.5s] [animation-direction:reverse] pointer-events-none"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#d9480f"
              strokeWidth="2.5"
              strokeDasharray="42 180"
              strokeLinecap="round"
              className="opacity-95"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#f7a21b"
              strokeWidth="2.5"
              strokeDasharray="42 180"
              strokeDashoffset="-75"
              strokeLinecap="round"
              className="opacity-95"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#f5c27a"
              strokeWidth="2.5"
              strokeDasharray="42 180"
              strokeDashoffset="-150"
              strokeLinecap="round"
              className="opacity-95"
            />
          </svg>

          {/* Inner circular logo badge */}
          <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-[#2a0e05]/90 p-3 shadow-inner ring-1 ring-white/15 backdrop-blur-md sm:size-24">
            <img
              src={SITE_IMAGES.logo}
              alt={`${SITE_CONFIG.name} Logo`}
              className="size-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>

        <p className="font-serif-heading text-xl font-bold tracking-[0.22em] text-[#f7a21b] sm:text-2xl">
          KEIYO CULTURAL FEST
        </p>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-xs">
          {SITE_CONFIG.tagline}
        </p>
      </div>
    </div>
  );
}

export default function PageLoader() {
  const pathname = usePathname();
  return <PageLoaderOverlay key={pathname} />;
}
