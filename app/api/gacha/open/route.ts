import { NextResponse, type NextRequest } from "next/server";
import { demoRewards } from "@/features/demo/data";
import { openPack } from "@/features/gacha/engine/open-pack";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    userPackId?: string;
    clientSeed?: string;
  };

  if (!body.userPackId) {
    return NextResponse.json({ error: "userPackId is required" }, { status: 400 });
  }

  // Replace this fixture with a transactional DB open flow before real money launch.
  const result = await openPack(
    {
      userPackId: body.userPackId,
      userId: "dev-user",
      clientSeed: body.clientSeed
    },
    demoRewards
  );

  return NextResponse.json(result);
}
