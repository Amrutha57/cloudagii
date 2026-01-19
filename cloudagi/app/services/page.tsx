import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – CloudAGI | AI Agentic Solutions for SMBs",
  description: "Discover CloudAGI's AI consultancy services: Agentic Workflow Design, Custom Tool Development, Secure Agent Sandbox, and Team Upskilling for SMBs.",
  keywords: ["CloudAGI services", "AI agentic solutions", "agent workflows", "custom AI tools", "secure AI sandbox", "team AI training"],
  openGraph: {
    title: "Services – CloudAGI | AI Agentic Solutions for SMBs",
    description: "Targeted AI agent workflows and tools designed to solve business problems and drive growth.",
    url: "https://cloudagi.com/services",
    siteName: "CloudAGI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services – CloudAGI | AI Agentic Solutions for SMBs",
    description: "Practical AI agent solutions for SMBs to increase efficiency and ROI.",
  },
};

export default function Services() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <p className="mt-4 opacity-80 max-w-3xl">
          We provide targeted AI agentic solutions designed to empower SMBs with intelligent workflows that solve real business problems and deliver measurable ROI.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Agentic Workflow Design & Strategy</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          <strong>What It Is:</strong> A strategic engagement where we analyze your business processes and design a custom AI agent workflow to automate a key task. We deliver a comprehensive blueprint and a live proof-of-concept.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Solves:</strong> Strategic Confusion, Uncertain ROI.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Best For:</strong> Clients who know they need AI but don&apos;t know where to start.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Custom Tool & Memory Development</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          <strong>What It Is:</strong> We build bespoke AI tools that integrate with your existing software (e.g., a custom agent that lives in your CRM). This includes creating secure, private &quot;memories&quot; so the agent can learn from your company&apos;s data without exposing it publicly.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Solves:</strong> Integration Headaches, Data Security Fears.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Best For:</strong> Clients in any industry who have a specific task and need AI to work with their current systems.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Secure Agent Sandbox Consulting</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          <strong>What It Is:</strong> We advise on and help implement a secure environment where you can safely test and deploy AI agents. We guide you on best practices for data privacy, security, and compliance.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Solves:</strong> Data Privacy & Security, Legal/Ethical Concerns.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Best For:</strong> Clients in sensitive industries (e.g., healthcare, finance) or those who want to use proprietary data.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Prompt Engineering & Team Upskilling</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          <strong>What It Is:</strong> We train your team on how to *think* in prompts. We develop a library of high-performance, reusable prompts tailored to your business functions (e.g., sales, marketing, operations) to ensure you get the most out of the AI tools you use.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Solves:</strong> Lack of In-House Expertise, Underutilization of AI.
        </p>
        <p className="mt-2 opacity-80 max-w-3xl">
          <strong>Best For:</strong> Clients who have already started using tools like ChatGPT but are getting mediocre results.
        </p>
      </Section>
    </main>
  );
}