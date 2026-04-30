import type { Product, RewardItem } from "@/features/shop/types";

const products: Product[] = [
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
  }
];

const rewards: RewardItem[] = [
  {
    id: "reward-common-1",
    productId: "starter-box",
    name: "Silver Mascot Card",
    rarity: "common",
    weight: 70,
    stock: 100
  },
  {
    id: "reward-rare-1",
    productId: "starter-box",
    name: "Blue Aura Card",
    rarity: "rare",
    weight: 24,
    stock: 40
  },
  {
    id: "reward-super-rare-1",
    productId: "starter-box",
    name: "Magenta Burst Card",
    rarity: "super_rare",
    weight: 5,
    stock: 12
  },
  {
    id: "reward-secret-1",
    productId: "starter-box",
    name: "Secret Gold Prototype",
    rarity: "secret",
    weight: 1,
    stock: 2
  }
];

export async function getProducts() {
  return products;
}

export async function getProduct(productId: string) {
  return products.find((product) => product.id === productId) ?? null;
}

export async function getProductRewards(productId: string) {
  return rewards.filter((reward) => reward.productId === productId);
}

