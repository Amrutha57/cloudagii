"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center bg-white dark:bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to implement your first high-impact AI agentic solution? Let's start a conversation about your business needs.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM & INFO ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-slate-950 p-8 border border-gray-200 dark:border-slate-800 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
                  <p className="font-medium">Thank you! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="Tell us about your business challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Email</p>
                    <p className="text-lg text-gray-900 dark:text-white font-medium">contact@cloudagi.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Response Time</p>
                    <p className="text-gray-700 dark:text-gray-300">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-slate-800 pt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What to Include</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>✓ What business problem you're trying to solve</li>
                  <li>✓ Your current team size and relevant departments</li>
                  <li>✓ Budget range (even approximate is helpful)</li>
                  <li>✓ Timeline/urgency</li>
                  <li>✓ Any specific tools you use (CRM, ERP, etc.)</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 dark:border-slate-800 pt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Next Steps</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  We'll review your message and reach out within 24 hours with a brief proposal for next steps, which typically includes:
                </p>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm list-decimal list-inside">
                  <li>Initial discovery call (30 mins)</li>
                  <li>Problem analysis</li>
                  <li>Custom quote for your situation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Prefer a Quick Chat?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We can also schedule a 20-minute discovery call to discuss your needs
          </p>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
          >
            Schedule a Call →
          </a>
        </div>
      </section>
    </main>
  );
}