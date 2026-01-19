"use client";

import type { Metadata } from "next";
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      slug: "blog1",
      title: "What is an AI Agent and How Can It Save Your Business 10 Hours a Week?",
      excerpt: "De-mystifying AI agents and showing how they can automate repetitive tasks without replacing human expertise.",
      date: "Jan 15, 2025",
      category: "AI Fundamentals",
      readTime: "8 min read"
    },
    {
      slug: "blog2",
      title: "5 Workflow Automations That ROI in Under 30 Days",
      excerpt: "The five quickest-to-implement automations with measurable ROI: lead scoring, invoicing, triage, data entry, and scheduling.",
      date: "Feb 3, 2025",
      category: "Automation",
      readTime: "6 min read"
    },
    {
      slug: "blog3",
      title: "Why Your Custom AI Tool Needs a Sandbox (And What That Means)",
      excerpt: "How isolated testing environments keep your production systems safe while you build and refine AI agents.",
      date: "Feb 10, 2025",
      category: "Security",
      readTime: "5 min read"
    },
    {
      slug: "blog4",
      title: "AI Literacy for Your Team: Why Training Matters (And What to Cover)",
      excerpt: "How to prepare your team to use AI tools effectively, from understanding capabilities to knowing the limits.",
      date: "Feb 20, 2025",
      category: "Training",
      readTime: "7 min read"
    },
    {
      slug: "blog5",
      title: "From Proof of Concept to Production: A 6-Week Implementation Roadmap",
      excerpt: "The structured approach to taking an AI agent from 'this might work' to 'this is now part of operations.'",
      date: "Feb 28, 2025",
      category: "Implementation",
      readTime: "9 min read"
    },
    {
      slug: "blog6",
      title: "How Much Does a Custom AI Agent Actually Cost?",
      excerpt: "Breaking down the cost factors: complexity, integrations, data volume, security, and training—plus how ROI math works.",
      date: "Mar 8, 2025",
      category: "Business",
      readTime: "6 min read"
    }
  ];

  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center bg-white dark:bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            CloudAGI Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Practical insights on building AI systems that work, implementing agents that deliver ROI, and navigating the AI revolution for SMBs.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group p-6 border border-gray-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-900 rounded-full">
                    {blog.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-800">
                  <span className="text-xs text-gray-500 dark:text-gray-500">{blog.date}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{blog.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Get the latest insights on AI implementation, business automation, and practical strategies delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
