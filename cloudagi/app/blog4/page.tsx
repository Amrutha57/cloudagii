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
    const text = encodeURIComponent("Why Most Businesses Don't Get ROI from AI");
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
            Business Strategy
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Why Most Businesses Don't Get ROI from AI
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
          And how CloudAGI designs AI systems that actually pay off
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <span>By CloudAGI Team</span>
          <span>•</span>
          <span>January 8, 2025</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>9 min read</span>
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
            src="/blog44.png"
            alt="Why Most Businesses Don't Get ROI from AI"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>

        {/* Content - keeping existing blog4 content */}
        <div className="prose prose-xl max-w-none" style={{ fontSize: '22px' }}>
          <p className="leading-relaxed mb-6">
            Last month, I spoke with a founder who had just spent $80,000 on an AI implementation project.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The system was technically impressive. It used the latest models, had a beautiful interface, and the demos were flawless.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            But six months later, <strong>nobody was using it</strong>.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-12 bg-blue-50 rounded-r-lg">
            <p className="text-2xl font-medium text-gray-800 italic mb-3">
              "We built exactly what they asked for. But what they asked for wasn't what they actually needed."
            </p>
            <footer className="text-gray-600">— Senior AI Consultant at a Big 4 firm</footer>
          </blockquote>

          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            The Three ROI Killers
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Building for Demos, Not Production</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most AI projects optimize for the demo. They show impressive capabilities in controlled scenarios with clean data. But production is messy. Real users don't follow scripts. Real data has errors. Real workflows have exceptions. When the demo AI hits production reality, it breaks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I've seen companies spend $100K building an AI system that works perfectly in demos but fails 40% of the time in production. The ROI calculation assumed 95% accuracy. The reality was 60%. That's not a small miss—it's a complete failure of the business case.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Ignoring Adoption</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You can build the most sophisticated AI system in the world, but if your team doesn't use it, the ROI is zero. Most AI projects assume 100% adoption. In reality, adoption rates are often below 30% in the first year. People stick with what they know, especially when the new system is complex or doesn't fit their workflow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The $80K system I mentioned earlier? It had a 15% adoption rate after 6 months. The ROI model assumed everyone would use it immediately. The reality was that most people found workarounds to avoid it. The system worked—but nobody cared.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Underestimating Maintenance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI systems aren't "set it and forget it." They need constant maintenance. Models drift. Data changes. Business requirements evolve. What works today might not work in 6 months. Most ROI calculations ignore ongoing costs entirely or dramatically underestimate them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A typical AI system requires 20-30% of the initial development cost annually just to maintain. That's monitoring, retraining, bug fixes, and updates. If your ROI model doesn't account for this, you're setting yourself up for disappointment.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            How to Actually Get ROI from AI
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Getting real ROI from AI requires a different approach. Start with problems, not technology. Don't ask "How can we use AI?" Ask "What's costing us time and money that AI could solve?" The best AI projects solve expensive, repetitive problems that humans hate doing.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Build for production from day one. Don't optimize for demos. Build systems that handle messy data, edge cases, and failures gracefully. Test with real users and real data early. The goal isn't to impress in a meeting—it's to work reliably in the wild.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Design for adoption, not just capability. The best AI system is the one people actually use. This means understanding your team's workflows, making the system easy to use, and providing training and support. Adoption doesn't happen automatically—it requires deliberate design and effort.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Start small and prove value quickly. Don't try to automate everything at once. Pick one high-value workflow, build a simple system, and prove ROI in 30-60 days. Then expand. Small wins build momentum and buy-in. Big-bang transformations usually fail.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            And measure everything. Track usage, accuracy, time saved, errors prevented, and user satisfaction. Real ROI comes from real data, not assumptions. If you can't measure it, you can't improve it—and you can't prove value.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-200 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Calculate Your AI ROI?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Book a free 30-minute consultation. We'll analyze your workflows and identify your highest-ROI automation opportunity.
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

      {/* Author Bio */}
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

      {/* Enhanced Newsletter */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Get ROI-Focused AI Insights Weekly
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ business leaders getting actionable strategies on AI ROI, implementation, and real results. No theory, just what works.
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
          <Link href="/blog2" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden">
              <Image src="/blog22.png" alt="Tool Chaos" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                From Tool Chaos to Integrated AI Systems
              </h4>
              <p className="text-gray-600 mb-4">
                Why most AI stacks fail and how to design execution-first systems
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Why Most Businesses Don't Get ROI from AI",
            "description": "Discover the real reasons AI projects fail to deliver returns and learn the proven framework for building AI systems that actually pay off.",
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
            "datePublished": "2025-01-08",
            "dateModified": "2025-01-08",
            "image": "https://cloudagi.com/blog44.png",
            "articleSection": "Business Strategy",
            "keywords": ["AI ROI", "AI implementation", "business automation", "AI strategy", "AI agents"]
          })
        }}
      />
    </main>
  );
}
