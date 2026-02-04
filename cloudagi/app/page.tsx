"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Counter } from "@/components/counter";
import { ROICalculator } from "@/components/roi-calculator";
import { TrustBadges } from "@/components/trust-badges";
import { SpotlightCard } from "@/components/spotlight-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { useQuiz } from "@/context/quiz-context";

export default function Home() {
  const { openQuiz } = useQuiz();

  return (
    <main className="relative bg-dark-bg text-white overflow-hidden font-sans selection:bg-accent-blue selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-bg/80 z-10" /> {/* Overlay for contrast */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8"
          >
            We Build AI Agents &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Provide Expert Consultation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Custom AI solutions that automate your repetitive work and let your team focus on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button
              onClick={openQuiz}
              className="px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 border-none cursor-pointer"
            >
              Get Started
            </button>
            <Link
              href="/services"
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              See What We Build
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="relative py-24 bg-dark-bg/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">
                <Counter end={10} suffix="+" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hours Saved Per Week</h3>
              <p className="text-gray-400 text-sm">
                Average time saved by our clients through AI automation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">
                <Counter end={4} suffix="w" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Avg. Time to Deploy</h3>
              <p className="text-gray-400 text-sm">
                Our team gets your first agent up and running in weeks, not months
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">
                <Counter end={100} suffix="%" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Privacy</h3>
              <p className="text-gray-400 text-sm">
                Your data stays in your environment. We never train public models on it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COMMON CHALLENGES ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Common Challenges We Solve</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              If your team is struggling with any of these, an AI agent can likely help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Manual Data Entry",
                desc: "Your team spends hours moving data between spreadsheets, CRMs, and other tools.",
                features: ["Zero human error", "Real-time updates", "Cross-tool sync"]
              },
              {
                title: "Customer Support Overload",
                desc: "Answering the same 50 questions every day instead of solving complex problems.",
                features: ["24/7 instant response", "Natural conversation", "Automatic triage"]
              },
              {
                title: "Inconsistent Follow-ups",
                desc: "Leads go cold because you don't have the bandwidth to stay in constant contact.",
                features: ["Persistant engagement", "Personalized outreach", "Automatic scheduling"]
              },
              {
                title: "Document Analysis",
                desc: "Sifting through mountains of PDFs, contracts, or reports to find key information.",
                features: ["Instant extraction", "Summary generation", "Critical data flagging"]
              },
              {
                title: "Scheduling Chaos",
                desc: "Going back and forth just to find a time to meet with clients or partners.",
                features: ["Self-serve booking", "Calendar sync", "Automatic reminders"]
              },
              {
                title: "Content Production",
                desc: "Struggling to keep up with the demand for personalized emails, reports, and social posts.",
                features: ["Brand-consistent copy", "Bulk generation", "Smart repurposing"]
              }
            ].map((challenge, i) => (
              <SpotlightCard key={i}>
                <h3 className="text-2xl font-bold text-white mb-4 italic">{challenge.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {challenge.desc}
                </p>
                <ul className="space-y-3">
                  {challenge.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-blue-300">
                      <span className="mr-2 text-blue-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROI CALCULATOR (NEW) ================= */}
      <ROICalculator />


      {/* ================= WHAT WE DO ================= */}
      <section className="relative py-24 bg-dark-bg border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              CloudAGI builds custom AI agents and provides expert AI consultation for small and medium businesses.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              We automate your repetitive tasks, integrate AI into your existing workflows, and train your team—without requiring any technical expertise from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: "🤖",
                  title: "AI Agent Development",
                  desc: "Custom AI assistants that handle tasks like customer support, data entry, scheduling, and more."
                },
                {
                  icon: "💡",
                  title: "AI Strategy Consultation",
                  desc: "Expert guidance on where AI can save you time and money in your specific business."
                },
                {
                  icon: "🎓",
                  title: "Team Training & Implementation",
                  desc: "We set everything up and train your team so AI actually gets used."
                }
              ].map((item, i) => (
                <SpotlightCard key={i}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FAQAccordion />


      {/* ================= EXPERT LEADERSHIP ================= */}
      <section className="relative py-24 bg-dark-card border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Meet Your Strategic Partner
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Business strategy meets AI execution. No theory. Just results.
            </p>
          </motion.div>

          <SpotlightCard className="p-8 md:p-12 max-w-4xl mx-auto text-left">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-blue-500/20 translate-y-[-10px]">
                  AR
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">Arya Teja Rudraraju</h3>
                <p className="text-blue-400 font-medium uppercase tracking-widest text-sm">Founder & CEO</p>
              </div>

              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">The Mission</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Arya founded CloudAGI to help SMBs navigate the complex world of AI. With a background in business strategy and AI engineering, he specializes in turning complex problems into working agentic systems.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-white mb-1">
                      <Counter end={50} suffix="+" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-tight">AI Systems Built</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-white mb-1">
                      <Counter end={100} suffix="%" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-tight">ROI Focused</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-400 font-bold gap-2 cursor-pointer group"
                >
                  View LinkedIn Profile
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <TrustBadges />

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-dark-bg border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience AI Leverage?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free 20-minute strategy call to find the highest-impact workflow in your business that we can automate.
            </p>
            <button
              onClick={openQuiz}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 transform border-none cursor-pointer"
            >
              Book My Strategic Consultation
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <p className="mt-6 text-sm text-gray-500 font-medium">Limited availability • No commitment • Expert guidance</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
