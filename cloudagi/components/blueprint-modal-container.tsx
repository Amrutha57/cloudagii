"use client";

import { useQuiz } from "@/context/quiz-context";
import { BlueprintModal } from "./blueprint-modal";

export function BlueprintModalContainer() {
    const { isQuizOpen, closeQuiz } = useQuiz();

    return (
        <BlueprintModal
            isOpen={isQuizOpen}
            onClose={closeQuiz}
        />
    );
}
