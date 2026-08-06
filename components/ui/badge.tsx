import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  highlight,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { highlight?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-mono",
        highlight
          ? "border-transparent bg-gradient-to-r from-primary to-secondary text-white"
          : "border-border bg-foreground/[0.02] text-muted",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
