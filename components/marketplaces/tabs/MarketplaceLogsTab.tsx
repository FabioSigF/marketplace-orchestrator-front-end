import { Card, CardContent } from "@/components/ui/card";

export function MarketplaceLogsTab() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h3 className="font-medium">Logs</h3>

        <p className="text-sm text-muted-foreground">
          Histórico de eventos, erros e sincronizações.
        </p>
      </CardContent>
    </Card>
  );
}
