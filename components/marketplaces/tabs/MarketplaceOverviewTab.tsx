import { MarketplaceProductsSummary } from "@/components/marketplaces/MarketplaceProductsSummary";
import { MarketplaceOverviewData } from "@/types/marketplace";

interface MarketplaceOverviewTabProps {
  overview: MarketplaceOverviewData;
}

export function MarketplaceOverviewTab({
  overview,
}: MarketplaceOverviewTabProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <MarketplaceProductsSummary
        total={overview.integratedProductsCount}
        active={overview.activeProductsCount}
        inactive={overview.inactiveProductsCount}
      />
    </div>
  );
}
