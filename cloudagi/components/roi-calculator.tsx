"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ROICalculator() {
    const [hoursPerWeek, setHoursPerWeek] = useState(15);
    const [hourlyRate, setHourlyRate] = useState(60);
    const [teamSize, setTeamSize] = useState(5);

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
                            <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start gap-4 lg:gap-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={metrics.yearly}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="space-y-0 lg:space-y-1 text-left"
                                    >
                                        <p className="text-[10px] md:text-sm font-black text-blue-400 uppercase tracking-[0.2em]">Yearly Value Locked</p>
                                        <div className="text-4xl xs:text-5xl md:text-7xl font-black text-white tracking-widest italic uppercase">
                                            ${metrics.yearly.toLocaleString()}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="hidden md:grid grid-cols-2 gap-4 w-full">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Monthly</p>
                                        <p className="text-xl font-bold text-white">${metrics.monthly.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Weekly</p>
                                        <p className="text-xl font-bold text-white">${metrics.weekly.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 flex-1 lg:w-full">
                                    <h4 className="text-blue-200 font-bold mb-1 flex items-center gap-2 text-[10px] md:text-sm uppercase tracking-widest">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                        Hours Reclaimed
                                    </h4>
                                    <p className="text-white text-sm md:text-lg font-medium italic">
                                        <span className="font-black text-blue-400">{metrics.hours.toLocaleString()}</span> hrs/year
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inputs - ORDER 2 ON MOBILE */}
                    <div className="glass p-5 md:p-10 rounded-2xl border border-white/10 space-y-5 md:space-y-10 w-full order-2 lg:order-1">
                        {/* Hours per week */}
                        <div className="space-y-2 md:space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] md:text-sm font-black text-gray-500 uppercase tracking-widest">
                                    Manual Hours / Week
                                </label>
                                <span className="text-lg md:text-2xl font-black text-blue-400 italic">{hoursPerWeek}h</span>
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
                        <div className="space-y-2 md:space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] md:text-sm font-black text-gray-500 uppercase tracking-widest">
                                    Team Size
                                </label>
                                <span className="text-lg md:text-2xl font-black text-blue-400 italic">{teamSize}p</span>
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
                        <div className="space-y-2 md:space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] md:text-sm font-black text-gray-500 uppercase tracking-widest">
                                    Hourly Cost
                                </label>
                                <span className="text-lg md:text-2xl font-black text-blue-400 italic">${hourlyRate}</span>
                            </div>
                            <input
                                type="range"
                                min="20"
                                max="300"
                                step="5"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                            />
                        </div>

                        <button
                            onClick={() => window.location.href = '#'}
                            className="w-full py-4 md:py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-xl hover:bg-gray-200 transition-all mt-4"
                        >
                            Get Strategy Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
