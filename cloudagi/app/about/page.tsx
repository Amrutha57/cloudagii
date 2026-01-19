"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative bg-dark-bg text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-dark py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About CloudAGI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We exist to make AI agents accessible, affordable, and profitable for small and medium-sized businesses
          </motion.p>
        </div>
      </section>

      {/* ================= MISSION, VISION, VALUES ================= */}
      <section className="relative py-24 bg-dark-card">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white">Our Foundation</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                icon: "🎯",
                content: "To make the power of AI agents accessible and profitable for small and medium-sized businesses."
              },
              {
                title: "Our Vision",
                icon: "👁️",
                content: "To be the most trusted partner for SMBs navigating the AI revolution, turning complex technology into a competitive advantage."
              },
              {
                title: "Our Promise",
                icon: "🤝",
                content: "ROI-driven partnerships. We don't deliver complexity—we deliver results that make money, save money, or create strategic advantage."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-lg border border-dark-border group overflow-hidden hover:border-accent-blue transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-4xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Core Values</h2>
            <p className="text-xl text-gray-400">What guides every decision we make</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Business-First, Technology-Second",
                desc: "We start with your business problem, then find the right AI solution—not the other way around."
              },
              {
                title: "Pragmatic & Action-Oriented",
                desc: "We prioritize practical, working solutions that deliver value quickly. No theoretical 'science projects.'"
              },
              {
                title: "Transparent Partnership",
                desc: "We educate you throughout the process. You'll understand what we're building and why, empowering you to own the solution long-term."
              },
              {
                title: "Expertise with Humility",
                desc: "We are experts in our niche, but we are also honest about limitations and focused on continuous learning."
              },
              {
                title: "ROI-Driven",
                desc: "Every project is designed to either make you money, save you money, or create a clear strategic advantage."
              },
              {
                title: "Move Fast, Start Small",
                desc: "We prove value with low-risk proof-of-concepts first. Then scale. No massive upfront commitments needed."
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 border border-slate-800 rounded-lg hover:border-slate-700 hover:shadow-slate-900/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="relative py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Your Partner</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 border border-slate-800 rounded-lg bg-slate-950 shadow-lg shadow-slate-900/50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold  text-white mb-2">Arya Teja Rudraraju</h3>
              <p className="text-lg text-gray-400 font-medium mb-8">Founder & AI Strategist</p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: "The Builder",
                  content: "Not just a theorist. Arya has shipped numerous AI products and proof-of-concepts with proven track records of turning ideas into working solutions. From backend development (Python, FastAPI) to UI (Streamlit) and architecting end-to-end AI systems, he brings hands-on experience with the latest agentic AI tools."
                },
                {
                  title: "The Business Strategist",
                  content: "With an MBA-informed approach and background in business analysis, project management, and entrepreneurship, Arya approaches every project with a focus on clear goals, timelines, and measurable ROI. This is not just technology—it's a solution designed for your business to use and own."
                },
                {
                  title: "Why This Matters to You",
                  content: "You get a partner who understands both the technology and your business. Someone relentlessly focused on delivering practical, cost-effective solutions that actually work. Not someone selling you complexity—someone solving your problems."
                },
              ].map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-3">
                    {section.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY WE'RE DIFFERENT ================= */}
      <section className="relative py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why We&apos;re Different</h2>
            <p className="text-xl text-gray-400">CloudAGI vs. Other Options</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "vs. Large Consulting Firms",
                desc: "They're expensive, slow, and sell you big projects. We start small, prove value first, and scale with you. No $100k engagements upfront."
              },
              {
                title: "vs. Disconnected Freelancers",
                desc: "They execute code but don't think strategically. We design solutions with your business goals in mind, ensuring long-term success."
              },
              {
                title: "vs. Building In-House",
                desc: "Hiring an AI expert costs $150k-$250k/year, and they're hard to find. We're your fractional expert—expert guidance at a fraction of the cost."
              },
              {
                title: "vs. Going it Alone",
                desc: "The AI landscape is confusing and moves fast. We cut through the noise, identify your highest-impact use case, and build a roadmap."
              },
            ].map((comparison, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-slate-800 rounded-lg hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{comparison.title}</h3>
                <p className="text-gray-400 leading-relaxed">{comparison.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-black dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">Let&apos;s start with a conversation about your business needs</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}