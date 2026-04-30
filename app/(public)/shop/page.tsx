import { PageShell } from "@/components/layout/PageShell";
import { ProductGrid } from "@/features/shop/components/ProductGrid";
import { getProducts } from "@/features/shop/queries";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <PageShell>
      <section className="page-container py-8 sm:py-10 lg:py-12">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl">
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
