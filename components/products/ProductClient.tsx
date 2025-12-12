// components/product/ProductClient.tsx
"use client";

import React, { useMemo, useState } from "react";
import type { Product, ProductVariation } from "@/types/product";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

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
        flex flex-col gap-10 
        sm:gap-12 
        lg:flex-row 
        lg:items-start 
        lg:gap-16
        max-w-7xl 
        mx-auto 
        w-full
        px-4 sm:px-6 lg:px-8
      "
    >
      {/* Left section: Images */}
      <div
        className="
          w-full 
          lg:w-1/2 
          shrink-0
        "
      >
        <ProductImages
          product={product}
          selectedVariation={selectedVariation}
          onSelectVariation={setSelectedVariation}
        />
      </div>

      {/* Right section: Info */}
      <div
        className="
          w-full 
          lg:w-1/2 
          shrink-0
        "
      >
        <ProductInfo
          product={product}
          selectedVariation={selectedVariation}
          formattedPrice={formattedPrice}
          onSelectVariation={setSelectedVariation}
        />
      </div>
    </div>
  );
}
