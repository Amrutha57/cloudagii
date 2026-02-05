"use client";

import * as React from "react";

import { QuizProvider } from "@/context/quiz-context";
import { ChatProvider } from "@/context/chat-context";
import { PlaybookProvider } from "@/context/playbook-context";

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QuizProvider>
      <ChatProvider>
        <PlaybookProvider>
          {children}
        </PlaybookProvider>
      </ChatProvider>
    </QuizProvider>
  );
}
