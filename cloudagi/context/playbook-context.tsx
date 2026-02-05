"use client";

import React, { createContext, useContext, useState } from "react";

interface PlaybookContextType {
    isPlaybookOpen: boolean;
    openPlaybook: () => void;
    closePlaybook: () => void;
}

const PlaybookContext = createContext<PlaybookContextType | undefined>(undefined);

export function PlaybookProvider({ children }: { children: React.ReactNode }) {
    const [isPlaybookOpen, setIsPlaybookOpen] = useState(false);

    const openPlaybook = () => setIsPlaybookOpen(true);
    const closePlaybook = () => setIsPlaybookOpen(false);

    return (
        <PlaybookContext.Provider value={{ isPlaybookOpen, openPlaybook, closePlaybook }}>
            {children}
        </PlaybookContext.Provider>
    );
}

export function usePlaybook() {
    const context = useContext(PlaybookContext);
    if (context === undefined) {
        throw new Error("usePlaybook must be used within a PlaybookProvider");
    }
    return context;
}
