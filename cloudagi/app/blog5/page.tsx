"use client";

import Image from "next/image";

export default function BlogProductionReliabilityPage() {
  return (
    <main className="bg-dark-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* ================= CONTENTS (LEFT) ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="rounded-xl border border-dark-border glass p-6">
              <h4 className="text-base font-semibold mb-5">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Introduction
                </a>
                <a href="#demo" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Why AI works in demos
                </a>
                <a href="#production" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  What breaks in production
                </a>
                <a href="#layer" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  The missing system layer
                </a>
                <a href="#cloudagi" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  How CloudAGI fixes reliability
                </a>
                <a href="#reliable" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  What reliable AI looks like
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">

            {/* HERO IMAGE */}
            <div className="mb-12">
              <Image
                src="/blog5.png"
                alt="Why AI Feels Unreliable in Production"
                width={1200}
                height={600}
                className="rounded-xl border border-border"
              />
            </div>

            {/* TITLE */}
            <h1
              className="text-5xl font-semibold tracking-tight mb-6"
              id="intro"
            >
              The Real Reason AI Feels Unreliable in Production
            </h1>

            <p className="text-xl text-muted-foreground mb-16">
              It’s not the models. It’s the missing system layer.
            </p>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-muted-foreground mb-6">
                Modern AI models are more capable than ever.
                They reason, generate, summarize, and assist with impressive fluency.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Yet when AI moves from demos into real business environments,
                something breaks. Outputs become inconsistent.
                Automation becomes brittle. Trust erodes quickly.
              </p>

              <p className="text-lg text-muted-foreground">
                At <strong className="text-foreground">CloudAGI</strong>,
                we’ve learned that AI doesn’t fail because models are weak —
                it fails because production systems are poorly designed.
              </p>
            </section>

            {/* DEMO */}
            <section id="demo" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                Why does AI look impressive in demos?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Demos are controlled environments.
                They rely on a single prompt, a narrow task,
                and ideal assumptions.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>Clear intent</li>
                <li>Fresh context</li>
                <li>No dependencies on other systems</li>
                <li>No long-term memory or state</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                In these conditions, even simple setups can appear intelligent.
              </p>
            </section>

            {/* PRODUCTION */}
            <section id="production" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                What actually breaks in production environments?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Real systems introduce complexity that demos ignore.
                Requests vary. Context is incomplete.
                Multiple tools and workflows interact.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>Intent arrives ambiguous or incomplete</li>
                <li>Context lives across CRMs, documents, APIs</li>
                <li>Outputs affect downstream business decisions</li>
                <li>Failures are hard to trace or explain</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                Without structure, AI systems degrade silently.
              </p>
            </section>

            {/* SYSTEM LAYER */}
            <section id="layer" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                The missing system layer most teams ignore
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Most teams treat AI as a tool.
                CloudAGI treats AI as infrastructure.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Between human intent and model execution,
                there must be a coordination layer that enforces structure.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Intent normalization</li>
                <li>Context assembly</li>
                <li>Decision routing</li>
                <li>Execution orchestration</li>
              </ul>
            </section>

            {/* CLOUDAGI */}
            <section id="cloudagi" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                How CloudAGI restores reliability
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI introduces an execution-first system layer
                that coordinates how AI is used across the business.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Instead of prompts firing directly into models,
                all requests flow through a structured intelligence pipeline.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Business intent is captured explicitly</li>
                <li>Context is assembled consistently</li>
                <li>Decisions follow defined logic paths</li>
                <li>Workflows execute predictably</li>
              </ul>
            </section>

            {/* RELIABLE */}
            <section id="reliable">
              <h2 className="text-3xl font-semibold mb-6">
                What reliable AI systems actually feel like
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Reliability changes how teams interact with AI.
                Systems become trusted, not questioned.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>Outputs are explainable</li>
                <li>Failures are traceable</li>
                <li>Automation scales without chaos</li>
                <li>AI improves over time instead of degrading</li>
              </ul>

              <p className="text-xl font-medium mb-2">
                Models don’t create reliability.
              </p>
              <p className="text-xl font-medium">
                Systems do.
              </p>

              <p className="text-lg text-muted-foreground mt-6">
                If AI feels unreliable in your production environment,
                the solution isn’t a better model —
                it’s a better system.
              </p>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
