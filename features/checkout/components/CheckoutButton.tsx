"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CheckoutButtonProps = {
  productId: string;
};

export function CheckoutButton({ productId }: CheckoutButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, quantity: 1 })
      });

      if (!response.ok) {
        throw new Error("Checkout failed");
      }

      const session = (await response.json()) as { userPackId: string };
      router.push(`/reveal/${session.userPackId}`);
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Button className="w-full" disabled={isLoading} onClick={handleCheckout}>
        {isLoading ? "Creating mock checkout..." : "Mock checkout and open"}
      </Button>
      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}

