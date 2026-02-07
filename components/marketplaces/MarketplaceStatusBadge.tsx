import { cn } from "@/lib/utils";
import { CONNECTION_STATUS_CONFIG } from "@/config/marketplace-status.config";
import { MarketplaceConnectionStatus } from "@/types/marketplace";

interface Props {
  status: MarketplaceConnectionStatus;
}

export function MarketplaceStatusBadge({ status }: Props) {
  const config = CONNECTION_STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
