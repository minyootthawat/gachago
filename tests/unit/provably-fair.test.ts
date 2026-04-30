import { describe, expect, it } from "vitest";
import { createDeterministicRandomValue, hashSeed } from "@/features/gacha/engine/provably-fair";

describe("provably fair helpers", () => {
  it("hashes seeds consistently", () => {
    expect(hashSeed("seed")).toBe(hashSeed("seed"));
  });

  it("creates deterministic values for the same seed and nonce", () => {
    const value = createDeterministicRandomValue({
      serverSeed: "server",
      clientSeed: "client",
      nonce: 1
    });

    expect(value).toBe(
      createDeterministicRandomValue({
        serverSeed: "server",
        clientSeed: "client",
        nonce: 1
      })
    );
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(1);
  });
});

