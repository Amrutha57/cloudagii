"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  // Blog content mapping
  const blogContent: Record<string, any> = {
    blog1: {
      title: "What is an AI Agent and How Can It Save Your Business 10 Hours a Week?",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "AI Fundamentals",
      content: [
        "If you've been following the AI revolution, you've probably heard the term 'AI agent' thrown around. But what exactly is an AI agent, and more importantly, how can it actually save your business time and money?",
        "An AI agent is a software system that can understand a goal, break it down into steps, and execute those steps—often using tools and data—to achieve that goal without being explicitly told how to do each step.",
        "Unlike traditional chatbots that just respond to user input, AI agents can take actions, make decisions, and interact with your existing systems (CRM, email, databases, etc.) to get things done.",
        "Imagine you run an e-commerce business. Every day, your support team receives dozens of emails. A human manually reads each one, categorizes it (billing issue, product question, refund request), and routes it to the right department.",
        "An AI agent can do all of this automatically. It reads the email, understands the intent, pulls relevant customer data from your system, and either resolves it immediately or routes it with full context to the right team. Result: Your support team saves hours every week.",
        "Not all automation is created equal. AI agents save time, eliminate new hiring needs, work 24/7, and deliver consistency that humans can't match.",
        "The key is to identify your biggest bottleneck—the task that eats the most time and has the clearest ROI. Don't try to automate everything at once. Start small, prove the value, and scale from there.",
        "Ready to explore what AI agents could do for your business? Let's talk."
      ]
    },
    blog2: {
      title: "5 Workflow Automations That ROI in Under 30 Days",
      date: "Feb 3, 2025",
      readTime: "6 min read",
      category: "Automation",
      content: [
        "Not all automation projects are created equal. Some take months to implement, cost thousands, and deliver results years down the line. But others deliver measurable ROI within weeks.",
        "Stop having your sales team qualify unqualified leads. Set up an AI workflow that scores inbound leads, segments them, and triggers personalized email sequences. ROI: 2-3 weeks (instant time savings, faster deal velocity)",
        "Manual invoice processing is a black hole of time. Automate extraction of invoice data, matching to POs, and routing for approval. ROI: 2-3 weeks (direct cost savings per invoice processed)",
        "Not all support tickets are equal. Route complex issues to experts, auto-resolve FAQs, and pull customer context automatically. ROI: 1-2 weeks (immediate time savings)",
        "Copy-pasting between spreadsheets and systems? Eliminate it. Automate data flow from forms, emails, or PDFs into your CRM/database. ROI: 2-4 weeks (massive time savings)",
        "No more email ping-pongs. Set up an AI agent that handles calendar coordination and automatically sends follow-up reminders with next steps. ROI: 1-2 weeks (direct time savings)",
        "All of these have one thing in common: they're repetitive, rule-based, and high-volume. These are AI agent sweet spots.",
        "Which process eats your team's time? Let's identify your fastest ROI automation opportunity."
      ]
    },
    blog3: {
      title: "Why Your Custom AI Tool Needs a Sandbox (And What That Means)",
      date: "Feb 10, 2025",
      readTime: "5 min read",
      category: "Security",
      content: [
        "You've decided to build a custom AI tool to solve a specific business problem. Great decision. But here's the critical question: how do you ensure it doesn't accidentally break your existing systems or expose sensitive data?",
        "A sandbox is an isolated environment where your AI tool can test actions and access data without touching your production systems. Think of it like a practice range before going live.",
        "Risk mitigation: Test behavior before it affects real customers. Data protection: Keep sensitive data separate from experimental AI actions. Compliance: Meets regulatory requirements for AI governance. Confidence: Your team can trust the tool because it's been safely tested.",
        "Imagine you're building an AI tool to auto-respond to customer emails. Without a sandbox, a bug could send automated responses to every email in your history. With a sandbox, you test the logic on duplicate data first, catch the bug, fix it, and only then go live.",
        "A proper sandbox includes mirrored data, test APIs, and approval workflows. Your AI agent learns in the sandbox, and only after passing your tests do actions go to production.",
        "Your AI tool is powerful. Make sure it's safely powerful."
      ]
    },
    blog4: {
      title: "AI Literacy for Your Team: Why Training Matters (And What to Cover)",
      date: "Feb 20, 2025",
      readTime: "7 min read",
      category: "Training",
      content: [
        "You've just deployed an amazing AI tool. Your team gets it. Your processes are cleaner. ROI is tracking above target. Then one day, an employee tries something weird, breaks the agent, and suddenly everyone's skeptical about the whole thing.",
        "Just because an AI tool exists doesn't mean your team knows how to use it effectively. Or what it can actually do. Or what NOT to ask it to do.",
        "Clear, simple explanation of what the AI agent does. Not the technical architecture—just: 'This agent handles customer emails and routes them to the right team.'",
        "Step-by-step workflows. Real examples from your business. Hands-on practice.",
        "What it can't do. What requires human oversight. When to escalate. This prevents misuse and builds realistic expectations.",
        "What data the agent accesses. Why it's safe. What they shouldn't feed it. Compliance considerations for your industry.",
        "How to report issues. How improvements get made. Make sure they know the agent improves over time with feedback.",
        "Teams that get proper training adopt the tool faster, use it more effectively, and don't break things trying random experiments. That's money in the bank.",
        "Your AI tool is only as good as your team's understanding of it."
      ]
    },
    blog5: {
      title: "From Proof of Concept to Production: A 6-Week Implementation Roadmap",
      date: "Feb 28, 2025",
      readTime: "9 min read",
      category: "Implementation",
      content: [
        "You've decided to build an AI agent for your business. You've seen proof of concept that it works. But how do you actually get from 'this might work' to 'this is now part of our daily operations'?",
        "Week 1-2: Map out exactly what the agent does. Define its inputs, outputs, and edge cases. Document the workflow it replaces. This is your blueprint. Define success metrics and KPIs. Identify data sources and system integrations needed. Plan sandbox environment and testing approach.",
        "Week 3: Build the agent and connect it to your systems. This is where the technical work happens—API integrations, database connections, error handling.",
        "Week 4: Run through real scenarios in the sandbox. Does it handle edge cases? Are outputs formatted correctly? Does it integrate properly with your systems?",
        "Week 5: Prepare your team. What will their workflow look like? How do they report issues? What are the agent's limitations?",
        "Week 6: Go live. Start with limited use or limited volume, then scale. Monitor performance, track metrics, and address issues quickly.",
        "Don't rush the design phase. Don't skip testing. Don't launch without training your team. The 6 weeks of structure saves months of problems down the road."
      ]
    },
    blog6: {
      title: "How Much Does a Custom AI Agent Actually Cost?",
      date: "Mar 8, 2025",
      readTime: "6 min read",
      category: "Business",
      content: [
        "You know an AI agent could save your business time and money. But before you commit, you want to know: what's this going to cost?",
        "A custom AI agent typically costs $10K-$50K depending on complexity. Most see ROI within 2-4 months.",
        "Complexity: Simple agent that reads data and sends emails? Lower cost. Complex agent that needs to make decisions, access multiple systems, and handle edge cases? Higher cost.",
        "Each system your agent needs to connect to adds time. One integration vs. five integrations is a big difference.",
        "High-volume processing requires more robust error handling and monitoring. That adds cost but also value.",
        "Healthcare, finance, or regulated industries? Security costs more. But the liability of NOT securing it properly costs way more.",
        "Do we just build it and hand it off? Or do we train your team and stick around for support? That affects price too.",
        "Let's say your team spends 40 hours per month on the task an AI agent will handle. At a $50/hour fully-loaded cost, that's $2,000/month you're currently spending. If the agent costs $30K, you break even in 15 months. But most of our clients see 50-60% time savings, not 100%, AND the quality improves. So realistic timeline: 10 months to payback.",
        "Start with your biggest pain point. That's where ROI is clearest. Prove the value with one agent, then expand to others.",
        "Good AI agents cost money. Not building them costs more."
      ]
    }
  };

  const blog = blogContent[slug];

  if (!blog) {
    return (
      <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= ARTICLE HEADER ================= */}
      <section className="relative py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 flex-wrap">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                {blog.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {blog.content.map((paragraph: string, idx: number) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.article>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 bg-black dark:bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement?</h2>
          <p className="text-gray-300 mb-8">Let's discuss which solution is right for your business.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  );
}
