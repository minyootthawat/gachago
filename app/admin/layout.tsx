import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)]">
      <header className="border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
          <Link className="font-display font-bold" href="/admin">
            Gachago Admin
          </Link>
          <nav className="flex gap-2 text-sm text-[var(--color-text-muted)]">
            <Link className="px-2 py-1 hover:text-white" href="/admin/products">
              Products
            </Link>
            <Link className="px-2 py-1 hover:text-white" href="/admin/rewards">
              Rewards
            </Link>
            <Link className="px-2 py-1 hover:text-white" href="/admin/orders">
              Orders
            </Link>
            <Link className="px-2 py-1 hover:text-white" href="/admin/fulfillment">
              Fulfillment
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}

