import { Card, CardContent } from "@/components/ui/card";

export function MarketplaceSettingsTab() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h3 className="font-medium">Configurações</h3>
        <p className="text-sm text-muted-foreground">
          Configurações de integração, tokens, webhooks e preferências.
        </p>
      </CardContent>
    </Card>
  );
}
