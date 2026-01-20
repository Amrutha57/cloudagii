"use client";

import Link from "next/link";

const blogMetadata = {
  title: "CloudAGI Blog – AI Agents, Agentic Systems, Business Automation Insights",
  description:
    "Read expert insights on AI agents, agentic workflows, business automation, and AI ROI. Learn how to implement intelligent systems for your SMB.",
  keywords: [
    "AI agents blog",
    "agentic systems",
    "AI implementation guide",
    "business automation",
    "AI ROI",
    "AI strategy",
  ],
  openGraph: {
    title: "CloudAGI Blog – AI Agent Solutions & Business Automation",
    description:
      "Expert content on AI agents, agentic workflows, and proven implementation strategies for business automation and measurable ROI.",
    type: "website",
  },
};

export default function BlogPage() {
  const blogs = [
    {
      slug: "query-intelligence",
      title: "Designing Query Intelligence",
      excerpt: "How CloudAGI turns raw human intent into execution-ready AI systems",
      date: "Jan 15, 2025",
      category: "AI Systems",
      readTime: "8 min read"
    },
    {
      slug: "tool-chaos",
      title: "From Tool Chaos to Integrated AI Systems",
      excerpt: "Why most AI stacks fail — and how CloudAGI designs execution-first systems that scale",
      date: "Jan 12, 2025",
      category: "Architecture",
      readTime: "10 min read"
    },
    {
      slug: "ai-roi",
      title: "Why Most Businesses Don't Get ROI from AI",
      excerpt: "And how CloudAGI designs AI systems that actually pay off",
      date: "Jan 8, 2025",
      category: "Business ROI",
      readTime: "9 min read"
    },
    {
      slug: "production-reliability",
      title: "Why AI Feels Unreliable in Production",
      excerpt: "It's not the models. It's the missing system layer.",
      date: "Jan 5, 2025",
      category: "Production",
      readTime: "11 min read"
    },
    {
      slug: "scaling-ai-tools",
      title: "Why 'Just Using AI Tools' Breaks at Scale",
      excerpt: "Scaling AI requires systems, not more software",
      date: "Dec 30, 2024",
      category: "Scaling",
      readTime: "10 min read"
    },
    {
      slug: "blog6",
      title: "The Future of Business AI: From Tools to Systems",
      excerpt: "How the shift from point solutions to integrated AI infrastructure changes competitive advantage",
      date: "Dec 25, 2024",
      category: "Future Trends",
      readTime: "12 min read"
    }
  ];

  return (
    <main className="relative bg-dark-bg text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-dark py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-80 h-80 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            CloudAGI Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical insights on building AI systems that work, implementing agents that deliver ROI, and navigating the AI revolution for SMBs.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={blog.slug === "query-intelligence" ? "/blog1" : 
                      blog.slug === "tool-chaos" ? "/blog2" :
                      blog.slug === "ai-roi" ? "/blog4" :
                      blog.slug === "production-reliability" ? "/blog5" :
                      blog.slug === "scaling-ai-tools" ? "/blog6" :
                      `/blog/${blog.slug}`}
                className="group glass p-6 rounded-lg border border-dark-border relative overflow-hidden hover:border-accent-blue transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-blue transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                    <span className="text-xs text-gray-500">{blog.date}</span>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-dark-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on AI implementation, business automation, and practical strategies delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-dark-border rounded-lg bg-dark-bg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
