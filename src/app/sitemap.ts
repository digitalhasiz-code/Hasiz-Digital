import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { servicesData } from "@/data/services";
import { blogArticles } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hasiz.com";

  // Static Pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/work",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route === "/work" ? 0.9 : 0.7,
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

  // Blog / Insights Articles
  const blogPages = blogArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: article.updatedDate || article.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...workPages, ...blogPages];
}

