const requiredPublicEnv = [
  "NEXT_PUBLIC_APP_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
] as const;

const requiredServerEnv = ["SUPABASE_SERVICE_ROLE_KEY"] as const;

export function getEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function validateEnv({ includeServer = false } = {}) {
  const missing = [
    ...requiredPublicEnv.filter((name) => !process.env[name]),
    ...(includeServer ? requiredServerEnv.filter((name) => !process.env[name]) : [])
  ];

  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
}

export const appConfig = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  paymentProvider: process.env.PAYMENT_PROVIDER ?? "mock"
};

