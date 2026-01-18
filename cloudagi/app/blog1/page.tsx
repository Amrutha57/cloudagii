import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designing Query Intelligence – CloudAGI Blog",
  description: "How CloudAGI turns raw human intent into execution-ready AI systems. Learn about practical AI implementation.",
  keywords: ["query intelligence", "AI systems", "CloudAGI", "human intent", "execution-ready AI"],
  openGraph: {
    title: "Designing Query Intelligence – CloudAGI Blog",
    description: "How CloudAGI turns raw human intent into execution-ready AI systems.",
    url: "https://cloudagi.com/blog1",
    siteName: "CloudAGI",
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z", // Add actual date
    authors: ["CloudAGI Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing Query Intelligence – CloudAGI Blog",
    description: "How CloudAGI turns raw human intent into execution-ready AI systems.",
  },
};

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

          {/* ================= CONTENTS (LEFT) ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="rounded-xl border border-border bg-muted p-6">
              <h4 className="text-base font-semibold mb-5">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-muted-foreground hover:text-foreground">
                  Introduction
                </a>
                <a href="#problem" className="block text-muted-foreground hover:text-foreground">
                  Why AI systems fail
                </a>
                <a href="#shift" className="block text-muted-foreground hover:text-foreground">
                  The CloudAGI shift
                </a>
                <a href="#system" className="block text-muted-foreground hover:text-foreground">
                  How CloudAGI works
                </a>
                <a href="#why" className="block text-muted-foreground hover:text-foreground">
                  Why it matters
                </a>
                <a href="#belief" className="block text-muted-foreground hover:text-foreground">
                  Why work with CloudAGI
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">

            {/* HERO IMAGE */}
            <div className="mb-12">
              <Image
                src="/blog1.png"
                alt="Designing Query Intelligence"
                width={1200}
                height={600}
                className="rounded-xl border border-border"
              />
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6" id="intro">
              Designing Query Intelligence
            </h1>
          <p className="text-lg text-muted-foreground mb-2">
                How CloudAGI turns raw intent into execution-ready AI systems
                </p>

            {/* INTRO */}
            <section  className="mb-24">
            
              <p className="text-lg text-muted-foreground mb-6">
                
                🤖 Artificial Intelligence today is powerful, accessible, and everywhere.
                Models can reason, generate content, write code, and assist decisions.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Yet most organizations struggle to use AI in a way that is
                <strong className="text-foreground"> reliable, repeatable, and scalable</strong>.
              </p>

              <p className="text-lg text-muted-foreground">
                At <strong className="text-foreground">CloudAGI</strong>, we discovered that AI does not fail
                because models are weak. It fails because systems are poorly designed.
              </p>
            </section>

            {/* PROBLEM */}
            <section id="problem" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                Why do most AI systems fail in real-world usage?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Many teams treat AI as a tool instead of infrastructure.
                A single prompt is expected to understand intent, fetch context,
                reason correctly, and produce output.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc mb-6">
                <li>Intent is ambiguous or inconsistent</li>
                <li>Context is scattered across tools and documents</li>
                <li>Complex tasks are forced into one-shot prompts</li>
                <li>Failures are hard to debug or reproduce</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                This approach may work for demos, but it breaks down
                when reliability and execution matter.
              </p>
            </section>

            {/* SHIFT */}
            <section id="shift" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                What approach does CloudAGI take instead? 🔄
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI treats AI as infrastructure.
                We design a structured intelligence layer between
                <strong className="text-foreground"> human intent and system execution</strong>.
              </p>

              <p className="text-lg text-muted-foreground">
                This layer ensures clarity before action.
                Every request is contextualized, structured,
                and made execution-ready before any model is invoked.
              </p>
            </section>

            {/* SYSTEM */}
            <section id="system" className="mb-24">
              <h2 className="text-3xl font-semibold mb-10">
                How does the CloudAGI query intelligence system work?
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-medium mb-2">Query Rewriting</h3>
                  <p className="text-lg text-muted-foreground">
                    Incoming requests are rewritten to remove ambiguity.
                    Intent is clarified and assumptions are made explicit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Query Expansion</h3>
                  <p className="text-lg text-muted-foreground">
                    Relevant background context is added carefully,
                    preventing shallow answers or missing information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Query Decomposition</h3>
                  <p className="text-lg text-muted-foreground">
                    Complex problems are broken into smaller,
                    independent units that can be executed reliably.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Query Agents</h3>
                  <p className="text-lg text-muted-foreground">
                    🔁 Agent loops evaluate results, detect gaps,
                    and refine queries iteratively without manual effort.
                  </p>
                </div>
              </div>
            </section>

            {/* WHY */}
            <section id="why" className="mb-24">
              <h2 className="text-3xl font-semibold mb-6">
                Why does this matter for real businesses?
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                When AI systems are designed with structure,
                teams stop fighting unpredictability and start trusting outcomes.
              </p>

              <ul className="text-lg text-muted-foreground space-y-3 ml-6 list-disc">
                <li>AI outputs become predictable and explainable</li>
                <li>Automation scales without chaos</li>
                <li>Systems improve over time instead of degrading</li>
              </ul>
            </section>

            {/* BELIEF */}
            <section id="belief">
              <h2 className="text-3xl font-semibold mb-6">
                Why work with CloudAGI? 🧭
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                CloudAGI works with founders and teams who want
                dependable AI systems — not experiments.
              </p>

              <p className="text-xl font-medium mb-2">
                Execution beats prompts.
              </p>
              <p className="text-xl font-medium">
                Systems beat tools.
              </p>

              <p className="text-lg text-muted-foreground mt-6">
                If you care about clarity, reliability,
                and long-term execution, CloudAGI is built for you.
              </p>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
