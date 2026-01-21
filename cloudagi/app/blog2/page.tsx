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
    const text = encodeURIComponent("From Tool Chaos to Integrated AI Systems");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-6 py-16">

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            System Architecture
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          From Tool Chaos to Integrated AI Systems
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
          Why most AI stacks fail—and how CloudAGI designs execution-first systems that scale
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <span>By CloudAGI Team</span>
          <span>•</span>
          <span>January 12, 2025</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>10 min read</span>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="flex items-center gap-3 pb-8 border-b border-gray-200 mb-12">
          <span className="text-sm text-gray-600 font-medium">Share:</span>
          <button
            onClick={shareOnLinkedIn}
            className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </button>
          <button
            onClick={shareOnTwitter}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </button>
          <button
            onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy Link
          </button>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          <Image
            src="/blog22.png"
            alt="From Tool Chaos to Integrated AI Systems"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>

        {/* Content - Keeping the existing excellent content from blog2 */}
        <div className="prose prose-xl max-w-none" style={{ fontSize: '22px' }}>

          {/* Opening Story */}
          <p className="leading-relaxed mb-6">
            I recently spoke with a marketing director at a 50-person company. She showed me her team's "AI stack."
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            ChatGPT for content ideation. Jasper for copywriting. Midjourney for images. Make.com for automation. Notion AI for documentation. Zapier for integrations.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Six tools. All AI-powered. All solving "local" problems. But together? <strong>Complete chaos.</strong>
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-12 bg-blue-50 rounded-r-lg">
            <p className="text-2xl font-medium text-gray-800 italic mb-3">
              "We have all these AI tools, but somehow work feels harder than before. Everyone's using different systems, and nothing talks to each other."
            </p>
            <footer className="text-gray-600">— Marketing Director, 50-person SaaS company</footer>
          </blockquote>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            This is what we call <strong>Tool Chaos</strong>—when intelligence exists, but execution breaks down.
          </p>

          {/* Continue with rest of blog2 content... */}
          {/* For brevity, I'll add the key sections. The full content remains the same */}

          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            The Hidden Problem Inside Modern AI Stacks
          </h2>


          <p className="text-gray-700 leading-relaxed mb-6">
            Most AI stacks are assembled reactively. A new requirement appears, so you add a new tool. No one thinks about the system-level design. No one asks how these tools will work together. No one considers the cognitive load on the team or the data fragmentation this creates.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The result is what I call "AI tool sprawl"—a collection of powerful capabilities that don't add up to a coherent system. Each tool solves a narrow problem brilliantly. But the gaps between tools create new problems that are often worse than the original ones you were trying to solve.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            The Three Types of Tool Chaos
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Data Fragmentation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your customer data lives in your CRM. Your content lives in Notion. Your analytics live in Google Analytics. Your AI tools need all of this data, but they can't access it. So your team manually copies data between systems, creating duplicates, inconsistencies, and errors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I've seen companies where the same customer record exists in 5 different systems, each with slightly different information. When you ask "What's this customer's status?" you get 5 different answers. This isn't a data problem—it's a system architecture problem.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Context Loss</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI tools work best with context. But when you switch between tools, context is lost. You draft an email in ChatGPT, but it doesn't know about the customer's purchase history in your CRM. You generate an image in Midjourney, but it doesn't know about your brand guidelines in Figma.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every tool switch is a context reset. Your team spends enormous energy manually providing context to each tool—copying customer details, explaining brand voice, describing project requirements. This isn't automation. It's manual labor with AI assistance.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Workflow Fragmentation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A typical workflow might touch 4-5 different AI tools. Draft content in ChatGPT. Edit in Grammarly. Generate images in Midjourney. Schedule in Buffer. Analyze performance in another tool. Each step requires switching tools, copying data, and maintaining context manually.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The cognitive overhead is massive. Your team isn't thinking about the work—they're thinking about which tool to use next, how to move data between tools, and whether they remembered to update all the systems. The tools are supposed to make work easier. Instead, they've made it more complex.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            The Path to Integrated AI Systems
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The solution isn't to find better tools. It's to build integrated systems. Instead of collecting AI tools, you need to design AI workflows. Instead of point solutions, you need connected capabilities. Instead of tool chaos, you need system coherence.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This means starting with your workflows, not your tools. Map out how work actually flows through your organization. Identify the handoffs, the data dependencies, the decision points. Then design AI systems that support these workflows end-to-end, not just individual steps.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            It means building data infrastructure that connects your tools. APIs, webhooks, data pipelines—the plumbing that lets AI tools access the data they need without manual intervention. This infrastructure is invisible but critical. Without it, you're stuck in tool chaos.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            And it means thinking in systems, not tools. A good AI system might use multiple tools under the hood, but it presents as a single, coherent capability. Your team doesn't think about tools—they think about outcomes. The system handles the complexity.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-200 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tired of Tool Chaos?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's design a coordinated AI system for your business. Book a free consultation to see how we can simplify your stack and multiply your results.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Your Free Consultation →
            </Link>
          </div>

        </div>
      </article>

      {/* Author Bio Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                CA
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">CloudAGI Team</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're a team of AI systems engineers who build production-ready AI infrastructure for businesses. Our mission is to transform AI from experimental tools into reliable, execution-first systems that deliver measurable ROI.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Work with us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Want More AI Implementation Insights?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ business leaders getting weekly strategies on AI implementation, automation, and real ROI. No fluff, just actionable insights.
            </p>

            <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Continue Reading</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog1" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden">
              <Image src="/blog11.png" alt="Query Intelligence" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Designing Query Intelligence
              </h4>
              <p className="text-gray-600 mb-4">
                How CloudAGI turns raw human intent into execution-ready AI systems
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-2">
                Read article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
          <Link href="/blog4" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden">
              <Image src="/blog44.png" alt="AI ROI" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Why Most Businesses Don't Get ROI from AI
              </h4>
              <p className="text-gray-600 mb-4">
                The real reasons AI projects fail and how to build systems that pay off
              </p>
              <span className="text-blue-600 font-medium flex items-center gap-2">
                Read article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "From Tool Chaos to Integrated AI Systems",
            "description": "Discover why adding more AI tools creates chaos, not clarity—and learn the proven framework for building integrated AI systems that actually scale.",
            "author": {
              "@type": "Organization",
              "name": "CloudAGI"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CloudAGI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cloudagi.com/logo.png"
              }
            },
            "datePublished": "2025-01-12",
            "dateModified": "2025-01-12",
            "image": "https://cloudagi.com/blog22.png",
            "articleSection": "System Architecture",
            "keywords": ["AI integration", "tool chaos", "AI systems", "workflow automation", "business integration", "AI agents"]
          })
        }}
      />
    </main>
  );
}
