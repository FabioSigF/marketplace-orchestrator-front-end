import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, CheckCircle, XCircle } from "lucide-react";

interface MarketplaceProductsSummaryProps {
  total: number;
  active: number;
  inactive: number;
}

export function MarketplaceProductsSummary({
  total,
  active,
  inactive,
}: MarketplaceProductsSummaryProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Package className="h-4 w-4 text-muted-foreground" />
          Produtos integrados
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* TOTAL */}
        <div className="text-2xl font-bold">{total}</div>

        {/* BREAKDOWN */}
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {active} ativos
          </div>

          <div className="flex items-center gap-1">
            <XCircle className="h-4 w-4 text-red-500" />
            {inactive} inativos
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
