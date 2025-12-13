// components/product/ProductClient.tsx
"use client";

import React, { useMemo, useState } from "react";
import type { Product, ProductVariation } from "@/types/product";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import { Card } from "../ui/card";

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
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
    <div
      className="
        flex flex-col gap-6
        sm:gap-6
        lg:flex-row 
        lg:items-start 
        lg:gap-6
        w-full
      "
    >
      {/* Left section: Images */}
      <Card
        className="
          w-full 
          lg:w-4/10 
          shrink-0
          relative
          px-6
        "
      >
        <ProductImages
          product={product}
          selectedVariation={selectedVariation}
          onSelectVariation={setSelectedVariation}
        />
      </Card>

      {/* Right section: Info */}
      <Card
        className="
          w-full 
          px-6
        "
      >
        <ProductInfo
          product={product}
          selectedVariation={selectedVariation}
          formattedPrice={formattedPrice}
          onSelectVariation={setSelectedVariation}
        />
      </Card>
    </div>
  );
}
