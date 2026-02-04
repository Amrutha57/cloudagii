"use client";

import * as React from "react";

import { QuizProvider } from "@/context/quiz-context";

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return <QuizProvider>{children}</QuizProvider>;
}
