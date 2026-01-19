"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dots = Array.from({ length: 25 });

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute inset-0 dark:hidden" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute inset-0 hidden dark:block" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {dots.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gray-400 dark:bg-slate-600"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Stop wondering about AI.
            <br />
            <span className="text-gray-600 dark:text-gray-400">Start using it to solve your biggest business problems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We bridge the gap between your business needs and the complexities of artificial intelligence.
            Practical, cost-effective AI agent solutions for ambitious SMB leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="relative py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Direct, practical solutions to bridge the SMB AI implementation gap.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Agentic Workflow Design & Strategy",
                desc: "Strategic AI agent workflows to automate key business processes with proven ROI.",
                icon: "⚡"
              },
              {
                title: "Custom Tool & Memory Development",
                desc: "Bespoke AI tools with secure memories that integrate with your existing software.",
                icon: "🔧"
              },
              {
                title: "Secure Agent Sandbox Consulting",
                desc: "Safe environments for testing and deploying AI agents with your proprietary data.",
                icon: "🛡️"
              },
              {
                title: "Prompt Engineering & Team Upskilling",
                desc: "Train your team to think in prompts and maximize AI tool effectiveness.",
                icon: "📚"
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 border border-gray-200 dark:border-slate-800 rounded-lg hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 bg-white dark:bg-slate-900"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-gray-400 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Learn More About Our Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE CLOUDAGI ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose CloudAGI?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re not just AI consultants—we&apos;re your strategic partner in navigating the AI revolution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business-First Approach",
                desc: "We start with your problems, not technology. Every solution is designed for measurable ROI.",
                icon: "🎯"
              },
              {
                title: "Expert Partnership",
                desc: "Access top-tier AI knowledge without the cost of a full-time expert. We handle complexity so you can focus on growth.",
                icon: "🤝"
              },
              {
                title: "Proven Results",
                desc: "From strategy to implementation, we deliver working solutions that actually solve your business challenges.",
                icon: "✅"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNAL R&D ================= */}
      <section className="relative z-10 py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
            Internal R&amp;D
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {["LeCoder", "MConnect"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Open-source thinking. Execution-first.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-white/10 py-10 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <strong className="block text-gray-900 dark:text-white">CloudAGI</strong>
            Execution before hype.
          </div>

          <div>
            <div>Sitemap</div>
            <div className="mt-2">About</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>

          <div>
            <div>Contact</div>
            <div className="mt-2">contact@cloudagi.com</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
