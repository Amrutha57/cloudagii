import { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About Us – CloudAGI | AI Agent Innovation & Leadership",
  description: "Discover CloudAGI's mission to revolutionize business automation through agentic AI systems. Learn about our team, vision, and commitment to AI excellence.",
  keywords: ["about cloudagi", "AI agent company", "agentic AI solutions", "business automation team", "AI innovation"],
  openGraph: {
    title: "About CloudAGI – Agentic AI Solutions",
    description: "Leading provider of AI agent and agentic automation solutions for SMBs.",
    url: "https://cloudagidemo1.vercel.app/about",
    type: "website",
  },
};

export default function About() {
  return <AboutContent />;
}
