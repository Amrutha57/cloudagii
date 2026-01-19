"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog5() {
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
              From Proof of Concept to Production: A 6-Week Implementation Roadmap
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <span>Feb 28, 2025</span>
              <span>9 min read</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Implementation</span>
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
              You&apos;ve decided to build an AI agent for your business. You&apos;ve seen proof of concept that it works. But how do you actually get from &quot;this might work&quot; to &quot;this is now part of our daily operations&quot;?
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Week 1-2: Design & Specification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Map out exactly what the agent does. Define its inputs, outputs, and edge cases. Document the workflow it replaces. This is your blueprint.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Define success metrics and KPIs</li>
              <li>Identify data sources and system integrations needed</li>
              <li>Plan sandbox environment and testing approach</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Week 3: Development & Integration</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Build the agent and connect it to your systems. This is where the technical work happens—API integrations, database connections, error handling.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Develop core agent logic</li>
              <li>Integrate with required systems (CRM, email, databases)</li>
              <li>Build approval workflows for sensitive actions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Week 4: Testing & Refinement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Run through real scenarios in the sandbox. Does it handle edge cases? Are outputs formatted correctly? Does it integrate properly with your systems?
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Extensive scenario testing</li>
              <li>Error handling and edge case verification</li>
              <li>Security and compliance review</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Week 5: Training & Preparation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Prepare your team. What will their workflow look like? How do they report issues? What are the agent&apos;s limitations?
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Train end-users on the tool</li>
              <li>Create documentation and runbooks</li>
              <li>Establish feedback and escalation processes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">Week 6: Launch & Monitoring</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Go live. Start with limited use or limited volume, then scale. Monitor performance, track metrics, and address issues quickly.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside">
              <li>Phased production rollout</li>
              <li>Real-time monitoring and alerting</li>
              <li>Rapid response to issues or unexpected behavior</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The Key to Success</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Don&apos;t rush the design phase. Don&apos;t skip testing. Don&apos;t launch without training your team. The 6 weeks of structure saves months of problems down the road.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your AI Agent Launch?</h2>
          <p className="text-gray-300 mb-8">We&apos;ll guide you through each phase, from concept to production.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Start Your Journey →
          </Link>
        </div>
      </section>
    </main>
  );
}
