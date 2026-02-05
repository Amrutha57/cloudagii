"use client";

import { usePlaybook } from "@/context/playbook-context";
import { PlaybookModal } from "./playbook-modal";

export function PlaybookModalContainer() {
    const { isPlaybookOpen, closePlaybook } = usePlaybook();

    return (
        <PlaybookModal
            isOpen={isPlaybookOpen}
            onClose={closePlaybook}
        />
    );
}
