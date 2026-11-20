"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Video, X } from "lucide-react";
import { GALLERY_DATA, GalleryCategory } from "@/data/gallery";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_DATA.photos
      : GALLERY_DATA.photos.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const currentPhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <>
      {/* Video Showcase */}
      <section className="section-sm bg-white border-b border-[#f6dcb8]">
        <div className="container-site max-w-4xl text-center">
          <div className="section-label mb-2">Festival Videos</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3b1508] mb-8">
            Video Highlights
          </h2>

          {GALLERY_DATA.videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden shadow-lg border border-[#f6dcb8] bg-[#2a0e05] text-white"
            >
              {video.youtubeId.trim() ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="aspect-video flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#2a0e05] to-[#3b1508]">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Video className="w-8 h-8 text-[#f7a21b]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-sm text-white/75 max-w-lg">
                    {video.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Filterable Masonry Photo Gallery */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Gallery categories">
            {GALLERY_DATA.categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    active
                      ? "bg-[#6b2410] text-white shadow-sm"
                      : "bg-white text-[#3b1508] border border-[#f6dcb8] hover:border-[#c2410c]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="masonry-grid">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                role="button"
                tabIndex={0}
                onClick={() => setLightboxIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
                aria-label={`View ${photo.caption}`}
                className="masonry-item bg-[#2a0e05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto block"
                />
                <div className="masonry-overlay absolute inset-0 bg-gradient-to-t from-[#2a0e05]/90 via-[#2a0e05]/20 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-2">
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    View Full Size
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.caption}
          className="fixed inset-0 z-[1100] bg-[#2a0e05]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filteredPhotos.length) %
                  filteredPhotos.length
              );
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          <div
            className="max-w-4xl w-full text-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="max-h-[78vh] mx-auto rounded-[24px] shadow-2xl object-contain"
            />
            <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm">
              <span>{currentPhoto.caption}</span>
              <span className="text-[#f7a21b] font-bold">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
