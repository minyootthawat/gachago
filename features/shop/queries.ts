import { demoProducts, demoRewards } from "@/features/demo/data";

export async function getProducts() {
  return demoProducts;
}

export async function getProduct(productId: string) {
  return demoProducts.find((product) => product.id === productId) ?? null;
}

export async function getProductRewards(productId: string) {
  return demoRewards.filter((reward) => reward.productId === productId);
}
