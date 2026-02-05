"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { InteractivePlaybook } from "./interactive-playbook";

interface PlaybookModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PlaybookModal({ isOpen, onClose }: PlaybookModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-dark-bg/95 backdrop-blur-2xl pointer-events-auto"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 40 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto scrollbar-hide no-scrollbar"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-[110] text-gray-500 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full"
                    >
                        <X className="size-6" />
                    </button>

                    <div className="py-12">
                        <InteractivePlaybook />
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
