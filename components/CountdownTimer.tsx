"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/data/site";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const target = new Date(SITE_CONFIG.eventDateISO).getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const initial = setTimeout(() => setTimeLeft(calcTimeLeft()), 0);
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => {
      clearTimeout(initial);
      clearInterval(id);
    };
  }, []);

  const units = [
    { label: "Days", value: timeLeft ? timeLeft.days : "--" },
    { label: "Hours", value: timeLeft ? String(timeLeft.hours).padStart(2, "0") : "--" },
    { label: "Mins", value: timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "--" },
    { label: "Secs", value: timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "--" },
  ];

  return (
    <div
      className="inline-grid grid-cols-4 gap-2 sm:gap-3"
      aria-label="Countdown to KEIYO CULTURAL FEST 2026"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="card-glass px-3 py-2.5 sm:px-4 sm:py-3 text-center min-w-[64px] sm:min-w-[78px]"
        >
          <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#fbbf3c] leading-none">
            {u.value}
          </div>
          <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/75 mt-1 font-semibold">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
