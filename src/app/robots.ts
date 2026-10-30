import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search engine crawlers: Allowed full public access
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "YandexBot",
          "Baiduspider",
          "Slurp"
        ],
        allow: "/",
        disallow: [
          "/api/",
          "/api/*",
          "/_next/",
          "/private/",
          "/admin/"
        ],
      },
      // Aggressive AI Scraping Bots & Data Harvesters: Strictly Blocked
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "ClaudeBot",
          "Google-Extended",
          "Bytespider",
          "Diffbot",
          "ImagesiftBot",
          "Omgilibot",
          "PerplexityBot",
          "Amazonbot",
          "FacebookBot",
          "cohere-ai",
          "Scrapy",
          "spbot"
        ],
        disallow: "/",
      },
      // Default rule for all other crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/api/*",
          "/private/",
          "/_next/"
        ],
      },
    ],
    sitemap: "https://www.hasiz.com/sitemap.xml",
  };
}
