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
    const text = encodeURIComponent("Designing Query Intelligence: How AI Understands What You Really Need");
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
            AI Systems
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Designing Query Intelligence
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
          How CloudAGI turns raw human intent into execution-ready AI systems
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <span>By CloudAGI Team</span>
          <span>•</span>
          <span>January 15, 2025</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>8 min read</span>
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
            src="/blog11.png"
            alt="Designing Query Intelligence"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>

        {/* Content */}
        <div className="prose prose-xl max-w-none" style={{ fontSize: '22px' }}>

          {/* Opening */}
          <p className="leading-relaxed mb-6">
            Imagine asking your team member to "handle the customer issue."
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            What happens next? They ask clarifying questions: Which customer? What issue? How urgent is it? What's the context?
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>This is exactly what's missing in most AI systems.</strong>
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-12 bg-blue-50 rounded-r-lg">
            <p className="text-2xl font-medium text-gray-800 italic mb-3">
              "AI doesn't fail because models are weak. It fails because systems don't know how to ask the right questions."
            </p>
            <footer className="text-gray-600">— Arya Teja Rudraraju, Founder of CloudAGI</footer>
          </blockquote>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            At CloudAGI, we discovered that the gap between "what humans say" and "what AI needs to execute" is where most systems break down. We call this gap <strong>Query Intelligence</strong>.
          </p>

          {/* Section 1 */}
          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6" id="why-fail">
            Why Most AI Systems Fail in Real-World Usage
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Most teams treat AI as a tool instead of infrastructure. They expect a single prompt to:
          </p>

          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-lg text-gray-700 flex items-start">
              <span className="text-red-500 mr-3 font-bold">✗</span>
              <span>Understand vague or ambiguous intent</span>
            </li>
            <li className="text-lg text-gray-700 flex items-start">
              <span className="text-red-500 mr-3 font-bold">✗</span>
              <span>Fetch context from scattered tools and documents</span>
            </li>
            <li className="text-lg text-gray-700 flex items-start">
              <span className="text-red-500 mr-3 font-bold">✗</span>
              <span>Reason correctly without clear structure</span>
            </li>
            <li className="text-lg text-gray-700 flex items-start">
              <span className="text-red-500 mr-3 font-bold">✗</span>
              <span>Produce reliable, production-ready output</span>
            </li>
          </ul>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            This approach works for demos. But it breaks down when reliability and execution matter.
          </p>

          {/* Insight Box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 my-12 rounded-r-lg">
            <p className="text-lg font-semibold text-gray-900 mb-3">⚠️ The Real Problem</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you ask ChatGPT "help me with marketing," it gives you generic advice. When you ask your marketing manager the same thing, they ask 10 clarifying questions first. That's the difference between a tool and a system.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6" id="cloudagi-approach">
            The CloudAGI Approach: Query Intelligence
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            CloudAGI treats AI as infrastructure, not a chatbot. We design a structured intelligence layer between human intent and system execution.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            This layer ensures <strong>clarity before action</strong>. Every request is contextualized, structured, and made execution-ready before any model is invoked.
          </p>

          {/* Process Steps */}
          <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-8">
            How Query Intelligence Works
          </h3>

          <div className="space-y-8 my-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Query Rewriting</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Incoming requests are rewritten to remove ambiguity. Intent is clarified and assumptions are made explicit.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2"><strong>Before:</strong> "Help with customer issue"</p>
                  <p className="text-sm text-gray-600"><strong>After:</strong> "Resolve billing dispute for customer #4521 regarding invoice #INV-2024-0892, priority: high"</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Query Expansion</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Relevant background context is added carefully, preventing shallow answers or missing information. The system pulls from your CRM, past tickets, and customer history automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Query Decomposition</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complex problems are broken into smaller, independent units that can be executed reliably. Instead of one big task, you get 5 small, verifiable steps.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Query Agents</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Agent loops evaluate results, detect gaps, and refine queries iteratively without manual effort. The system learns what works and improves over time.
                </p>
              </div>
            </div>
          </div>

          {/* Real Example */}
          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6" id="real-example">
            A Real Example: Customer Support Automation
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            One of our clients, a SaaS company, was drowning in support tickets. Their team spent 15 hours per week just categorizing and routing tickets.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We built a Query Intelligence system that:
          </p>

          <div className="bg-green-50 p-8 rounded-xl border border-green-200 mb-8">
            <ul className="space-y-3">
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>Reads incoming tickets and rewrites them with clear intent</span>
              </li>
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>Pulls relevant context from past tickets and documentation</span>
              </li>
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>Categorizes by urgency and routes to the right team member</span>
              </li>
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span>Suggests solutions based on similar resolved tickets</span>
              </li>
            </ul>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            <strong>Result:</strong> Ticket routing time dropped from 15 hours to 30 minutes per week. That's a 97% reduction and $36,000 saved annually.
          </p>

          {/* Why It Matters */}
          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            Why This Matters for Your Business
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            When AI systems are designed with Query Intelligence, teams stop fighting unpredictability and start trusting outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Predictable</h4>
              <p className="text-gray-700">AI outputs become consistent and explainable</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Scalable</h4>
              <p className="text-gray-700">Automation scales without chaos or errors</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Improving</h4>
              <p className="text-gray-700">Systems get better over time, not worse</p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-6">
            The Bottom Line
          </h2>

          <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
            <p className="text-2xl font-medium text-gray-800 italic">
              "Execution beats prompts. Systems beat tools."
            </p>
          </blockquote>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            If you care about clarity, reliability, and long-term execution, Query Intelligence is the foundation you need.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-200 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want AI That Actually Works?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's talk about your biggest workflow bottleneck and how Query Intelligence can solve it.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book a Free Consultation →
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
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Get AI Implementation Insights Weekly
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ business leaders getting actionable strategies on AI systems, automation, and ROI. No fluff, just proven frameworks.
            </p>

            {/* Social Proof */}
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

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Designing Query Intelligence: How AI Understands What You Really Need",
            "description": "Discover how CloudAGI transforms vague requests into precise AI actions through query intelligence—the missing layer in most AI systems.",
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
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "image": "https://cloudagi.com/blog11.png",
            "articleSection": "AI Systems",
            "keywords": ["query intelligence", "AI systems", "CloudAGI", "human intent", "execution-ready AI"]
          })
        }}
      />
    </main>
  );
}
