import "./globals.css";

import { Header } from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "@/components/Providers";
import { ChatBot } from "@/components/chatbot";
import { BlueprintModalContainer } from "@/components/blueprint-modal-container";
import { PlaybookModalContainer } from "@/components/playbook-modal-container";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://cloudagi.com'),
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
    icon: '/icon.png',
  },
  openGraph: {
    title: "CloudAGI – AI Agent Solutions for SMBs",
    description: "Transform your business with intelligent AI agents. Custom agentic solutions delivering measurable ROI. AI consultancy, workflow design, and implementation for SMBs.",
    url: "https://cloudagi.com",
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
    canonical: 'https://cloudagi.com',
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
        "name": "What is an AI agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI agent is a smart software assistant that can handle tasks automatically—like responding to customer emails, scheduling meetings, or processing data. Think of it as a virtual team member that works 24/7 without breaks."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical knowledge to work with CloudAGI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We handle all the technical complexity. You just tell us what tasks take up your team's time, and we build and implement the solution. We also train your team on how to use the AI systems we create."
        }
      },
      {
        "@type": "Question",
        "name": "What makes AI agents different from traditional automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional automation follows rigid rules and breaks when it encounters something unexpected. AI agents can understand context, handle variations, and make intelligent decisions. They adapt to new situations without needing to be reprogrammed for every edge case."
        }
      },
      {
        "@type": "Question",
        "name": "How long does implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects are completed in 2-6 weeks. We start with a pilot to prove ROI before scaling. You'll see results within the first month."
        }
      },
      {
        "@type": "Question",
        "name": "What if my team doesn't adopt the AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include hands-on training and ongoing support. Our goal is adoption, not just delivery—we don't succeed unless your team actually uses the system. We work closely with you to ensure smooth integration into your workflows."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We build AI systems that you own and control. Your data stays on your infrastructure or in secure, private environments. We never share your data with third parties or use it to train public models."
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable}`}>
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
      <body className="font-inter">
        <Providers>
          <Header />
          {children}
          <BlueprintModalContainer />
          <PlaybookModalContainer />
          <Footer />
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}
