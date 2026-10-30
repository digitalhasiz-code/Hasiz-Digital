import { Metadata } from "next";
import WorkPageClient from "@/components/WorkPageClient";

export const metadata: Metadata = {
  title: "Engineering Portfolio & Case Studies | HASIZ Digital Studio",
  description: "Explore selected production websites, e-commerce storefronts, and software architectures engineered by HASIZ for businesses worldwide.",
  alternates: {
    canonical: "https://www.hasiz.com/work",
  },
  openGraph: {
    title: "Engineering Portfolio & Case Studies | HASIZ Digital Studio",
    description: "Explore selected production websites, e-commerce storefronts, and software architectures engineered by HASIZ.",
    url: "https://www.hasiz.com/work",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630, alt: "HASIZ Work & Case Studies" }],
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}
