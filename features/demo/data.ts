import type { RewardItem } from "@/features/shop/types";
import type { Product } from "@/features/shop/types";
import type { DemoState } from "@/features/demo/types";

export const demoProducts: Product[] = [
  {
    id: "starter-box",
    sku: "MVP-STARTER-BOX",
    name: "Starter Reveal Box",
    description: "A low-friction first box for testing the reveal loop.",
    type: "blind_box",
    priceSatang: 14900,
    stock: 100
  },
  {
    id: "standard-box",
    sku: "MVP-STANDARD-BOX",
    name: "Standard Anime Box",
    description: "The main MVP blind box with stronger rare odds.",
    type: "blind_box",
    priceSatang: 29900,
    stock: 60
  },
  {
    id: "premium-box",
    sku: "MVP-PREMIUM-BOX",
    name: "Premium Secret Box",
    description: "A higher-impact reveal box for showing rare animation states.",
    type: "blind_box",
    priceSatang: 49900,
    stock: 24
  }
];

export const demoRewards: RewardItem[] = [
  { id: "reward-common-1", productId: "starter-box", name: "Silver Mascot Card", rarity: "common", weight: 50, stock: 100 },
  { id: "reward-common-2", productId: "starter-box", name: "Mint Capsule Card", rarity: "common", weight: 35, stock: 100 },
  { id: "reward-rare-1", productId: "starter-box", name: "Blue Aura Card", rarity: "rare", weight: 12, stock: 40 },
  { id: "reward-secret-1", productId: "starter-box", name: "Secret Gold Prototype", rarity: "secret", weight: 3, stock: 2 },
  { id: "reward-common-3", productId: "standard-box", name: "Cloud Runner Card", rarity: "common", weight: 45, stock: 80 },
  { id: "reward-common-4", productId: "standard-box", name: "Neon Charm Card", rarity: "common", weight: 30, stock: 80 },
  { id: "reward-rare-2", productId: "standard-box", name: "Prism Blade Card", rarity: "rare", weight: 18, stock: 30 },
  { id: "reward-super-rare-1", productId: "standard-box", name: "Magenta Burst Card", rarity: "super_rare", weight: 6, stock: 12 },
  { id: "reward-secret-2", productId: "standard-box", name: "Hidden Dragon Frame", rarity: "secret", weight: 1, stock: 2 },
  { id: "reward-common-5", productId: "premium-box", name: "Chrome Token Card", rarity: "common", weight: 32, stock: 40 },
  { id: "reward-rare-3", productId: "premium-box", name: "Celestial Ribbon Card", rarity: "rare", weight: 38, stock: 26 },
  { id: "reward-super-rare-2", productId: "premium-box", name: "Aurora Guardian Card", rarity: "super_rare", weight: 22, stock: 10 },
  { id: "reward-secret-3", productId: "premium-box", name: "Prototype Gold Signature", rarity: "secret", weight: 8, stock: 3 }
];

export const initialDemoState: DemoState = {
  packs: [
    {
      id: "demo-pack-1",
      productId: "starter-box",
      productName: "Starter Reveal Box",
      status: "unopened",
      purchasedAt: "Seed data"
    },
    {
      id: "demo-pack-2",
      productId: "standard-box",
      productName: "Standard Anime Box",
      status: "unopened",
      purchasedAt: "Seed data"
    }
  ],
  orders: [
    {
      id: "ORD-DEMO-1",
      productId: "starter-box",
      productName: "Starter Reveal Box",
      status: "Paid",
      totalSatang: 14900,
      createdAt: "Seed data"
    }
  ],
  collection: [
    {
      rewardItemId: "reward-common-1",
      name: "Silver Mascot Card",
      rarity: "common",
      quantity: 1,
      firstObtainedAt: "Seed data"
    }
  ]
};

