import type { Rarity } from "@/features/shop/types";

export type DemoPack = {
  id: string;
  productId: string;
  productName: string;
  status: "unopened" | "opened";
  purchasedAt: string;
  openedAt?: string;
  resultId?: string;
};

export type DemoOrder = {
  id: string;
  productId: string;
  productName: string;
  status: "Paid" | "Pending";
  totalSatang: number;
  createdAt: string;
};

export type DemoCollectionItem = {
  rewardItemId: string;
  name: string;
  rarity: Rarity;
  quantity: number;
  firstObtainedAt: string;
};

export type DemoState = {
  packs: DemoPack[];
  orders: DemoOrder[];
  collection: DemoCollectionItem[];
};

