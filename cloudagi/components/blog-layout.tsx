"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogLayoutProps {
    children: React.ReactNode;
    category: string;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
    relatedPosts?: Array<{
        title: string;
        description: string;
        slug: string;
        image: string;
    }>;
    seoDescription: string;
}

export default function BlogLayout({
    children,
    category,
    title,
    subtitle,
    date,
    readTime,
    image,
    slug,
    relatedPosts = [],
    seoDescription,
}: BlogLayoutProps) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const shareOnLinkedIn = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    };

    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(title);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        // You could add a toast here
    };

    return (
        <main className="bg-white text-gray-900 min-h-screen selection:bg-blue-100">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-[60]">
                <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 z-50 active-scale"
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}

            {/* Hero Content Section */}
            <article className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Category Badge */}
                    <div className="mb-8">
                        <span className="inline-block px-4 py-1.5 text-[10px] font-black text-blue-600 bg-blue-50 rounded-full uppercase tracking-architect">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 leading-[1.1] uppercase tracking-tighter italic font-outfit">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light italic">
                        {subtitle}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-10 pb-10 border-b border-gray-100">
                        <span>By CloudAGI Team</span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full" />
                        <span>{date}</span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full" />
                        <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{readTime}</span>
                        </div>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-3 mb-16">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Share Node:</span>
                        <button
                            onClick={shareOnLinkedIn}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] text-white rounded-full hover:bg-[#006399] transition-all text-[10px] font-black uppercase tracking-widest active-scale"
                        >
                            LinkedIn
                        </button>
                        <button
                            onClick={shareOnTwitter}
                            className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-[10px] font-black uppercase tracking-widest active-scale"
                        >
                            Twitter
                        </button>
                        <button
                            onClick={copyLink}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all text-[10px] font-black uppercase tracking-widest active-scale"
                        >
                            Copy Link
                        </button>
                    </div>

                    {/* Hero Image */}
                    <div className="mb-20 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-100 group">
                        <Image
                            src={image}
                            alt={title}
                            width={1600}
                            height={900}
                            className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Content Body */}
                <div className="prose prose-xl max-w-none text-gray-800 content-[counter(step)]" style={{ fontSize: "21px" }}>
                    {children}
                </div>
            </article>

            {/* Author Bio Section */}
            <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-100">
                <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white text-3xl font-black rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-blue-500/30">
                                C
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-black text-gray-950 mb-4 uppercase tracking-tighter italic font-outfit">CloudAGI Team</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                                A collective of AI architects and systems engineers building mission-critical intelligence infrastructure. We transform raw models into reliable business leverage.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 text-[10px] font-black text-blue-600 uppercase tracking-architect group/link"
                            >
                                Collaborate with us
                                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <div className="bg-gray-950 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic font-outfit">
                            Join the <span className="heading-gradient">Vanguard</span>
                        </h3>
                        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed italic">
                            Monthly tactical intelligence on building and scaling agentic systems. No fluff. Just architectural blueprints.
                        </p>

                        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="architect@domain.com"
                                className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3.5 md:px-10 md:py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active-scale"
                            >
                                Infiltrate
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-100">
                    <h3 className="text-2xl font-black text-gray-950 mb-10 uppercase tracking-tighter italic font-outfit">Parallel <span className="text-blue-600">Nodes</span></h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {relatedPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                                <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 border border-gray-100 shadow-lg group-hover:shadow-blue-500/10 transition-all">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-950 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tighter italic font-outfit">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-light italic mb-4">
                                    {post.description}
                                </p>
                                <div className="text-[10px] font-black text-blue-600 uppercase tracking-architect">Analyze Logic &rarr;</div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": title,
                        "description": seoDescription,
                        "author": {
                            "@type": "Organization",
                            "name": "CloudAGI",
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "CloudAGI",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://cloudagidemo1.vercel.app/logo.png",
                            },
                        },
                        "datePublished": date,
                        "dateModified": date,
                        "image": `https://cloudagidemo1.vercel.app${image}`,
                        "articleSection": category,
                        "keywords": [category, "AI systems", "CloudAGI", slug],
                    }),
                }}
            />
        </main>
    );
}
