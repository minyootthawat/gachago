import { beforeEach, describe, expect, it } from "vitest";
import {
  addDemoCheckout,
  addDemoRevealResult,
  getDemoState,
  resetDemoState
} from "@/features/demo/local-state";

describe("demo local state", () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear()
      }
    });
    resetDemoState();
  });

  it("adds mock checkout orders and packs", () => {
    addDemoCheckout({
      orderId: "order-123456",
      userPackId: "pack-123",
      productId: "starter-box",
      productName: "Starter Reveal Box",
      totalSatang: 14900
    });

    const state = getDemoState();
    expect(state.packs[0]).toMatchObject({
      id: "pack-123",
      productId: "starter-box",
      status: "unopened"
    });
    expect(state.orders[0]).toMatchObject({
      id: "ORDER-12",
      productName: "Starter Reveal Box",
      totalSatang: 14900
    });
  });

  it("marks packs opened and increments collection quantities", () => {
    addDemoRevealResult({
      userPackId: "demo-pack-1",
      resultId: "result-1",
      rewardItemId: "reward-common-1",
      name: "Silver Mascot Card",
      rarity: "common"
    });

    const state = getDemoState();
    expect(state.packs.find((pack) => pack.id === "demo-pack-1")).toMatchObject({
      status: "opened",
      resultId: "result-1"
    });
    expect(
      state.collection.find((item) => item.rewardItemId === "reward-common-1")
    ).toMatchObject({
      quantity: 2
    });
  });
});
