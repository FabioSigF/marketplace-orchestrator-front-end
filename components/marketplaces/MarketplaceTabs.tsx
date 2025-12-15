"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type MarketplaceTab =
  | "overview"
  | "settings"
  | "sync"
  | "logs"

interface MarketplaceTabsProps {
  value: MarketplaceTab;
  onChange: (value: MarketplaceTab) => void;
}

export function MarketplaceTabs({ value, onChange }: MarketplaceTabsProps) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as MarketplaceTab)}>
      <TabsList>
        <TabsTrigger value="overview">Visão geral</TabsTrigger>
        <TabsTrigger value="settings">Configurações</TabsTrigger>
        <TabsTrigger value="sync">Sincronização</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
