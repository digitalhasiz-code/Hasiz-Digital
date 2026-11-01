import { Metadata } from "next";
import BlogPageClient from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | HASIZ Studio",
  description: "In-depth technical guides, engineering architectures, e-commerce optimization benchmarks, and modern web development best practices across WordPress, Shopify, SEO, AI, and Custom Web Applications.",
  keywords: [
    "HASIZ Blog",
    "WordPress Development Guide",
    "Shopify vs WooCommerce",
    "Technical SEO Guides",
    "AI Business Automation",
    "Website Performance Optimization",
    "Custom Web Development"
  ],
  alternates: {
    canonical: "https://www.hasiz.com/blog"
  },
  openGraph: {
    title: "HASIZ Engineering Blog & Technical Insights",
    description: "In-depth technical guides, engineering architectures, e-commerce optimization benchmarks, and modern web development best practices.",
    url: "https://www.hasiz.com/blog",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630 }]
  }
};

export default function BlogIndexPage() {
  return <BlogPageClient />;
}
