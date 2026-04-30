import { PageShell } from "@/components/layout/PageShell";
import { DemoCollectionGrid } from "@/features/demo/components/DemoCollectionGrid";

export default function CollectionPage() {
  return (
    <PageShell>
      <section className="page-container py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-3xl font-bold lg:text-4xl">Collection</h1>
          <p className="max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
            Mobile shows a compact grid. Tablet and desktop add more density and filters.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 lg:sticky lg:top-6 lg:self-start">
            <h2 className="font-display text-lg font-semibold">Filters</h2>
            <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
              {["All", "Common", "Rare", "Super Rare", "Secret"].map((filter) => (
                <button
                  className="touch-target rounded-md border border-[var(--color-border)] px-3 text-sm text-[var(--color-text-muted)] hover:text-white"
                  key={filter}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </aside>

          <DemoCollectionGrid />
        </div>
      </section>
    </PageShell>
  );
}
