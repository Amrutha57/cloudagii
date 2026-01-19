import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why SMBs Fail at AI Implementation – CloudAGI Blog",
  description: "Understanding the common pitfalls and how to avoid them when implementing AI agents in your business.",
  keywords: ["SMB AI implementation", "AI adoption", "business challenges", "AI agents", "implementation strategy"],
};

export default function BlogPage() {
  return (
    <main className="bg-dark-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
          {/* ================= CONTENTS (LEFT) ================= */}
          <aside className="hidden lg:block sticky top-28 h-fit">
            <div className="glass rounded-xl p-6">
              <h4 className="text-base font-semibold mb-5 text-white">Contents</h4>
              <nav className="space-y-4 text-sm">
                <a href="#intro" className="block text-gray-400 hover:text-accent-blue transition-colors">
                  Why SMBs struggle
                </a>
                <a href="#mistake1" className="block text-gray-400 hover:text-accent-blue transition-colors">
                  Mistake 1: Wrong tools
                </a>
                <a href="#mistake2" className="block text-gray-400 hover:text-accent-blue transition-colors">
                  Mistake 2: No strategy
                </a>
                <a href="#mistake3" className="block text-gray-400 hover:text-accent-blue transition-colors">
                  Mistake 3: Resistance
                </a>
                <a href="#solution" className="block text-gray-400 hover:text-accent-blue transition-colors">
                  The right approach
                </a>
              </nav>
            </div>
          </aside>

          {/* ================= BLOG CONTENT ================= */}
          <article className="max-w-3xl">
            {/* HERO IMAGE */}
            <div className="mb-12">
              <div className="rounded-xl border border-dark-border bg-linear-to-br from-dark-card to-dark-bg h-96 flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold tracking-tight mb-6 text-white" id="intro">
              Why SMBs Fail at AI Implementation
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Understanding the common pitfalls and how to avoid them when implementing AI agents in your business
            </p>

            {/* METADATA */}
            <div className="flex gap-6 mb-12 text-sm text-gray-400">
              <span>Dec 20, 2024</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>Strategy</span>
            </div>

            {/* INTRO */}
            <section className="mb-24">
              <p className="text-lg text-gray-300 mb-6">
                You've read the headlines. AI is transforming businesses. Your competitors are exploring it. You know you need to move.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                But here's what we see: <strong className="text-white">Most SMBs start AI projects and never finish them. They spend money, waste time, and end up frustrated.</strong>
              </p>

              <p className="text-lg text-gray-300">
                It's not because AI doesn't work. It's because SMBs make predictable, avoidable mistakes.
              </p>
            </section>

            {/* MISTAKE 1 */}
            <section id="mistake1" className="mb-24">
              <h2 className="text-3xl font-bold mb-6 text-white">The Three Mistakes</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">1. Buying the Wrong Tools (Then Wondering Why They Don't Work)</h3>
              
              <p className="text-lg text-gray-300 mb-6">
                The biggest trap: Chasing the latest AI hype. Your team reads about ChatGPT, Claude, or whatever tool just got funded. You buy licenses. Everyone expects magic.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                But here's the truth: <strong className="text-white">General-purpose AI tools don't understand your business.</strong> They're not designed for your specific workflows, your data, your pain points.
              </p>

              <p className="text-lg text-gray-300">
                You end up with powerful tools that don't solve anything real. Your team gets frustrated. The licenses expire unused.
              </p>
            </section>

            {/* MISTAKE 2 */}
            <section id="mistake2" className="mb-24">
              <h3 className="text-2xl font-semibold mb-4 text-white">2. No Strategic Foundation (Hoping AI Will Fix Problems It Can't Solve)</h3>
              
              <p className="text-lg text-gray-300 mb-6">
                Many SMBs approach AI reactively. Something is broken, so they throw AI at it. No clear goal. No understanding of what success looks like.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                AI is a tool, not a miracle. <strong className="text-white">It amplifies good processes and bad ones alike.</strong> If your workflow is broken, AI just makes it faster and more broken.
              </p>

              <p className="text-lg text-gray-300">
                The right approach: Start with your problem. What decision is costing you money or time? What process is slowing you down? Then design AI to solve that specific thing.
              </p>
            </section>

            {/* MISTAKE 3 */}
            <section id="mistake3" className="mb-24">
              <h3 className="text-2xl font-semibold mb-4 text-white">3. No Change Management (Ignoring the Human Side)</h3>
              
              <p className="text-lg text-gray-300 mb-6">
                You implement a shiny new AI system. Your team sees it as a threat to their jobs. They don't use it. It collects dust.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                People fear what they don't understand. <strong className="text-white">Successful AI adoption requires clear communication about what the tool is doing, why it matters, and how it helps them.</strong>
              </p>

              <p className="text-lg text-gray-300">
                When people see that AI is doing the tedious work so they can focus on high-value work, adoption happens naturally.
              </p>
            </section>

            {/* SOLUTION */}
            <section id="solution" className="mb-24">
              <h2 className="text-3xl font-bold mb-6 text-white">The Winning Approach</h2>
              
              <p className="text-lg text-gray-300 mb-6">
                Avoid these mistakes:
              </p>

              <ul className="space-y-4 text-lg text-gray-300 mb-6">
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold">1.</span>
                  <span><strong className="text-white">Start with a single high-impact use case.</strong> Don't boil the ocean. Prove value first with one clear problem. Then scale.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold">2.</span>
                  <span><strong className="text-white">Design for your business, not for the tool.</strong> What does your business need? Then find or build the tool to match.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-blue font-bold">3.</span>
                  <span><strong className="text-white">Involve your team early.</strong> Let them see what's coming. Answer their concerns. Show them how it makes their work better.</span>
                </li>
              </ul>

              <p className="text-lg text-gray-300">
                This is exactly what we do at CloudAGI. We help SMBs skip the mistakes and go straight to winning implementations.
              </p>
            </section>

            {/* CTA */}
            <section className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to implement AI the right way?</h3>
              <p className="text-lg text-gray-300 mb-6">
                We'll help you identify your highest-impact AI use case and build a strategic roadmap.
              </p>
              <a href="/contact" className="inline-flex px-6 py-3 bg-gradient-blue text-white font-medium rounded-lg hover:shadow-glow-blue transition-all">
                Start a conversation →
              </a>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
