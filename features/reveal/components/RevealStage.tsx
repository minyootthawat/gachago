"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { rarityColors, rarityLabels } from "@/features/reveal/animation-tokens";
import type { RevealResult } from "@/features/reveal/types";

type RevealStageProps = {
  result: RevealResult;
  onOpenAnother?: () => void;
};

export function RevealStage({ result, onOpenAnother }: RevealStageProps) {
  const rarityColor = rarityColors[result.rarity];

  return (
    <section className="reveal-stage">
      <div className="reveal-layout">
      <div className="reveal-device-frame">
        <div
          className="absolute inset-x-0 top-0 h-72"
          style={{
            background: `radial-gradient(circle at 50% 25%, ${rarityColor}55, transparent 48%), linear-gradient(180deg, #ffffff 0%, #f7f8fb 82%)`
          }}
        />

        <div className="relative z-10 px-4 pt-5 text-center sm:px-5 sm:pt-8">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl font-black tracking-tight sm:text-2xl"
          >
            CONGRATULATIONS
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-1 text-xs font-semibold text-slate-500"
          >
            เปิดสำเร็จแล้ว
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, rotateY: -16, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.62, type: "spring", bounce: 0.22 }}
          className="relative z-10 mx-auto mt-5 aspect-[3/4] w-[58%] max-w-[240px] overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] sm:mt-8 sm:w-[66%] sm:max-w-[270px]"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(155deg, #ffffff 0%, ${rarityColor}35 52%, #ffffff 100%)`
            }}
          />
          <motion.div
            initial={{ scale: 0.75, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.56 }}
            className="relative flex h-full flex-col items-center justify-between p-4"
          >
            <div className="flex w-full items-center justify-between text-[10px] font-black text-slate-500">
              <span>GCG</span>
              <span>{rarityLabels[result.rarity]}</span>
            </div>
            <div
              className="grid aspect-square w-28 place-items-center rounded-full border border-white/70 shadow-inner"
              style={{ background: `radial-gradient(circle, ${rarityColor} 0%, #ffffff 68%)` }}
            >
              <div className="h-16 w-16 rounded-full bg-white/80 shadow-[0_0_32px_rgba(255,255,255,0.9)]" />
            </div>
            <div className="w-full rounded-xl bg-white/85 p-3 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Reward
              </p>
              <h1 className="mt-1 font-display text-lg font-black leading-tight">{result.name}</h1>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="relative z-10 mt-4 px-4 sm:mt-6 sm:px-5"
        >
          <div className="rounded-2xl bg-white p-4 shadow-[0_16px_42px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">ผลลัพธ์</p>
                <p className="mt-1 font-display text-xl font-black">{result.name}</p>
              </div>
              <span
                className="shrink-0 rounded-md px-2.5 py-1 text-xs font-black text-white"
                style={{ backgroundColor: rarityColor }}
              >
                {rarityLabels[result.rarity]}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-auto px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="secondary"
              className="border-slate-200 bg-white text-slate-950 hover:border-slate-300"
              onClick={onOpenAnother}
            >
              เปิดอีกครั้ง
            </Button>
            <Link
              href="/collection"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--color-primary)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
            >
              ไปคอลเลกชัน
            </Link>
          </div>
        </div>
      </div>
      <ResultInfoPanel result={result} />
      </div>
    </section>
  );
}

function ResultInfoPanel({ result }: { result: RevealResult }) {
  return (
    <aside className="reveal-desktop-panel rounded-xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-2xl backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
        Result Summary
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold">{result.name}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
        The result card stays in a phone-sized frame for capture consistency. Desktop uses the
        side panel for collection actions and verification details.
      </p>
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
          <span className="text-[var(--color-text-muted)]">Rarity</span>
          <strong>{rarityLabels[result.rarity]}</strong>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
          <span className="text-[var(--color-text-muted)]">Result ID</span>
          <strong className="max-w-36 truncate">{result.id}</strong>
        </div>
      </div>
    </aside>
  );
}
