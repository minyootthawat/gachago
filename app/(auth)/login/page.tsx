import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-md px-4 py-16">
        <h1 className="font-display text-3xl font-bold">Login</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          LINE Login and email auth will be wired through Supabase Auth.
        </p>
        <div className="mt-8 space-y-3">
          <Button className="w-full">Continue with LINE</Button>
          <Button variant="secondary" className="w-full">
            Continue with email
          </Button>
        </div>
      </section>
    </PageShell>
  );
}

