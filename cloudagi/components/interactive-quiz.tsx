"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function InteractiveQuiz({ isOpen, onClose }: QuizModalProps) {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        goal: "",
        hours: 10,
        department: ""
    });

    const totalSteps = 3;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const reset = () => {
        setStep(1);
        setAnswers({ goal: "", hours: 10, department: "" });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl glass rounded-3xl border border-blue-500/30 overflow-hidden shadow-2xl"
                >
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-blue-500"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>

                    <div className="p-8 sm:p-12">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2 text-center">
                                        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Step 1 of 3</span>
                                        <h2 className="text-3xl font-bold text-white leading-tight">What is your primary goal with AI?</h2>
                                    </div>
                                    <div className="grid gap-3">
                                        {[
                                            { id: "save_time", label: "Save team time on repetitive tasks", icon: "⏰" },
                                            { id: "customer_support", label: "Improve customer response speed", icon: "📧" },
                                            { id: "reduce_costs", label: "Reduce operational overhead", icon: "💰" },
                                            { id: "scale", label: "Scale operations without hiring", icon: "🚀" }
                                        ].map((btn) => (
                                            <button
                                                key={btn.id}
                                                onClick={() => { setAnswers({ ...answers, goal: btn.label }); handleNext(); }}
                                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-left text-white font-medium group"
                                            >
                                                <span className="text-2xl">{btn.icon}</span>
                                                <span className="flex-1">{btn.label}</span>
                                                <svg className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2 text-center">
                                        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Step 2 of 3</span>
                                        <h2 className="text-3xl font-bold text-white italic leading-tight">How many hours does your team waste on manual work weekly?</h2>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm text-gray-400">Low waste</span>
                                            <span className="text-4xl font-bold text-blue-400">{answers.hours} hrs</span>
                                            <span className="text-sm text-gray-400">Critical waste</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5"
                                            max="100"
                                            step="5"
                                            value={answers.hours}
                                            onChange={(e) => setAnswers({ ...answers, hours: parseInt(e.target.value) })}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                        />
                                        <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-center">
                                            <p className="text-sm text-blue-100 leading-relaxed">
                                                At your rate, that's roughly <span className="text-white font-bold">{answers.hours * 52} hours</span> lost every year.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleNext}
                                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                                        >
                                            Calculate Potential Savings →
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-8 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-extrabold text-white leading-tight">We found a match!</h2>
                                        <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">
                                            Based on your <span className="text-white font-semibold">{answers.goal.toLowerCase()}</span> goal, we can save your team roughly <span className="text-blue-400 font-bold">{Math.round(answers.hours * 0.8)} hours</span> every single week.
                                        </p>
                                    </div>
                                    <div className="space-y-4 pt-4">
                                        <a
                                            href="https://calendly.com/cloudagi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-5 bg-white text-dark-bg font-extrabold text-xl rounded-2xl hover:bg-blue-50 hover:scale-[1.02] transition-all"
                                        >
                                            Schedule Your Deep Dive
                                        </a>
                                        <button
                                            onClick={onClose}
                                            className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
                                        >
                                            Maybe later, let me keep browsing
                                        </button>
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
