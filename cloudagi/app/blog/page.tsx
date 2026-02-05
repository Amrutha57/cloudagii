"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/spotlight-card";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI Systems", "Architecture", "Business ROI", "Production", "Scaling", "Future Trends"];

  const blogs = [
    {
      slug: "query-intelligence",
      title: "Designing Query Intelligence",
      excerpt: "How CloudAGI turns raw human intent into execution-ready AI systems that think before they act.",
      date: "Jan 15, 2025",
      category: "AI Systems",
      readTime: "8 min read",
      image: "/blog11.png",
      featured: true
    },
    {
      slug: "tool-chaos",
      title: "From Tool Chaos to Integrated AI Systems",
      excerpt: "Why most AI stacks fail — and how CloudAGI designs execution-first systems that scale.",
      date: "Jan 12, 2025",
      category: "Architecture",
      readTime: "10 min read",
      image: "/blog22.png"
    },
    {
      slug: "ai-roi",
      title: "Why Most Businesses Don't Get ROI from AI",
      excerpt: "And how CloudAGI designs AI systems that actually pay off for the long term.",
      date: "Jan 8, 2025",
      category: "Business ROI",
      readTime: "9 min read",
      image: "/blog44.png"
    },
    {
      slug: "production-reliability",
      title: "Why AI Feels Unreliable in Production",
      excerpt: "It's not the models. It's the missing system layer that ensures consistency and logic.",
      date: "Jan 5, 2025",
      category: "Production",
      readTime: "11 min read",
      image: "/blog55.png"
    },
    {
      slug: "scaling-ai-tools",
      title: "Why 'Just Using AI Tools' Breaks at Scale",
      excerpt: "Scaling AI requires systems and architecture, not just more software and licenses.",
      date: "Dec 30, 2024",
      category: "Scaling",
      readTime: "10 min read",
      image: "/blog66.png"
    },
    {
      slug: "future-ai-systems",
      title: "The Future of Business AI: From Tools to Systems",
      excerpt: "How the shift from point solutions to integrated AI infrastructure changes competitive advantage.",
      date: "Dec 25, 2024",
      category: "Future Trends",
      readTime: "12 min read",
      image: "/blog33.png"
    }
  ];

  const featuredPost = blogs.find(b => b.featured) || blogs[0];
  const filteredBlogs = activeCategory === "All" ? blogs : blogs.filter(b => b.category === activeCategory);

  return (
    <main className="relative bg-dark-bg text-white overflow-hidden selection:bg-accent-blue selection:text-white pb-24">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-dark section-gap">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-80 h-80 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Insights <span className="heading-gradient">& Architecture</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed italic">
              Strategic thoughts on building the next generation of business intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED POST (NEW) ================= */}
      <section className="relative max-w-6xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-950/50 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 overflow-hidden aspect-video lg:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Featured</span>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors leading-tight italic">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest pt-8 border-t border-white/5 mt-auto">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ================= CATEGORY FILTER (NEW) ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${activeCategory === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, i) => (
              <motion.div
                key={blog.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block h-full focus:outline-none"
                >
                  <SpotlightCard className="h-full flex flex-col p-6 group-focus:ring-2 group-focus:ring-blue-500">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 rounded-2xl overflow-hidden aspect-video border border-white/5 group-hover:border-blue-500/20 transition-all">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={600}
                          height={338}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">
                          {blog.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight uppercase tracking-tighter">
                        {blog.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-light">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{blog.date}</span>
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{blog.readTime}</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="relative section-gap max-w-6xl mx-auto px-6">
        <SpotlightCard className="p-10 lg:p-20 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Join the <span className="heading-gradient">Vanguard</span></h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed italic">
              Monthly deep dives into AI architecture, ROI models, and agentic workflows. No fluff. Just systems.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="architect@domain.com"
                className="flex-1 px-6 py-4 border border-white/10 rounded-xl bg-black/50 text-white placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3.5 md:px-8 md:py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] md:text-xs rounded-xl hover:bg-gray-200 transition-all shadow-xl active-scale"
              >
                Subscribe
              </button>
            </form>
          </div>
        </SpotlightCard>
      </section>
    </main>
  );
}
