"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { addDemoRevealResult } from "@/features/demo/local-state";
import { RevealStage } from "@/features/reveal/components/RevealStage";
import { rarityColors, rarityLabels } from "@/features/reveal/animation-tokens";
import type { RevealResult } from "@/features/reveal/types";
import type { Rarity } from "@/features/shop/types";

type RevealControllerProps = {
  userPackId: string;
};

type OpenPackResponse = {
  resultId: string;
  rewardItemId: string;
  rewardName: string;
  rewardRarity: Rarity;
};

type RevealPhase = "idle" | "shake" | "burst" | "card" | "result";

const delay = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

export function RevealController({ userPackId }: RevealControllerProps) {
  const [result, setResult] = useState<RevealResult | null>(null);
  const [phase, setPhase] = useState<RevealPhase>("idle");
  const [isOpening, setIsOpening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function openPack() {
    if (isOpening) {
      return;
    }

    setIsOpening(true);
    setError(null);
    setResult(null);

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
      const nextResult: RevealResult = {
        id: payload.resultId,
        name: payload.rewardName,
        rarity: payload.rewardRarity
      };
      addDemoRevealResult({
        userPackId,
        resultId: payload.resultId,
        rewardItemId: payload.rewardItemId,
        name: payload.rewardName,
        rarity: payload.rewardRarity
      });

      setPhase("shake");
      await delay(1150);
      setPhase("burst");
      await delay(760);
      setResult(nextResult);
      setPhase("card");
      await delay(1100);
      setPhase("result");
    } catch (openError) {
      setPhase("idle");
      setError(openError instanceof Error ? openError.message : "Could not open pack");
    } finally {
      setIsOpening(false);
    }
  }

  function resetReveal() {
    setResult(null);
    setPhase("idle");
    setError(null);
  }

  if (phase === "result" && result) {
    return <RevealStage result={result} onOpenAnother={resetReveal} />;
  }

  return (
    <section className="reveal-stage">
      <div className="reveal-layout">
      <div className="reveal-device-frame">
        <RevealBackground phase={phase} result={result} />

        <div className="relative z-20 px-4 pt-5 text-center sm:px-5 sm:pt-8">
          <p className="font-display text-xl font-black tracking-tight sm:text-2xl">
            เปิดกล่องออนไลน์
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-500">
            สินค้าจริง ระบบสุ่มฝั่งเซิร์ฟเวอร์
          </p>
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-4 sm:px-5">
          <AnimatePresence mode="wait">
            {phase === "idle" ? (
              <IdlePack key="idle" />
            ) : phase === "card" && result ? (
              <CardReveal key="card" result={result} />
            ) : (
              <OpeningPack key="opening" phase={phase} />
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-20 px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="rounded-2xl bg-white/90 p-3 shadow-[0_16px_42px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">Dragon-style MVP Box</p>
                <p className="mt-1 font-display text-lg font-black sm:text-xl">Starter Reveal Box</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-slate-500">สถานะ</p>
                <p className="mt-1 text-sm font-black text-[var(--color-primary)]">
                  {phase === "idle" ? "พร้อมเปิด" : "กำลังเปิด"}
                </p>
              </div>
            </div>

            <Button className="mt-4 w-full" disabled={isOpening} onClick={openPack}>
              {isOpening ? "กำลังเปิด..." : "OPEN NOW"}
            </Button>
            {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
          </div>
        </div>
      </div>
      <RevealInfoPanel phase={phase} result={result} />
      </div>
    </section>
  );
}

function RevealBackground({
  phase,
  result
}: {
  phase: RevealPhase;
  result: RevealResult | null;
}) {
  const color = result ? rarityColors[result.rarity] : "var(--color-primary)";

  return (
    <>
      <motion.div
        className="absolute inset-x-0 top-0 h-80"
        animate={{
          opacity: phase === "burst" ? 1 : 0.82
        }}
        style={{
          background: `radial-gradient(circle at 50% 28%, ${color}55, transparent 46%), linear-gradient(180deg, #ffffff 0%, #f7f8fb 85%)`
        }}
      />
      <AnimatePresence>
        {phase === "burst" || phase === "card" ? (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.68 }}
            className="absolute inset-0 z-10 bg-white"
          />
        ) : null}
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </>
  );
}

function IdlePack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: "spring", bounce: 0.22, duration: 0.68 }}
      className="relative w-[70%] max-w-[290px] sm:w-[76%] sm:max-w-[310px]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <PackArtwork />
      </motion.div>
      <motion.div
        className="absolute -bottom-10 left-1/2 h-8 w-52 -translate-x-1/2 rounded-full bg-slate-900/20 blur-xl"
        animate={{ scale: [1, 0.86, 1], opacity: [0.26, 0.18, 0.26] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function OpeningPack({ phase }: { phase: RevealPhase }) {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={
        phase === "shake"
          ? {
              x: [0, -12, 12, -10, 10, -7, 7, 0],
              rotate: [0, -4, 4, -3, 3, -2, 2, 0],
              scale: [1, 1.02, 1]
            }
          : {
              scale: [1, 1.18, 0.92],
              rotate: [0, 2, -6],
              opacity: [1, 1, 0.18]
            }
      }
      transition={{ duration: phase === "shake" ? 1.05 : 0.72, ease: "easeInOut" }}
      className="relative w-[70%] max-w-[290px] sm:w-[76%] sm:max-w-[310px]"
    >
      <PackArtwork glow={phase === "burst"} />
      {phase === "burst" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.55, 2.3] }}
          transition={{ duration: 0.72 }}
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98),rgba(255,61,139,0.55),transparent_65%)]"
        />
      ) : null}
    </motion.div>
  );
}

