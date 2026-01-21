import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">CloudAGI</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Strategic AI consultancy turning complex technology into measurable business results.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
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
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Agentic Workflow Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Custom Tool Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Secure Agent Sandbox
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Team Upskilling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:contact@cloudagi.com"
                  className="text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@cloudagi.com
                </a>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  Schedule a Call
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} CloudAGI. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Execution before hype. 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
