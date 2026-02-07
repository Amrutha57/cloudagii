"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface ROIMetrics {
    hoursPerWeek: number;
    teamSize: number;
    hourlyRate: number;
    yearlySavings: number;
}

interface DiagnosticContextType {
    roiData: ROIMetrics | null;
    updateROI: (data: ROIMetrics) => void;
    currentPageMetadata: {
        title?: string;
        description?: string;
        url?: string;
    } | null;
    updatePageMetadata: (metadata: any) => void;
}

const DiagnosticContext = createContext<DiagnosticContextType | undefined>(undefined);

export function DiagnosticProvider({ children }: { children: React.ReactNode }) {
    const [roiData, setROIData] = useState<ROIMetrics | null>(null);
    const [currentPageMetadata, setPageMetadata] = useState<any>(null);

    const updateROI = useCallback((data: ROIMetrics) => {
        setROIData((prev: ROIMetrics | null) => {
            if (JSON.stringify(prev) === JSON.stringify(data)) return prev;
            return data;
        });
    }, []);

    const updatePageMetadata = useCallback((metadata: any) => {
        setPageMetadata((prev: any) => {
            if (JSON.stringify(prev) === JSON.stringify(metadata)) return prev;
            return metadata;
        });
    }, []);

    const value = useMemo(() => ({
        roiData,
        updateROI,
        currentPageMetadata,
        updatePageMetadata
    }), [roiData, updateROI, currentPageMetadata, updatePageMetadata]);

    return (
        <DiagnosticContext.Provider value={value}>
            {children}
        </DiagnosticContext.Provider>
    );
}

export function useDiagnostic() {
    const context = useContext(DiagnosticContext);
    if (context === undefined) {
        throw new Error("useDiagnostic must be used within a DiagnosticProvider");
    }
    return context;
}
