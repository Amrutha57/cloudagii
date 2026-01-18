"use client";

import { motion } from "framer-motion";
import LightRays from "@/components/lightrays";

const dots = Array.from({ length: 25 });

export default function Home() {
  return (
    <main className="relative bg-[#0b0f14] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e2062] via-[#0f172f] to-black" />

          {/* Light rays */}
        <LightRays
  raysOrigin="top-center"
  raysColor="#9fdfff"       // LIGHT CYAN (IMPORTANT)
  raysSpeed={1.4}           // Slightly faster
  lightSpread={0.40}        // Tighter rays
  rayLength={1.9}           // Longer reach
  pulsating={true}          // Adds life
  fadeDistance={1.6}        // Less fade-out
  saturation={1.6}          // MUCH IMPORTANT
  followMouse={true}
  mouseInfluence={0.12}
  noiseAmount={0.15}
  distortion={0.08}
  className="absolute inset-0 mix-blend-screen"
 />


          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Floating dots */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {dots.map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-indigo-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -30, 0] }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Practical AI. Real Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Turning fragmented tools into reliable execution workflows.
          </motion.p>

          <motion.a
            href="/blog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 px-6 py-3 rounded-md bg-white text-black text-sm font-medium inline-block hover:bg-gray-100 transition"
          >
            View Our Thinking
          </motion.a>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "Workflows", desc: "Manual tasks to automated loops." },
            { title: "Content Systems", desc: "Build once, scale indefinitely." },
            { title: "Digital Clarity", desc: "Explain value to humans & machines." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm opacity-70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= THE GAP ================= */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-16">
            The Gap
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-white/10 rounded-xl p-8 bg-white/5">
              <h3 className="text-xl font-medium mb-4">
                The Problem: Fragmented Tools
              </h3>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Random content</li>
                <li>Half-used AI tools</li>
                <li>Disconnected workflows</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-xl p-8 bg-white/5">
              <h3 className="text-xl font-medium mb-4">
                The Solution: Integrated Systems
              </h3>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Reliable processes</li>
                <li>Clear execution</li>
                <li>Scalable outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERNAL R&D ================= */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
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
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-medium">{name}</h3>
                <p className="mt-2 text-sm opacity-70">
                  Open-source thinking. Execution-first.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm opacity-70">
          <div>
            <strong className="block text-white">CloudAGI</strong>
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
