"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlueprintModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BlueprintModal({ isOpen, onClose }: BlueprintModalProps) {
    const [step, setStep] = useState(0); // 0 = Scanning, 1 = Intent, 2 = Metric, 3 = Result
    const [answers, setAnswers] = useState({
        focus: "",
        volume: 50
    });

    useEffect(() => {
        if (isOpen && step === 0) {
            const timer = setTimeout(() => setStep(1), 2200); // Wait for scanning animation
            return () => clearTimeout(timer);
        }
    }, [isOpen, step]);

    const reset = () => {
        setStep(0);
        setAnswers({ focus: "", volume: 50 });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-dark-bg/90 backdrop-blur-xl"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl glass rounded-[2.5rem] border border-blue-500/20 overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.15)] bg-slate-950/50"
                >
                    {/* Glowing background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />

                    <div className="p-8 md:p-12 relative z-10">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <AnimatePresence mode="wait">
                            {/* STEP 0: SCANNING ANIMATION */}
                            {step === 0 && (
                                <motion.div
                                    key="scanning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="relative w-32 h-32 mb-8">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 180, 360],
                                                borderRadius: ["20%", "50%", "20%"]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border-2 border-blue-500/30"
                                        />
                                        <motion.div
                                            animate={{
                                                scale: [1.2, 1, 1.2],
                                                rotate: [360, 180, 0],
                                                borderRadius: ["50%", "20%", "50%"]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border-2 border-indigo-500/30"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Analyzing Business Context</h2>
                                    <div className="flex gap-1">
                                        {[0, 1, 2].map(i => (
                                            <motion.div
                                                key={i}
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                                            />
                                        ))}
                                    </div>
                                    <p className="mt-6 text-sm text-gray-400 font-mono tracking-tighter">INITIALIZING AGENTIC ARCHITECTURE MODULE...</p>
                                </motion.div>
                            )}

                            {/* STEP 1: FOCUS AREA */}
                            {step === 1 && (
                                <motion.div
                                    key="focus"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center">
                                        <h3 className="text-3xl font-extrabold text-white mb-4">Select Optimization Focus</h3>
                                        <p className="text-gray-400">Which department needs the most intelligent leverage?</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { id: "ops", label: "Operations", icon: "⚙️", color: "blue" },
                                            { id: "sales", label: "Sales & CRM", icon: "📈", color: "indigo" },
                                            { id: "support", label: "Customer Support", icon: "💬", color: "cyan" },
                                            { id: "marketing", label: "Marketing Ops", icon: "🎯", color: "purple" }
                                        ].map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => { setAnswers({ ...answers, focus: opt.label }); setStep(2); }}
                                                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left"
                                            >
                                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{opt.icon}</div>
                                                <div className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{opt.label}</div>
                                                <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">Configurable Area</div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: WORK VOLUME */}
                            {step === 2 && (
                                <motion.div
                                    key="metric"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-10"
                                >
                                    <div className="text-center">
                                        <h3 className="text-3xl font-extrabold text-white mb-4">Estimated Workload Intensity</h3>
                                        <p className="text-gray-400">Roughly how many hours are manual in {answers.focus} weekly?</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Minimal</span>
                                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{answers.volume}hr</span>
                                            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">High</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="10"
                                            max="200"
                                            step="10"
                                            value={answers.volume}
                                            onChange={(e) => setAnswers({ ...answers, volume: parseInt(e.target.value) })}
                                            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500 transition-all"
                                        />
                                        <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 text-center">
                                            <p className="text-lg text-blue-100 italic">
                                                “Eliminating this friction could reclaim <span className="text-white font-bold">{(answers.volume * 4.3).toFixed(0)} hours</span> of bandwidth next month.”
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setStep(3)}
                                            className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xl rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:scale-[1.02]"
                                        >
                                            Generate Strategy Blueprint
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: FINAL BLUEPRINT */}
                            {step === 3 && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-10"
                                >
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            Optimal Architecture Locked
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-white leading-none">Your Agent Blueprint is Ready</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-widest">Core Agent</p>
                                            <p className="text-xl font-bold text-white italic">{answers.focus} Architect</p>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                            <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-widest">Est. Efficiency %</p>
                                            <p className="text-xl font-bold text-blue-400 mb-1 tracking-widest">85% - 92%</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <a
                                            href="https://calendly.com/cloudagi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-6 bg-white text-black font-black text-2xl rounded-2xl hover:bg-blue-50 hover:shadow-2xl transition-all text-center hover:scale-[1.02]"
                                        >
                                            Execute Deployment Call
                                        </a>
                                        <p className="text-center text-sm text-gray-500 font-medium tracking-tight">
                                            Your preliminary strategy has been cached. We&apos;ll dive deep into {answers.focus} specifics during the call.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
