"use client";

import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* ================= CONTENTS ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="rounded-xl border border-border bg-muted p-6">
              <h4 className="text-base font-semibold mb-5">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-muted-foreground hover:text-foreground">Introduction</a>
                <a href="#failure" className="block text-muted-foreground hover:text-foreground">Why AI ROI fails</a>
                <a href="#mistakes" className="block text-muted-foreground hover:text-foreground">Common mistakes</a>
                <a href="#approach" className="block text-muted-foreground hover:text-foreground">CloudAGI approach</a>
                <a href="#outcomes" className="block text-muted-foreground hover:text-foreground">Business outcomes</a>
                <a href="#partner" className="block text-muted-foreground hover:text-foreground">Why CloudAGI</a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG ================= */}
          <article className="max-w-3xl">

            {/* HERO IMAGE */}
            <div className="mb-12">
              <Image
                src="/blog3.png"
                alt="Why AI ROI Fails"
                width={1200}
                height={600}
                className="rounded-xl border border-border"
              />
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6" id="intro">
              Why Most Businesses Don’t Get ROI from AI
            </h1>

            <p className="text-lg text-muted-foreground mb-16">
              And how CloudAGI designs AI systems that actually pay off
            </p>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-muted-foreground mb-6">
                💸 AI promises efficiency, automation, and growth.
                Yet for many businesses, the return never materializes.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Tools get adopted. Experiments run.
                But revenue stays flat — or complexity increases.
              </p>

              <p className="text-lg text-muted-foreground">
                At <strong className="text-foreground">CloudAGI</strong>,
                we see the same pattern repeatedly:
                AI fails not because it’s weak,
                but because it’s disconnected from business reality.
              </p>
            </section>

            {/* FAILURE */}
            <section id="failure" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                Why does AI ROI break down in practice?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Most AI initiatives start with tools,
                not with measurable business outcomes.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>No clear success metric</li>
                <li>No ownership over AI decisions</li>
                <li>No integration into daily workflows</li>
                <li>No feedback loop to improve performance</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                Without structure, AI becomes a cost center —
                not a growth engine.
              </p>
            </section>

            {/* MISTAKES */}
            <section id="mistakes" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                The most common AI mistakes businesses make
              </h2>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Trying to automate everything at once</li>
                <li>Relying on generic prompts for complex workflows</li>
                <li>Ignoring data quality and context</li>
                <li>Measuring activity instead of impact</li>
              </ul>
            </section>

            {/* APPROACH */}
            <section id="approach" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                How CloudAGI designs for ROI 📈
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI starts with one question:
                <strong className="text-foreground"> “What business problem matters most right now?”</strong>
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Identify a single high-impact workflow</li>
                <li>Design an agentic system around it</li>
                <li>Integrate with existing tools</li>
                <li>Measure results from day one</li>
              </ul>

              <p className="text-lg text-muted-foreground mt-6">
                This approach minimizes risk while maximizing learning and return.
              </p>
            </section>

            {/* OUTCOMES */}
            <section id="outcomes" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                What changes when AI is ROI-driven?
              </h2>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Faster execution with fewer people</li>
                <li>Clear visibility into AI decisions</li>
                <li>Systems that improve over time</li>
                <li>Confidence to scale automation safely</li>
              </ul>
            </section>

            {/* PARTNER */}
            <section id="partner">
              <h2 className="text-3xl font-semibold mb-6">
                Why businesses choose CloudAGI 🧭
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI isn’t a tool vendor.
                We are a strategic AI partner focused on outcomes.
              </p>

              <p className="text-xl font-medium mb-2">ROI beats experimentation.</p>
              <p className="text-xl font-medium">Systems beat tools.</p>

              <p className="text-lg text-muted-foreground mt-6">
                If your goal is real business impact —
                not AI demos —
                CloudAGI is built for you.
              </p>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
