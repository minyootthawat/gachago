import crypto from "node:crypto";

export function createServerSeed() {
  return crypto.randomBytes(32).toString("hex");
}

export function hashSeed(seed: string) {
  return crypto.createHash("sha256").update(seed).digest("hex");
}

export function createDeterministicRandomValue({
  serverSeed,
  clientSeed = "",
  nonce
}: {
  serverSeed: string;
  clientSeed?: string;
  nonce: number;
}) {
  const digest = crypto
    .createHmac("sha256", serverSeed)
    .update(`${clientSeed}:${nonce}`)
    .digest("hex");

  const sample = digest.slice(0, 13);
  return Number.parseInt(sample, 16) / 0x1fffffffffffff;
}

