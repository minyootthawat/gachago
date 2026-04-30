import crypto from "node:crypto";
import { createDeterministicRandomValue, createServerSeed, hashSeed } from "./provably-fair";
import { selectWeightedReward } from "./weighted-random";
import type { OpenableReward, OpenPackInput, OpenPackResult } from "@/features/gacha/types";

export async function openPack(
  input: OpenPackInput,
  rewards: OpenableReward[]
): Promise<OpenPackResult> {
  const serverSeed = createServerSeed();
  const serverSeedHash = hashSeed(serverSeed);
  const randomValue = createDeterministicRandomValue({
    serverSeed,
    clientSeed: input.clientSeed,
    nonce: Date.now()
  });
  const reward = selectWeightedReward(rewards, randomValue);

  return {
    resultId: crypto.randomUUID(),
    rewardItemId: reward.id,
    rewardName: reward.name,
    rewardRarity: reward.rarity,
    randomValue,
    serverSeedHash
  };
}
