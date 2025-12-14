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
import { MarketplacePermissionsTab } from "@/components/marketplaces/tabs/MarketplacePermissionsTab";

export default function MarketplacePage() {
  const { marketplaceId } = useParams<{ marketplaceId: string }>();
  const [activeTab, setActiveTab] = useState<MarketplaceTab>("overview");

  // 🔹 Mock (substituir por API depois)
  const marketplaceData = {
    status: "connected" as const,
    lastSync: "2025-12-14T14:30:00Z",
    syncStatus: "in_progress" as const,
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

            <MarketplaceStatusBadge status={marketplaceData.status} />
          </div>

          {/* 🔥 COMPONENTE REUTILIZÁVEL */}
          <SyncStatus
            lastSync={marketplaceData.lastSync}
            status={marketplaceData.syncStatus}
          />
        </CardHeader>
      </Card>

      {/* ===== TABS ===== */}
      <MarketplaceTabs value={activeTab} onChange={setActiveTab} />

      {/* ===== CONTENT ===== */}
      {activeTab === "overview" && <MarketplaceOverviewTab />}
      {activeTab === "settings" && <MarketplaceSettingsTab />}
      {activeTab === "sync" && <MarketplaceSyncTab />}
      {activeTab === "logs" && <MarketplaceLogsTab />}
      {activeTab === "permissions" && <MarketplacePermissionsTab />}
    </div>
  );
}
