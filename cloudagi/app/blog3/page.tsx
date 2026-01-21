"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("The Future of Business AI: From Tools to Systems");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-indigo-600 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-40 hover:scale-110" aria-label="Scroll to top">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">Future Trends</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">The Future of Business AI: From Tools to Systems</h1>
        <p className="text-2xl text-gray-600 mb-8 leading-relaxed">How the shift from point solutions to integrated AI infrastructure changes competitive advantage</p>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <span>By CloudAGI Team</span><span>•</span><span>December 25, 2024</span><span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>12 min read</span>
          </div>
        </div>

        <div className="flex items-center gap-3 pb-8 border-b border-gray-200 mb-12">
          <span className="text-sm text-gray-600 font-medium">Share:</span>
          <button onClick={shareOnLinkedIn} className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            LinkedIn
          </button>
          <button onClick={shareOnTwitter} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            Twitter
          </button>
          <button onClick={copyLink} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            Copy Link
          </button>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          <Image src="/blog33.png" alt="The Future of Business AI" width={1200} height={600} className="w-full" />
        </div>

        <div className="prose prose-xl max-w-none" style={{ fontSize: '22px' }}>
          <p className="leading-relaxed mb-6">
            We're at an inflection point in business AI. The question is no longer "Should we use AI?" but "How do we build AI systems that actually create competitive advantage?" The answer isn't what most companies expect.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Tool Trap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most businesses are stuck in what I call the "tool trap"—they're collecting AI point solutions like trading cards. ChatGPT for writing, Midjourney for images, Claude for analysis, Jasper for marketing copy, and a dozen other specialized tools. Each one promises to revolutionize a specific task, and individually, they're impressive.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The problem? These tools don't talk to each other. They don't share context. They don't learn from your business. They're isolated islands of capability that create more work, not less. Your team spends hours copying data between tools, manually triggering AI tasks, and trying to maintain consistency across different platforms. The promise of automation becomes a reality of fragmentation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I see this pattern everywhere. A company will proudly show me their "AI stack"—15 different tools, each solving a narrow problem. But when I ask how they work together, I get blank stares. The tools are siloed, the data is duplicated, and the team is overwhelmed. This isn't AI transformation. It's digital hoarding.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-r-lg">
            <p className="text-lg text-gray-800 italic">
              "The future belongs to companies that build AI systems, not those that just use AI tools."
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What's an AI System?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            An AI system is fundamentally different from an AI tool. A tool is something you use manually—you input data, get output, and move on. A system is something that works automatically, learns from your data, and integrates with your workflows. It's the difference between using a calculator and having an accountant.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Think of it this way: when you use ChatGPT to draft an email, that's a tool. When your CRM automatically drafts personalized responses based on customer history, sentiment analysis, and your brand voice—and routes them to the right team member for approval—that's a system. The tool requires constant human input. The system amplifies human capability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI systems have three defining characteristics. First, they integrate with your existing infrastructure—pulling data from your CRM, email, databases, and other tools without manual intervention. Second, they understand context—your business rules, customer history, product catalog, and organizational knowledge. Third, they operate autonomously—handling routine tasks automatically and only escalating when they encounter something unusual or important.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Three Pillars of AI Systems</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Building effective AI systems requires getting three things right. First is integration. Your AI needs to connect to your existing tools—CRM, email, databases, spreadsheets, communication platforms. It should pull data automatically, not require manual copy-pasting. This means APIs, webhooks, and data pipelines that keep everything synchronized in real-time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Second is context. The AI should understand your business—your products, your customers, your processes, your brand voice. It should learn from your historical data and improve over time. This requires building a knowledge base that captures your organizational intelligence and makes it accessible to AI models. Without context, AI is just a fancy autocomplete. With context, it becomes a knowledgeable assistant.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Third is automation. The system should work without constant human intervention. It should handle routine tasks automatically and only escalate when necessary. This means building confidence thresholds, validation logic, and human-in-the-loop workflows for edge cases. The goal isn't to replace humans—it's to free them from repetitive work so they can focus on high-value activities.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real-World Example</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One of our clients, a B2B SaaS company with 50 employees, was using 8 different AI tools. Their sales team spent hours each day copying data between systems, manually triggering AI tasks, and consolidating results. They had ChatGPT for email drafts, Gong for call analysis, Clay for lead enrichment, and five other tools. Each one was powerful individually, but together they created chaos.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We built them an integrated AI system that connects all their tools and automates their entire lead-to-customer workflow. When a new lead comes in, the system automatically enriches it with data from multiple sources, scores it based on fit and intent signals, drafts a personalized outreach email using their brand voice and relevant case studies, and schedules follow-ups based on engagement patterns. All of this happens automatically, with human oversight only for high-value opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The results were dramatic. Their sales team went from spending 60% of their time on admin work to 80% on actual selling. Revenue per rep increased by 40% in 3 months. But more importantly, the system got smarter over time—learning which messages resonated, which follow-up timing worked best, and which signals indicated serious buyer intent. This is the power of systems over tools.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Competitive Shift</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Here's what's happening in the market: companies that build AI systems are pulling ahead. They're not just more efficient—they're fundamentally different businesses. While their competitors are manually using AI tools, they're operating at a different speed and scale. Their AI systems are learning, improving, and compounding advantages every day.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This creates a widening gap. A company using AI tools might get 10% more productive. A company with AI systems might get 10x more productive in specific workflows. The difference compounds over time. The tool users are stuck in a cycle of manual work. The system builders are in a cycle of continuous improvement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The window for building this advantage is now. In 2-3 years, AI systems will be table stakes. The companies that build them today will have years of data, refinement, and organizational learning baked in. The companies that wait will be playing catch-up. The question isn't whether to build AI systems—it's whether you'll be early or late.
          </p>

          {/* Keeping existing blog3 content */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-10 rounded-2xl border border-indigo-200 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build AI Systems?</h3>
            <p className="text-lg text-gray-700 mb-6">Let's design an intelligent system for your business—not just implement more tools. Book a free consultation to explore what's possible.</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">Schedule Your Free Consultation →</Link>
          </div>
        </div>
      </article>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0"><div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">CA</div></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">CloudAGI Team</h3>
              <p className="text-gray-700 leading-relaxed mb-4">We're a team of AI systems engineers who build production-ready AI infrastructure for businesses. Our mission is to transform AI from experimental tools into reliable, execution-first systems that deliver measurable ROI.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">Work with us<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the AI Curve</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">Get weekly insights on AI systems, implementation strategies, and future trends. Join 500+ forward-thinking business leaders.</p>
            <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>500+ subscribers</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Weekly insights</span></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Unsubscribe anytime</span></div>
            </div>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Continue Reading</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog2" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-500 hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden"><Image src="/blog22.png" alt="Tool Chaos" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">From Tool Chaos to Integrated AI Systems</h4>
              <p className="text-gray-600 mb-4">Why most AI stacks fail and how to design execution-first systems</p>
              <span className="text-indigo-600 font-medium flex items-center gap-2">Read article<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
            </div>
          </Link>
          <Link href="/blog1" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-500 hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden"><Image src="/blog11.png" alt="Query Intelligence" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Designing Query Intelligence</h4>
              <p className="text-gray-600 mb-4">How CloudAGI turns raw human intent into execution-ready AI systems</p>
              <span className="text-indigo-600 font-medium flex items-center gap-2">Read article<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
            </div>
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "The Future of Business AI: From Tools to Systems", "description": "Discover how the shift from point solutions to integrated AI infrastructure is reshaping competitive advantage in business.", "author": { "@type": "Organization", "name": "CloudAGI" }, "publisher": { "@type": "Organization", "name": "CloudAGI", "logo": { "@type": "ImageObject", "url": "https://cloudagi.com/logo.png" } }, "datePublished": "2024-12-25", "dateModified": "2024-12-25", "image": "https://cloudagi.com/blog33.png", "articleSection": "Future Trends", "keywords": ["AI systems", "business AI", "AI infrastructure", "competitive advantage", "AI strategy", "future of AI"] }) }} />
    </main>
  );
}
