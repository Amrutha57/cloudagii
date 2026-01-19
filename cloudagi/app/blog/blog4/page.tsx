"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog4() {
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
              AI Literacy for Your Team: Why Training Matters (And What to Cover)
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <span>Feb 20, 2025</span>
              <span>7 min read</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Training</span>
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
              You&apos;ve just deployed an amazing AI tool. Your team gets it. Your processes are cleaner. ROI is tracking above target. Then one day, an employee tries something weird, breaks the agent, and suddenly everyone&apos;s skeptical about the whole thing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The Gap</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Just because an AI tool exists doesn&apos;t mean your team knows how to use it effectively. Or what it can actually do. Or what NOT to ask it to do.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">What Should Training Cover?</h2>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">1. What the AI Agent Actually Does</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Clear, simple explanation. Not the technical architecture—just: &quot;This agent handles customer emails and routes them to the right team.&quot;
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">2. How to Use It Correctly</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Step-by-step workflows. Real examples from your business. Hands-on practice.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">3. Its Limitations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              What it can&apos;t do. What requires human oversight. When to escalate. This prevents misuse and builds realistic expectations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">4. Data Privacy & Security</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              What data the agent accesses. Why it&apos;s safe. What they shouldn&apos;t feed it. Compliance considerations for your industry.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">5. Feedback Loop</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              How to report issues. How improvements get made. Make sure they know the agent improves over time with feedback.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The ROI of Training</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Teams that get proper training adopt the tool faster, use it more effectively, and don&apos;t break things trying random experiments. That&apos;s money in the bank.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mt-12">
              Your AI tool is only as good as your team&apos;s understanding of it.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Deploying an AI Tool?</h2>
          <p className="text-gray-300 mb-8">We include team training and ongoing support to ensure success.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Let&apos;s Discuss →
          </Link>
        </div>
      </section>
    </main>
  );
}
