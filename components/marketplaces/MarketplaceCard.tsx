import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MarketplaceStatusBadge } from "./MarketplaceStatusBadge";
import type { Marketplace } from "@/types/marketplace";
import { SyncStatus } from "./MarketplaceSyncStatus";

export function MarketplaceCard({
  id,
  name,
  status,
  imageUrl,
  lastSync,
  syncStatus,
}: Marketplace) {
  return (
    <Card className="hover:shadow-md transition-shadow flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <div className="relative h-8 w-8 overflow-hidden rounded-md bg-muted">
            {imageUrl ? (
              <Image src={imageUrl} alt={name} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted-foreground">
                {name.charAt(0)}
              </div>
            )}
          </div>

          <span className="font-medium">{name}</span>
        </div>

        <MarketplaceStatusBadge status={status} />
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        {/* STATUS DE SINCRONIZAÇÃO */}
        {status === "connected" && lastSync && syncStatus && (
          <SyncStatus lastSync={lastSync} status={syncStatus} />
        )}
        <Link href={`/marketplaces/${id}`}>
          <Button className="w-full">
            {status === "connected" ? "Gerenciar" : "Conectar"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
