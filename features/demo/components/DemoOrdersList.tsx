"use client";

import { useDemoState } from "@/features/demo/use-demo-state";
import { formatThaiBaht } from "@/lib/utils";

export function DemoOrdersList() {
  const { orders } = useDemoState();

  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
      {orders.map((order) => (
        <article
          className="grid gap-3 border-b border-[var(--color-border)] p-4 last:border-b-0 md:grid-cols-[120px_minmax(0,1fr)_120px_120px] md:items-center"
          key={order.id}
        >
          <strong className="font-display">{order.id}</strong>
          <span className="text-sm text-[var(--color-text-muted)]">{order.productName}</span>
          <span className="text-sm font-semibold">{order.status}</span>
          <span className="font-display font-semibold md:text-right">
            {formatThaiBaht(order.totalSatang)}
          </span>
        </article>
      ))}
    </div>
  );
}

