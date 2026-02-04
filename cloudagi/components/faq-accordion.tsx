"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    q: string;
    a: string;
    category: string;
}

const faqs: FAQItem[] = [
    {
        category: "Strategic",
        q: "What exactly is an AI agent?",
        a: "An AI agent is more than just a chatbot. It's a smart software assistant capable of understanding goals, planning steps, and taking actions across different tools—like responding to emails, processing data, or managing schedules. Think of it as a virtual employee that works 24/7."
    },
    {
        category: "Strategic",
        q: "What makes AI agents different from traditional automation?",
        a: "Traditional automation follows rigid, 'if-this-then-that' rules and breaks if something unexpected happens. AI agents use Large Language Models (LLMs) to understand context, handle variations, and make intelligent decisions, adapting to new situations without being reprogrammed."
    },
    {
        category: "Technical",
        q: "Do I need technical knowledge to work with CloudAGI?",
        a: "Not at all. We handle the entire engineering stack—from architecting the agent workflows to secure deployment. We also lead 'AI Literacy' training for your team to ensure they know how to interact with and trust their new digital colleagues."
    },
    {
        category: "Technical",
        q: "How long does implementation typically take?",
        a: "We believe in speed. Most pilot projects are operational in 3-5 weeks. We start with a high-impact, low-risk workflow to prove the ROI before scaling the system across your entire organization."
    },
    {
        category: "Security",
        q: "Is my proprietary data secure?",
        a: "Security is our baseline. We build 'Secure Sandboxes' where your data stays on your infrastructure or in private, encrypted environments. We never use your data to train public models, and we implement strict data governance protocols."
    },
    {
        category: "Security",
        q: "What if the AI makes a mistake?",
        a: "We engineer 'Guardrails' into every system. Agents operate within predefined parameters, and we implement 'Human-in-the-Loop' checkpoints for critical tasks. Our agents are designed to flag uncertainty and ask for human verification rather than hallucinating."
    }
];

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", ...new Set(faqs.map(f => f.category))];

    const filteredFaqs = activeCategory === "All"
        ? faqs
        : faqs.filter(f => f.category === activeCategory);

    return (
        <section className="relative py-24 bg-dark-bg border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-400">Everything you need to know about implementing AI agents.</p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setOpenIndex(null);
                            }}
                            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq, idx) => {
                        const globalIndex = faqs.findIndex(f => f.q === faq.q);
                        const isOpen = openIndex === globalIndex;

                        return (
                            <motion.div
                                key={globalIndex}
                                initial={false}
                                className={`glass rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? "border-blue-500/50 shadow-glow-blue" : "border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-xl font-bold transition-all duration-300 ${isOpen ? "text-blue-400" : "text-white group-hover:text-blue-200"}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 ml-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-180 bg-blue-600 border-blue-600 text-white" : "rotate-0 text-gray-500"}`}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-0">
                                                <div className="border-t border-white/5 pt-6">
                                                    <p className="text-gray-400 leading-relaxed text-lg">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Unanswered Section */}
                <div className="mt-20 p-10 glass rounded-3xl border border-white/5 text-center bg-gradient-to-br from-blue-500/5 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-4">Didn&apos;t find what you&apos;re looking for?</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our AI strategy sessions are designed to answer specific questions regarding your unique business infrastructure.</p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-2xl"
                    >
                        Ask a Specific Question
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
