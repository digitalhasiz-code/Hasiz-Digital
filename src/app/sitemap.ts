import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { servicesData } from "@/data/services";
import { blogArticles } from "@/data/blog";
import { newsArticles } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hasiz.com";

  // Static Pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/work",
    "/blog",
    "/news",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === "" || route === "/news" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route === "/work" || route === "/news" ? 0.9 : 0.8,
  }));

  // Services Pages
  const servicePages = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Work / Case Studies Pages
  const workPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog Articles
  const blogPages = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.updatedDate || article.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Insights Articles (supporting alias)
  const insightPages = blogArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: article.updatedDate || article.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // News Articles
  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: article.source.publishedTimestamp,
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...workPages, ...blogPages, ...insightPages, ...newsPages];
}
