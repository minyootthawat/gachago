export type Rarity = "common" | "rare" | "super_rare" | "secret";

export type Product = {
  id: string;
  sku: string;
  name: string;
  description: string;
  type: "card_pack" | "blind_box";
  priceSatang: number;
  stock: number;
  imageUrl?: string;
};

export type RewardItem = {
  id: string;
  productId: string;
  name: string;
  rarity: Rarity;
  weight: number;
  stock: number;
};

