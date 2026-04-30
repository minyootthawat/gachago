import type { RewardItem } from "@/features/shop/types";

export type WeightedReward = Pick<RewardItem, "id" | "weight" | "stock">;

export type OpenableReward = WeightedReward & {
  name: string;
  rarity: RewardItem["rarity"];
};

export type OpenPackInput = {
  userPackId: string;
  userId: string;
  clientSeed?: string;
};

export type OpenPackResult = {
  resultId: string;
  rewardItemId: string;
  rewardName: string;
  rewardRarity: string;
  randomValue: number;
  serverSeedHash: string;
};
