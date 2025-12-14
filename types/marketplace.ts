export type MarketplaceConnectionStatus =
  | "connected"
  | "disconnected"
  | "error";
  export type MarketplaceSyncStatus =
  | "idle"
  | "in_progress"
  | "success"
  | "error";

export interface Marketplace {
  id: string;
  name: string;
  status: MarketplaceConnectionStatus;
  imageUrl?: string;
  lastSync?: string | null;
  syncStatus?: MarketplaceSyncStatus | null;
}
