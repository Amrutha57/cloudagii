import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CloudAGI – Strategic AI Consultancy for SMBs",
  description: "CloudAGI empowers small and medium-sized businesses with intelligent agentic solutions to solve critical problems and drive growth using AI.",
  keywords: ["CloudAGI", "AI consultancy", "agentic solutions", "SMB AI", "business AI", "AI workflows", "strategic AI"],
  openGraph: {
    title: "About CloudAGI – Strategic AI Consultancy for SMBs",
    description: "Empowering SMBs with practical AI agent solutions for measurable business growth.",
    url: "https://cloudagi.com/about",
    siteName: "CloudAGI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CloudAGI – Strategic AI Consultancy for SMBs",
    description: "Strategic AI consultancy bridging business needs and AI complexities for SMBs.",
  },
};

export default function About() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-semibold">About CloudAGI</h1>
        <p className="mt-6 opacity-80 max-w-3xl">
          CloudAGI is a strategic AI consultancy that empowers small and medium-sized businesses (SMBs) to solve critical business problems and drive growth using intelligent agentic solutions.
        </p>
        <p className="mt-4 opacity-80 max-w-3xl">
          We bridge the gap between your business needs and the complexities of artificial intelligence. We don&apos;t just build tech; we design and implement targeted AI agent workflows that increase efficiency, create new capabilities, and deliver a measurable return on investment.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Meet Arya Teja Rudraraju</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          CloudAGI is led by <strong>Arya Teja Rudraraju</strong>, a founder with a rare blend of deep technical expertise and strategic business acumen.
        </p>
        <p className="mt-4 opacity-80 max-w-3xl">
          <strong>Why This Matters to You:</strong><br />
          You get a partner who not only understands the underlying technology but is relentlessly focused on how it can be applied to solve your business problems.
        </p>
        <h3 className="text-xl font-semibold mt-6">Proven Technical Execution:</h3>
        <ul className="mt-4 space-y-2 opacity-80">
          <li><strong>A Builder, Not Just a Theorist:</strong> With experience shipping numerous AI products and proof-of-concepts, Arya has a proven track record of turning ideas into working solutions.</li>
          <li><strong>Full-Stack AI Knowledge:</strong> Expertise ranges from backend development (Python, FastAPI) to UI (Streamlit) and architecting end-to-end AI systems like ChatterBox-TTS.</li>
          <li><strong>Hands-On with Modern Tools:</strong> Constantly testing and implementing with the latest, most effective tools in the agentic AI space.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">Strategic Business Focus:</h3>
        <ul className="mt-4 space-y-2 opacity-80">
          <li><strong>MBA-Informed Approach:</strong> With a background in business analysis, project management, and entrepreneurship, we approach every project with a focus on clear goals, timelines, and measurable ROI.</li>
          <li><strong>Product Mindset:</strong> We don&apos;t just deliver code; we help you design a <em>solution</em> that your team can actually use and that fits into your broader business strategy.</li>
          <li><strong>Thought Leadership:</strong> We are not just users of AI; we are actively shaping the conversation around its practical application, ensuring you get the most current and effective advice.</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Who We Serve</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          Ambitious business leaders and SMB owners who see the potential of AI but are blocked by high costs, a lack of in-house expertise, and strategic uncertainty.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">How We&apos;re Different</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          We are your expert partner, combining deep, hands-on technical experience with a business-first (MBA-informed) approach. Unlike large, expensive consulting firms or disconnected freelancers, we provide practical, cost-effective solutions tailored to your specific business goals. We move fast, start small, and focus on delivering value from day one.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Our Immediate Focus</h2>
        <p className="mt-4 opacity-80 max-w-3xl">
          Establish CloudAGI as the go-to consultancy for SMBs looking to implement their first high-impact AI agentic solution.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold">Our Core Values</h2>
        <ul className="mt-6 space-y-4 opacity-80">
          <li><strong>Business-First, Technology-Second:</strong> We start with your business problem, then find the right AI solution—not the other way around.</li>
          <li><strong>Pragmatic & Action-Oriented:</strong> We prioritize practical, working solutions that deliver value quickly. No theoretical &quot;science projects.&quot;</li>
          <li><strong>Transparent Partnership:</strong> We educate you throughout the process. You&apos;ll understand what we&apos;re building and why, empowering you to own the solution long-term.</li>
          <li><strong>Expertise with Humility:</strong> We are experts in our niche, but we are also honest about limitations and focused on continuous learning.</li>
          <li><strong>ROI-Driven:</strong> Every project is designed to either make you money, save you money, or create a clear strategic advantage.</li>
        </ul>
      </Section>
    </main>
  );
}