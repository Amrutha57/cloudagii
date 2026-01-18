"use client";

import Image from "next/image";

export default function BlogScalingAIToolsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* ================= CONTENTS ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="rounded-xl border border-border bg-muted p-6">
              <h4 className="text-base font-semibold mb-5">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-muted-foreground hover:text-foreground">
                  Introduction
                </a>
                <a href="#early" className="block text-muted-foreground hover:text-foreground">
                  Why tools feel powerful early
                </a>
                <a href="#scale" className="block text-muted-foreground hover:text-foreground">
                  What breaks at scale
                </a>
                <a href="#problem" className="block text-muted-foreground hover:text-foreground">
                  The real scaling problem
                </a>
                <a href="#cloudagi" className="block text-muted-foreground hover:text-foreground">
                  How CloudAGI enables scale
                </a>
                <a href="#forward" className="block text-muted-foreground hover:text-foreground">
                  A better way forward
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG ================= */}
          <article className="max-w-3xl">

            {/* HERO IMAGE */}
            <div className="mb-12">
              <Image
                src="/blog6.png"
                alt="Why AI Tools Break at Scale"
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
              Why “Just Using AI Tools” Breaks at Scale
            </h1>

            <p className="text-xl text-muted-foreground mb-16">
              Scaling AI requires systems, not more software
            </p>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-muted-foreground mb-6">
                📈 AI tools are easy to adopt.
                Within days, teams see faster writing,
                quicker analysis, and lighter workloads.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                But as usage grows, something subtle happens.
                Productivity gains plateau.
                Confusion increases.
                Trust begins to erode.
              </p>

              <p className="text-lg text-muted-foreground">
                This isn’t a tooling problem.
                It’s a scaling problem.
              </p>
            </section>

            {/* EARLY */}
            <section id="early" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                Why AI tools feel powerful in the beginning
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Early adoption works because the environment is simple.
                Few users, clear intent, and minimal dependencies.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Clear ownership</li>
                <li>Short feedback loops</li>
                <li>Low coordination cost</li>
                <li>Minimal failure impact</li>
              </ul>
            </section>

            {/* SCALE */}
            <section id="scale" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                What changes as AI adoption scales?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                As more people, workflows, and systems rely on AI,
                the environment becomes non-linear.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Intent varies across teams</li>
                <li>Context becomes fragmented</li>
                <li>Outputs affect downstream decisions</li>
                <li>Failures compound silently</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                Tools were never designed for this level of coordination.
              </p>
            </section>

            {/* PROBLEM */}
            <section id="problem" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                The real scaling problem most teams miss ⚙️
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Scaling AI is not about better prompts
                or switching vendors.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                It’s about introducing a system layer
                that governs how intelligence flows.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Who owns decisions?</li>
                <li>How is context assembled?</li>
                <li>How are failures handled?</li>
                <li>How does the system improve?</li>
              </ul>
            </section>

            {/* CLOUDAGI */}
            <section id="cloudagi" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                How CloudAGI enables AI to scale
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI introduces an execution-first,
                agentic coordination layer.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>Business intent is normalized</li>
                <li>Context is assembled consistently</li>
                <li>Decisions follow defined logic</li>
                <li>Workflows execute predictably</li>
              </ul>

              <p className="text-lg text-muted-foreground mt-6">
                This transforms AI from scattered tools
                into a scalable system.
              </p>
            </section>

            {/* FORWARD */}
            <section id="forward">
              <h2 className="text-3xl font-semibold mb-6">
                A better way forward 🧭
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                The future of AI adoption isn’t about
                adding more tools.
              </p>

              <p className="text-xl font-medium mb-2">
                Tools enable experiments.
              </p>
              <p className="text-xl font-medium">
                Systems enable scale.
              </p>

              <p className="text-lg text-muted-foreground mt-6">
                CloudAGI exists to help teams
                make that transition deliberately.
              </p>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
