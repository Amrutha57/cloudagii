"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Designing Query Intelligence",
    description:
      "How CloudAGI turns raw human intent into execution-ready AI systems.",
    path: "/blog1",
    image: "/blog1.png",
  },
  {
    title: "From Tool Chaos to Integrated AI Systems",
    description:
      "Why disconnected AI tools fail — and how CloudAGI builds systems that scale.",
    path: "/blog2",
    image: "/blog2.png",
  },
  {
    title: "The Real Reason AI Feels Unreliable in Production",
    description: "It's not the models. It's the missing system layer.",
    path: "/blog3",
    image: "/blog3.png",
  },
  {
    title: "Why AI Demos Succeed but Systems Fail",
    description:
      "The hidden gap between impressive demos and real execution.",
    path: "/blog4",
    image: "/blog4.png",
  },
  {
    title: "Why 'Just Using AI Tools' Breaks at Scale",
    description:
      "Tool-first thinking creates chaos. System-first thinking creates leverage.",
    path: "/blog5",
    image: "/blog5.png",
  },
  {
    title: "Execution Is the Real Intelligence",
    description:
      "Why intelligence without structure never becomes business value.",
    path: "/blog6",
    image: "/blog6.png",
  },
];

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
          <Link href={blog.path}>
            <div className="group rounded-xl border border-border bg-muted/40 overflow-hidden hover:border-foreground/30 transition cursor-pointer h-full">
              {/* IMAGE */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-xl font-medium mb-3 group-hover:underline underline-offset-4">
                  {blog.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-6 text-sm font-medium text-foreground/70 group-hover:text-foreground transition">
                  Read article →
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}