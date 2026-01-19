"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog3() {
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
              Why Your Custom AI Tool Needs a Sandbox (And What That Means)
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <span>Feb 10, 2025</span>
              <span>5 min read</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Security</span>
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
              You've decided to build a custom AI tool to solve a specific business problem. Great decision. But here's the critical question: how do you ensure it doesn't accidentally break your existing systems or expose sensitive data?
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">What's a Sandbox?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A sandbox is an isolated environment where your AI tool can test actions and access data without touching your production systems. Think of it like a practice range before going live.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Why This Matters</h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-3 mb-6">
              <li><strong>Risk mitigation:</strong> Test behavior before it affects real customers</li>
              <li><strong>Data protection:</strong> Keep sensitive data separate from experimental AI actions</li>
              <li><strong>Compliance:</strong> Meets regulatory requirements for AI governance</li>
              <li><strong>Confidence:</strong> Your team can trust the tool because it's been safely tested</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Real Example: Email Automation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Imagine you're building an AI tool to auto-respond to customer emails. Without a sandbox, a bug could send automated responses to every email in your history. With a sandbox, you test the logic on duplicate data first, catch the bug, fix it, and only then go live.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">How We Build Sandboxes</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A proper sandbox includes mirrored data, test APIs, and approval workflows. Your AI agent learns in the sandbox, and only after passing your tests do actions go to production.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mt-12">
              Your AI tool is powerful. Make sure it's safely powerful.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Building Custom AI Tools?</h2>
          <p className="text-gray-300 mb-8">Let's ensure security and reliability from day one.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}
