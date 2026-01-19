"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog6() {
  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      <section className="relative py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How Much Does a Custom AI Agent Actually Cost?
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <span>Mar 8, 2025</span>
              <span>6 min read</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Business</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              You know an AI agent could save your business time and money. But before you commit, you want to know: what's this going to cost?
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The Short Answer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A custom AI agent typically costs $10K-$50K depending on complexity. Most see ROI within 2-4 months.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">What Affects the Price?</h2>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">1. Complexity</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Simple agent that reads data and sends emails? Lower cost. Complex agent that needs to make decisions, access multiple systems, and handle edge cases? Higher cost.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">2. System Integrations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Each system your agent needs to connect to adds time. One integration vs. five integrations is a big difference.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">3. Data Volume</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              High-volume processing requires more robust error handling and monitoring. That adds cost but also value.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">4. Security Requirements</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Healthcare, finance, or regulated industries? Security costs more. But the liability of NOT securing it properly costs way more.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">5. Team Training & Handoff</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Do we just build it and hand it off? Or do we train your team and stick around for support? That affects price too.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">ROI Math That Actually Works</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let's say your team spends 40 hours per month on the task an AI agent will handle. At a $50/hour fully-loaded cost, that's $2,000/month you're currently spending.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If the agent costs $30K, you break even in 15 months. But most of our clients see 50-60% time savings, not 100%, AND the quality improves. So realistic timeline: 10 months to payback.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">What We Recommend</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Start with your biggest pain point. That's where ROI is clearest. Prove the value with one agent, then expand to others.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mt-12">
              Good AI agents cost money. Not building them costs more.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Calculate Your ROI</h2>
          <p className="text-gray-300 mb-8">Share your challenge, and we'll show you the financial case for an AI agent.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Get a Quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
