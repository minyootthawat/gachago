import type { WeightedReward } from "@/features/gacha/types";

export function selectWeightedReward<T extends WeightedReward>(
  rewards: T[],
  randomValue: number
): T {
  const availableRewards = rewards.filter((reward) => reward.stock > 0 && reward.weight > 0);
  const totalWeight = availableRewards.reduce((sum, reward) => sum + reward.weight, 0);

  if (availableRewards.length === 0 || totalWeight <= 0) {
    throw new Error("No available rewards");
  }

  const target = randomValue * totalWeight;
  let cursor = 0;

  for (const reward of availableRewards) {
    cursor += reward.weight;
    if (target < cursor) {
      return reward;
    }
  }

  return availableRewards[availableRewards.length - 1];
}

