import { PageShell } from "@/components/layout/PageShell";

export default function AccountPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold">Account</h1>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          Profile, LINE identity, addresses, and notification settings will live here.
        </p>
      </section>
    </PageShell>
  );
}

