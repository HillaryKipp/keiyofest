"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQ_DATA.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div
            key={item.question}
            className="bg-white border border-[#f6dcb8] rounded-2xl overflow-hidden shadow-sm transition hover:border-[#f5c27a]"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-serif-heading text-lg sm:text-xl font-semibold text-[#3b1508] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#6b2410] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[#6b4334] leading-relaxed text-[15px] sm:text-base border-t border-[#fdf3e1] pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
