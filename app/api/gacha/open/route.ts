import { NextResponse, type NextRequest } from "next/server";
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
    [
      { id: "reward-common-1", name: "Silver Mascot Card", rarity: "common", weight: 70, stock: 100 },
      { id: "reward-rare-1", name: "Blue Aura Card", rarity: "rare", weight: 24, stock: 40 },
      {
        id: "reward-super-rare-1",
        name: "Magenta Burst Card",
        rarity: "super_rare",
        weight: 5,
        stock: 12
      },
      { id: "reward-secret-1", name: "Secret Gold Prototype", rarity: "secret", weight: 1, stock: 2 }
    ]
  );

  return NextResponse.json(result);
}
