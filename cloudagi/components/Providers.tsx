"use client";

import * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}
