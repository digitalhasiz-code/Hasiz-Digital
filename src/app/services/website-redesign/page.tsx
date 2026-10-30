import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = servicesData["website-redesign"];

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "https://www.hasiz.com/services/website-redesign",
  },
  openGraph: {
    title: service.seoTitle,
    description: service.metaDescription,
    url: "https://www.hasiz.com/services/website-redesign",
    images: [{ url: service.heroImage, width: 1200, height: 750, alt: service.altText }],
  },
};

export default function WebsiteRedesignServicePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
