import { validateEnv } from "@/server/config/env";

try {
  validateEnv({ includeServer: false });
  console.log("Environment looks valid for local scaffold checks.");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

