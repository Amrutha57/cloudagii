import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services – CloudAGI | AI Agent Solutions, Agentic Workflow Design & Implementation",
  description:
    "CloudAGI offers AI agent consultancy, custom agentic workflow design, secure agent deployment, and team training. Get intelligent automation solutions with proven ROI for your business.",
  keywords: [
    "AI agent services",
    "agentic workflow design",
    "AI implementation services",
    "AI consultancy",
    "custom AI solutions",
    "intelligent automation",
    "AI strategy",
    "agent-based systems",
  ],
  openGraph: {
    title: "Services – CloudAGI | AI Agent & Agentic Solutions",
    description:
      "Comprehensive AI agent services including strategy, design, development, and implementation. Custom solutions for business automation and measurable results.",
    url: "https://cloudagi.com/services",
    type: "website",
  },
};

export default function Services() {
  return (
    <main className="relative bg-dark-bg text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-dark-bg via-blue-950/10 to-dark-bg py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              AI Solutions That Work
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Solve Problems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't sell AI tools. We engineer custom autonomous agents that integrate with your systems and deliver measurable business results.
          </p>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Agentic Workflow Design",
                icon: "⚡",
                overview: "We deconstruct your complex business processes and rebuild them using autonomous AI agents that handle the heavy lifting.",
                includes: [
                  "Process deconstruction & analysis",
                  "Custom agent architecture",
                  "Proof-of-concept development",
                  "Efficiency impact modeling",
                  "Scalability roadmap"
                ],
                best: "Leaders who want to see AI solve a specific problem"
              },
              {
                num: "02",
                title: "Custom AI Engines & Memory",
                icon: "🔧",
                overview: "We build dedicated AI engines that connect to your internal tools and possess a persistent memory of your business context.",
                includes: [
                  "Custom API agent integrations",
                  "Vector database implementation (Memory)",
                  "Context-aware response tuning",
                  "Secure data pipelines",
                  "Continuous learning setup"
                ],
                best: "Teams needing deep integration with existing software"
              },
              {
                num: "03",
                title: "Secure Enterprise Sandboxes",
                icon: "🛡️",
                overview: "We deploy isolated, secure AI environments where your team can leverage powerful models without risking data leakage.",
                includes: [
                  "Private cloud deployment",
                  "Data governance protocols",
                  "Access control systems",
                  "Compliance audit checks",
                  "Safe-fail testing"
                ],
                best: "Organizations with strict data security requirements"
              },
              {
                num: "04",
                title: "Team AI Upskilling",
                icon: "📚",
                overview: "We don't just build the tools; we teach your team how to wield them. Master the art of collaborating with AI agents.",
                includes: [
                  "Interactive prompting workshops",
                  "Department-specific playbooks",
                  "Agent collaboration training",
                  "Best practices architecture",
                  "Ongoing coaching"
                ],
                best: "Teams wanting to internalize AI capabilities"
              },
            ].map((service, i) => (
              <div
                key={i}
                className="glass p-8 rounded-xl border border-dark-border relative overflow-hidden group hover:border-accent-blue transition-all duration-300 flex flex-col h-full hover:shadow-glow-blue"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="text-3xl font-bold text-gray-700 dark:text-white/20">{service.num}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{service.overview}</p>

                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Includes:</h4>
                    <ul className="mb-6 space-y-2">
                      {service.includes.slice(0, 3).map((item, j) => (
                        <li key={j} className="text-gray-400 text-sm flex items-start">
                          <span className="text-accent-blue mr-2 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                      {service.includes.length > 3 && (
                        <li className="text-gray-500 text-xs italic pl-4">+ {service.includes.length - 3} more</li>
                      )}
                    </ul>

                    <div className="text-sm text-gray-400 bg-white/5 p-3 rounded-lg">
                      <span className="font-semibold text-gray-300">Best for:</span> {service.best}
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="block w-full text-center py-3 bg-white/10 hover:bg-accent-blue hover:text-white text-white font-medium rounded-lg transition-all duration-300"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                className="glass p-6 rounded-lg text-center hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300 group cursor-pointer hover:scale-105 hover:bg-white/5"
              >
                <div className="text-4xl font-bold text-accent-blue mb-3 group-hover:scale-110 transition-transform duration-300">{i + 1}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-blue transition-colors">{step.title}</h3>
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
            className="inline-flex px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
