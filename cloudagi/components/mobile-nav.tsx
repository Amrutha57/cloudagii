"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/button";
import { cn } from "@/components/lib/utils";
import { MenuIcon, XIcon, Home, Layers, Notebook, Users, ArrowRight, Zap } from "lucide-react";
import React from "react";
import { navLinks } from "@/components/navbar";
import Link from "next/link";
import { useChat } from "@/context/chat-context";
import { useQuiz } from "@/context/quiz-context";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export function MobileNav({ isDarkTheme = true }: { isDarkTheme?: boolean }) {
	const [open, setOpen] = React.useState(false);
	const { isMobile } = useMediaQuery();
	const { openChat } = useChat();
	const { openQuiz } = useQuiz();
	const pathname = usePathname();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Disable body scroll when open
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	const handleQuizClick = () => {
		setOpen(false);
		setTimeout(openQuiz, 300);
	};

	const iconMap: Record<string, any> = {
		"Home": Home,
		"Services": Layers,
		"Insights": Notebook,
		"About": Users
	};

	const extendedNavLinks = [
		{ label: "Home", href: "/" },
		...navLinks
	];

	if (!mounted) return null;

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className={cn(
					"md:hidden relative z-[100] h-10 w-10 rounded-full border transition-all duration-300",
					isDarkTheme
						? (open ? "border-blue-500/50 bg-blue-500/20 text-white" : "border-white/10 bg-white/5 text-white backdrop-blur-md")
						: (open ? "border-blue-500/50 bg-blue-500/10 text-blue-600" : "border-gray-200 bg-black/5 text-gray-900 backdrop-blur-md"),
					open && "rotate-90 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
				)}
				onClick={() => setOpen(!open)}
				size="icon"
				variant="ghost"
			>
				{open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
			</Button>

			{createPortal(
				<AnimatePresence>
					{open && (
						<div className="fixed inset-0 z-[90] md:hidden pointer-events-none">
							{/* Backdrop with high-end blur */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setOpen(false)}
								className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
							/>

							{/* Floating "Command Center" Card */}
							<div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
								<motion.div
									initial={{ opacity: 0, scale: 0.9, y: 40 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.9, y: 40 }}
									transition={{ type: "spring", damping: 25, stiffness: 300 }}
									className={cn(
										"w-full max-w-sm overflow-hidden rounded-[2.5rem] border p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl pointer-events-auto",
										isDarkTheme
											? "border-white/10 bg-slate-900/90 shadow-blue-500/10"
											: "border-gray-200 bg-white/95 shadow-gray-200"
									)}
								>
									{/* Menu Header Decor */}
									<div className="flex items-center justify-between px-6 pt-6 pb-2">
										<div className="flex items-center gap-2">
											<div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
											<span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Agentic Hub</span>
										</div>
										<div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[8px] font-bold text-blue-400 uppercase tracking-widest">Encrypted</div>
									</div>

									{/* Navigation Grid */}
									<div className="grid grid-cols-2 gap-2 p-2">
										{extendedNavLinks.map((link, i) => {
											const Icon = iconMap[link.label] || Zap;
											const isActive = pathname === link.href;

											return (
												<motion.div
													key={link.label}
													initial={{ opacity: 0, y: 15 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.1 + i * 0.05 }}
												>
													<Link
														href={link.href}
														onClick={() => setOpen(false)}
														className={cn(
															"flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-[2rem] border transition-all duration-300 active:scale-95 group",
															isDarkTheme
																? (isActive
																	? "bg-blue-600/20 border-blue-500/30 text-white"
																	: "bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10")
																: (isActive
																	? "bg-blue-50 border-blue-500/20 text-blue-600"
																	: "bg-gray-50 border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100")
														)}
													>
														<div className={cn(
															"p-3 rounded-2xl transition-all duration-500 transform group-hover:scale-110",
															isActive
																? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
																: "bg-white/5 text-gray-500 group-hover:bg-blue-500/10 group-hover:text-blue-400"
														)}>
															<Icon className="size-6" />
														</div>
														<span className={cn(
															"text-[10px] font-black uppercase tracking-widest transition-colors",
															isActive ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"
														)}>
															{link.label}
														</span>
													</Link>
												</motion.div>
											);
										})}
									</div>

									{/* Call to Action Bar */}
									<div className="p-2 pt-1 pb-4">
										<button
											onClick={handleQuizClick}
											className="group w-full flex items-center justify-between pl-6 pr-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-widest text-[10px] rounded-[1.5rem] shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all"
										>
											<span>Book Your Session</span>
											<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-colors">
												<ArrowRight className="size-4" />
											</div>
										</button>
									</div>
								</motion.div>
							</div>
						</div>
					)}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
}
