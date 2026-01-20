import "./globals.css";

import { Header } from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "@/components/Providers";

export const metadata = {
  metadataBase: new URL('https://cloudagi-liart.vercel.app'),
  title: "CloudAGI – AI Agent Consultancy for SMBs | Agentic Workflow Solutions",
  description:
    "CloudAGI delivers custom AI agent solutions and agentic workflows for small and medium businesses. Get measurable ROI through intelligent automation, AI consultancy, and agent-based systems. Expert implementation for sales, operations, and business automation.",
  keywords: [
    "AI agents",
    "agentic AI",
    "AI consultancy",
    "AI agents for business",
    "agentic workflows",
    "SMB AI solutions",
    "business automation AI",
    "AI implementation",
    "intelligent automation",
    "AI system design",
    "AI ROI",
    "AI agents for SMB",
    "agent-based systems",
    "AI strategy consulting",
    "business AI solutions"
  ],
  authors: [{ name: "CloudAGI Team" }],
  creator: "CloudAGI",
  publisher: "CloudAGI",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "CloudAGI – AI Agent Solutions for SMBs",
    description: "Transform your business with intelligent AI agents. Custom agentic solutions delivering measurable ROI. AI consultancy, workflow design, and implementation for SMBs.",
    url: "https://cloudagi-liart.vercel.app",
    siteName: "CloudAGI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CloudAGI - AI Agent Solutions for Business Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudAGI – AI Agents for SMBs",
    description: "Custom AI agent solutions that deliver measurable business results. AI consultancy, agentic workflows, and intelligent automation.",
    images: ["/og-image.png"],
    creator: "@cloudagi",
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
    google: "google-site-verification=MQVJM9bDiVqazcztLFi5uMm_TOiz4Yl9yslYYGFHzG8",
  },
  alternates: {
    canonical: 'https://cloudagi-liart.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cloudagi.com/#organization",
    "name": "CloudAGI",
    "url": "https://cloudagi.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cloudagi.com/logo.png",
      "width": 200,
      "height": 60
    },
    "description": "CloudAGI delivers custom AI agent solutions and agentic workflows for SMBs. Expert AI consultancy with proven ROI.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/cloudagi",
      "https://linkedin.com/company/cloudagi"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "url": "https://cloudagi.com/contact",
      "email": "contact@cloudagi.com"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "service": {
      "@type": "Service",
      "@id": "https://cloudagi.com/#service",
      "name": "AI Agent Consultancy & Implementation",
      "description": "Custom AI agent and agentic workflow solutions for small and medium-sized businesses"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI agents are autonomous systems that can understand complex tasks, make decisions, and take actions to achieve specific goals. They use large language models and specialized tools to solve business problems efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI agents improve my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI agents can automate repetitive tasks, improve decision-making, reduce operational costs, and increase productivity. They're particularly effective for sales automation, customer service, data analysis, and workflow optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What is agentic AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agentic AI refers to autonomous AI systems that can take actions independently to accomplish goals. Unlike traditional AI, agentic systems can plan, execute, and adapt their behavior based on feedback and results."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement AI agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation timelines vary based on complexity. Simple integrations can be completed in weeks, while comprehensive agentic workflow solutions typically take 4-8 weeks depending on requirements and customization needs."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from AI agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROI varies by use case, but businesses typically see 200-400% returns within the first year through improved efficiency, reduced labor costs, faster operations, and better decision-making. We provide custom ROI projections for your specific scenarios."
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="MQVJM9bDiVqazcztLFi5uMm_TOiz4Yl9yslYYGFHzG8" />
        <meta name="msvalidate.01" content="C84846955C8B8D3CA681FFEDD7F922FA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
