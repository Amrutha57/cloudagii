"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/spotlight-card";
import { useChat } from "@/context/chat-context";

export default function Contact() {
  const { openChat } = useChat();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="relative bg-dark-bg text-white overflow-hidden selection:bg-accent-blue selection:text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-dark section-gap">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic"
          >
            Execute <span className="heading-gradient">Your Vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed italic font-light"
          >
            Ready to deploy your first high-impact AI engine? Let&apos;s talk architecture.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT FORM & INFO ================= */}
      <section className="relative section-gap bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-950 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h2 className="text-3xl font-black text-white mb-10 relative z-10 uppercase tracking-tighter italic">Initiate <span className="heading-gradient">Inquiry</span></h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 text-center"
                  >
                    <p className="font-black text-2xl mb-2 uppercase tracking-widest italic">Transmission Received</p>
                    <p className="text-sm font-medium">Validation complete. An agent architect will reach out within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border border-white/5 rounded-xl bg-black/50 text-white placeholder-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                          Network Address (Email)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border border-white/5 rounded-xl bg-black/50 text-white placeholder-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                          placeholder="john@future.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-white/5 rounded-xl bg-black/50 text-white placeholder-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                        placeholder="Inc. / Startup"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                        System Requirements (Message)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-6 py-4 border border-white/5 rounded-xl bg-black/50 text-white placeholder-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium text-sm leading-relaxed"
                        placeholder="Define your friction points..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 md:px-8 md:py-5 bg-white text-black font-black text-base md:text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] uppercase tracking-tighter"
                    >
                      Analyze & Process Inquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-white uppercase tracking-tighter italic">Direct <span className="heading-gradient">Node</span></h3>
                <p className="text-xl text-gray-400 font-light leading-relaxed">Skip the queue. Connect with us directly if you require immediate architectural consultation.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Inquiry Gateway</p>
                    <p className="text-2xl font-bold text-white tracking-tight italic">contact@cloudagi.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Processing Clock</p>
                    <p className="text-2xl font-bold text-white tracking-tight italic">&lt; 12 Hours</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-10">
                <SpotlightCard className="p-8">
                  <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Required Context</h4>
                  <ul className="space-y-4 text-gray-500 text-sm font-bold">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Business Goals</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Current Stack</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Volume Metric</li>
                  </ul>
                </SpotlightCard>
                <SpotlightCard className="p-8">
                  <h4 className="text-xs font-black text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Expert Pipeline</h4>
                  <ol className="space-y-4 text-gray-500 text-sm font-bold">
                    <li className="flex gap-3"><span className="text-blue-500 italic">01.</span> Discovery Call</li>
                    <li className="flex gap-3"><span className="text-blue-500 italic">02.</span> Gap Analysis</li>
                    <li className="flex gap-3"><span className="text-blue-500 italic">03.</span> Blueprint Map</li>
                  </ol>
                </SpotlightCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative section-gap bg-black border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter italic">Skip the <span className="heading-gradient">Static</span></h2>
            <p className="text-2xl text-gray-400 mb-12 font-light italic leading-relaxed">
              Prefer a direct consultation? Jump straight into the architectural deep-dive.
            </p>
            <button
              onClick={openChat}
              className="inline-flex items-center gap-3 px-6 py-3.5 md:px-10 md:py-5 bg-white text-black font-black text-sm md:text-lg rounded-xl hover:bg-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 uppercase tracking-tighter border-none cursor-pointer"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Access AI Concierge
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
