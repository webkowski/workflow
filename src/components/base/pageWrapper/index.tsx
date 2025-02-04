import { cva, type VariantProps } from "class-variance-authority";
import { type PropsWithChildren } from "react";
import { cn } from "@/utils/ui";
import { type PropsWithClassName } from "@/types";

const pageVariants = cva("flex min-h-svh flex-col  gap-6 bg-background p-6 md:p-10", {
  variants: {
    variant: {
      default: "items-start justify-start",
      centered: "items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type PageWrapperProps = PropsWithChildren & VariantProps<typeof pageVariants> & PropsWithClassName;

export default function PageWrapper({ variant, className, children }: PageWrapperProps) {
  return <div className={cn(pageVariants({ variant, className }))}>{children}</div>;
}
