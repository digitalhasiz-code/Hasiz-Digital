import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData["product-upload-catalog-management"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "https://www.hasiz.com/services/product-upload-catalog-management",
  },
  openGraph: {
    title: service.seoTitle,
    description: service.metaDescription,
    url: "https://www.hasiz.com/services/product-upload-catalog-management",
    images: [{ url: service.heroImage, width: 1200, height: 750, alt: service.altText }],
  },
};

export default function ProductUploadCatalogServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
