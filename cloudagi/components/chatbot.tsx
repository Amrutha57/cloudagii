"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/components/lib/utils";
import { useChat } from "@/context/chat-context";

interface Message {
    id: string;
    role: "assistant" | "user";
    content: string;
    timestamp: Date;
}

export function ChatBot() {
    const { isChatOpen: isOpen, openChat, closeChat } = useChat();
    const [input, setInput] = useState("");
    const [mounted, setMounted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial message on mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
        setMessages([
            {
                id: "1",
                role: "assistant",
                content: "Welcome to the CloudAGI node. I am your systems concierge. How can I assist in architecting your agentic future today?",
                timestamp: new Date(),
            },
        ]);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        const currentInput = input.trim();
        if (!currentInput) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: currentInput,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: getResponse(currentInput),
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const getResponse = (query: string): string => {
        const q = query.toLowerCase();
        if (q.includes("price") || q.includes("cost")) {
            return "CloudAGI implementations are custom-engineered for ROI. Most modular agent systems start with a strategy blueprint for prove-of-concept. Would you like to schedule a deep-dive call with our lead architect?";
        }
        if (q.includes("service") || q.includes("build")) {
            return "We specialize in Agentic Workflow Design, Custom AI Engines, and Enterprise Sandboxes. Our 'Execution Protocol' ensures we move from friction to automated leverage in 2-4 weeks.";
        }
        if (q.includes("contact") || q.includes("call") || q.includes("schedule")) {
            return "You can initialize a formal protocol by visiting our contact page or scheduling a call here: calendly.com/cloudagi.";
        }
        return "Understood. Our systems are optimized for decentralizing business logic through agentic orchestration. Could you specify the primary friction point in your current workflow?";
    };

    if (!mounted) return null;

    return (
        <div className="relative">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="chat-trigger"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openChat}
                        className="fixed bottom-6 right-6 z-[9999] p-1 rounded-full group cursor-pointer overflow-visible pointer-events-auto"
                    >
                        {/* Outer Pulsing Glow */}
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-500/50 transition-colors animate-pulse" />

                        <div className="relative flex items-center gap-4 pl-1.5 pr-6 py-1.5 bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
                            {/* Icon Container with Gradient and Ring */}
                            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/40 transition-all duration-500 overflow-hidden">
                                {/* Moving highlight effect */}
                                <motion.div
                                    animate={{ x: [-100, 100] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 blur-sm"
                                />
                                <Bot className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col items-start leading-none gap-1 py-1">
                                <span className="text-[10px] font-black uppercase tracking-architect italic text-white group-hover:text-blue-400 transition-colors">
                                    Systems Concierge
                                </span>
                                <div className="flex items-center gap-2">
                                    <div className="relative w-2 h-2">
                                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                                        <div className="relative w-2 h-2 rounded-full bg-green-500 shadow-sm" />
                                    </div>
                                    <span className="text-[7px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                                        Protocol Online
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[10000] flex items-end justify-center sm:items-auto sm:justify-start pointer-events-none">
                        {/* Backdrop for mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeChat}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md sm:hidden pointer-events-auto"
                        />

                        {/* Chat Window */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full sm:fixed sm:bottom-6 sm:right-6 sm:w-[420px] h-[650px] max-h-[90vh] bg-slate-950 border border-white/10 rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col pointer-events-auto mx-auto sm:mx-0"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between backdrop-blur-xl shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40">
                                        <Bot className="size-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white text-sm uppercase tracking-architect italic">CloudAGI Concierge</h3>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Active Intelligence Suite</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={closeChat}
                                    className="p-2.5 hover:bg-white/5 rounded-full transition-colors group"
                                >
                                    <X className="size-6 text-gray-500 group-hover:text-white" />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div
                                ref={scrollRef}
                                className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overscroll-contain"
                            >
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={cn(
                                            "flex gap-4",
                                            msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-xl",
                                            msg.role === "assistant" ? "bg-white/5 border border-white/5" : "bg-blue-600 shadow-blue-600/20"
                                        )}>
                                            {msg.role === "assistant" ? <Bot className="size-5" /> : <User className="size-5" />}
                                        </div>
                                        <div className={cn(
                                            "max-w-[80%] p-5 rounded-[1.5rem] text-sm leading-relaxed",
                                            msg.role === "assistant"
                                                ? "bg-white/5 text-gray-300 rounded-tl-none border border-white/5"
                                                : "bg-blue-600/10 text-white rounded-tr-none border border-blue-600/20 font-medium"
                                        )}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/5">
                                            <Bot className="size-5" />
                                        </div>
                                        <div className="bg-white/5 p-5 rounded-2xl rounded-tl-none flex gap-1.5 items-center border border-white/5">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-duration:0.6s]" />
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-6 bg-white/5 border-t border-white/5 backdrop-blur-xl shrink-0">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                        placeholder="Inquire about agentic solutions..."
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-14 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 shadow-inner"
                                    />
                                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-blue-500/50 group-focus-within:text-blue-500 transition-colors" />
                                    <button
                                        onClick={handleSend}
                                        disabled={!input.trim()}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-blue-600/20"
                                    >
                                        <Send className="size-4" />
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center justify-center gap-2">
                                    <div className="h-1 w-1 bg-green-500 rounded-full" />
                                    <p className="text-[8px] font-black text-gray-500 text-center uppercase tracking-[0.2em]">
                                        End-to-End Encrypted Tunnel Active
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

