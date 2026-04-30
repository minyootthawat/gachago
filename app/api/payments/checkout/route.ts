import { NextResponse, type NextRequest } from "next/server";
import { createCheckoutSession } from "@/features/checkout/payment-provider";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    productId?: string;
    quantity?: number;
  };

  if (!body.productId) {
    return NextResponse.json({ error: "productId is required" }, { status: 400 });
  }

  const session = await createCheckoutSession({
    productId: body.productId,
    quantity: body.quantity ?? 1
  });

  return NextResponse.json(session);
}

