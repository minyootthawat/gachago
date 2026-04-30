import { describe, expect, it } from "vitest";
import { selectWeightedReward } from "@/features/gacha/engine/weighted-random";

describe("selectWeightedReward", () => {
  const rewards = [
    { id: "common", weight: 70, stock: 10 },
    { id: "rare", weight: 25, stock: 10 },
    { id: "secret", weight: 5, stock: 10 }
  ];

  it("selects the first reward at the lower bound", () => {
    expect(selectWeightedReward(rewards, 0).id).toBe("common");
  });

  it("selects later rewards by weighted range", () => {
    expect(selectWeightedReward(rewards, 0.8).id).toBe("rare");
    expect(selectWeightedReward(rewards, 0.98).id).toBe("secret");
  });

  it("ignores out-of-stock rewards", () => {
    expect(
      selectWeightedReward(
        [
          { id: "empty", weight: 99, stock: 0 },
          { id: "available", weight: 1, stock: 1 }
        ],
        0
      ).id
    ).toBe("available");
  });
});

