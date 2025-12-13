"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Product, ProductVariation } from "@/types/product";
import { Plus, Pencil } from "lucide-react";
import Image from "next/image";

interface ProductImagesEditProps {
  product: Product;
  selectedVariation: ProductVariation;
  onSelectVariation: (variation: ProductVariation) => void;
  onAddImage?: () => void;
  onEditImage?: (variation: ProductVariation) => void;
}

export default function ProductImagesEdit({
  product,
  selectedVariation,
  onSelectVariation,
  onAddImage,
  onEditImage,
}: ProductImagesEditProps) {
  const defaultImage =
    product.images[0]?.url ?? "https://picsum.photos/800/800";

  const mainImage = `https://picsum.photos/800/800?random=${selectedVariation.sku}`;

  return (
    <div className="w-full space-y-6">
      {/* IMAGEM PRINCIPAL */}
      <Card className="relative overflow-hidden p-0">
        <CardContent className="p-0">
          <AspectRatio ratio={1} className="relative">
            <Image
              fill
              src={mainImage || defaultImage}
              alt={product.title}
              className="object-cover"
            />

            {/* Edit main image */}
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-3 top-3"
              onClick={() => onEditImage?.(selectedVariation)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </AspectRatio>
        </CardContent>
      </Card>

      {/* MINIATURAS */}
      <div className="flex flex-wrap gap-3">
        {product.variations.map((variation) => {
          const variationImage = `https://picsum.photos/200/200?random=${variation.sku}`;
          const isSelected = variation.sku === selectedVariation.sku;

          return (
            <button
              key={variation.sku}
              onClick={() => onSelectVariation(variation)}
              className={`
                group relative h-20 w-20 overflow-hidden rounded-md border
                transition-all
                ${isSelected
                  ? "border-primary shadow-sm"
                  : "border-muted hover:shadow-sm"}
              `}
            >
              <Image
                fill
                src={variationImage}
                alt={variation.color ?? "variation image"}
                className="object-cover"
              />

              {/* Overlay edit */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                <Pencil className="h-4 w-4 text-white" />
              </div>
            </button>
          );
        })}

        {/* ADD IMAGE */}
        <button
          onClick={onAddImage}
          className="
            flex h-20 w-20 items-center justify-center
            rounded-md border border-dashed
            text-muted-foreground
            hover:bg-accent hover:text-accent-foreground
            transition
          "
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
