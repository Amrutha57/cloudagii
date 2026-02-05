"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Designing Query Intelligence",
    description:
      "How CloudAGI turns raw human intent into execution-ready AI systems.",
    path: "/blog/query-intelligence",
    image: "/blog11.png",
  },
  {
    title: "From Tool Chaos to Integrated AI Systems",
    description:
      "Why disconnected AI tools fail — and how CloudAGI builds systems that scale.",
    path: "/blog/tool-chaos",
    image: "/blog22.png",
  },
  {
    title: "Why AI Feels Unreliable in Production",
    description: "It's not the models. It's the missing system layer.",
    path: "/blog/production-reliability",
    image: "/blog55.png",
  },
  {
    title: "Why Most Businesses Don't Get ROI from AI",
    description:
      "The real reasons AI projects fail and how to build systems that pay off.",
    path: "/blog/ai-roi",
    image: "/blog44.png",
  },
  {
    title: "Why 'Just Using AI Tools' Breaks at Scale",
    description:
      "Tool-first thinking creates chaos. System-first thinking creates leverage.",
    path: "/blog/scaling-ai-tools",
    image: "/blog66.png",
  },
  {
    title: "The Future of Business AI: From Tools to Systems",
    description:
      "How the shift to integrated AI infrastructure changes competitive advantage.",
    path: "/blog/future-ai-systems",
    image: "/blog33.png",
  },
];

import { SpotlightCard } from "./spotlight-card";

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, i) => (
        <motion.div
          key={blog.path}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          viewport={{ once: true }}
        >
          <Link href={blog.path} className="block h-full group">
            <SpotlightCard className="h-full border-white/5 bg-slate-950/40 hover:bg-slate-900/60 transition-colors overflow-hidden flex flex-col">
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-architect">
                    Insight Node
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors italic uppercase tracking-tighter leading-tight font-outfit">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1 italic">
                  {blog.description}
                </p>

                <div className="inline-flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group/btn">
                  Analyze Insight
                  <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </SpotlightCard>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}