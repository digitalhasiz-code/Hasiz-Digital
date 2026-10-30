import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData["wordpress-development"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/wordpress-development",
  },
  openGraph: {
    title: service.seoTitle,
    description: service.metaDescription,
    url: "https://hasiz.com/services/wordpress-development",
    images: [{ url: service.heroImage, width: 1200, height: 750, alt: service.altText }],
  },
};

export default function WordPressServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}

