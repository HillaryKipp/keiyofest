import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#2a0e05] text-white pt-28 pb-20 px-6 text-center">
      <div className="max-w-xl">
        <div className="w-16 h-16 rounded-2xl bg-white/10 text-[#fbbf3c] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" aria-hidden="true" />
        </div>
        <div className="section-label section-label-light justify-center mb-3">
          404 — Page Not Found
        </div>
        <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Return to KEIYO CULTURAL FEST 2026 to explore our heritage, experiences and tickets.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-earth">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link href="/tickets/" className="btn btn-outline">
            Get Your Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}
