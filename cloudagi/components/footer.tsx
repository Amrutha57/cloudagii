import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 section-gap">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300">
              <Logo variant="light" className="h-6" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Strategic AI consultancy turning complex technology into measurable business results. Execution before hype.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-600/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 active-scale"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-600/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 active-scale"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-500 mb-6 text-[11px] font-black uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Agentic Workflow Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Custom Tool Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Secure Agent Sandbox
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Team Upskilling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-500 mb-6 text-[11px] font-black uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-[1px] bg-gray-700 group-hover:bg-blue-500 group-hover:w-3 transition-all duration-300"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-500 mb-6 text-[11px] font-black uppercase tracking-widest">Contact</h4>
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-1">Architecture Desk</p>
                <a
                  href="mailto:contact@cloudagidemo1.vercel.app"
                  className="text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@cloudagidemo1.vercel.app
                </a>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-50 transition-all duration-300 active-scale shadow-2xl shadow-blue-500/10"
                >
                  Start Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
              © {currentYear} CloudAGI. SECURE ARCHITECTURE v1.0
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                All Systems Operational
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
