"use client";

import React, { useRef } from "react";
import { cn } from "@/components/lib/utils";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export function SpotlightCard({
    children,
    className,
    spotlightColor = "rgba(59, 130, 246, 0.15)",
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        div.style.setProperty("--mouse-x", `${x}px`);
        div.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-xl border border-white/10 bg-dark-card transition-all duration-300",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}
