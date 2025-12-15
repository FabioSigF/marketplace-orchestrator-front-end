"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import { Card, CardHeader } from "@/components/ui/card";
import { MarketplaceStatusBadge } from "@/components/marketplaces/MarketplaceStatusBadge";
import { SyncStatus } from "@/components/marketplaces/MarketplaceSyncStatus";

import {
  MarketplaceTabs,
  MarketplaceTab,
} from "@/components/marketplaces/MarketplaceTabs";

import { MarketplaceOverviewTab } from "@/components/marketplaces/tabs/MarketplaceOverviewTab";
import { MarketplaceSettingsTab } from "@/components/marketplaces/tabs/MarketplaceSettingsTab";
import { MarketplaceSyncTab } from "@/components/marketplaces/tabs/MarketplaceSyncTab";
import { MarketplaceLogsTab } from "@/components/marketplaces/tabs/MarketplaceLogsTab";


import {
  MarketplaceHeaderData,
  MarketplaceOverviewData,
} from "@/types/marketplace";

export default function MarketplacePage() {
  const { marketplaceId } = useParams<{ marketplaceId: string }>();
  const [activeTab, setActiveTab] = useState<MarketplaceTab>("overview");

  // 🔹 MOCK (equivalente à resposta da API)
  const headerData: MarketplaceHeaderData = {
    status: "connected",
    lastSync: "2025-12-14T14:30:00Z",
    syncStatus: "in_progress",
  };

  const overviewData: MarketplaceOverviewData = {
    integratedProductsCount: 124,
    activeProductsCount: 118,
    inactiveProductsCount: 6,
  };

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <Card>
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold capitalize">
              {marketplaceId}
            </h2>

            <MarketplaceStatusBadge status={headerData.status} />
          </div>

          <SyncStatus
            lastSync={headerData.lastSync}
            status={headerData.syncStatus}
          />
        </CardHeader>
      </Card>

      {/* ===== TABS ===== */}
      <MarketplaceTabs value={activeTab} onChange={setActiveTab} />

      {/* ===== CONTENT ===== */}
      {activeTab === "overview" && (
        <MarketplaceOverviewTab overview={overviewData} />
      )}

      {activeTab === "settings" && <MarketplaceSettingsTab />}
      {activeTab === "sync" && <MarketplaceSyncTab />}
      {activeTab === "logs" && <MarketplaceLogsTab />}
    </div>
  );
}
