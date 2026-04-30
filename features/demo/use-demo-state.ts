"use client";

import { useEffect, useState } from "react";
import { getDemoState } from "@/features/demo/local-state";
import type { DemoState } from "@/features/demo/types";

export function useDemoState() {
  const [state, setState] = useState<DemoState>(() => getDemoState());

  useEffect(() => {
    function syncState() {
      setState(getDemoState());
    }

    syncState();
    window.addEventListener("storage", syncState);
    window.addEventListener("gachago-demo-state", syncState);

    return () => {
      window.removeEventListener("storage", syncState);
      window.removeEventListener("gachago-demo-state", syncState);
    };
  }, []);

  return state;
}