function CardReveal({ result }: { result: RevealResult }) {
  const color = rarityColors[result.rarity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotateY: -90, scale: 0.72 }}
      animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.82 }}
      className="relative aspect-[3/4] w-[58%] max-w-[240px] overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_28px_72px_rgba(15,23,42,0.26)] sm:w-[64%] sm:max-w-[270px]"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, #ffffff 0%, ${color}38 52%, #ffffff 100%)`
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-between p-4">
        <div className="flex w-full items-center justify-between text-[10px] font-black text-slate-500">
          <span>GCG</span>
          <span>{rarityLabels[result.rarity]}</span>
        </div>
        <motion.div
          initial={{ scale: 0.65, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.24 }}
          className="grid aspect-square w-28 place-items-center rounded-full border border-white/70 shadow-inner"
          style={{ background: `radial-gradient(circle, ${color} 0%, #ffffff 68%)` }}
        >
          <Sparkles className="h-12 w-12 text-white drop-shadow" />
        </motion.div>
        <div className="w-full rounded-xl bg-white/85 p-3 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Reward</p>
          <h1 className="mt-1 font-display text-lg font-black leading-tight">{result.name}</h1>
        </div>
      </div>
    </motion.div>
  );
}

function PackArtwork({ glow = false }: { glow?: boolean }) {
  return (
    <div className="relative aspect-[5/7] overflow-hidden rounded-[18px] border-[5px] border-lime-300 bg-lime-100 shadow-[0_26px_60px_rgba(15,23,42,0.25)]">
      <div className="absolute inset-x-0 top-0 h-12 bg-[repeating-linear-gradient(90deg,#88c540_0_8px,#a6d96f_8px_16px)]" />
      <div className="absolute inset-x-4 top-16 rounded-xl bg-white px-3 py-2 text-center shadow-sm">
        <p className="font-display text-2xl font-black tracking-tight text-[#275cc7]">GACHAGO</p>
        <p className="-mt-1 text-[10px] font-black tracking-[0.18em] text-rose-500">TRADING CARD MVP</p>
      </div>
      <div className="absolute inset-x-7 top-36 aspect-square rounded-full bg-[radial-gradient(circle_at_45%_35%,#ffffff_0_12%,#7dd3fc_13%_34%,#1d4ed8_35%_46%,#ffffff_47%_58%,#f43f5e_59%_100%)] shadow-inner" />
      <div className="absolute inset-x-5 bottom-10 rounded-xl bg-white/88 p-3 text-center shadow-sm">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Dragon Style</p>
        <p className="font-display text-3xl font-black text-lime-700">Reveal</p>
      </div>
      <div className="absolute right-2 top-2 rounded bg-slate-950 px-1.5 py-1 text-[10px] font-black text-white">
        6+
      </div>
      <AnimatePresence>
        {glow ? (
          <motion.div
            key="pack-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.72 }}
            className="absolute inset-0 bg-white"
          />
        ) : null}
      </AnimatePresence>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.42)_45%,transparent_56%)] opacity-70" />
    </div>
  );
}

function RevealInfoPanel({
  phase,
  result
}: {
  phase: RevealPhase;
  result: RevealResult | null;
}) {
  const status = phase === "idle" ? "Ready" : phase === "result" ? "Complete" : "Opening";

  return (
    <aside className="reveal-desktop-panel rounded-xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-2xl backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
        Reveal Console
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold">Starter Reveal Box</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
        Desktop keeps the phone-like reveal frame intact and uses the extra space for status,
        odds, and audit information.
      </p>
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
          <span className="text-[var(--color-text-muted)]">Status</span>
          <strong>{status}</strong>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
          <span className="text-[var(--color-text-muted)]">Mode</span>
          <strong>2.5D</strong>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
          <span className="text-[var(--color-text-muted)]">Result</span>
          <strong>{result?.name ?? "Pending"}</strong>
        </div>
      </div>
    </aside>
  );
}
