import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-white mb-4">CloudAGI</h3>
            <p className="text-sm text-gray-400">
              Strategic AI consultancy turning complex technology into measurable business results.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-gray-400 hover:text-accent-blue transition">Agentic Workflow Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent-blue transition">Custom Tool Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent-blue transition">Secure Agent Sandbox</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent-blue transition">Team Upskilling</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-accent-blue transition">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-accent-blue transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent-blue transition">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-blue transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-white">contact@cloudagi.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mt-3">Social</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-accent-blue transition">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-accent-blue transition">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border pt-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} CloudAGI. All rights reserved. | Execution before hype.
          </p>
        </div>
      </div>
    </footer>
  );
}
