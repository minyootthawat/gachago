import { PageShell } from "@/components/layout/PageShell";

export default function AccountPage() {
  return (
    <PageShell>
      <section className="page-container py-8 sm:py-10 lg:py-12">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold lg:text-4xl">Account</h1>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
            Profile, LINE identity, addresses, and notification settings will live here.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            ["Profile", "Display name, avatar, and login identities."],
            ["Shipping", "Saved address snapshots for fulfillment requests."],
            ["Notifications", "LINE and email preferences for payment and shipping updates."]
          ].map(([title, description]) => (
            <article
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              key={title}
            >
              <h2 className="font-display text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
