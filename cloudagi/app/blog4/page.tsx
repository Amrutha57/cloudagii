import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI ROI Illusion – CloudAGI Blog",
  description: "Why traditional ROI metrics fail for AI agents and how to measure real business impact from agentic automation.",
  keywords: ["AI ROI measurement", "agentic AI", "business metrics", "AI value", "automation ROI", "implementation metrics"],
  openGraph: {
    title: "The AI ROI Illusion – CloudAGI",
    description: "How to properly measure AI agent value beyond traditional ROI metrics.",
    url: "https://cloudagi.com/blog4",
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["CloudAGI Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI ROI Illusion – CloudAGI Blog",
    description: "Rethinking how to measure AI agent success and business impact.",
  },
};

export default function BlogAIROPage() {
  return (
    <main className="bg-dark-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* ================= CONTENTS ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="rounded-xl border border-dark-border glass p-6">
              <h4 className="text-base font-semibold mb-5">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Introduction
                </a>
                <a href="#illusion" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  The ROI illusion
                </a>
                <a href="#failure" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Why AI investments fail
                </a>
                <a href="#system" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  The CloudAGI system layer
                </a>
                <a href="#measurement" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Measuring real ROI
                </a>
                <a href="#decision" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  The execution decision
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">

            {/* HERO IMAGE */}
            <div className="mb-12">
              <Image
                src="/blog4.png"
                alt="Why Most Businesses Don’t Get ROI from AI"
                width={1200}
                height={600}
                className="rounded-xl border border-border"
              />
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6" id="intro">
              Why Most Businesses Don’t Get ROI from AI
            </h1>
            {/* INTRO */}
            <section className="mb-24">
                 <p className="text-xl text-muted-foreground mb-16">
              Tools don’t create value. Systems do.
            </p>
              <p className="text-lg text-muted-foreground mb-6">
                💸 Businesses are spending more on AI than ever before.
                Chatbots, automation tools, copilots, analytics platforms —
                adoption is no longer the problem.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Yet for most teams, AI has not translated into
                <strong className="text-foreground"> measurable revenue, cost reduction, or execution speed</strong>.
              </p>

              <p className="text-lg text-muted-foreground">
                At CloudAGI, we see this pattern repeatedly:
                AI is present everywhere — but value is nowhere.
              </p>
            </section>

            {/* ILLUSION */}
            <section id="illusion" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                The illusion of AI ROI
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Many teams assume that using advanced AI tools
                automatically leads to business impact.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                But activity is not value.
                Generating content, answering questions,
                or automating isolated tasks does not guarantee ROI.
              </p>

              <p className="text-lg text-muted-foreground">
                Without ownership, structure, and feedback loops,
                AI remains an expense — not an asset.
              </p>
            </section>

            {/* FAILURE */}
            <section id="failure" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                Why do most AI investments fail?
              </h2>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>No clear business owner for AI outcomes</li>
                <li>Outputs are inconsistent and hard to trust</li>
                <li>No metrics tied to revenue or cost savings</li>
                <li>AI tools operate in isolation</li>
                <li>Execution depends on manual intervention</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                These failures are not caused by weak models.
                They are caused by missing systems.
              </p>
            </section>

            {/* SYSTEM */}
            <section id="system" className="mb-24">
              <h2 className="text-3xl font-semibold mb-10">
                What does CloudAGI do differently?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI introduces an <strong className="text-foreground">agentic system layer</strong>
                that coordinates intelligence end-to-end.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>Business intent is explicitly defined</li>
                <li>Context is assembled consistently</li>
                <li>Decision logic is centralized</li>
                <li>Execution workflows are standardized</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                Instead of disconnected tools,
                businesses operate a single execution system.
              </p>
            </section>

            {/* MEASUREMENT */}
            <section id="measurement" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                How does real AI ROI become measurable?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                ROI appears when AI outputs directly influence
                business processes — not just ideas.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Faster execution cycles</li>
                <li>Lower operational costs</li>
                <li>Predictable automation</li>
                <li>Systems that scale without chaos</li>
              </ul>
            </section>

            {/* DECISION */}
            <section id="decision">
              <h2 className="text-3xl font-semibold mb-6">
                The real decision businesses must make 🧭
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                The question is no longer whether to use AI.
                The question is whether to keep experimenting —
                or to build systems that execute.
              </p>

              <p className="text-xl font-medium mb-2">
                Tools create activity.
              </p>
              <p className="text-xl font-medium">
                Systems create ROI.
              </p>

              <p className="text-lg text-muted-foreground mt-6">
                CloudAGI exists for teams ready to make that shift.
              </p>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
