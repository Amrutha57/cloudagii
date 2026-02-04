"use client";

import React, { createContext, useContext, useState } from "react";

interface QuizContextType {
    isQuizOpen: boolean;
    openQuiz: () => void;
    closeQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    const openQuiz = () => setIsQuizOpen(true);
    const closeQuiz = () => setIsQuizOpen(false);

    return (
        <QuizContext.Provider value={{ isQuizOpen, openQuiz, closeQuiz }}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
