import { EmptyState } from "@/components/feedback/EmptyState";
import { PageShell } from "@/components/layout/PageShell";

export default function CollectionPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold">Collection</h1>
        <div className="mt-8">
          <EmptyState
            title="Collection is empty"
            description="Reveal results will be grouped here with duplicate counts."
          />
        </div>
      </section>
    </PageShell>
  );
}

