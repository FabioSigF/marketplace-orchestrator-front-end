export type MarketplaceConnectionStatus =
  | "connected"
  | "disconnected"
  | "error";
  export type MarketplaceSyncStatus =
  | "idle"
  | "in_progress"
  | "success"
  | "error";

export interface MarketplaceOverviewData {
  integratedProductsCount: number;
  activeProductsCount: number;
  inactiveProductsCount: number;
}

export interface MarketplaceHeaderData {
  status: MarketplaceConnectionStatus;
  lastSync: string;
  syncStatus: MarketplaceSyncStatus;
}

  export interface Marketplace {
  id: string;
  name: string;
  status: MarketplaceConnectionStatus;
  imageUrl?: string;
  lastSync?: string | null;
  syncStatus?: MarketplaceSyncStatus | null;
}
