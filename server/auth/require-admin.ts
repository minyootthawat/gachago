import { notFound } from "next/navigation";
import { requireUser } from "@/server/auth/require-user";

export async function requireAdmin() {
  const user = await requireUser();
  const role = user.app_metadata?.role;

  if (role !== "admin") {
    notFound();
  }

  return user;
}

