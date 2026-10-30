import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData["shopify-development"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/shopify-development",
  },
  openGraph: {
    title: service.seoTitle,
    description: service.metaDescription,
    url: "https://hasiz.com/services/shopify-development",
    images: [{ url: service.heroImage, width: 1200, height: 750, alt: service.altText }],
  },
};

export default function ShopifyServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}

