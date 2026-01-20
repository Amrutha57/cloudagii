import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common AI Agent Failure Patterns – CloudAGI Blog",
  description: "The 5 patterns that cause AI agents to fail, and how to design systems to prevent them.",
  keywords: ["AI failures", "agent design", "failure patterns", "risk mitigation", "system design", "agentic systems"],
  openGraph: {
    title: "Common AI Agent Failure Patterns – CloudAGI",
    description: "Avoid the 5 critical failure patterns in AI agent design.",
    url: "https://cloudagi.com/blog/ai-failure-patterns",
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["CloudAGI Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Failure Patterns – CloudAGI Blog",
    description: "5 critical patterns that cause AI agent systems to fail.",
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
              <h4 className="text-base font-semibold mb-5 text-white">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Five failure patterns
                </a>
                <a href="#pattern1" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Pattern 1: Hallucination
                </a>
                <a href="#pattern2" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Pattern 2: Data failure
                </a>
                <a href="#pattern3" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Pattern 3: Silent failures
                </a>
                <a href="#pattern4" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Pattern 4: Scope creep
                </a>
                <a href="#pattern5" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Pattern 5: No guardrails
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">
            {/* HERO IMAGE */}
            <div className="mb-12">
              <div className="rounded-xl border border-border bg-linear-to-br from-slate-900 to-slate-950 h-96 flex items-center justify-center">
                <span className="text-6xl">⚠️</span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6 text-white" id="intro">
              Common AI Agent Failure Patterns
            </h1>
            <p className="text-lg text-gray-300/400 mb-8">
              The 5 patterns that cause AI agents to fail, and how to design systems to prevent them.
            </p>

            {/* METADATA */}
            <div className="flex gap-6 mb-12 text-sm text-gray-300/400">
              <span>Dec 10, 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Best Practices</span>
            </div>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-gray-300/400 mb-6">
                Most AI agent failures aren't about the AI itself. They're about how the system is designed, deployed, and managed.
              </p>

              <p className="text-lg text-gray-300/400">
                Understanding these patterns helps you avoid them.
              </p>
            </section>

            {/* PATTERN 1 */}
            <section id="pattern1" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Pattern 1: Hallucination (Making Stuff Up)</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                AI models sometimes generate plausible-sounding but completely false information. It's confident. It sounds right. But it's wrong.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> Your AI agent pulls customer info. It says customer A purchased on date X. But date X never happened. The AI confabulated it.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">How to prevent:</strong> Never let AI make final decisions alone on critical data. Always validate against ground truth. If the AI needs to reference customer data, have it pull from your database, not from its training data.
              </p>
            </section>

            {/* PATTERN 2 */}
            <section id="pattern2" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Pattern 2: Garbage In, Garbage Out (GIGO)</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                If your AI agent's inputs are messy, incomplete, or wrong, the outputs will be too.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> You feed your agent incomplete sales data (missing contact info, outdated names, wrong email addresses). It processes it anyway. Your outreach campaign uses the bad data and fails.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">How to prevent:</strong> Validate and clean data before feeding it to the AI. If data quality is poor, don't use the AI yet. Fix the data first. Also, monitor data quality continuously.
              </p>
            </section>

            {/* PATTERN 3 */}
            <section id="pattern3" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Pattern 3: Silent Failures (The System Fails and Nobody Knows)</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                The scariest failure type. Your agent stops working. But nobody notices. Decisions get made based on missing data or old assumptions.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> Your AI agent monitors API connectivity. It hits an error. Rather than alerting you, it just stops. For 6 hours, no monitoring happens. Customer outage occurs.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">How to prevent:</strong> Build robust monitoring and alerting. If the AI agent fails, you must know immediately. Log every action. Track error rates. Set up alerts for anomalies.
              </p>
            </section>

            {/* PATTERN 4 */}
            <section id="pattern4" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Pattern 4: Scope Creep (It's Doing More Than It Should)</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                You deploy an AI agent to handle task X. It works so well that you ask it to also handle Y, Z, and A. Suddenly it's doing 10 things instead of 1. Quality degrades. Errors multiply.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> Your AI agent starts by categorizing emails. Then you add email response generation. Then meeting scheduling. Then workflow routing. Now it's fragile. One piece breaks, everything breaks.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">How to prevent:</strong> Keep agents focused. One job per agent. If you need to handle multiple tasks, build multiple specialized agents. Test thoroughly before expanding scope.
              </p>
            </section>

            {/* PATTERN 5 */}
            <section id="pattern5" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Pattern 5: No Guardrails (Letting It Run Wild)</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                You deploy an agent with no safeguards. No spending limits. No approval thresholds. No human oversight for high-risk decisions.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> Your AI agent can auto-approve customer refunds. No limit. One customer requests $50k refund for a $100 order. The agent approves it. You lose money.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">How to prevent:</strong> Always build in guardrails. Define decision boundaries. What can the AI decide autonomously? What needs human approval? Set spending limits. Implement approval workflows for high-risk decisions.
              </p>
            </section>

            {/* SUMMARY */}
            <section className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The Pattern: Insufficient Design Rigor</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                All five patterns share a common root cause: <strong className="text-foreground">Insufficient system design.</strong> People assume AI is magic. They deploy without thinking through edge cases, failure modes, and safeguards.
              </p>

              <p className="text-lg text-muted-foreground">
                Successful AI agents are carefully designed systems with clear boundaries, human oversight, monitoring, and safeguards. This is why we emphasize system design over raw AI capability.
              </p>
            </section>

            {/* CTA */}
            <section className="p-8 border border-border rounded-lg bg-muted">
              <h3 className="text-2xl font-bold mb-4">Avoid these failure patterns</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We design AI systems with safeguards, monitoring, and human oversight built in from day one.
              </p>
              <a href="/contact" className="inline-flex px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-all">
                Let's design it right →
              </a>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
