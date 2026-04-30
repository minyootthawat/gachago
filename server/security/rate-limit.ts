type RateLimitResult = {
  ok: boolean;
  remaining: number;
};

export async function rateLimit(_key: string): Promise<RateLimitResult> {
  void _key;
  // Replace with Redis or provider-native rate limits before public launch.
  return { ok: true, remaining: 1 };
}
