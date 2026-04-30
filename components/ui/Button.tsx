import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] focus-visible:outline-[var(--color-primary)]",
        variant === "secondary" &&
          "border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-white hover:border-white/25",
        variant === "ghost" && "text-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

