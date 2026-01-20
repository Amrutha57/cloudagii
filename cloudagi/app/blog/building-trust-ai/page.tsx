import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Trust in AI Systems – CloudAGI Blog",
  description: "How to design AI systems that your team trusts, understands, and uses consistently.",
  keywords: ["AI trust", "team adoption", "AI transparency", "change management", "user adoption", "AI agents"],
  openGraph: {
    title: "Building Trust in AI Systems – CloudAGI",
    description: "Design AI systems your team will embrace and trust.",
    url: "https://cloudagi.com/blog/building-trust-ai",
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["CloudAGI Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Trust in AI Systems – CloudAGI Blog",
    description: "Create AI systems your team trusts and adopts.",
  },
};

export default function BlogPage() {
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
                  Why trust matters
                </a>
                <a href="#transparency" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Transparency
                </a>
                <a href="#consistency" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Consistency
                </a>
                <a href="#control" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  User control
                </a>
                <a href="#building" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Building trust
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">
            {/* HERO IMAGE */}
            <div className="mb-12">
              <div className="rounded-xl border border-border bg-linear-to-br from-slate-900 to-slate-950 h-96 flex items-center justify-center">
                <span className="text-6xl">🤝</span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6" id="intro">
              Building Trust in AI Systems
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              How to design AI systems that your team trusts, understands, and uses consistently.
            </p>

            {/* METADATA */}
            <div className="flex gap-6 mb-12 text-sm text-muted-foreground">
              <span>Dec 12, 2024</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Trust</span>
            </div>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-muted-foreground mb-6">
                You deploy an AI agent. It works perfectly in testing. But when your team starts using it, adoption is slow. Some people trust it. Others don't.
              </p>

              <p className="text-lg text-muted-foreground">
                This isn't about the technology. <strong className="text-foreground">It's about trust.</strong> People use tools they trust. They avoid tools they don't understand.
              </p>
            </section>

            {/* TRANSPARENCY */}
            <section id="transparency" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Principle 1: Transparency</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Your team needs to understand what the AI is doing and why.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Poor approach:</strong> "The AI will handle this automatically." ← Nobody knows what's happening.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Better approach:</strong> "The AI analyzes emails, categorizes them by urgency, and flags the top 5 for you to review. Here's exactly what it looks for."
              </p>

              <p className="text-lg text-muted-foreground">
                When people understand the logic, they trust the output.
              </p>
            </section>

            {/* CONSISTENCY */}
            <section id="consistency" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Principle 2: Consistency</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                AI systems that behave unpredictably erode trust fast.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                If your AI agent correctly prioritizes 95% of emails but then randomly misses one, people will second-guess it. They'll go back to doing it manually.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">The solution:</strong> Document the edge cases. If your AI can't handle certain scenarios well, be upfront about it. Better yet, build safeguards so those scenarios are caught by humans.
              </p>

              <p className="text-lg text-muted-foreground">
                Consistent behavior (even with known limitations) builds more trust than perfect-but-unpredictable behavior.
              </p>
            </section>

            {/* CONTROL */}
            <section id="control" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Principle 3: User Control</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                People trust systems they can control.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Poor approach:</strong> Full automation. The AI decides everything.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Better approach:</strong> The AI makes a recommendation. Your team reviews and approves. The system learns from corrections.
              </p>

              <p className="text-lg text-muted-foreground">
                This does two things:
              </p>

              <ul className="space-y-4 text-lg text-muted-foreground mb-8">
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">1.</span>
                  <span>It prevents costly mistakes. AI can hallucinate or misunderstand. Humans catch it.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">2.</span>
                  <span>It builds confidence. People feel in control, not replaced.</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground">
                The best AI systems are human-in-the-loop. Humans make decisions. AI makes them faster and better-informed.
              </p>
            </section>

            {/* BUILDING */}
            <section id="building" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">How CloudAGI Builds Trust</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                We design AI systems with three core principles:
              </p>

              <div className="space-y-6">
                <div className="p-6 border border-border rounded-lg bg-muted">
                  <h3 className="text-lg font-semibold mb-3">Clear decision logic</h3>
                  <p className="text-muted-foreground">Our AI agents show their reasoning. Why did it make this decision? What data did it consider? Your team knows what's happening.</p>
                </div>

                <div className="p-6 border border-border rounded-lg bg-muted">
                  <h3 className="text-lg font-semibold mb-3">Audit trails</h3>
                  <p className="text-muted-foreground">Every decision is logged. If something goes wrong, you can trace back exactly what happened. Transparency builds trust.</p>
                </div>

                <div className="p-6 border border-border rounded-lg bg-muted">
                  <h3 className="text-lg font-semibold mb-3">Human oversight</h3>
                  <p className="text-muted-foreground">High-stakes decisions stay with humans. AI assists and recommends. Humans decide and learn. Over time, confidence grows.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="p-8 border border-border rounded-lg bg-muted">
              <h3 className="text-2xl font-bold mb-4">Build an AI system your team trusts</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We design AI agents with transparency, consistency, and control built in.
              </p>
              <a href="/contact" className="inline-flex px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-all">
                Start a conversation →
              </a>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
