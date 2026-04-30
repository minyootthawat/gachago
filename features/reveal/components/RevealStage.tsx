"use client";

import { motion } from "framer-motion";
import { rarityColors } from "@/features/reveal/animation-tokens";
import type { RevealResult } from "@/features/reveal/types";

type RevealStageProps = {
  result: RevealResult;
};

export function RevealStage({ result }: RevealStageProps) {
  return (
    <section className="reveal-stage flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto aspect-[3/4] max-w-[280px] rounded-lg border border-white/15 bg-[var(--color-surface)] shadow-[var(--shadow-reveal)]"
        >
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex h-full items-center justify-center rounded-lg"
            style={{
              background: `radial-gradient(circle, ${rarityColors[result.rarity]}55, transparent 62%)`
            }}
          >
            <span className="px-8 font-display text-2xl font-bold">{result.name}</span>
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm font-semibold uppercase tracking-[0.18em]"
          style={{ color: rarityColors[result.rarity] }}
        >
          {result.rarity.replace("_", " ")}
        </motion.p>
      </div>
    </section>
  );
}

