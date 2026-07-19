import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn("focus-ring h-11 w-full rounded-md border bg-background/80 px-3 text-sm", className)}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
