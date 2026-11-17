import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { NEWS_DATA } from "@/data/news";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about/",
    "/experiences/",
    "/tourism/",
    "/event/",
    "/tickets/",
    "/partners/",
    "/gallery/",
    "/news/",
    "/contact/",
  ];

  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_CONFIG.domain}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  NEWS_DATA.posts.forEach((post) => {
    entries.push({
      url: `${SITE_CONFIG.domain}/news/${post.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return entries;
}
