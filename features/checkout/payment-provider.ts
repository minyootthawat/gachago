import crypto from "node:crypto";
import type { CheckoutRequest, CheckoutSession } from "@/features/checkout/types";

export async function createCheckoutSession(
  request: CheckoutRequest
): Promise<CheckoutSession> {
  return {
    orderId: crypto.randomUUID(),
    userPackId: crypto.randomUUID(),
    paymentReference: `mock_${request.productId}_${Date.now()}`,
    status: "pending"
  };
}
