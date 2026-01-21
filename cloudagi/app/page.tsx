"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
            initial={{ opacity: 0, y: 20 }}
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
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              Get Started
            </Link>
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
      <section className="relative py-20 bg-dark-bg/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">10+</div>
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
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">2-4</div>
              <h3 className="text-xl font-semibold text-white mb-2">Weeks to Deploy</h3>
              <p className="text-gray-400 text-sm">
                From consultation to fully operational AI system
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">100%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Privacy</h3>
              <p className="text-gray-400 text-sm">
                Your data stays secure and under your control
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ================= HOW WE HELP ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Common Challenges We Solve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              If any of these sound familiar, we can help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: "Too Expensive to Get Started",
                solution: "Start small with a fixed-price project. See results before investing more.",
                icon: "💰"
              },
              {
                problem: "Don't Have AI Experts on Staff",
                solution: "We become your AI team. No need to hire expensive specialists.",
                icon: "🎯"
              },
              {
                problem: "Worried About Data Security",
                solution: "Your data stays private and secure. We build systems you control.",
                icon: "🔒"
              },
              {
                problem: "AI Won't Work with Our Tools",
                solution: "We specialize in connecting AI to your existing software.",
                icon: "🔧"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES / SOLUTIONS ================= */}
      <section className="relative py-24 bg-dark-card border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Help Your Business</h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                We build intelligent AI systems that automate your most time-consuming tasks. Here's what we can do for you:
              </p>
            </div>
            <Link
              href="/services"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              See full solution details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Strategy & Audit",
                tag: "Strategic Foundation",
                desc: "We analyze your workflows to identify where AI agents can drive the most impact, ensuring you solve the right problems first.",
                features: ["Workflow Analysis", "Data Readiness Check", "Impact Projection"]
              },
              {
                title: "Agent Development",
                tag: "Custom Implementation",
                desc: "We engineer custom AI agents tailored to your unique data and requirements. From intelligent assistants to autonomous process handlers.",
                features: ["Custom LLM Integration", "Agentic Workflow Build", "Secure Deployment"]
              },
              {
                title: "Fractional AI Team",
                tag: "Continuous Evolution",
                desc: "AI moves fast. We act as your dedicated R&D partner, continuously optimizing your agents and keeping your business ahead.",
                features: ["Continuous Optimization", "Team Upskilling", "Priority Support"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover:border-blue-500/50 hover:shadow-glow-blue hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-default"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{service.tag}</span>
                  <h3 className="text-2xl font-semibold text-white mt-2">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <ul className="space-y-3 pt-6 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO + FAQ ================= */}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Agent Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Custom AI assistants that handle tasks like customer support, data entry, scheduling, and more.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Strategy Consultation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Expert guidance on where AI can save you time and money in your specific business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-3">Team Training & Implementation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We set everything up and train your team so AI actually gets used.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 mt-24 pt-24 border-t border-white/5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about working with CloudAGI</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What is an AI agent?",
                a: "An AI agent is a smart software assistant that can handle tasks automatically—like responding to customer emails, scheduling meetings, or processing data. Think of it as a virtual team member that works 24/7 without breaks."
              },
              {
                q: "Do I need technical knowledge to work with CloudAGI?",
                a: "No. We handle all the technical complexity. You just tell us what tasks take up your team's time, and we build and implement the solution. We also train your team on how to use the AI systems we create."
              },
              {
                q: "What makes AI agents different from traditional automation?",
                a: "Traditional automation follows rigid rules and breaks when it encounters something unexpected. AI agents can understand context, handle variations, and make intelligent decisions. They adapt to new situations without needing to be reprogrammed for every edge case."
              },
              {
                q: "How long does implementation take?",
                a: "Most projects are completed in 2-6 weeks. We start with a pilot to prove ROI before scaling. You'll see results within the first month."
              },
              {
                q: "What if my team doesn't adopt the AI tools?",
                a: "We include hands-on training and ongoing support. Our goal is adoption, not just delivery—we don't succeed unless your team actually uses the system. We work closely with you to ensure smooth integration into your workflows."
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. We build AI systems that you own and control. Your data stays on your infrastructure or in secure, private environments. We never share your data with third parties or use it to train public models."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERT LEADERSHIP ================= */}
      <section className="relative py-24 bg-dark-card">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Led by Experienced AI Engineers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Years of hands-on experience building production-grade AI systems that deliver real business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Your Strategic Partner
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Business strategy meets AI execution. No theory. Just results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl md:text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  AT
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Arya Teja Rudraraju</h3>
                  <p className="text-blue-400 font-semibold mb-6 text-lg">Founder & AI Systems Architect</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
                      <div className="text-xs text-gray-400">AI Systems Built</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-1">MBA</div>
                      <div className="text-xs text-gray-400">Business Strategy</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                      <div className="text-xs text-gray-400">Years in AI</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                      <div className="text-xs text-gray-400">ROI Focused</div>
                    </div>
                  </div>

                  {/* Key Differentiators */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm"><span className="font-semibold text-white">Business-First Approach:</span> MBA + Technical expertise means AI solutions aligned with your bottom line</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm"><span className="font-semibold text-white">Production-Ready Systems:</span> Not demos or prototypes—real systems that work reliably in production</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm"><span className="font-semibold text-white">Hands-On Builder:</span> Python, FastAPI, LangChain, vector databases—I build what I design</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/5 rounded-r">
                    <p className="text-gray-300 italic leading-relaxed">
                      "I don't believe in AI magic. I believe in engineering discipline, measurable results, and systems that work on Monday morning."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 bg-gradient-to-br from-dark-bg via-blue-950/20 to-dark-bg overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Save Time?
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's talk about your biggest time-waster and how AI can fix it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/cloudagi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Book a Free Call
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              30-minute call · No commitment · Free consultation
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
