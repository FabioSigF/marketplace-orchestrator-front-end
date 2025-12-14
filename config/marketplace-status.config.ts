import {
  MarketplaceConnectionStatus,
  MarketplaceSyncStatus,
} from "@/types/marketplace";

export const CONNECTION_STATUS_CONFIG: Record<
  MarketplaceConnectionStatus,
  {
    label: string;
    className: string;
  }
> = {
  connected: {
    label: "Conectado",
    className: "bg-emerald-100 text-emerald-700",
  },
  disconnected: {
    label: "Desconectado",
    className: "bg-gray-100 text-gray-600",
  },
  error: {
    label: "Erro",
    className: "bg-red-100 text-red-700",
  },
};

export const SYNC_STATUS_CONFIG: Record<
  MarketplaceSyncStatus,
  {
    label: string;
    className: string;
  }
> = {
  idle: {
    label: "Aguardando",
    className: "text-muted-foreground",
  },
  in_progress: {
    label: "Sincronizando",
    className: "text-blue-600",
  },
  success: {
    label: "Sincronizado",
    className: "text-emerald-600",
  },
  error: {
    label: "Erro na sincronização",
    className: "text-red-600",
  },
};
