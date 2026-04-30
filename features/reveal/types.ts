import type { Rarity } from "@/features/shop/types";

export type RevealMode = "static" | "two_dimensional" | "three_dimensional";

export type RevealResult = {
  id: string;
  name: string;
  rarity: Rarity;
};

