import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PrototypeBanner } from "@/features/demo/components/PrototypeBanner";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
        <div className="page-container flex min-h-16 items-center justify-between gap-3 py-3">
          <Link href="/shop" className="font-display text-lg font-bold">
            Gachago
          </Link>
          <nav className="flex min-w-0 items-center gap-1 text-sm text-[var(--color-text-muted)] sm:gap-2">
            <Link className="touch-target inline-flex items-center px-2 hover:text-white sm:px-3" href="/packs">
              Packs
            </Link>
            <Link
              className="touch-target inline-flex items-center px-2 hover:text-white sm:px-3"
              href="/collection"
            >
              Collection
            </Link>
            <Button className="touch-target px-3 sm:px-4" variant="secondary">
              Login
            </Button>
          </nav>
        </div>
      </header>
      <PrototypeBanner />
      <main>{children}</main>
    </div>
  );
}
