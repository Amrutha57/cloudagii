import "./globals.css";

import { Header } from "@/components/navbar";

import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "CloudAGI – Strategic AI Consultancy for SMBs",
  description:
    "CloudAGI empowers SMBs with intelligent agentic solutions to solve critical business problems and drive growth using AI.",
  keywords: ["CloudAGI", "AI consultancy", "agentic solutions", "SMB AI", "business AI", "AI workflows", "strategic AI"],
  authors: [{ name: "CloudAGI Team" }],
  creator: "CloudAGI",
  publisher: "CloudAGI",
  openGraph: {
    title: "CloudAGI – Strategic AI Consultancy for SMBs",
    description: "Empowering SMBs with practical AI agent solutions for measurable business growth.",
    url: "https://cloudagi.com",
    siteName: "CloudAGI",
    images: [
      {
        url: "/og-image.png", // Need to add this image
        width: 1200,
        height: 630,
        alt: "CloudAGI – Strategic AI Consultancy for SMBs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudAGI – Strategic AI Consultancy for SMBs",
    description: "Strategic AI consultancy bridging business needs and AI complexities for SMBs.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-site-verification-code", // Replace with actual
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CloudAGI",
    url: "https://cloudagi.com",
    logo: "https://cloudagi.com/logo.png", // Add logo
    description: "Practical AI and digital execution company helping businesses build scalable AI workflows and systems.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX", // Add phone
      contactType: "customer service",
      email: "contact@cloudagi.com",
    },
    sameAs: [
      "https://twitter.com/cloudagi", // Add social
      "https://linkedin.com/company/cloudagi",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
