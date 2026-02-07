"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SpotlightCard } from "@/components/spotlight-card";

export default function AboutContent() {
  return (
    <main className="relative bg-dark-bg text-white overflow-hidden selection:bg-accent-blue selection:text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-dark section-gap text-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
              About <span className="heading-gradient">CloudAGI</span>
            </h1>
            <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light italic"
          >
            &quot;Bridging the gap between frontier AI and everyday business reality.&quot;
          </motion.p>
        </div>
      </section>

      {/* ================= THE PROBLEM WE SOLVE (NEW) ================= */}
      <section className="relative section-gap bg-black overflow-hidden border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center md:text-left uppercase tracking-tighter italic">
                The <span className="heading-gradient">SMB Gap</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
                Most AI solutions today are built for either giant enterprises with $1M+ budgets or hobbyists playing with API keys.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-semibold italic">
                Small and medium businesses are left in the middle—confused, underserved, and losing ground.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
              {[
                { label: "Complexity", desc: "AI moves too fast for busy owners to track." },
                { label: "Execution", desc: "Tools exist, but integrated systems don't." },
                { label: "Security", desc: "Fear of data leakage prevents adoption." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-500 shrink-0">!</div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">{item.label}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION, VISION, VALUES ================= */}
      <section className="relative section-gap bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter italic">Our <span className="heading-gradient">Foundation</span></h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Our Mission",
                icon: "🎯",
                content: "To make the power of AI agents accessible and profitable for small and medium-sized businesses."
              },
              {
                title: "Our Vision",
                icon: "👁️‍🗨️",
                content: "To be the most trusted partner for SMBs navigating the AI revolution, turning complex technology into a competitive advantage."
              },
              {
                title: "Our Promise",
                icon: "🤝",
                content: "ROI-driven partnerships. We don't deliver complexity—we deliver results that make money, save money, or create strategic advantage."
              },
            ].map((item, i) => (
              <SpotlightCard key={i} className="h-full">
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight italic">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.content}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES (MINIMAL & CLEAN) ================= */}
      <section className="relative section-gap bg-dark-bg border-y border-white/5 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky Header Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest inline-block">Methodology</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                  Operating <span className="heading-gradient">Principles</span>
                </h2>
                <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
                <p className="text-xl text-gray-500 italic max-w-xs">
                  How we think about your business objectives and AI implementation.
                </p>
              </motion.div>
            </div>

            {/* List Column */}
            <div className="lg:col-span-8">
              <div className="grid gap-12 md:gap-16">
                {[
                  {
                    num: "01",
                    title: "Business-First, Tech-Second",
                    desc: "We start with your business problem, then find the right AI solution—not the other way around."
                  },
                  {
                    num: "02",
                    title: "Pragmatic & Actionable",
                    desc: "We prioritize practical, working solutions that deliver value quickly. No theoretical science projects here."
                  },
                  {
                    num: "03",
                    title: "Transparent Empowerment",
                    desc: "We educate you throughout the process. You'll understand why we build what we build, enabling you to own the technology."
                  },
                  {
                    num: "04",
                    title: "ROI as a Compass",
                    desc: "Every project is designed to either make you money, save you money, or create a clear strategic advantage."
                  }
                ].map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="text-blue-600 font-black text-xs md:text-sm tracking-tighter group-hover:translate-y-[-4px] transition-transform duration-500">
                      {value.num} —
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic group-hover:text-blue-400 transition-colors duration-500">
                        {value.title}
                      </h3>
                      <p className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="relative section-gap bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-20 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-950 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/3">
                <div className="aspect-square w-24 h-24 sm:w-32 sm:h-32 md:w-auto md:h-auto mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] flex items-center justify-center text-4xl sm:text-6xl md:text-8xl font-black text-white shadow-2xl rotate-2">
                  AR
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold text-white">Arya Teja Rudraraju</h3>
                  <p className="text-blue-400 font-black uppercase tracking-widest text-xs mt-2">Founder & Master Architect</p>
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-8 md:space-y-10">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-flex px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full">Background</div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                    &quot;I founded CloudAGI because I saw too many business owners being sold &apos;magic&apos; that didn&apos;t work. I wanted to build a consultancy that prioritizes engineering rigor and business logic over hype.&quot;
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 md:mb-4">Core Focus</h4>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">System architecture, business strategy, and high-performance LLM orchestration.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3 md:mb-4">Philosophy</h4>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">Start small, build robustly, scale only once value is proven with data.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-blue-50 transition-all hover:scale-105 inline-block"
                  >
                    Discuss Your Vision
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative section-gap bg-dark-bg text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter italic">Ready to <span className="heading-gradient">Work Together?</span></h2>
            <p className="text-2xl text-gray-400 mb-12 font-light">Let&apos;s turn your business objectives into agentic reality.</p>
            <Link
              href="/contact"
              className="px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xl rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 inline-block uppercase"
            >
              Start Your Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
