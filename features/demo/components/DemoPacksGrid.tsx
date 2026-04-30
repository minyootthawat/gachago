"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { useDemoState } from "@/features/demo/use-demo-state";

export function DemoPacksGrid() {
  const { packs } = useDemoState();

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {packs.map((pack) => (
        <article
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          key={pack.id}
        >
          <div className="flex items-start justify-between gap-3">
            <Badge>{pack.status === "unopened" ? "Unopened" : "Opened"}</Badge>
            <span className="text-xs text-[var(--color-text-muted)]">{pack.purchasedAt}</span>
          </div>
          <div className="mt-6 aspect-[5/7] rounded-md border border-[var(--color-border)] bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,139,0.26),transparent_48%),var(--color-surface-raised)] md:aspect-[4/3] xl:aspect-[5/6]" />
          <h2 className="mt-4 font-display text-xl font-semibold">{pack.productName}</h2>
          <Link
            className="touch-target mt-4 inline-flex w-full items-center justify-center rounded-md bg-[var(--color-primary)] px-4 text-sm font-semibold text-white aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={pack.status === "unopened" ? `/reveal/${pack.id}` : "/collection"}
            aria-disabled={pack.status === "opened"}
          >
            {pack.status === "unopened" ? "Open pack" : "View result"}
          </Link>
        </article>
      ))}
    </div>
  );
}

