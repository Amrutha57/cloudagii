"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Zap, Target, Database, MessageSquare, Clock, ShieldAlert, ChevronRight, CheckCircle2, Cpu, Activity, BarChart3, Binary } from "lucide-react";
import Link from "next/link";

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function InteractiveQuiz({ isOpen, onClose }: QuizModalProps) {
    const [step, setStep] = useState(1);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);
    const [answers, setAnswers] = useState({
        goal: "",
        hours: 15,
        department: ""
    });

    const totalSteps = 3;

    const handleNext = () => {
        if (step === 2) {
            setIsAnalyzing(true);
            setTimeout(() => {
                setIsAnalyzing(false);
                setStep(3);
            }, 2500); // Slightly longer for "processing" feel
        } else if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                {/* Advanced Backdrop with Animated Glows */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
                >
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 100, 0],
                                y: [0, -50, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, -120, 0],
                                y: [0, 80, 0]
                            }}
                            transition={{ duration: 25, repeat: Infinity }}
                            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[150px]"
                        />
                    </div>
                </motion.div>

                {/* Main Command Console */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50, rotateX: -10 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="relative w-full max-w-2xl glass rounded-[2rem] sm:rounded-[3rem] border border-blue-500/30 overflow-hidden shadow-[0_0_120px_rgba(59,130,246,0.2)] bg-slate-950/40 perspective-1000 max-h-[90vh] overflow-y-auto"
                >
                    {/* Futuristic Laser Scanner Effect */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-50 pointer-events-none"
                    />

                    {/* Matrix-like Code Background (Subtle) */}
                    <div className="absolute inset-0 opacity-[0.03] font-mono text-[8px] pointer-events-none select-none p-4 overflow-hidden leading-none uppercase">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={i} className="mb-1">
                                {Math.random().toString(36).substring(2, 15)} PROTOCOL_{i} INITIALIZING...
                                AGENT_ID: {Math.floor(Math.random() * 10000)} ROI_TARGET: {(Math.random() * 100).toFixed(2)}%
                            </div>
                        ))}
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="absolute top-8 left-6 sm:left-12 flex gap-2 z-50">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`h-1.5 rounded-full transition-all duration-500 ${step === s ? "w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "w-2 bg-white/10"
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="p-6 sm:p-14 relative z-10">
                        {/* Close Button with Hover Effect */}
                        <motion.button
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-8 right-6 sm:right-10 text-gray-500 hover:text-white transition-colors p-2.5 bg-white/5 rounded-full border border-white/5 hover:border-white/20"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <AnimatePresence mode="wait">
                            {isAnalyzing ? (
                                <motion.div
                                    key="analyzing"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center space-y-10"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{
                                                rotate: [0, 360],
                                                scale: [1, 1.1, 1],
                                                borderWidth: ["2px", "4px", "2px"]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-32 h-32 border-blue-500/40 rounded-[2rem] border-dashed"
                                        />
                                        <motion.div
                                            animate={{
                                                rotate: [360, 0],
                                                scale: [0.9, 1, 0.9]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-4 border-2 border-indigo-500/30 rounded-full"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Binary className="size-10 text-blue-400 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-[10px] font-black uppercase tracking-widest"
                                        >
                                            Quantum Processing Active
                                        </motion.div>
                                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter font-outfit">
                                            Synthesizing <span className="heading-gradient">Intelligence</span>
                                        </h3>
                                        <div className="max-w-xs mx-auto space-y-2">
                                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ width: ["0%", "45%", "65%", "92%", "100%"] }}
                                                    transition={{ duration: 2.5, times: [0, 0.2, 0.5, 0.8, 1] }}
                                                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                                                />
                                            </div>
                                            <p className="text-[10px] text-gray-500 uppercase font-mono tracking-tighter flex justify-between">
                                                <span>Analyzing friction modules...</span>
                                                <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }}>|</motion.span>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : step === 1 ? (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                    className="space-y-10"
                                >
                                    <div className="space-y-4 text-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mb-2 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                            <Activity className="size-3.5 animate-pulse" /> Diagnostic Module v1.02
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white leading-none italic uppercase tracking-tighter font-outfit">
                                            Target <span className="heading-gradient">Vulnerability</span>
                                        </h2>
                                        <p className="text-gray-400 text-sm max-w-sm mx-auto font-medium leading-relaxed italic">
                                            Select the primary bottleneck causing systemic friction in your current architecture.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { id: "sales", label: "Sales Engine", icon: <Target />, desc: "Lead velocity stall", color: "from-blue-500/20 to-transparent", blur: "bg-blue-500/10" },
                                            { id: "ops", label: "Operations", icon: <Database />, desc: "Manual logic debt", color: "from-indigo-500/20 to-transparent", blur: "bg-indigo-500/10" },
                                            { id: "intel", label: "Intelligence", icon: <Zap />, desc: "Data blackout zones", color: "from-purple-500/20 to-transparent", blur: "bg-purple-500/10" },
                                            { id: "support", label: "Support", icon: <MessageSquare />, desc: "Human agent limits", color: "from-cyan-500/20 to-transparent", blur: "bg-cyan-500/10" }
                                        ].map((btn) => (
                                            <motion.button
                                                key={btn.id}
                                                layout
                                                onMouseEnter={() => setHoveredOption(btn.id)}
                                                onMouseLeave={() => setHoveredOption(null)}
                                                onClick={() => { setAnswers({ ...answers, goal: btn.label }); handleNext(); }}
                                                className={`group relative p-6 rounded-[2rem] bg-white/5 border border-white/5 transition-all outline-none ${hoveredOption === btn.id ? "border-blue-500/50 bg-white/10 scale-[1.02]" : "hover:border-white/20"
                                                    }`}
                                            >
                                                {/* Background Glow */}
                                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] bg-gradient-to-br ${btn.color}`} />

                                                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                                                    <div className={`p-3 rounded-2xl border border-white/10 transition-all duration-300 ${hoveredOption === btn.id ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-slate-900 group-hover:bg-slate-800 text-blue-400"
                                                        }`}>
                                                        {btn.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-black uppercase tracking-tight text-xl leading-none mb-1">{btn.label}</h4>
                                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{btn.desc}</p>
                                                    </div>
                                                </div>

                                                {/* Pulsing indicator when hovered */}
                                                <AnimatePresence>
                                                    {hoveredOption === btn.id && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className="absolute top-6 right-6"
                                                        >
                                                            <div className="size-2 bg-blue-500 rounded-full animate-ping" />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : step === 2 ? (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-4 text-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-[0.25em] mb-2 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                                            <BarChart3 className="size-3.5" /> Quantifying Deficits
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter font-outfit leading-none">
                                            The <span className="heading-gradient">Deficit</span> Scale
                                        </h2>
                                        <p className="text-gray-400 text-sm max-w-sm mx-auto font-medium leading-relaxed italic">
                                            Drag to estimate total weekly human bandwidth lost to non-strategic processing.
                                        </p>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="relative group px-2">
                                            {/* Advanced Slider */}
                                            <div className="flex justify-between items-center mb-10">
                                                <div className="flex flex-col items-start">
                                                    <span className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] mb-1">Efficiency Baseline</span>
                                                    <span className="text-xs font-bold text-gray-500">Manual State</span>
                                                </div>
                                                <motion.div
                                                    key={answers.hours}
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-[2rem] shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                                                >
                                                    <span className="text-6xl font-black text-white italic tracking-tighter tabular-nums">{answers.hours}</span>
                                                    <div className="flex flex-col">
                                                        <span className="text-blue-500 font-black italic uppercase leading-none text-2xl">Hrs</span>
                                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">/Week</span>
                                                    </div>
                                                </motion.div>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-[10px] font-black uppercase text-red-500/50 tracking-[0.2em] mb-1">Operational Ceiling</span>
                                                    <span className="text-xs font-bold text-gray-500">Critical Failure</span>
                                                </div>
                                            </div>

                                            <div className="relative h-4 w-full">
                                                <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm" />
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-40 blur-md"
                                                    style={{ width: `${((answers.hours - 5) / 95) * 100}%` }}
                                                />
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                                                    style={{ width: `${((answers.hours - 5) / 95) * 100}%` }}
                                                />
                                                <input
                                                    type="range"
                                                    min="5"
                                                    max="100"
                                                    step="5"
                                                    value={answers.hours}
                                                    onChange={(e) => setAnswers({ ...answers, hours: parseInt(e.target.value) })}
                                                    className="absolute inset-x-[-10px] inset-y-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] bg-transparent appearance-none cursor-pointer accent-white hover:accent-blue-400 transition-all z-20"
                                                />
                                                {/* Glowing Thumb Indicator */}
                                                <motion.div
                                                    animate={{ left: `calc(${((answers.hours - 5) / 95) * 100}% - 12px)` }}
                                                    className="absolute top-[-4px] w-6 h-6 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] border-4 border-blue-600 pointer-events-none z-30 flex items-center justify-center"
                                                >
                                                    <div className="size-1.5 bg-blue-600 rounded-full animate-pulse" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-5">
                                            <motion.div
                                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                                                className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
                                            >
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 blur-2xl rounded-full" />
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Yearly Friction</p>
                                                <p className="text-3xl font-black text-white italic leading-none">{answers.hours * 52}<span className="text-gray-600 text-[10px] uppercase font-bold not-italic ml-2 tracking-tighter">Human Hours</span></p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5, backgroundColor: "rgba(59,130,246,0.08)" }}
                                                className="bg-blue-500/5 p-8 rounded-[2.5rem] border border-blue-500/10 relative overflow-hidden group"
                                            >
                                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full" />
                                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">Recovery Value</p>
                                                <p className="text-3xl font-black text-blue-400 italic leading-none">${((answers.hours * 52 * 95) / 1000).toFixed(1)}K<span className="text-blue-900 text-[10px] uppercase font-bold not-italic ml-2 tracking-tighter">Est. Annual</span></p>
                                            </motion.div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.4)" }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleNext}
                                            className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-[2rem] shadow-2xl transition-all"
                                        >
                                            Run Execution Projection
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-12 text-center"
                                >
                                    <div className="relative w-32 h-32 mx-auto">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border border-blue-500/20 rounded-[2.5rem]"
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-3 border border-indigo-500/20 rounded-[2rem]"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative size-16 bg-blue-500 rounded-[1.25rem] flex items-center justify-center rotate-12 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                                <CheckCircle2 className="size-10 text-white -rotate-12" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-black uppercase tracking-widest mb-2 animate-pulse">
                                                Diagnostic Result Locked
                                            </div>
                                            <h2 className="text-5xl font-black text-white italic leading-none uppercase tracking-tighter font-outfit">
                                                Execution <span className="heading-gradient">Verdict</span>
                                            </h2>
                                        </div>

                                        <div className="p-8 bg-white/5 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full" />
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/5 blur-3xl rounded-full" />

                                            <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto italic font-light relative z-10">
                                                Our protocols target your <span className="text-white font-black underline decoration-blue-500/50 underline-offset-4">{answers.goal.toLowerCase()} deficit</span>.
                                                <br /><br />
                                                By deploying agentic workflows, we can automate <span className="text-white font-black">{(answers.hours * 0.95).toFixed(0)} hours</span> of weekly cognitive labor, reclaiming a massive <span className="text-blue-400 font-black">{(answers.hours * 52 * 0.95).toFixed(0)} hours</span> of annual strategic bandwidth.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Link
                                                href="/contact"
                                                onClick={onClose}
                                                className="block w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-[0.25em] text-sm rounded-[2.5rem] shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all text-center"
                                            >
                                                Book Consultation Call
                                            </Link>
                                        </motion.div>
                                        <button
                                            onClick={onClose}
                                            className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.4em] font-mono"
                                        >
                                            [ ARCHIVE_REPORT_AND_BACK ]
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
