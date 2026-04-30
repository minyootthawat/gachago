import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { CheckoutButton } from "@/features/checkout/components/CheckoutButton";
import { OddsTable } from "@/features/shop/components/OddsTable";
import { getProduct, getProductRewards } from "@/features/shop/queries";
import { formatThaiBaht } from "@/lib/utils";

type ProductDetailPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  const rewards = await getProductRewards(product.id);

  return (
    <PageShell>
      <section className="page-container grid gap-6 py-8 md:grid-cols-[minmax(0,1fr)_340px] md:items-start lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-8 lg:py-12">
        <div>
          <div className="aspect-[4/3] rounded-lg border border-[var(--color-border)] bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,139,0.3),transparent_48%),var(--color-surface)]" />
        </div>
        <aside className="md:sticky md:top-6">
          <p className="text-sm text-[var(--color-text-muted)]">{product.sku}</p>
          <h1 className="mt-2 font-display text-3xl font-bold lg:text-4xl">{product.name}</h1>
          <p className="mt-4 leading-7 text-[var(--color-text-muted)]">{product.description}</p>
          <div className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--color-text-muted)]">Price</span>
              <strong className="font-display text-2xl">
                {formatThaiBaht(product.priceSatang)}
              </strong>
            </div>
            <div className="mt-4">
              <CheckoutButton
                priceSatang={product.priceSatang}
                productId={product.id}
                productName={product.name}
              />
            </div>
          </div>
        </aside>
      </section>
      <section className="page-container pb-16">
        <h2 className="font-display text-2xl font-semibold">Reward pool and odds</h2>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Display final odds only after legal and inventory review.
        </p>
        <div className="mt-5">
          <OddsTable rewards={rewards} />
        </div>
      </section>
    </PageShell>
  );
}
