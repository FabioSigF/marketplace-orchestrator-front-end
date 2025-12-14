"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils/cn";

/* ================= ROOT ================= */
function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

/* ================= LIST ================= */
function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        `
        inline-flex items-center gap-1
        border-b border-border
        `,
        className
      )}
      {...props}
    />
  );
}

/* ================= TRIGGER ================= */
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
        relative inline-flex items-center justify-center
        px-3 py-2 text-sm font-medium
        text-muted-foreground

        transition-colors duration-200 ease-out

        hover:text-foreground

        data-[state=active]:text-foreground

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-ring
        focus-visible:ring-offset-2

        disabled:pointer-events-none
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    >
      {props.children}

      {/* underline animado */}
      <span
        className="
          pointer-events-none
          absolute -bottom-px left-0 right-0
          h-[2px]
          bg-primary
          origin-center
          scale-x-0
          transition-transform duration-200 ease-out
          data-[state=active]:scale-x-100
        "
      />
    </TabsPrimitive.Trigger>
  );
}


/* ================= CONTENT ================= */
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        `
        mt-4
        focus-visible:outline-none
        `,
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
