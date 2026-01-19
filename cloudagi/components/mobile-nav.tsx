"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, buttonVariants } from "@/components/button";
import { cn } from "../components/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { navLinks } from "@/components/navbar";
import Link from "next/link";
import { useTheme } from "next-themes";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const { isMobile } = useMediaQuery();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	// 🚫 Disable body scroll when open
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Cleanup on unmount too
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open &&
				createPortal(
					<div
						className={cn(
							"bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
							"fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
						)}
						id="mobile-menu"
					>
						<div
							className={cn(
								"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
								"size-full p-4"
							)}
							data-slot={open ? "open" : "closed"}
						>
							<div className="grid gap-y-2">
								{navLinks.map((link) => (
									<Link
										className={buttonVariants({
											variant: "ghost",
											className: "justify-start",
										})}
										href={link.href}
										key={link.label}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</Link>
								))}
								{/* Theme Toggle for Mobile */}
								<button
									type="button"
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="flex items-center justify-start px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
								>
									{mounted ? (theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode") : "☀️ Light Mode"}
								</button>
							</div>
							<div className="mt-12 flex flex-col gap-2">
								<Button className="w-full" variant="outline">
									Sign In
								</Button>
								<Button className="w-full">Get Started</Button>
							</div>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
