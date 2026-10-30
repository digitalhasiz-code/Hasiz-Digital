import { Metadata } from "next";
import InsightsPageClient from "@/components/InsightsPageClient";

export const metadata: Metadata = {
  title: "Thoughts on Technology, Design & Digital Growth | HASIZ Insights",
  description: "Practical engineering guides, e-commerce ROI analyses, and technical architecture retrospectives written by senior software engineers.",
  alternates: {
    canonical: "https://www.hasiz.com/insights",
  },
  openGraph: {
    title: "Thoughts on Technology, Design & Digital Growth | HASIZ Insights",
    description: "Practical engineering guides, e-commerce ROI analyses, and technical architecture retrospectives written by senior software engineers.",
    url: "https://www.hasiz.com/insights",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630, alt: "HASIZ Insights" }],
  },
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
