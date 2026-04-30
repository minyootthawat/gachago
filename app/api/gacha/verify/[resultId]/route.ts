import { NextResponse } from "next/server";

type VerifyRouteProps = {
  params: Promise<{ resultId: string }>;
};

export async function GET(_request: Request, { params }: VerifyRouteProps) {
  const { resultId } = await params;

  return NextResponse.json({
    resultId,
    status: "placeholder",
    note: "Wire to gacha_results audit table before launch."
  });
}

