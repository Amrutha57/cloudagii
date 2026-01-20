import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Measure AI Agent ROI – CloudAGI Blog",
  description: "A practical framework for calculating true ROI on AI agent implementations and proving business value.",
  keywords: ["ROI calculation", "AI metrics", "business metrics", "measurement framework", "AI value", "agentic AI"],
  openGraph: {
    title: "How to Measure AI Agent ROI – CloudAGI",
    description: "Practical ROI framework for measuring AI agent business value.",
    url: "https://cloudagi.com/blog/measure-ai-roi",
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["CloudAGI Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Measure AI Agent ROI – CloudAGI Blog",
    description: "Calculate and prove the business value of AI agents.",
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
                  Why measurement matters
                </a>
                <a href="#framework" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  The ROI framework
                </a>
                <a href="#metrics" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Key metrics
                </a>
                <a href="#formula" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  ROI formula
                </a>
                <a href="#tracking" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Tracking over time
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">
            {/* HERO IMAGE */}
            <div className="mb-12">
              <div className="rounded-xl border border-border bg-linear-to-br from-slate-900 to-slate-950 h-96 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6" id="intro">
              How to Measure AI Agent ROI
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A practical framework for calculating true ROI on AI agent implementations and proving business value.
            </p>

            {/* METADATA */}
            <div className="flex gap-6 mb-12 text-sm text-muted-foreground">
              <span>Dec 15, 2024</span>
              <span>•</span>
              <span>11 min read</span>
              <span>•</span>
              <span>Metrics</span>
            </div>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-muted-foreground mb-6">
                You've implemented an AI agent. It's working. But now your leadership asks the question every business owner asks: <strong className="text-foreground">"What's the ROI?"</strong>
              </p>

              <p className="text-lg text-muted-foreground">
                The problem: Most businesses don't have a clear framework for measuring AI ROI. They guess. They estimate. They hope.
              </p>
            </section>

            {/* FRAMEWORK */}
            <section id="framework" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The Three ROI Categories</h2>
              
              <h3 className="text-2xl font-semibold mb-4">1. Cost Reduction (The Easiest to Measure)</h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                This is when an AI agent automates work your team is already doing, saving direct labor costs.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> An AI agent processes customer support emails. It handles 70% of common questions automatically. Your support team now spends 20 fewer hours per week on routine email responses.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                20 hours/week × 50 weeks/year × $40/hour = $40,000 in annual labor savings.
              </p>

              <h3 className="text-2xl font-semibold mb-4">2. Revenue Increase (The Most Valuable)</h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                This is when an AI agent enables your team to do more of what drives revenue.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Example:</strong> Your sales team now spends 5 hours per week on AI-generated lead research instead of manual data gathering. That extra time lands 2 more deals per month. Average deal value: $5,000.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                2 deals/month × 12 months × $5,000 = $120,000 in additional revenue.
              </p>

              <h3 className="text-2xl font-semibold mb-4">3. Error Reduction & Quality (The Hardest to Measure, But Real)</h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                This is when an AI agent reduces costly errors or improves quality.
              </p>

              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Example:</strong> An AI agent reviews invoices for accuracy. It catches errors before they reach customers, reducing payment disputes by 60%. Each resolved dispute costs $500 in time and customer friction.
              </p>
            </section>

            {/* METRICS */}
            <section id="metrics" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Key Metrics to Track</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Cost Reduction:</h3>
                  <ul className="space-y-2 text-lg text-muted-foreground">
                    <li>• Hours saved per week</li>
                    <li>• Cost per hour (fully-loaded labor cost)</li>
                    <li>• Tasks automated / total tasks</li>
                    <li>• Error rate reduction</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">For Revenue Increase:</h3>
                  <ul className="space-y-2 text-lg text-muted-foreground">
                    <li>• Additional deals closed</li>
                    <li>• Average deal value</li>
                    <li>• Time freed up for high-value work</li>
                    <li>• Customer acquisition rate improvement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">For Quality/Error Reduction:</h3>
                  <ul className="space-y-2 text-lg text-muted-foreground">
                    <li>• Error rate before/after</li>
                    <li>• Cost per error avoided</li>
                    <li>• Customer satisfaction improvement</li>
                    <li>• Compliance violations prevented</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FORMULA */}
            <section id="formula" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The ROI Formula</h2>
              
              <div className="bg-muted border border-border rounded-lg p-8 my-8">
                <p className="text-lg font-semibold mb-6">ROI = (Gains - Costs) / Costs × 100</p>
                
                <div className="space-y-4 text-lg">
                  <div>
                    <p className="font-semibold mb-2">Gains include:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Labor hours saved × hourly cost</li>
                      <li>• Additional revenue from new work</li>
                      <li>• Error reduction value</li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold mb-2">Costs include:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• AI implementation cost</li>
                      <li>• Monthly subscription/usage fees</li>
                      <li>• Training and setup time</li>
                      <li>• Maintenance and updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Example calculation:</strong>
              </p>

              <div className="bg-muted border border-border rounded-lg p-6 my-6">
                <ul className="space-y-2 text-lg">
                  <li className="flex justify-between">
                    <span>Labor savings</span>
                    <strong className="text-foreground">$40,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Revenue increase</span>
                    <strong className="text-foreground">$120,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Error prevention</span>
                    <strong className="text-foreground">$15,000</strong>
                  </li>
                  <li className="border-t border-border pt-2 flex justify-between">
                    <span className="font-semibold">Total gains</span>
                    <strong className="text-foreground text-lg">$175,000</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-muted border border-border rounded-lg p-6 my-6">
                <ul className="space-y-2 text-lg">
                  <li className="flex justify-between">
                    <span>Implementation cost</span>
                    <strong className="text-foreground">$15,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Annual subscription</span>
                    <strong className="text-foreground">$5,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Maintenance (estimated)</span>
                    <strong className="text-foreground">$3,000</strong>
                  </li>
                  <li className="border-t border-border pt-2 flex justify-between">
                    <span className="font-semibold">Total costs (year 1)</span>
                    <strong className="text-foreground text-lg">$23,000</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-950/20 border border-blue-900/50 rounded-lg p-6">
                <p className="text-lg">
                  <strong className="text-foreground">ROI = ($175,000 - $23,000) / $23,000 × 100 = 660% ROI</strong>
                </p>
                <p className="text-lg text-muted-foreground mt-2">Payback period: ~1.5 months</p>
              </div>
            </section>

            {/* TRACKING */}
            <section id="tracking" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">Tracking ROI Over Time</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                ROI isn't a one-time calculation. It compounds over time.
              </p>

              <ul className="space-y-4 text-lg text-muted-foreground mb-8">
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">Month 1-3:</span>
                  <span>Implementation phase. Costs are high, gains are emerging.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">Month 4-6:</span>
                  <span>System is live. Labor savings and revenue increases materialize.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">Month 7+:</span>
                  <span>Compounding benefits. You've paid back the investment. Everything else is profit.</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground">
                Track these metrics weekly:
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>• Hours the AI agent handles automatically</li>
                <li>• Error rate (before vs. after)</li>
                <li>• Revenue generated from freed-up time</li>
                <li>• Cost of system vs. gains</li>
              </ul>
            </section>

            {/* CTA */}
            <section className="p-8 border border-border rounded-lg bg-muted">
              <h3 className="text-2xl font-bold mb-4">Let's calculate your AI ROI</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Share your specific challenges and we'll show you the projected ROI for your business.
              </p>
              <a href="/contact" className="inline-flex px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-all">
                Get your ROI analysis →
              </a>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
