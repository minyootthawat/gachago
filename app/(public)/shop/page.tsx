import { PageShell } from "@/components/layout/PageShell";
import { ProductGrid } from "@/features/shop/components/ProductGrid";
import { getProducts } from "@/features/shop/queries";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-normal">
            Open anime boxes with cinematic reveals.
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
            MVP scaffold for shop, PromptPay checkout, unopened packs, reveal animation,
            collection, and fulfillment.
          </p>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </section>
    </PageShell>
  );
}

