"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dots = Array.from({ length: 25 });

export default function Home() {
  return (
    <main className="relative bg-dark-bg text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-dark">
        {/* Gradient Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Falling Stars Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="star fall absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animationDuration: `${3 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {dots.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-accent-blue"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
                opacity: 0.3
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 8 + (i % 5),
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
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Stop wondering about AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-2xl font-medium text-gray-200"
          >
            Start using it to solve your biggest business problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
           
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Explore
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            Start with a low-risk, fixed-price discovery package
          </motion.p>
        </div>
      </section>

      {/* ================= THE SMB AI GAP ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The SMB AI Implementation Gap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You want to leverage AI, but something is holding you back. Here&apos;s what we hear most often.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: "Uncertain ROI & High Costs",
                pain: "AI is perceived as prohibitively expensive. You can't justify a $50k+ investment without knowing the return.",
                solution: "We start with a low-risk, fixed-price discovery package. Prove the value before committing to a larger project."
              },
              {
                problem: "The AI Talent Gap",
                pain: "Specialized AI talent is scarce and expensive. You can't compete with big tech companies for top engineers.",
                solution: "We are your outsourced AI team. Access expert knowledge without the cost of a full-time hire."
              },
              {
                problem: "Data Security & Privacy Concerns",
                pain: "You have valuable data but worry about security, compliance, and how to safely use it with AI.",
                solution: "We design secure, private AI environments where your data stays protected while delivering insights."
              },
              {
                problem: "Integration & Complexity Headaches",
                pain: "Your existing tools (CRM, ERP, etc.) are complex. You assume AI won&apos;t work with them.",
                solution: "We specialize in integrating AI with your current systems, acting as the glue between your tools."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg border border-dark-border relative overflow-hidden group hover:border-accent-blue transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.problem}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">The Problem</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.pain}</p>
                    </div>
                    <div className="pt-3 border-t border-dark-border">
                      <p className="text-sm font-medium text-gray-200 uppercase tracking-wide">Our Solution</p>
                      <p className="text-gray-200 text-sm leading-relaxed font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Blueprint to AI Success
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A strategic framework that turns business challenges into AI-powered solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Analysis",
                desc: "We dive deep into your business needs, explore your biggest pain points, and define a clear strategy for long-term success.",
                icon: "🔍"
              },
              {
                step: "2",
                title: "Design & Development",
                desc: "We craft a tailored AI agent solution for your specific challenge, rigorously test it, and build it to integrate seamlessly with your tools.",
                icon: "⚙️"
              },
              {
                step: "3",
                title: "Launch & Optimize",
                desc: "We deploy your solution and ensure it delivers measurable results. Ongoing support keeps it performing at peak efficiency.",
                icon: "🚀"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative glass p-8 rounded-lg border border-dark-border group hover:border-accent-blue transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                <div className="absolute -top-6 left-8 relative z-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </span>
                </div>
                <div className="mt-2 relative z-10">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-dark-card">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Practical solutions designed to solve real business problems with measurable ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agentic Workflow Design & Strategy",
                desc: "A strategic engagement where we analyze your business processes and design a custom AI agent workflow to automate a key task. You get a comprehensive blueprint, proof-of-concept, and clear ROI projections.",
                icon: "⚡",
                best: "Best for: Leaders who know they need AI but don't know where to start"
              },
              {
                title: "Custom Tool & Memory Development",
                desc: "We build bespoke AI tools that integrate seamlessly with your existing software (CRM, ERP, etc.). This includes secure, private 'memories' so the agent learns from your company's data without exposing it.",
                icon: "🔧",
                best: "Best for: Teams with specific automation tasks and complex tool ecosystems"
              },
              {
                title: "Secure Agent Sandbox Consulting",
                desc: "We advise on and help implement secure environments where you can safely test and deploy AI agents. Guidance on data privacy, security, compliance, and best practices for handling proprietary information.",
                icon: "🛡️",
                best: "Best for: Sensitive industries (healthcare, finance) or organizations with strict data requirements"
              },
              {
                title: "Prompt Engineering & Team Upskilling",
                desc: "We train your team on how to think in prompts. We develop a library of high-performance, reusable prompts tailored to your business functions (sales, marketing, operations) to maximize AI effectiveness.",
                icon: "📚",
                best: "Best for: Teams already using AI tools like ChatGPT but getting mediocre results"
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group glass p-8 rounded-lg hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                <p className="text-sm font-medium text-gray-300 italic">{service.best}</p>
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
              className="inline-flex items-center px-6 py-3 border border-accent-blue text-accent-blue font-medium rounded-lg hover:bg-accent-blue hover:bg-opacity-10 hover:shadow-glow-blue transition-all duration-300"
            >
              Explore All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE CLOUDAGI ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Business Owners Choose CloudAGI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The proven advantages that make AI implementation your smartest business investment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reclaim Your Time",
                desc: "Automate repetitive, time-consuming tasks across your team so you can focus on strategy and growth. Free up hours every week.",
                icon: "⏱️"
              },
              {
                title: "Measurable ROI",
                desc: "We structure every engagement around delivering clear business results. You know exactly what you're getting before you invest.",
                icon: "📊"
              },
              {
                title: "Scalable Growth",
                desc: "Increase capacity and output without adding headcount or overhead. Do more with your existing team through intelligent automation.",
                icon: "📈"
              },
              {
                title: "Expert Partnership",
                desc: "Access world-class AI expertise without the cost of a full-time hire. We're your fractional AI team, handling all the complexity.",
                icon: "🤝"
              },
              {
                title: "Future-Proof Your Business",
                desc: "Stay ahead of competitors who are exploring AI. Be the one implementing solutions that create a real competitive advantage.",
                icon: "🚀"
              },
              {
                title: "De-Risked Implementation",
                desc: "We start small with low-cost proof-of-concepts. Prove the value first, then scale. No massive upfront investments required.",
                icon: "🛡️"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER / EXPERT PARTNER ================= */}
      <section className="relative py-24 bg-dark-card">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Expert Partner
            </h2>
            <p className="text-lg text-gray-400">
              Led by someone who understands both the technology and your business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-lg hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Arya Teja Rudraraju</h3>
                <p className="text-lg text-gray-300 font-medium">Founder & AI Strategist</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wide mb-2">Why This Matters</h4>
                  <p className="text-gray-400 leading-relaxed">
                    You get a partner who not only understands the underlying AI technology but is relentlessly focused on how it can be applied to solve your real business problems.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wide mb-2">Proven Technical Execution</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• <span className="font-medium">A Builder, Not Just a Theorist:</span> Shipped numerous AI products and proof-of-concepts with proven track records of turning ideas into working solutions</li>
                    <li>• <span className="font-medium">Full-Stack AI Expertise:</span> From backend development (Python, FastAPI) to UI (Streamlit) and architecting end-to-end AI systems</li>
                    <li>• <span className="font-medium">Hands-On with Modern Tools:</span> Constantly testing and implementing with the latest, most effective agentic AI tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wide mb-2">Strategic Business Acumen</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• <span className="font-medium">MBA-Informed Approach:</span> Background in business analysis, project management, and entrepreneurship</li>
                    <li>• <span className="font-medium">Product Mindset:</span> Doesn&apos;t just deliver code—helps you design solutions your team can actually use</li>
                    <li>• <span className="font-medium">Thought Leadership:</span> Actively shaping conversations about AI&apos;s practical application</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INTERNAL R&D ================= */}
      <section className="relative z-10 py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
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
                className="glass rounded-xl p-6 hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-white">{name}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Open-source thinking. Execution-first.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative py-24 bg-gradient-dark">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Turn AI Into a Competitive Advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;ll identify your biggest automation opportunities and show you the exact impact you can expect. No obligation, no pressure—just practical insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-blue text-white font-medium rounded-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105 transform"
              >
                Get Your AI Roadmap
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-medium rounded-lg hover:bg-accent-blue hover:bg-opacity-10 transition-all duration-300 hover:shadow-glow-blue"
              >
                Learn About Services
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Our $1k AI Roadmap gives you a clear plan with a simple proof-of-concept. Low risk. High insight.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}