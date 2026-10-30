import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasiz.com"),
  title: {
    default: "HASIZ — Digital Engineering Studio | We Engineer Digital Experiences",
    template: "%s | HASIZ Digital Engineering Studio"
  },
  description: "HASIZ is a digital engineering studio building high-performance websites, e-commerce platforms, custom software, and intelligent digital solutions for ambitious modern businesses.",
  keywords: [
    "Digital Engineering Studio",
    "Custom Web Development",
    "WordPress Development Services",
    "Shopify Store Development",
    "Web Application Development",
    "AI Workflow Automation",
    "UI UX Design Systems",
    "Next.js Development Studio",
    "High Performance Web Development"
  ],
  authors: [{ name: "HASIZ Engineering Team", url: "https://hasiz.com" }],
  creator: "HASIZ",
  publisher: "HASIZ Digital Engineering Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hasiz.com",
    siteName: "HASIZ Digital Engineering Studio",
    title: "HASIZ — We Engineer Digital Experiences That Move Businesses Forward",
    description: "From high-performance websites and scalable e-commerce to intelligent software solutions, HASIZ turns complex ideas into powerful digital experiences.",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "HASIZ Digital Engineering Studio — We Engineer Digital Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HASIZ — Digital Engineering Studio",
    description: "We engineer high-performance digital experiences for ambitious businesses worldwide.",
    images: ["/images/brand/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/images/brand/icon.svg" }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hasiz.com/#organization",
        "name": "HASIZ",
        "legalName": "HASIZ Digital Engineering Studio",
        "url": "https://hasiz.com",
        "logo": "https://hasiz.com/images/brand/logo-dark.svg",
        "description": "HASIZ is a digital engineering studio focused on building high-performance websites, e-commerce experiences, custom software, and intelligent digital solutions for modern businesses.",
        "slogan": "We Engineer Digital Experiences.",
        "email": "contact@hasiz.com",
        "sameAs": [
          "https://github.com",
          "https://linkedin.com",
          "https://twitter.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://hasiz.com/#website",
        "url": "https://hasiz.com",
        "name": "HASIZ Digital Engineering Studio",
        "publisher": {
          "@id": "https://hasiz.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-content-body antialiased selection:bg-brand-blue selection:text-white">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
