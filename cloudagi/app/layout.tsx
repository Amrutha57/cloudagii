import React from "react";
import "./globals.css";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Header } from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "@/components/Providers";
import { ChatBot } from "@/components/chatbot";
import { BlueprintModalContainer } from "@/components/blueprint-modal-container";
import { PlaybookModalContainer } from "@/components/playbook-modal-container";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://cloudagidemo1.vercel.app'),
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
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CloudAGI – AI Agent Consultancy for SMBs",
    description: "Intelligent AI Agents & Specialist Consultation for Modern Enterprises.",
    url: "https://cloudagidemo1.vercel.app",
    siteName: "CloudAGI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudAGI – AI Agent Consultancy for SMBs",
    description: "Intelligent AI Agents & Specialist Consultation for Modern Enterprises.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CloudAGI",
    "url": "https://cloudagidemo1.vercel.app",
    "logo": "https://cloudagidemo1.vercel.app/logo.png",
    "description": "Premium AI Agent Consultancy and Agentic Workflow Engineering for SMBs and Enterprises.",
    "email": "contact@cloudagidemo1.vercel.app",
    "areaServed": "Global",
    "serviceType": [
      "AI Agent Development",
      "Agentic Workflow Design",
      "AI Consultancy",
      "Automation Engineering"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI Agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI agents are autonomous or semi-autonomous software entities designed to perform specific tasks, make decisions, and interact with other systems or users to achieve a goal. Unlike standard chatbots, agents can take actions within your existing software stack."
        }
      },
      {
        "@type": "Question",
        "name": "How is CloudAGI different from other AI agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus exclusively on 'Agentic Workflows' and SMB ROI. We don't just give you a generic wrapper; we architect custom execution engines that solve deep operational bottlenecks."
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
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable}`}>
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
