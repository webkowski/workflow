import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/ui";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = ({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    data-slot="Alert"
    role="alert"
    {...props}
  />
);

const AlertTitle = ({ className, ...props }: React.ComponentProps<"h5">) => (
  <h5
    className={cn("mb-1 leading-none font-medium tracking-tight", className)}
    data-slot="AlertTitle"
    {...props}
  />
);

const AlertDescription = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    data-slot="AlertDescription"
    {...props}
  />
);

export { Alert, AlertTitle, AlertDescription };
