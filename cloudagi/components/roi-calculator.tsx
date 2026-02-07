import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDiagnostic } from "@/context/diagnostic-context";
import { useChat } from "@/context/chat-context";
import { Sparkles } from "lucide-react";

export function ROICalculator() {
    const [hoursPerWeek, setHoursPerWeek] = useState(15);
    const [hourlyRate, setHourlyRate] = useState(60);
    const [teamSize, setTeamSize] = useState(5);
    const { updateROI } = useDiagnostic();
    const { openChat } = useChat();

    const metrics = useMemo(() => {
        const weeklySavings = hoursPerWeek * hourlyRate * teamSize;
        const monthlySavings = weeklySavings * 4.33; // Average weeks in a month
        const yearlySavings = weeklySavings * 52;
        const hoursSavedYearly = hoursPerWeek * teamSize * 52;

        return {
            weekly: Math.round(weeklySavings),
            monthly: Math.round(monthlySavings),
            yearly: Math.round(yearlySavings),
            hours: hoursSavedYearly
        };
    }, [hoursPerWeek, hourlyRate, teamSize]);

    // Update global diagnostic context
    useEffect(() => {
        updateROI({
            hoursPerWeek,
            teamSize,
            hourlyRate,
            yearlySavings: metrics.yearly
        });
    }, [metrics.yearly, hoursPerWeek, teamSize, hourlyRate, updateROI]);

    return (
        <section className="relative py-12 md:py-24 bg-dark-bg/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6 uppercase tracking-tighter italic">
                        ROI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projection</span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto hidden md:block">
                        See how much time and money your organization is losing to manual processes that AI agents could handle today.
                    </p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-12 items-start">

                    {/* Results Display - MOVED TO TOP ON MOBILE */}
                    <div className="relative w-full order-1 lg:order-2">
                        <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full" />
                        <div className="relative glass p-5 md:p-10 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
                            <div className="flex flex-col justify-between items-start gap-4 md:gap-8">
                                <div className="space-y-0 md:space-y-1 text-left w-full">
                                    <p className="text-[10px] md:text-sm font-black text-blue-400 uppercase tracking-widest">Yearly Value Locked</p>
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase break-words">
                                        ${metrics.yearly.toLocaleString('en-US')}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                                    <div className="bg-white/5 p-3 md:p-4 rounded-xl border border-white/5">
                                        <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase mb-0.5 md:mb-1">Monthly</p>
                                        <p className="text-base md:text-xl font-bold text-white">${metrics.monthly.toLocaleString('en-US')}</p>
                                    </div>
                                    <div className="bg-white/5 p-3 md:p-4 rounded-xl border border-white/5">
                                        <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase mb-0.5 md:mb-1">Weekly</p>
                                        <p className="text-base md:text-xl font-bold text-white">${metrics.weekly.toLocaleString('en-US')}</p>
                                    </div>
                                </div>

                                <div className="bg-blue-500/10 p-3 md:p-4 rounded-xl border border-blue-500/20 w-full">
                                    <h4 className="text-blue-200 font-bold mb-1 flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-widest">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                        Hours Reclaimed
                                    </h4>
                                    <p className="text-xs md:text-lg font-medium italic">
                                        <span className="font-black text-blue-400">{metrics.hours.toLocaleString('en-US')}</span> hrs/year
                                    </p>
                                </div>

                                <button
                                    onClick={openChat}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-widest text-[10px] md:text-xs rounded-xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all mt-4 flex items-center justify-center gap-2 border-none cursor-pointer"
                                >
                                    <Sparkles className="size-4" />
                                    Deep Strategy Scan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Inputs - ORDER 2 ON MOBILE */}
                    <div className="glass p-5 md:p-10 rounded-2xl border border-white/10 space-y-4 md:space-y-10 w-full order-2 lg:order-1">
                        {/* Hours per week */}
                        <div className="space-y-1 md:space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[9px] md:text-sm font-black text-gray-500 uppercase tracking-widest">
                                    Manual Hours / Week
                                </label>
                                <span className="text-base md:text-2xl font-black text-blue-400 italic">{hoursPerWeek}h</span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="40"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                            />
                        </div>

                        {/* Team Size */}
                        <div className="space-y-1 md:space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[9px] md:text-sm font-black text-gray-500 uppercase tracking-widest">
                                    Team Size
                                </label>
                                <span className="text-base md:text-2xl font-black text-blue-400 italic">{teamSize}p</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={teamSize}
                                onChange={(e) => setTeamSize(Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                            />
                        </div>

                        {/* Hourly Rate */}
                        <div className="space-y-1 md:space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[9px] md:text-sm font-black text-gray-500 uppercase tracking-widest">
                                    Hourly Cost
                                </label>
                                <span className="text-base md:text-2xl font-black text-blue-400 italic">${hourlyRate}</span>
                            </div>
                            <input
                                type="range"
                                min="20"
                                max="300"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
