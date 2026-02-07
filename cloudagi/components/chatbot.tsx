"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Sparkles, Copy, Check } from "lucide-react";
import { cn } from "@/components/lib/utils";
import { useChat } from "@/context/chat-context";
import { useDiagnostic } from "@/context/diagnostic-context";

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
    const [isScraping, setIsScraping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { roiData, currentPageMetadata } = useDiagnostic();

    // Load messages from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedMessages = localStorage.getItem("cloudagi_chat_history");
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                // Convert timestamp strings back to Date objects
                const formatted = parsed.map((m: any) => ({
                    ...m,
                    timestamp: new Date(m.timestamp)
                }));
                setMessages(formatted);
            } catch (e) {
                console.error("Failed to parse chat history");
                setDefaultMessages();
            }
        } else {
            setDefaultMessages();
        }
    }, []);

    // Save messages to localStorage whenever they change
    useEffect(() => {
        if (mounted && messages.length > 0) {
            localStorage.setItem("cloudagi_chat_history", JSON.stringify(messages));
        }
    }, [messages, mounted]);

    const setDefaultMessages = () => {
        setMessages([
            {
                id: "1",
                role: "assistant",
                content: "Initializing CloudAGI Architect protocol... System online. I am Arya Teja Rudraraju. I specialize in engineering autonomous agentic systems that transform business logic into high-ROI assets. Project your website URL or describe your core business friction for a technical diagnostic.",
                timestamp: new Date(),
            },
        ]);
    };

    const clearChat = () => {
        localStorage.removeItem("cloudagi_chat_history");
        setDefaultMessages();
    };

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const [copiedId, setCopiedId] = useState<string | null>(null);

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

        // URL detection logic
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urlMatch = currentInput.match(urlRegex);
        const detectedUrl = urlMatch ? urlMatch[0] : undefined;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: currentInput,
            timestamp: new Date(),
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsTyping(true);
        if (detectedUrl) setIsScraping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: updatedMessages.map(m => ({
                        role: m.role,
                        content: m.content
                    })),
                    url: detectedUrl,
                    context: {
                        roiData,
                        page: currentPageMetadata
                    }
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.content,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Chat Error:", error);
            // Fallback to local logic if local env is not set up or API fails
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: getResponse(currentInput),
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } finally {
            setIsTyping(false);
            setIsScraping(false);
        }
    };

    const getResponse = (query: string): string => {
        const q = query.toLowerCase().trim();

        // 1. GREETINGS
        if (/^(hi|hello|hey|greetings|morning|evening|afternoon|yo|hii|helloo|sup|hey there)$/.test(q) || q.includes("hello") || (q.startsWith("hi") && q.length < 5)) {
            return "Greetings. I am Arya Teja Rudraraju, Founder of CloudAGI. I'm ready to architect your agentic future. What's the core system you're looking to optimize today?";
        }

        // 2. GRATITUDE / CLOSURE
        if (q.includes("thank") || q.includes("thx") || q.includes("appreciate")) {
            return "Efficiency is the only metric that matters. I'm glad we could identify those leverage points. What's the next system we should analyze?";
        }

        if (q.includes("bye") || q.includes("goodbye") || q.includes("see ya") || q.includes("later")) {
            return "Protocol complete. I will remain on standby. Should you require further assistance, do not hesitate to re-engage. Farewell.";
        }

        // 3. HELP / CAPABILITIES
        if (q === "help" || q.includes("what can you do") || q.includes("how to use")) {
            return "I am a Systems Concierge AI. My purpose is to provide insights into CloudAGI's agentic engineering services. You can ask me about:\n\n- **Agentic Engineering:** Building custom AI assistants.\n- **Strategy Architecture:** Identifying high-ROI automation opportunities.\n- **Team Calibration:** Upskilling your team for the AI era.\n- **Our Founder:** Arya Teja Rudraraju's vision.\n- **Scheduling a Call:** To discuss your business needs.\n\nHow can I help you architect your future today?";
        }

        // 4. ABOUT CLOUDAGI / IDENTITY
        if (q.includes("what is cloudagi") || q.includes("who are you") || q.includes("about cloudagi") || (q.includes("tell me") && q.includes("cloudagi"))) {
            return "I am Arya Teja Rudraraju, and CloudAGI is my engineering firm. We bridge the gap between frontier AI and business reality by building custom agents that act as persistent, intelligent team members for SMBs.";
        }

        if (q.includes("who started") || q.includes("founder") || q.includes("ceo") || q.includes("arya") || q.includes("who owns")) {
            return "CloudAGI was founded by Arya Teja Rudraraju, a Master Architect with a mission to make AI engineering rigor accessible to SMBs. He specializes in turning business strategy into high-performance agentic systems.";
        }

        // 5. SERVICES / WHAT WE DO
        if (q.includes("service") || q.includes("what do you do") || q.includes("how can you help") || q.includes("offer") || q.includes("build")) {
            return "We specialize in three core services to help businesses leverage AI:\n\n1.  **Agentic Engineering:** We design and build custom AI agents that automate complex workflows and act as persistent, intelligent assistants for your team.\n2.  **Strategy Architecture:** We analyze your business processes to identify the most impactful opportunities for AI automation, ensuring a high return on investment.\n3.  **Team Calibration:** We provide training and resources to upskill your workforce, preparing them to work effectively alongside AI agents.\n\nWhich of these services would you like to explore further?";
        }

        if (q.includes("how long") || q.includes("time") || q.includes("speed") || q.includes("fast")) {
            return "Our execution protocol is designed for velocity. We typically go from strategy blueprint to your first live agent in 2-4 weeks, ensuring immediate ROI without long development cycles.";
        }

        // 6. PRICING / ROI
        if (q.includes("price") || q.includes("cost") || q.includes("roi") || q.includes("money") || q.includes("investment")) {
            return "Every CloudAGI implementation is engineered for clear ROI. We focus on workflows that save 10+ hours per week per employee. Our pricing is custom-tailored based on the complexity of the agent architecture. Would you like a strategy scan to estimate your potential savings?";
        }

        // 7. CONTACT / CALLS
        if (q.includes("contact") || q.includes("call") || q.includes("schedule") || q.includes("book") || q.includes("meeting") || q.includes("talk to a human") || q.includes("calendly")) {
            return "You can initialize a formal strategy session directly via our architect's Calendly: calendly.com/cloudagi. Alternatively, you can visit our Contact page to submit a technical brief.";
        }

        // 8. MISC / JOKE (Optional but adds personality)
        if (q.includes("joke") || q.includes("funny")) {
            return "Why did the AI agent cross the road? \n\nTo optimize the pedestrian throughput and reach the high-value destination on the other side with 99.9% reliability. (Systems humor is still in beta).";
        }

        // 9. DEFAULT / FALLBACK
        return "System analysis: Your query has been logged. Our architecture is optimized for decentralizing business logic through autonomous agents. To provide the most relevant insight, could you describe a manual process that currently slows your team down?";
    };

    if (!mounted) return null;

    return (
        <div className="relative">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="chat-trigger"
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 40 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openChat}
                        className="fixed bottom-6 right-6 z-[9999] group cursor-pointer pointer-events-auto"
                    >
                        {/* Advanced Multi-layered Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-blue-600/30 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse" />

                        {/* Outer Iridescent Border / Orbit Effect */}
                        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:via-blue-400 group-hover:rotate-180 transition-all duration-1000" />

                        <div className="relative flex items-center gap-4 pl-1.5 pr-6 py-1.5 bg-slate-950/70 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Inner Glass Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />

                            {/* Icon Container with Deep Glow */}
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                                {/* Rotating Background */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.3),transparent)]"
                                />

                                <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg overflow-hidden">
                                    {/* Shimmer Effect */}
                                    <motion.div
                                        animate={{ x: [-100, 100] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-white/30 w-1/3 -skew-x-20 blur-md"
                                    />
                                    <Bot className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col items-start gap-1 justify-center z-10">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-blue-400 group-hover:text-white transition-colors">
                                        Architect Protocol
                                    </span>
                                    <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                                    </div>
                                    <span className="text-[7px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                                        Intelligence Suite Online
                                    </span>
                                </div>
                            </div>

                            {/* Ambient Flare */}
                            <div className="absolute -right-10 -top-10 w-20 h-20 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />
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
                                    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40">
                                        <Bot className="size-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white text-sm uppercase tracking-architect italic">Arya - CloudAGI</h3>
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
                                            "max-w-[80%] p-5 rounded-[1.5rem] text-sm leading-relaxed whitespace-pre-wrap group/msg relative",
                                            msg.role === "assistant"
                                                ? "bg-white/5 text-gray-300 rounded-tl-none border border-white/5 backdrop-blur-sm"
                                                : "bg-blue-600/10 text-white rounded-tr-none border border-blue-600/20 font-medium"
                                        )}>
                                            {msg.content}
                                            {msg.role === "assistant" && (
                                                <button
                                                    onClick={() => copyToClipboard(msg.content, msg.id)}
                                                    className="absolute top-2 right-2 p-1.5 bg-white/5 hover:bg-white/10 rounded-lg opacity-0 group-hover/msg:opacity-100 transition-all duration-300 backdrop-blur-md"
                                                    title="Copy Diagnostic"
                                                >
                                                    {copiedId === msg.id ? (
                                                        <Check className="size-3 text-green-400" />
                                                    ) : (
                                                        <Copy className="size-3 text-gray-500 hover:text-white" />
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/5">
                                            <Bot className="size-5" />
                                        </div>
                                        <div className="bg-white/5 p-5 rounded-2xl rounded-tl-none flex flex-col gap-2 border border-white/5">
                                            <div className="flex gap-1.5 items-center">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-duration:0.6s]" />
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
                                            </div>
                                            {isScraping && (
                                                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider animate-pulse">
                                                    Synthesizing Architecture...
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-6 bg-white/5 border-t border-white/5 backdrop-blur-xl shrink-0">
                                {/* Quick Actions */}
                                <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                                    {[
                                        { label: "Analyze my site", color: "from-blue-500/20 to-indigo-500/20" },
                                        { label: "How to save 10+ hrs?", color: "from-indigo-500/20 to-purple-500/20" },
                                        { label: "Our AI Founders", color: "from-purple-500/20 to-pink-500/20" }
                                    ].map((pill) => (
                                        <button
                                            key={pill.label}
                                            onClick={() => setInput(pill.label)}
                                            className={cn(
                                                "whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold text-gray-400 border border-white/5 bg-gradient-to-r hover:border-blue-500/30 hover:text-white transition-all",
                                                pill.color
                                            )}
                                        >
                                            {pill.label}
                                        </button>
                                    ))}
                                </div>

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

