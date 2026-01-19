"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog2() {
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
              5 Workflow Automations That ROI in Under 30 Days
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <span>Feb 3, 2025</span>
              <span>6 min read</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Automation</span>
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
              Not all automation projects are created equal. Some take months to implement, cost thousands, and deliver results years down the line. But others deliver measurable ROI within weeks.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">1. Lead Qualification & Nurturing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Stop having your sales team qualify unqualified leads. Set up an AI workflow that scores inbound leads, segments them, and triggers personalized email sequences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>ROI: 2-3 weeks</strong> (instant time savings, faster deal velocity)</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">2. Invoice & Billing Management</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Manual invoice processing is a black hole of time. Automate extraction of invoice data, matching to POs, and routing for approval.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>ROI: 2-3 weeks</strong> (direct cost savings per invoice processed)</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">3. Customer Support Triage</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Not all support tickets are equal. Route complex issues to experts, auto-resolve FAQs, and pull customer context automatically.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>ROI: 1-2 weeks</strong> (immediate time savings)</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">4. Data Entry & Reconciliation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Copy-pasting between spreadsheets and systems? Eliminate it. Automate data flow from forms, emails, or PDFs into your CRM/database.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>ROI: 2-4 weeks</strong> (massive time savings)</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">5. Meeting Scheduling & Follow-Up</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              No more email ping-pongs. Set up an AI agent that handles calendar coordination and automatically sends follow-up reminders with next steps.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6"><strong>ROI: 1-2 weeks</strong> (direct time savings)</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-4">The Common Thread</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              All of these have one thing in common: they&apos;re repetitive, rule-based, and high-volume. These are AI agent sweet spots.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Which Process Eats Your Team&apos;s Time?</h2>
          <p className="text-gray-300 mb-8">Let&apos;s identify your fastest ROI automation opportunity.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Schedule Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
