import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CloudAGI – Practical AI & Digital Execution",
  description: "Learn about CloudAGI's mission to help startups and businesses build AI workflows, SEO-driven websites, and content systems that scale with clarity and purpose.",
  keywords: ["CloudAGI", "AI systems", "digital execution", "startups", "business automation", "content systems"],
  openGraph: {
    title: "About CloudAGI – Practical AI & Digital Execution",
    description: "CloudAGI focuses on building clarity-first solutions for AI and digital systems that teams can actually use and grow with.",
    url: "https://cloudagi.com/about",
    siteName: "CloudAGI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CloudAGI – Practical AI & Digital Execution",
    description: "Practical AI and digital execution company helping businesses adopt AI meaningfully.",
  },
};

export default function About() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-semibold">About CloudAGI</h1>
        <p className="mt-6 opacity-80 max-w-3xl">
          CloudAGI is a practical AI and digital execution company focused on
          helping startups and growing teams adopt artificial intelligence in
          meaningful, scalable ways.
        </p>
        <p className="mt-4 opacity-80 max-w-3xl">
          We believe most businesses don’t fail due to lack of tools, but due to
          lack of systems. Our work focuses on building clarity-first solutions —
          websites, content systems, and AI workflows — that teams can actually
          use and grow with.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">How We Think</h2>
        <ul className="mt-6 space-y-3 opacity-80">
          <li>• Business problems before technology</li>
          <li>• Systems over one-off solutions</li>
          <li>• Execution over hype</li>
        </ul>
      </Section>
    </main>
  );
}
