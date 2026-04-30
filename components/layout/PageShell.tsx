import Link from "next/link";
import { Button } from "@/components/ui/Button";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/shop" className="font-display text-lg font-bold">
            Gachago
          </Link>
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link className="px-3 py-2 hover:text-white" href="/packs">
              Packs
            </Link>
            <Link className="px-3 py-2 hover:text-white" href="/collection">
              Collection
            </Link>
            <Button variant="secondary">Login</Button>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

