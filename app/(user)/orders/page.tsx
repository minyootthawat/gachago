import { PageShell } from "@/components/layout/PageShell";
import { DemoOrdersList } from "@/features/demo/components/DemoOrdersList";

export default function OrdersPage() {
  return (
    <PageShell>
      <section className="page-container py-8 sm:py-10 lg:py-12">
        <h1 className="font-display text-3xl font-bold lg:text-4xl">Orders</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
          Order history uses cards on mobile and table-like rows on larger screens.
        </p>

        <DemoOrdersList />
      </section>
    </PageShell>
  );
}
