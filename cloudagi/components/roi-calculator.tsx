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
        <section className="relative py-24 bg-dark-bg/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Potential Savings</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how much time and money your organization is losing to manual processes that AI agents could handle today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Inputs */}
                    <div className="glass p-8 md:p-10 rounded-2xl border border-white/10 space-y-10">
                        {/* Hours per week */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                                    Manual Hours / Week
                                </label>
                                <span className="text-2xl font-bold text-blue-400">{hoursPerWeek} hrs</span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="40"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                            />
                            <p className="text-xs text-gray-500 italic">Per employee on repetitive tasks (data entry, scheduling, etc.)</p>
                        </div>

                        {/* Team Size */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                                    Team Size
                                </label>
                                <span className="text-2xl font-bold text-blue-400">{teamSize} people</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={teamSize}
                                onChange={(e) => setTeamSize(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                            />
                            <p className="text-xs text-gray-500 italic">Number of people performing these tasks</p>
                        </div>

                        {/* Hourly Rate */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                                    Hourly Cost
                                </label>
                                <span className="text-2xl font-bold text-blue-400">${hourlyRate}/hr</span>
                            </div>
                            <input
                                type="range"
                                min="20"
                                max="300"
                                step="5"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                            />
                            <p className="text-xs text-gray-500 italic">Average hourly wage + overhead costs</p>
                        </div>
                    </div>

                    {/* Results Display */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />

                        <div className="relative glass p-10 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Estimated Total Savings</h3>

                            <div className="space-y-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={metrics.yearly}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-1"
                                    >
                                        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Yearly Value Locked</p>
                                        <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
                                            ${metrics.yearly.toLocaleString()}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Monthly</p>
                                        <p className="text-2xl font-bold text-white">${metrics.monthly.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Weekly</p>
                                        <p className="text-2xl font-bold text-white">${metrics.weekly.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-6 rounded-xl border border-blue-500/20">
                                    <h4 className="text-blue-200 font-bold mb-3 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Time Reclaimed
                                    </h4>
                                    <p className="text-white text-lg">
                                        This is equivalent to <span className="font-bold text-blue-400">{metrics.hours.toLocaleString()} hours</span> of human productivity returned to your team every year.
                                    </p>
                                    <p className="text-sm text-gray-400 mt-2 italic">Nearly {(metrics.hours / 2000).toFixed(1)} full-time employee equivalents.</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                                >
                                    Get a Detailed ROI Plan
                                </motion.button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    *These estimates represent total operational cost of manual labor, not implementation cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
