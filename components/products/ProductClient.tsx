"use client";

import React, { useMemo, useState } from "react";
import type { Product, ProductVariation } from "@/types/product";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const router = useRouter();

  const fallbackVariation =
    product.variations?.[0] ??
    ({
      sku: product.sku,
      price: product.price,
    } as ProductVariation);

  const [selectedVariation, setSelectedVariation] =
    useState<ProductVariation>(fallbackVariation);

  const formattedPrice = useMemo(() => {
    const price = selectedVariation?.price ?? product.price;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }, [selectedVariation, product.price]);

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <Card>
        <CardHeader className="flex items-start gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push(`/`)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
          </div>
        </CardHeader>
      </Card>

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* ===== IMAGENS ===== */}
        <Card className="lg:col-span-1 px-6">
          <ProductImages
            product={product}
            selectedVariation={selectedVariation}
            onSelectVariation={setSelectedVariation}
          />
        </Card>

        {/* ===== INFO ===== */}
        <Card className="lg:col-span-2">
          <CardContent className="px-6">
            <ProductInfo
              product={product}
              selectedVariation={selectedVariation}
              formattedPrice={formattedPrice}
              onSelectVariation={setSelectedVariation}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
