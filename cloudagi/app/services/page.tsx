import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center bg-white dark:bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Practical solutions designed to solve real business problems with measurable ROI
          </p>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          {[
            {
              num: "01",
              title: "Agentic Workflow Design & Strategy",
              icon: "⚡",
              overview: "A strategic engagement where we analyze your business processes and design a custom AI agent workflow to automate a key task.",
              includes: [
                "Deep-dive business process analysis",
                "Comprehensive AI workflow blueprint",
                "Working proof-of-concept demo",
                "Clear ROI projections and timeline",
                "Implementation roadmap"
              ],
              timeline: "2-3 weeks",
              investment: "$5k - $15k",
              best: "Leaders who know they need AI but don't know where to start"
            },
            {
              num: "02",
              title: "Custom Tool & Memory Development",
              icon: "🔧",
              overview: "We build bespoke AI tools that integrate seamlessly with your existing software and learn from your proprietary data.",
              includes: [
                "Custom API integrations with your tools",
                "Secure, private memory systems",
                "Context-aware agent development",
                "Integration with CRM, ERP, or custom systems",
                "Ongoing performance optimization"
              ],
              timeline: "4-12 weeks",
              investment: "$10k - $50k",
              best: "Teams with specific automation tasks and complex tool ecosystems"
            },
            {
              num: "03",
              title: "Secure Agent Sandbox Consulting",
              icon: "🛡️",
              overview: "We advise on and implement secure environments where you can safely test and deploy AI agents with proprietary data.",
              includes: [
                "Security architecture assessment",
                "Secure environment setup and deployment",
                "Data privacy & compliance guidance",
                "Best practices for sensitive industries",
                "Ongoing security monitoring"
              ],
              timeline: "3-8 weeks",
              investment: "$8k - $25k",
              best: "Sensitive industries (healthcare, finance) or strict data requirements"
            },
            {
              num: "04",
              title: "Prompt Engineering & Team Upskilling",
              icon: "📚",
              overview: "We train your team on how to think in prompts and create a library of high-performance, reusable prompts.",
              includes: [
                "Prompt engineering fundamentals workshop",
                "Custom prompt library development",
                "Role-specific training (sales, marketing, ops)",
                "Best practices documentation",
                "Ongoing support and optimization"
              ],
              timeline: "2-4 weeks",
              investment: "$3k - $10k",
              best: "Teams already using AI tools but getting mediocre results"
            },
          ].map((service, i) => (
            <div
              key={i}
              className="mb-16 last:mb-0"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left: Number and Icon */}
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="text-6xl font-bold text-gray-200 dark:text-slate-800 mb-4">{service.num}</div>
                    <div className="text-5xl mb-6">{service.icon}</div>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-2 p-8 border border-gray-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{service.overview}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, j) => (
                          <li key={j} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                            <span className="text-gray-900 dark:text-white mr-2 font-bold">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Timeline</p>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">{service.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Investment</p>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">{service.investment}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Best For</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{service.best}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">No matter which service, we follow a proven methodology</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Discovery", desc: "Understand your problem" },
              { title: "Analysis", desc: "Identify the opportunity" },
              { title: "Design", desc: "Create the solution" },
              { title: "Delivery", desc: "Implement & optimize" },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 dark:border-slate-800 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-gray-300 dark:text-slate-800 mb-3">{i + 1}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-black dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss which service is right for your business</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}