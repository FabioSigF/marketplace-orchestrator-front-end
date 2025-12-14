import { Card, CardContent } from "@/components/ui/card";

export function MarketplaceOverviewTab() {
  return (
    <Card>
      <CardContent className="space-y-4">
        <h3 className="font-medium">Visão geral</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="font-medium">Conectado</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Última sincronização
            </p>
            <p className="font-medium">Há 10 minutos</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
