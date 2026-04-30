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
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_420px]">
        <div>
          <div className="aspect-[4/3] rounded-lg border border-[var(--color-border)] bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,139,0.3),transparent_48%),var(--color-surface)]" />
        </div>
        <aside>
          <p className="text-sm text-[var(--color-text-muted)]">{product.sku}</p>
          <h1 className="mt-2 font-display text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 leading-7 text-[var(--color-text-muted)]">{product.description}</p>
          <div className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--color-text-muted)]">Price</span>
              <strong className="font-display text-2xl">
                {formatThaiBaht(product.priceSatang)}
              </strong>
            </div>
            <div className="mt-4">
              <CheckoutButton productId={product.id} />
            </div>
          </div>
        </aside>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
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
