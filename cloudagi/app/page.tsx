"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const dots = Array.from({ length: 25 });

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
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
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Stop wondering about AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-2xl font-medium text-gray-700 dark:text-gray-300"
          >
            Start using it to solve your biggest business problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We bridge the gap between your business needs and the complexities of artificial intelligence. 
            Practical, cost-effective AI agent solutions designed for ambitious SMB leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Your AI Roadmap
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-sm text-gray-500 dark:text-gray-500"
          >
            Start with a low-risk, fixed-price discovery package
          </motion.p>
        </div>
      </section>

      {/* ================= THE SMB AI GAP ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The SMB AI Implementation Gap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              You want to leverage AI, but something is holding you back. Here's what we hear most often.
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
                pain: "Your existing tools (CRM, ERP, etc.) are complex. You assume AI won't work with them.",
                solution: "We specialize in integrating AI with your current systems, acting as the glue between your tools."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.problem}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-500 uppercase tracking-wide">The Problem</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.pain}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200 dark:border-slate-800">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Our Solution</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="relative py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Blueprint to AI Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                className="relative p-8 border border-gray-200 dark:border-slate-800 rounded-lg bg-gray-50 dark:bg-slate-900 group hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div className="absolute -top-6 left-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                className="group p-8 border border-gray-200 dark:border-slate-800 rounded-lg hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 bg-white dark:bg-slate-950"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 italic">{service.best}</p>
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
              Explore All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE CLOUDAGI ================= */}
      <section className="relative py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Business Owners Choose CloudAGI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                className="p-8 border border-gray-200 dark:border-slate-800 rounded-lg hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 bg-gray-50 dark:bg-slate-900"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER / EXPERT PARTNER ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Expert Partner
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Led by someone who understands both the technology and your business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border border-gray-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Arya Teja Rudraraju</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Founder & AI Strategist</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Why This Matters</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    You get a partner who not only understands the underlying AI technology but is relentlessly focused on how it can be applied to solve your real business problems.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Proven Technical Execution</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li>• <span className="font-medium">A Builder, Not Just a Theorist:</span> Shipped numerous AI products and proof-of-concepts with proven track records of turning ideas into working solutions</li>
                    <li>• <span className="font-medium">Full-Stack AI Expertise:</span> From backend development (Python, FastAPI) to UI (Streamlit) and architecting end-to-end AI systems</li>
                    <li>• <span className="font-medium">Hands-On with Modern Tools:</span> Constantly testing and implementing with the latest, most effective agentic AI tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">Strategic Business Acumen</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                    <li>• <span className="font-medium">MBA-Informed Approach:</span> Background in business analysis, project management, and entrepreneurship</li>
                    <li>• <span className="font-medium">Product Mindset:</span> Doesn't just deliver code—helps you design solutions your team can actually use</li>
                    <li>• <span className="font-medium">Thought Leadership:</span> Actively shaping conversations about AI's practical application</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative py-24 bg-black dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
              We'll identify your biggest automation opportunities and show you the exact impact you can expect. No obligation, no pressure—just practical insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Your AI Roadmap
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
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
