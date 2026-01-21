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
								"size-full p-6 flex flex-col h-full"
							)}
							data-slot={open ? "open" : "closed"}
						>
							<div className="flex flex-col gap-6">
								{navLinks.map((link) => (
									<Link
										className="text-lg font-medium text-gray-300"
										href={link.href}
										key={link.label}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>

							<div className="mt-auto mb-8">
								<Link href="/contact" onClick={() => setOpen(false)}>
									<Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 font-bold h-12 rounded-lg">
										Book Strategy Call
									</Button>
								</Link>
							</div>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
