"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/spotlight-card";
import { useChat } from "@/context/chat-context";
import { useQuiz } from "@/context/quiz-context";
import { usePlaybook } from "@/context/playbook-context";

export default function Services() {
  const { openChat } = useChat();
  const { openQuiz } = useQuiz();
  const { openPlaybook } = usePlaybook();

  return (
    <main className="relative bg-dark-bg text-white overflow-hidden selection:bg-accent-blue selection:text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-dark-bg via-blue-950/10 to-dark-bg section-gap">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs md:text-sm font-medium">
              AI Solutions That Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-8xl font-black text-white mb-6 italic uppercase tracking-tighter font-outfit"
          >
            How We <span className="heading-gradient">Solve Problems</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We don&apos;t sell AI tools. We engineer custom autonomous agents that integrate with your systems and deliver measurable business results.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="relative section-gap bg-dark-bg">
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
                icon: "⚙️",
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
                overview: "We don&apos;t just build the tools; we teach your team how to wield them. Master the art of collaborating with AI agents.",
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <SpotlightCard className="h-full">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                      <div className="text-3xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors uppercase tracking-widest font-outfit">{service.num}</div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tighter italic font-outfit">{service.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed italic">{service.overview}</p>

                    <div className="border-t border-white/5 pt-6 mt-auto">
                      <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-architect mb-4">Core Deliverables:</h4>
                      <ul className="mb-8 space-y-3">
                        {service.includes.slice(0, 4).map((item, j) => (
                          <li key={j} className="text-sm text-gray-400 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="text-sm text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-blue-500/10 transition-colors italic">
                        <span className="font-black text-blue-400 not-italic uppercase text-[10px] tracking-architect block mb-1">Business Fit</span> {service.best}
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={openQuiz}
                          className="block w-full text-center py-3.5 bg-white/5 hover:bg-white text-white hover:text-black font-black text-[10px] uppercase tracking-widest rounded-xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] border border-white/5 hover:border-white active-scale"
                        >
                          Get Free Audit
                        </button>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES COMPARISON (NEW) ================= */}
      <section className="relative section-gap bg-dark-bg border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter font-outfit">
              The Agent <span className="heading-gradient">Advantage</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto italic">Why businesses are migrating from legacy automations to decentralized agentic systems.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-[10px] font-black text-gray-500 uppercase tracking-architect">Capabilities</th>
                  <th className="p-6 text-[10px] font-black text-gray-500 uppercase tracking-architect">Manual/Legacy</th>
                  <th className="p-6 text-[10px] font-black text-blue-400 uppercase tracking-architect">CloudAGI Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { cap: "Task Handling", manual: "Rigid, rule-based", agent: "Reasoning & Logic based" },
                  { cap: "Edge Cases", manual: "Requires human fix", agent: "Autonomous resolution" },
                  { cap: "Available Hours", manual: "8 hrs / day", agent: "24 / 7 / 365" },
                  { cap: "Learning Speed", manual: "Months for new skill", agent: "Instant via prompting" },
                  { cap: "Scalability", manual: "Hire more people", agent: "Spin up more instances" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-white">{row.cap}</td>
                    <td className="p-6 text-gray-400">{row.manual}</td>
                    <td className="p-6 text-blue-300 font-bold">{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= STACK & INTEGRATIONS (NEW) ================= */}
      <section className="relative section-gap bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic uppercase tracking-tighter font-outfit">
                Modern <span className="heading-gradient">Infrastructure</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">
                We don&apos;t build in silos. Your agents are engineered to integrate with your current tech stack while leveraging the frontier of AI research.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["LLM Orchestration", "Vector Memory", "Native Integrations", "Auto-Optimization"].map(t => (
                  <div key={t} className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-architect">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-3 gap-4">
              {[
                "OpenAI", "Anthropic", "LangChain", "Zapier", "Pinecone", "Vercel"
              ].map((tech, i) => (
                <div key={tech} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-xs font-black text-gray-500 uppercase tracking-widest hover:text-white hover:border-blue-500/50 transition-all cursor-default">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative section-gap bg-dark-card border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 italic uppercase tracking-tighter font-outfit">
              The Road <span className="heading-gradient">to ROI</span>
            </h2>
            <p className="text-lg text-gray-400 italic">Our 4-step methodology for engineered agentic systems.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Discovery", desc: "Mapping the friction" },
              { title: "Analysis", desc: "ROI validation & design" },
              { title: "Design", desc: "Custom core development" },
              { title: "Delivery", desc: "Production rollout" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 z-0" />
                )}
                <div
                  className="glass p-8 rounded-2xl text-center hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 group cursor-pointer hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-blue-500/10 transition-colors font-outfit">{i + 1}</div>
                    <h3 className="text-sm font-black text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-architect">{step.title}</h3>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed italic">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative section-gap bg-gradient-dark overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 italic uppercase tracking-tighter font-outfit">
              Ready to <span className="heading-gradient">Architect?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed italic">Let&apos;s build the future of your workflow together. No fluff. Just architecture.</p>
            <button
              onClick={openPlaybook}
              className="inline-flex px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-xs md:text-sm rounded-2xl hover:bg-blue-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 border-none cursor-pointer uppercase tracking-widest active-scale"
            >
              Start Your Playbook Discovery
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
