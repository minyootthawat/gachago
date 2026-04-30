import Link from "next/link";
import { EmptyState } from "@/components/feedback/EmptyState";
import { PageShell } from "@/components/layout/PageShell";

export default function PacksPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold">My packs</h1>
        <div className="mt-8">
          <EmptyState
            title="No unopened packs yet"
            description="After checkout succeeds, unopened packs will appear here."
          />
        </div>
        <Link className="mt-6 inline-block text-sm text-[var(--color-secondary)]" href="/shop">
          Browse shop
        </Link>
      </section>
    </PageShell>
  );
}

