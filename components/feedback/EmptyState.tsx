type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-md border border-dashed border-[var(--color-border)] p-8 text-center">
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      {description ? (
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{description}</p>
      ) : null}
    </div>
  );
}

