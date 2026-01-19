import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">CloudAGI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Strategic AI consultancy turning complex technology into measurable business results.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Agentic Workflow Design</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Custom Tool Development</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Secure Agent Sandbox</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Team Upskilling</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Contact</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">contact@cloudagi.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-3">Social</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">LinkedIn</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-slate-800 pt-8">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} CloudAGI. All rights reserved. | Execution before hype.
          </p>
        </div>
      </div>
    </footer>
  );
}
