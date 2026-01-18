import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – CloudAGI | AI Workflows, Websites & Content Systems",
  description: "Explore CloudAGI's services: AI & automation, SEO-ready websites, and scalable content systems designed for clarity and execution.",
  keywords: ["CloudAGI services", "AI workflows", "SEO websites", "content systems", "business automation"],
  openGraph: {
    title: "Services – CloudAGI | AI Workflows, Websites & Content Systems",
    description: "Focused services for implementing AI and digital systems with purpose and scalability.",
    url: "https://cloudagi.com/services",
    siteName: "CloudAGI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services – CloudAGI | AI Workflows, Websites & Content Systems",
    description: "AI & automation, websites, and content systems that scale.",
  },
};

export default function Services() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <p className="mt-4 opacity-80 max-w-3xl">
          CloudAGI offers focused services designed to help businesses implement
          AI and digital systems with clarity and purpose.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">AI & Automation</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          We design and build practical AI workflows that reduce manual work,
          improve consistency, and help teams operate more efficiently.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Websites & SEO</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          Fast, structured, SEO-ready websites built with long-term growth in
          mind — not just visual appeal.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Content Systems</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          We help teams create repeatable content systems for blogs and social
          platforms that build authority and consistency.
        </p>
      </Section>
    </main>
  );
}
