import { NextResponse } from "next/server";

export async function POST() {
  // Verify provider signature and mark the order paid before enabling real payments.
  return NextResponse.json({ received: true, mode: "placeholder" });
}

