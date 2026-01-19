import BlogGrid from "@/components/BlogGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – CloudAGI | AI Systems, Execution & Digital Insights",
  description: "Read CloudAGI's blog on AI systems, execution, and building intelligence that works in production. Insights on practical AI implementation.",
  keywords: ["CloudAGI blog", "AI systems", "digital execution", "AI workflows", "business intelligence"],
  openGraph: {
    title: "Blog – CloudAGI | AI Systems, Execution & Digital Insights",
    description: "Writing on AI systems, execution, and building intelligence that actually works in production.",
    url: "https://cloudagi.com/blog",
    siteName: "CloudAGI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – CloudAGI | AI Systems, Execution & Digital Insights",
    description: "Insights on practical AI and digital systems from CloudAGI.",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            CloudAGI Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Writing on AI systems, execution, and building intelligence that
            actually works in production.
          </p>
        </div>

        {/* BLOG GRID */}
        <BlogGrid />
      </div>
    </main>
  );
}
