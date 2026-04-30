"use client";

import { initialDemoState } from "@/features/demo/data";
import type { DemoCollectionItem, DemoOrder, DemoPack, DemoState } from "@/features/demo/types";
import type { Rarity } from "@/features/shop/types";

const STORAGE_KEY = "gachago_demo_state_v1";

function canUseStorage() {
  return typeof window !== "undefined" && "localStorage" in window;
}

export function getDemoState(): DemoState {
  if (!canUseStorage()) {
    return initialDemoState;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    saveDemoState(initialDemoState);
    return initialDemoState;
  }

  try {
    return JSON.parse(raw) as DemoState;
  } catch {
    saveDemoState(initialDemoState);
    return initialDemoState;
  }
}

export function saveDemoState(state: DemoState) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("gachago-demo-state"));
}

export function resetDemoState() {
  saveDemoState(initialDemoState);
}

export function addDemoCheckout({
  orderId,
  userPackId,
  productId,
  productName,
  totalSatang
}: {
  orderId: string;
  userPackId: string;
  productId: string;
  productName: string;
  totalSatang: number;
}) {
  const state = getDemoState();
  const createdAt = new Date().toLocaleString("th-TH");
  const pack: DemoPack = {
    id: userPackId,
    productId,
    productName,
    status: "unopened",
    purchasedAt: createdAt
  };
  const order: DemoOrder = {
    id: orderId.slice(0, 8).toUpperCase(),
    productId,
    productName,
    status: "Paid",
    totalSatang,
    createdAt
  };

  saveDemoState({
    ...state,
    packs: [pack, ...state.packs],
    orders: [order, ...state.orders]
  });
}

export function addDemoRevealResult({
  userPackId,
  resultId,
  rewardItemId,
  name,
  rarity
}: {
  userPackId: string;
  resultId: string;
  rewardItemId: string;
  name: string;
  rarity: Rarity;
}) {
  const state = getDemoState();
  const openedAt = new Date().toLocaleString("th-TH");
  const existingItem = state.collection.find((item) => item.rewardItemId === rewardItemId);
  const nextCollection: DemoCollectionItem[] = existingItem
    ? state.collection.map((item) =>
        item.rewardItemId === rewardItemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [
        {
          rewardItemId,
          name,
          rarity,
          quantity: 1,
          firstObtainedAt: openedAt
        },
        ...state.collection
      ];

  saveDemoState({
    ...state,
    packs: state.packs.map((pack) =>
      pack.id === userPackId
        ? {
            ...pack,
            status: "opened",
            openedAt,
            resultId
          }
        : pack
    ),
    collection: nextCollection
  });
}

