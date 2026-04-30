import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { DemoPacksGrid } from "@/features/demo/components/DemoPacksGrid";

export default function PacksPage() {
  return (
    <PageShell>
      <section className="page-container py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold lg:text-4xl">My packs</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
              Unopened packs stay here until the user starts a server-side reveal.
            </p>
          </div>
          <Link
            className="touch-target inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-4 text-sm font-semibold text-white"
            href="/shop"
          >
            Browse shop
          </Link>
        </div>

        <DemoPacksGrid />
      </section>
    </PageShell>
  );
}
