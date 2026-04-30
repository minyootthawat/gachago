"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { RevealStage } from "@/features/reveal/components/RevealStage";
import type { RevealResult } from "@/features/reveal/types";
import type { Rarity } from "@/features/shop/types";

type RevealControllerProps = {
  userPackId: string;
};

type OpenPackResponse = {
  resultId: string;
  rewardName: string;
  rewardRarity: Rarity;
};

export function RevealController({ userPackId }: RevealControllerProps) {
  const [result, setResult] = useState<RevealResult | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function openPack() {
    setIsOpening(true);
    setError(null);

    try {
      const response = await fetch("/api/gacha/open", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userPackId,
          clientSeed: crypto.randomUUID()
        })
      });

      if (!response.ok) {
        throw new Error("Could not open pack");
      }

      const payload = (await response.json()) as OpenPackResponse;
      setResult({
        id: payload.resultId,
        name: payload.rewardName,
        rarity: payload.rewardRarity
      });
    } catch (openError) {
      setError(openError instanceof Error ? openError.message : "Could not open pack");
    } finally {
      setIsOpening(false);
    }
  }

  if (result) {
    return <RevealStage result={result} />;
  }

  return (
    <section className="reveal-stage flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[var(--shadow-reveal)]">
        <div className="mx-auto aspect-square w-32 rounded-md border border-white/15 bg-[radial-gradient(circle,rgba(255,61,139,0.35),transparent_62%),var(--color-surface-raised)]" />
        <h1 className="mt-6 font-display text-2xl font-bold">Ready to reveal</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          The result is generated server-side before the animation starts.
        </p>
        <Button className="mt-6 w-full" disabled={isOpening} onClick={openPack}>
          {isOpening ? "Opening..." : "Start reveal"}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
      </div>
    </section>
  );
}

