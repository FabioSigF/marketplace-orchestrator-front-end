import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MarketplaceSyncTab() {
  return (
    <Card>
      <CardContent className="space-y-4">
        <h3 className="font-medium">Sincronização</h3>

        <p className="text-sm text-muted-foreground">
          Controle manual e status da sincronização.
        </p>

        <Button>Sincronizar agora</Button>
      </CardContent>
    </Card>
  );
}
