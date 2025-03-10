import * as React from "react";

import { cn } from "@/utils/ui";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("bg-card text-card-foreground rounded-xl border shadow-sm", className)}
    data-slot="Card"
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    data-slot="CardHeader"
    {...props}
  />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("leading-none font-semibold tracking-tight", className)}
    data-slot="CardTitle"
    {...props}
  />
);

const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("text-muted-foreground text-sm", className)}
    data-slot="CardDescription"
    {...props}
  />
);

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("p-6 pt-0", className)}
    data-slot="CardContent"
    {...props}
  />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    data-slot="CardFooter"
    {...props}
  />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
