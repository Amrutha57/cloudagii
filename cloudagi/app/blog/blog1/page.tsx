"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog1() {
  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= ARTICLE HEADER ================= */}
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
              What is an AI Agent and How Can It Save Your Business 10 Hours a Week?
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <span>Jan 15, 2025</span>
              <span>8 min read</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">AI Fundamentals</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              If you&apos;ve been following the AI revolution, you&apos;ve probably heard the term &quot;AI agent&quot; thrown around. But what exactly is an AI agent, and more importantly, how can it actually save your business time and money?
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The Simple Definition</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              An AI agent is a software system that can understand a goal, break it down into steps, and execute those steps—often using tools and data—to achieve that goal without being explicitly told how to do each step.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Unlike traditional chatbots that just respond to user input, AI agents can take actions, make decisions, and interact with your existing systems (CRM, email, databases, etc.) to get things done.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">A Real Example: Customer Support Triage</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Imagine you run an e-commerce business. Every day, your support team receives dozens of emails. A human manually reads each one, categorizes it (billing issue, product question, refund request), and routes it to the right department.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              An AI agent can do all of this automatically. It reads the email, understands the intent, pulls relevant customer data from your system, and either resolves it immediately or routes it with full context to the right team. Result: Your support team saves hours every week.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Why This Matters for SMBs</h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-3 mb-6">
              <li><strong>Time savings:</strong> Automate repetitive, manual tasks that eat up team hours</li>
              <li><strong>No new hires needed:</strong> Get more done with the same team size</li>
              <li><strong>24/7 operation:</strong> Your agent works while you sleep</li>
              <li><strong>Consistency:</strong> No human error, no bad days—just reliable execution</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Where Do You Start?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The key is to identify your biggest bottleneck—the task that eats the most time and has the clearest ROI. Don&apos;t try to automate everything at once. Start small, prove the value, and scale from there.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mt-12">
              Ready to explore what AI agents could do for your business? Let&apos;s talk.
            </p>
          </motion.article>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-gray-300 mb-8">Let&apos;s discuss which process could benefit most from AI agents.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  );
}
