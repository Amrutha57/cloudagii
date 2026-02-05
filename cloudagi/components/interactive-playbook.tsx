"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Zap,
    Settings,
    Users,
    MessageSquare,
    Database,
    BarChart3,
    ArrowRight,
    RefreshCw,
    Search,
    ShieldCheck,
    Code
} from "lucide-react";
import { cn } from "@/components/lib/utils";
import { usePlaybook } from "@/context/playbook-context";

const Layers = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
);

const ROLES = [
    {
        id: "founder",
        label: "Founder / CEO",
        icon: <Briefcase className="size-6" />,
        color: "from-blue-500 to-indigo-500",
        frictions: [
            { id: "decision", label: "Information Overload for Decisions", solve: "Autonomous Context Aggregator", impact: "Eliminate 85% of reading time", icon: <Database /> },
            { id: "hiring", label: "Sifting through Lead/Talent Noise", solve: "Intelligent Lead Qualifier", impact: "Zero-latency lead processing", icon: <Users /> },
            { id: "scale", label: "Bottlenecks in Ops Scaling", solve: "Process Orchestration Agent", impact: "Scalability with 0 headcount growth", icon: <Zap /> }
        ]
    },
    {
        id: "sales",
        label: "Head of Sales",
        icon: <BarChart3 className="size-6" />,
        color: "from-indigo-500 to-purple-500",
        frictions: [
            { id: "crm", label: "Manual CRM Data Entry", solve: "Self-Updating Memory Engine", impact: "Save 12hrs/week per rep", icon: <RefreshCw /> },
            { id: "leads", label: "Slow Response to Inbound Leads", solve: "24/7 Concierge Agent", impact: "3x conversion jump", icon: <MessageSquare /> },
            { id: "outreach", label: "Low Personalization in Outreach", solve: "Deep-Context Personalizer", impact: "40% higher open rates", icon: <Search /> }
        ]
    },
    {
        id: "ops",
        label: "Ops Manager",
        icon: <Settings className="size-6" />,
        color: "from-blue-400 to-cyan-500",
        frictions: [
            { id: "data", label: "Disconnected Data Silos", solve: "Unified Data Orchestrator", impact: "Real-time visibility", icon: <Layers className="size-6" /> },
            { id: "support", label: "Support Ticket Backlog", solve: "Autonomous Help Desk", impact: "70% ticket deflection", icon: <ShieldCheck /> },
            { id: "repetitive", label: "Highly Manual Document Processing", solve: "Intelligent Document Agent", impact: "95% faster processing", icon: <Code /> }
        ]
    }
];

export function InteractivePlaybook() {
    const { closePlaybook } = usePlaybook();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState<typeof ROLES[0] | null>(null);
    const [selectedFriction, setSelectedFriction] = useState<typeof ROLES[0]['frictions'][0] | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const reset = () => {
        setStep(1);
        setSelectedRole(null);
        setSelectedFriction(null);
        setIsAnalyzing(false);
    };

    const handleRoleSelect = (role: typeof ROLES[0]) => {
        setSelectedRole(role);
        setStep(2);
    };

    const handleFrictionSelect = (friction: typeof ROLES[0]['frictions'][0]) => {
        setSelectedFriction(friction);
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setStep(3);
        }, 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none" />

                <div className="relative z-10 p-8 md:p-12">
                    <AnimatePresence mode="wait">
                        {/* STEP 1: ROLE SELECTION */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-10"
                            >
                                <div className="text-center space-y-4">
                                    <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">Discovery Protocol</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter font-outfit">Who are we <span className="heading-gradient">Empowering?</span></h2>
                                    <p className="text-gray-400 font-light italic">Select your perspective to reveal unique agentic potentials.</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {ROLES.map((role) => (
                                        <button
                                            key={role.id}
                                            onClick={() => handleRoleSelect(role)}
                                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-500 text-center active-scale overflow-hidden"
                                        >
                                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity", role.color)} />
                                            <div className="relative z-10 flex flex-col items-center gap-6">
                                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-blue-500/20">
                                                    {role.icon}
                                                </div>
                                                <span className="text-lg font-black text-white italic uppercase tracking-tighter font-outfit transition-colors group-hover:text-blue-400">
                                                    {role.label}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: FRICTION POINT */}
                        {step === 2 && selectedRole && !isAnalyzing && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <button
                                    onClick={() => setStep(1)}
                                    className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 mb-4"
                                >
                                    <ArrowRight className="size-3 rotate-180" /> Back to roles
                                </button>

                                <div className="text-center space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter font-outfit">Identify The <span className="heading-gradient">Friction</span></h2>
                                    <p className="text-gray-400 font-light italic">Which workflow is currently slowing down your {selectedRole.label} goals?</p>
                                </div>

                                <div className="grid gap-4">
                                    {selectedRole.frictions.map((friction) => (
                                        <button
                                            key={friction.id}
                                            onClick={() => handleFrictionSelect(friction)}
                                            className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all active-scale text-left"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-blue-400 group-hover:scale-110 transition-transform">
                                                    {friction.icon}
                                                </div>
                                                <div>
                                                    <p className="text-lg font-bold text-white tracking-tight">{friction.label}</p>
                                                    <p className="text-[10px] text-gray-500 uppercase tracking-architect">Current System Latency Identified</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="size-5 text-gray-600 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* ANALYZING STATE */}
                        {isAnalyzing && (
                            <motion.div
                                key="analyzing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                            >
                                <div className="relative w-24 h-24">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-2 border-t-2 border-blue-500 rounded-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Zap className="size-8 text-blue-500 animate-pulse" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter font-outfit">Designing Agentic <span className="heading-gradient">Solve</span></h3>
                                    <div className="flex gap-2 justify-center">
                                        <span className="text-[10px] font-mono text-blue-400/60 tracking-widest animate-pulse">MODELING_LATENCY_REDUCTION</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: RESULT / PROPOSAL */}
                        {step === 3 && selectedFriction && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-12"
                            >
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-black uppercase tracking-widest mb-4">
                                        <Zap className="size-3" /> Efficiency Protocol Found
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter font-outfit leading-none">The <span className="heading-gradient">Agentic Unlock</span></h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                                                {selectedFriction.icon}
                                            </div>
                                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4">Autonomous Solution</p>
                                            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter font-outfit mb-2">{selectedFriction.solve}</h4>
                                            <p className="text-gray-400 text-sm italic leading-relaxed">
                                                A custom-engineered agent possessing persistent memory and deep integration capability to eliminate your specific friction.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Measurable Outcome</p>
                                            <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter font-outfit text-blue-400">{selectedFriction.impact}</h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center space-y-6">
                                        <div className="space-y-4">
                                            <h5 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Protocol Path:</h5>
                                            <div className="space-y-3">
                                                {["Analysis of context", "Agentic orchestration", "Tool integration", "Feedback loop calibration"].map((p, i) => (
                                                    <div key={i} className="flex items-center gap-4 text-xs text-gray-300 italic">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                                        {p}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/5 space-y-4">
                                            <button
                                                onClick={() => {
                                                    closePlaybook();
                                                    window.location.href = '/contact';
                                                }}
                                                className="w-full py-3.5 md:py-5 bg-white text-black font-black text-base md:text-xl rounded-2xl hover:bg-blue-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-tighter font-outfit italic"
                                            >
                                                Deploy This Strategy Call
                                            </button>
                                            <button
                                                onClick={reset}
                                                className="w-full text-center text-[10px] font-black text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
                                            >
                                                Scan Different Friction Point
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

