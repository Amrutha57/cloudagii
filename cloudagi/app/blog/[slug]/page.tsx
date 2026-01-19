"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  // Map to actual blog files
  const blogMap: Record<string, string> = {
    "query-intelligence": "blog1",
    "tool-chaos": "blog2",
    "ai-roi": "blog4",
    "production-reliability": "blog5",
    "scaling-ai-tools": "blog6",
    "blog1": "blog1",
    "blog2": "blog2",
    "blog3": "blog3",
    "blog4": "blog4",
    "blog5": "blog5",
    "blog6": "blog6",
  };

  const blogPath = blogMap[slug];

  if (!blogPath) {
    return (
      <main className="bg-dark-bg text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-accent-blue hover:text-accent-cyan transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Dynamically load and render the appropriate blog
  // Note: For SSR compatibility, we'll redirect to the actual blog path
  return (
    <div>
      <meta httpEquiv="refresh" content={`0;url=/blog${blogPath === 'blog1' ? '1' : blogPath === 'blog2' ? '2' : blogPath === 'blog3' ? '3' : blogPath === 'blog4' ? '4' : blogPath === 'blog5' ? '5' : '6'}`} />
      <Link href="/blog" className="text-blue-600 hover:underline">
        Redirecting...
      </Link>
    </div>
  );
}
