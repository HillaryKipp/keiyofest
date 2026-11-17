import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NEWS_DATA } from "@/data/news";

export const metadata: Metadata = {
  title: "News and Updates",
  description:
    "Stay connected with official announcements, event programme updates, featured performers, ticket announcements and Rimoi excursion updates for KEIYO CULTURAL FEST 2026.",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow={NEWS_DATA.hero.eyebrow}
        title={NEWS_DATA.hero.title}
        subtitle={NEWS_DATA.hero.subtitle}
        breadcrumbLabel="News & Updates"
        image={NEWS_DATA.hero.image}
        imageAlt={NEWS_DATA.hero.imageAlt}
      />

      {/* Category Pills */}
      <section className="py-8 bg-[var(--cream)] border-b border-[#d8f3dc]">
        <div className="container-site">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f] mr-2">
              Topics:
            </span>
            {NEWS_DATA.categories.map((cat) => (
              <span key={cat} className="tag tag-green">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* News Posts */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_DATA.posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#00000012] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="tag tag-green">{post.category}</span>
                  </div>
                  <p className="text-xs text-[#4a5568] mb-2 font-medium flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-[#40916c]" aria-hidden="true" />
                    <span>{post.date}</span>
                  </p>
                  <h2 className="text-xl font-bold text-[#1a2e1a] mb-3 leading-snug">
                    <Link
                      href={`/news/${post.slug}/`}
                      className="hover:text-[#2d6a4f] transition"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#4a5568] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d6a4f] hover:text-[#40916c] mt-5"
                  >
                    <span>Read Full Update</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
