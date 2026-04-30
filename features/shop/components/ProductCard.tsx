import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatThaiBaht } from "@/lib/utils";
import type { Product } from "@/features/shop/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <Badge>{product.type === "blind_box" ? "Blind Box" : "Card Pack"}</Badge>
        <span className="text-sm text-[var(--color-text-muted)]">{product.stock} left</span>
      </div>
      <div className="mt-8 aspect-[4/3] rounded-md border border-[var(--color-border)] bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,139,0.28),transparent_48%),var(--color-surface-raised)] sm:mt-12" />
      <h2 className="mt-5 font-display text-xl font-semibold">{product.name}</h2>
      <p className="mt-2 min-h-10 text-sm leading-6 text-[var(--color-text-muted)]">
        {product.description}
      </p>
      <div className="mt-5 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
        <strong className="font-display text-lg">{formatThaiBaht(product.priceSatang)}</strong>
        <Link
          href={`/shop/${product.id}`}
          className="touch-target inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
        >
          View box
        </Link>
      </div>
    </article>
  );
}
