import { SYNC_STATUS_CONFIG } from "@/config/marketplace-status.config";
import { MarketplaceSyncStatus } from "@/types/marketplace";

interface SyncStatusProps {
  lastSync: string;
  status: MarketplaceSyncStatus;
}

function formatLastSync(dateIso: string) {
  const date = new Date(dateIso);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 60) {
    return `${diffMinutes} minuto${diffMinutes !== 1 ? "s" : ""} atrás`;
  }

  if (diffHours < 24) {
    return `${diffHours} hora${diffHours !== 1 ? "s" : ""} atrás`;
  }

  if (diffDays < 7) {
    return `${diffDays} dia${diffDays !== 1 ? "s" : ""} atrás`;
  }

  return date.toLocaleDateString("pt-BR");
}

export function SyncStatus({ lastSync, status }: SyncStatusProps) {
  const config = SYNC_STATUS_CONFIG[status];
  return (
    <div className="text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
      <span>Última sincronização:</span>
      <span className="font-medium text-foreground">
        {formatLastSync(lastSync)}
      </span>
      <span>•</span>
      <span className={config.className}>{config.label}</span>
    </div>
  );
}
