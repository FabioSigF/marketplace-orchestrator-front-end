import { Card, CardContent } from "@/components/ui/card";

export function MarketplacePermissionsTab() {
  return (
    <Card>
      <CardContent className="space-y-2">
        <h3 className="font-medium">Permissões</h3>

        <p className="text-sm text-muted-foreground">
          Permissões concedidas pelo marketplace.
        </p>
      </CardContent>
    </Card>
  );
}
