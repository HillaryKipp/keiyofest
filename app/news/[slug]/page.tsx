import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NEWS_DATA } from "@/data/news";

export function generateStaticParams() {
  return NEWS_DATA.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = NEWS_DATA.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Update Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}/` },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = NEWS_DATA.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbLabel="News"
        image={post.image}
        imageAlt={post.imageAlt}
      />

      <article className="section bg-white">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-[#6b4334] mb-8 pb-5 border-b border-[#f6dcb8]">
            <Calendar className="w-4 h-4 text-[#6b2410]" aria-hidden="true" />
            <span>{post.date}</span>
            <span>•</span>
            <span className="text-[#6b2410] font-semibold">{post.category}</span>
          </div>

          <div className="space-y-5 text-[#3b1508] text-base sm:text-lg leading-[1.85]">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#f6dcb8] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/news/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6b2410] hover:text-[#c2410c]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to All News &amp; Updates</span>
            </Link>

            <Link href="/tickets/" className="btn btn-primary btn-sm">
              Get Your Tickets
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
