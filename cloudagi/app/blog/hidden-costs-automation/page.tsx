import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hidden Costs of Not Automating – CloudAGI Blog",
  description: "What's your business losing every day by not automating repetitive processes? Let's do the math.",
  keywords: ["automation costs", "business efficiency", "productivity loss", "ROI calculation", "process automation"],
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
                  The cost of manual work
                </a>
                <a href="#labor" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Labor cost multiplier
                </a>
                <a href="#error" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Cost of errors
                </a>
                <a href="#opportunity" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  Opportunity cost
                </a>
                <a href="#math" className="block text-gray-300/400 hover:text-accent-blue transition-colors">
                  The math
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">
            {/* HERO IMAGE */}
            <div className="mb-12">
              <div className="rounded-xl border border-border bg-gradient-to-br from-slate-900 to-slate-950 h-96 flex items-center justify-center">
                <span className="text-6xl">💰</span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6" id="intro">
              The Hidden Costs of Not Automating
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              What's your business losing every day by not automating repetitive processes?
            </p>

            {/* METADATA */}
            <div className="flex gap-6 mb-12 text-sm text-muted-foreground">
              <span>Dec 18, 2024</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>Economics</span>
            </div>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-muted-foreground mb-6">
                Here's what most business owners don't realize: <strong className="text-foreground">The biggest cost of your business isn't always what you're paying for directly. It's what you're not paying for, but losing anyway.</strong>
              </p>

              <p className="text-lg text-muted-foreground">
                Every manual process your team handles every day is costing you money. Not in obvious ways. In hidden ways.
              </p>
            </section>

            {/* LABOR COST */}
            <section id="labor" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The Visible Cost: Labor Hours</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Let's start with what's easy to see: time.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Imagine one of your team members spends 2 hours a day on manual data entry, email processing, or report generation. That doesn't sound like much, right?
              </p>

              <div className="bg-muted border border-border rounded-lg p-6 my-8">
                <p className="text-lg font-semibold mb-4">Here's the math:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>2 hours/day × 5 days/week = 10 hours/week</li>
                  <li>10 hours/week × 52 weeks = 520 hours/year</li>
                  <li>At $50/hour fully-loaded cost = <strong className="text-foreground">$26,000/year</strong></li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground">
                For a 10-person team with similar manual work? <strong className="text-foreground">$260,000/year gone to repetitive tasks.</strong>
              </p>
            </section>

            {/* ERROR COSTS */}
            <section id="error" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The Invisible Cost: Errors</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Humans make mistakes. When a team member manually processes 100 invoices a day, even a 1% error rate means 1 bad invoice a day.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                That error costs you:
              </p>

              <ul className="space-y-4 text-lg text-muted-foreground mb-8">
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">•</span>
                  <span><strong className="text-foreground">Time to fix it.</strong> Someone has to find it, correct it, follow up. That's another hour of work.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">•</span>
                  <span><strong className="text-foreground">Customer friction.</strong> Invoicing errors damage relationships and create friction.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground font-bold">•</span>
                  <span><strong className="text-foreground">Bigger mistakes.</strong> A missed payment date. A misrouted order. A compliance violation. These compound.</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground">
                Automation reduces human error dramatically. Most automated systems are 99.9% accurate.
              </p>
            </section>

            {/* OPPORTUNITY COST */}
            <section id="opportunity" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The Real Cost: Opportunity Loss</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                This is the big one nobody talks about.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                If your team spends 10 hours a week on manual, repetitive work, that's 10 hours they're <strong className="text-foreground">not spending on:</strong>
              </p>

              <ul className="space-y-3 text-lg text-muted-foreground mb-8">
                <li>• Selling to new customers</li>
                <li>• Improving the product</li>
                <li>• Optimizing processes</li>
                <li>• Strategic planning</li>
                <li>• Building customer relationships</li>
              </ul>

              <p className="text-lg text-muted-foreground">
                What would a top salesperson accomplish with an extra 10 hours a week? How many new customer relationships? How much additional revenue?
              </p>

              <p className="text-lg text-muted-foreground mt-6">
                For many businesses, that's not $26,000. That's $100,000+ in lost revenue opportunity per team member per year.
              </p>
            </section>

            {/* THE MATH */}
            <section id="math" className="mb-24">
              <h2 className="text-3xl font-bold mb-6">The Total Cost Calculation</h2>
              
              <div className="bg-muted border border-border rounded-lg p-8 my-8">
                <p className="text-lg font-semibold mb-6">For a typical 10-person SMB:</p>
                <ul className="space-y-4 text-lg">
                  <li className="flex justify-between">
                    <span>Direct labor cost (10 people × 520 hrs/yr)</span>
                    <strong className="text-foreground">$260,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Error costs & rework</span>
                    <strong className="text-foreground">$50,000</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Opportunity cost (conservative)</span>
                    <strong className="text-foreground">$300,000</strong>
                  </li>
                  <li className="border-t border-border pt-4 flex justify-between">
                    <span className="font-bold">Total annual cost of manual processes</span>
                    <strong className="text-foreground text-xl">$610,000+</strong>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground">
                Most automation solutions pay for themselves in 3-6 months. After that, it's pure savings and productivity gains.
              </p>
            </section>

            {/* CTA */}
            <section className="p-8 border border-border rounded-lg bg-muted">
              <h3 className="text-2xl font-bold mb-4">What's your business losing?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let's calculate your specific opportunity cost and show you what automation could unlock.
              </p>
              <a href="/contact" className="inline-flex px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-all">
                Calculate your savings →
              </a>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
