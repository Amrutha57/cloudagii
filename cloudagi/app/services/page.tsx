import type { Metadata } from "next";
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
    <main className="relative bg-dark-bg text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-dark py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-80 h-80 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Practical solutions designed to solve real business problems with measurable ROI
          </p>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="relative py-24 bg-dark-bg">
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
                <div className="md:col-span-2 glass p-8 rounded-lg border border-dark-border relative overflow-hidden group hover:border-accent-blue transition-all duration-300">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{service.overview}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wide mb-3">What&apos;s Included</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, j) => (
                            <li key={j} className="text-gray-400 text-sm flex items-start">
                              <span className="text-accent-blue mr-2 font-bold">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-bold text-gray-200 uppercase tracking-wide">Timeline</p>
                          <p className="text-lg font-medium text-white">{service.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-200 uppercase tracking-wide">Investment</p>
                          <p className="text-lg font-medium text-white">{service.investment}</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-200 uppercase tracking-wide">Best For</p>
                          <p className="text-sm text-gray-400">{service.best}</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 transform"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-24 bg-dark-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">No matter which service, we follow a proven methodology</p>
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
                className="glass p-6 rounded-lg text-center hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="text-4xl font-bold text-accent-blue mb-3">{i + 1}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-gradient-dark">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Let&apos;s discuss which service is right for your business</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-gradient-blue text-white font-medium rounded-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105 transform"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
