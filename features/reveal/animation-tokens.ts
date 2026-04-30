import type { Rarity } from "@/features/shop/types";

export const rarityColors: Record<Rarity, string> = {
  common: "var(--color-rarity-common)",
  rare: "var(--color-rarity-rare)",
  super_rare: "var(--color-rarity-super-rare)",
  secret: "var(--color-rarity-secret)"
};

export const rarityLabels: Record<Rarity, string> = {
  common: "COMMON",
  rare: "RARE",
  super_rare: "SUPER RARE",
  secret: "SECRET"
};

export const revealTimeline = {
  introMs: 800,
  shakeMs: 1000,
  burstMs: 700,
  silhouetteMs: 1200,
  finalMs: 1300
};
