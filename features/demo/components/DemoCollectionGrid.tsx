"use client";

import { Badge } from "@/components/ui/Badge";
import { rarityLabels } from "@/features/reveal/animation-tokens";
import { useDemoState } from "@/features/demo/use-demo-state";

export function DemoCollectionGrid() {
  const { collection } = useDemoState();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {collection.map((item) => (
        <article
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3"
          key={item.rewardItemId}
        >
          <div className="aspect-[3/4] rounded-md border border-[var(--color-border)] bg-[radial-gradient(circle_at_50%_35%,rgba(49,215,255,0.24),transparent_50%),var(--color-surface-raised)]" />
          <h2 className="mt-3 line-clamp-2 min-h-10 text-sm font-semibold">{item.name}</h2>
          <div className="mt-3 flex items-center justify-between gap-2">
            <Badge>{rarityLabels[item.rarity]}</Badge>
            <span className="text-xs text-[var(--color-text-muted)]">x{item.quantity}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

