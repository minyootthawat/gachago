"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { resetDemoState } from "@/features/demo/local-state";

export function PrototypeBanner() {
  const [resetAt, setResetAt] = useState<string | null>(null);

  function handleReset() {
    resetDemoState();
    setResetAt(new Date().toLocaleTimeString("th-TH"));
  }

  return (
    <div className="border-b border-[var(--color-border)] bg-white/[0.04]">
      <div className="page-container flex min-h-10 flex-col gap-2 py-2 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>Prototype mode: mock checkout, local browser state, no real payment.</span>
        <button
          className="touch-target inline-flex items-center gap-2 self-start rounded-md border border-[var(--color-border)] px-3 text-white sm:self-auto"
          onClick={handleReset}
          type="button"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset demo{resetAt ? ` ${resetAt}` : ""}
        </button>
      </div>
    </div>
  );
}

