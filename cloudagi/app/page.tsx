"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Counter } from "@/components/counter";
import { ROICalculator } from "@/components/roi-calculator";
import { TrustBadges } from "@/components/trust-badges";
import { SpotlightCard } from "@/components/spotlight-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { useChat } from "@/context/chat-context";
import { useQuiz } from "@/context/quiz-context";
import { usePlaybook } from "@/context/playbook-context";
import { Database, MessageSquare, Users, FileSearch, Calendar, Zap, Sparkles, Bot, Lightbulb, GraduationCap, Target, Briefcase, BarChart3, Settings } from "lucide-react";

export default function Home() {
  const { openChat } = useChat();
  const { openQuiz } = useQuiz();
  const { openPlaybook } = usePlaybook();

  return (
    <main className="relative bg-dark-bg text-white overflow-hidden font-sans selection:bg-accent-blue selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Shell */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 bg-dark-bg/80 z-10" />
          {/* High-fidelity CSS Placeholder while video loads */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-indigo-900/20 animate-pulse" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center py-20 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl protocol-heading text-white mb-6 md:mb-8 tracking-tight"
          >
            We Build AI Agents &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-extrabold">
              Expert Consultation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden md:block text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto protocol-body mb-10 md:mb-12"
          >
            Custom AI solutions that automate your repetitive work and let your team focus on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center"
          >
            <button
              onClick={openQuiz}
              className="px-5 py-2.5 md:px-10 md:py-5 bg-white text-black font-bold text-xs md:text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 border-none cursor-pointer"
            >
              Book Your Session
            </button>
            <Link
              href="/services"
              className="px-5 py-2.5 md:px-10 md:py-5 bg-transparent border-2 border-white/30 text-white font-semibold text-xs md:text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="relative section-gap bg-dark-bg/50 border-b border-white/5">
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
                <Counter end={21} suffix=" Days" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Execution Speed</h3>
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

      {/* ================= SYSTEM FRICTION NODES ================= */}
      <section className="relative section-gap bg-dark-bg overflow-hidden">
        {/* Dynamic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Zap className="size-3 animate-pulse" />
              Efficiency Scan Result
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic font-outfit">
              System <span className="heading-gradient">Friction Nodes</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light italic text-sm md:text-base">
              Identified high-latency workflows requiring autonomous intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Data Lag",
                icon: <Database className="size-10 text-blue-500" />
              },
              {
                title: "Support Load",
                icon: <MessageSquare className="size-10 text-indigo-500" />
              },
              {
                title: "Lead Decay",
                icon: <Users className="size-10 text-purple-500" />
              },
              {
                title: "Doc Latency",
                icon: <FileSearch className="size-10 text-blue-400" />
              }
            ].map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-full py-16 px-8 rounded-[2.5rem] border border-white/5 bg-slate-950/40 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center text-center">
                  {/* Subtle hover background glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

                  <div className="relative z-10 flex flex-col items-center gap-8">
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-500 shadow-xl group-hover:shadow-blue-500/40">
                      {challenge.icon}
                    </div>

                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter group-hover:text-blue-400 transition-colors duration-500 font-outfit">
                      {challenge.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROI CALCULATOR (NEW) ================= */}
      <ROICalculator />


      {/* ================= WHAT WE DO ================= */}
      <section className="relative section-gap bg-dark-bg border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic uppercase tracking-tighter">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              CloudAGI builds custom AI agents and provides expert AI consultation for small and medium businesses.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Bot className="size-10 text-blue-500" />,
                  title: "Agentic Engineering",
                  desc: "Custom AI assistants with persistent memory that handle high-latency tasks like support, data pipelines, and intelligent scheduling."
                },
                {
                  icon: <Lightbulb className="size-10 text-indigo-500" />,
                  title: "Strategy Architecture",
                  desc: "Expert diagnostic logic to identify where intelligent leverage can maximize ROI and minimize systemic friction."
                },
                {
                  icon: <GraduationCap className="size-10 text-purple-500" />,
                  title: "Team Calibration",
                  desc: "We deploy the architecture and conduct intensive upskilling to ensure your team operates at agentic velocity."
                }
              ].map((item, i) => (
                <SpotlightCard key={i} className="p-10 text-center flex flex-col items-center">
                  <div className="mb-8 p-4 rounded-[2rem] bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic font-outfit">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light italic">
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
      <section className="relative section-gap bg-dark-card border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight italic uppercase tracking-tighter">
              Meet Your <span className="heading-gradient">Strategic Partner</span>
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

      {/* ================= PLAYBOOK CTA (NEW) ================= */}
      <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-6 inline-block">Interactive Audit</span>
            <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter font-outfit mb-6">
              Think Like An <span className="heading-gradient">Architect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto italic leading-relaxed">
              Stop guessing where AI fits. Use our diagnostic tool to identify friction points and see the exact agentic architecture needed for your role.
            </p>
          </motion.div>

          <SpotlightCard className="p-1 max-w-3xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/20">
            <div className="bg-slate-950 p-10 md:p-16 rounded-[2.3rem] flex flex-col items-center gap-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full opacity-50">
                {[
                  { label: "CEO", icon: <Briefcase /> },
                  { label: "Sales", icon: <BarChart3 /> },
                  { label: "Ops", icon: <Settings /> },
                  { label: "Growth", icon: <Target /> }
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-500">
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">{p.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 w-full">
                <button
                  onClick={openPlaybook}
                  className="w-full py-6 bg-white text-black font-black text-xl md:text-2xl rounded-2xl hover:bg-blue-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 transform border-none cursor-pointer uppercase tracking-tighter italic font-outfit"
                >
                  Start My Strategy Scan
                </button>
                <p className="text-sm text-gray-500 font-medium">3-minute diagnostic • Personalized to your role • Zero fluff</p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <TrustBadges />

      {/* ================= CTA ================= */}
      <section className="relative section-gap bg-dark-bg border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl protocol-heading text-white mb-6">
              Ready to <span className="heading-gradient">Experience</span> AI Leverage?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free 20-minute strategy call to find the highest-impact workflow in your business that we can automate.
            </p>
            <button
              onClick={openQuiz}
              className="inline-flex items-center gap-2 px-5 py-3 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm md:text-xl rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 transform border-none cursor-pointer"
            >
              Book Your Strategy Session
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
