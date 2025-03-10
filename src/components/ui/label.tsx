import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/ui";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>;

const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    data-slot="Label"
    {...props}
  />
);

export { Label };
