import { useMemo, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product, ProductVariation } from "@/types/product";

interface ProductInfoProps {
  product: Product;
  selectedVariation: ProductVariation;
  formattedPrice: string;
  onSelectVariation: (variation: ProductVariation) => void;
}

export default function ProductInfo({
  product,
  selectedVariation,
  formattedPrice,
  onSelectVariation,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const sizes = useMemo(() => {
    const set = new Set<string>();
    product.variations.forEach((v) => v.size && set.add(v.size));
    return [...set];
  }, [product]);

  const colors = useMemo(() => {
    const set = new Set<string>();
    product.variations.forEach((v) => v.color && set.add(v.color));
    return [...set];
  }, [product]);

  // Filtragem inteligente
  const getIsSizeAvailable = (size: string) => {
    if (!selectedColor) return true;
    return product.variations.some((v) => v.size === size && v.color === selectedColor);
  };

  const getIsColorAvailable = (color: string) => {
    if (!selectedSize) return true;
    return product.variations.some((v) => v.color === color && v.size === selectedSize);
  };

  const handleSelectSize = (size: string) => {
    const newValue = size === selectedSize ? null : size;
    setSelectedSize(newValue);

    // Se desmarcar o tamanho → libera cores
    if (!newValue) {
      onSelectVariation(product.variations[0]);
      return;
    }

    // Ajustar a cor se não for compatível com o tamanho
    if (selectedColor && !getIsColorAvailable(selectedColor)) {
      setSelectedColor(null);
    }

    const variation =
      product.variations.find(
        (v) => v.size === newValue && (!selectedColor || v.color === selectedColor)
      ) ?? product.variations[0];

    onSelectVariation(variation);
  };

  const handleSelectColor = (color: string) => {
    const newValue = color === selectedColor ? null : color;
    setSelectedColor(newValue);

    // Se desmarcar a cor → libera tamanhos
    if (!newValue) {
      onSelectVariation(product.variations[0]);
      return;
    }

    // Ajustar o tamanho se não for compatível com a cor
    if (selectedSize && !getIsSizeAvailable(selectedSize)) {
      setSelectedSize(null);
    }

    const variation =
      product.variations.find(
        (v) => v.color === newValue && (!selectedSize || v.size === selectedSize)
      ) ?? product.variations[0];

    onSelectVariation(variation);
  };

  return (
    <div className="w-full lg:w-1/2 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-muted-foreground">{product.sku}</p>

          <div className="mt-2">
            <Badge className="bg-gray-200 text-gray-700">
              Estoque geral:{" "}
              {product.variations.reduce((sum, v) => sum + (v.stock ?? 0), 0)}
            </Badge>
          </div>
        </div>

        <Button variant="outline" className="shadow-sm">
          Editar
        </Button>
      </div>

      <Separator />

      {/* Price */}
      <div>
        <h2 className="text-4xl font-bold">{formattedPrice}</h2>
        <div className="mt-2">
          <Badge className="bg-gray-100 text-gray-600">
            Estoque da variação: {selectedVariation.stock ?? 0}
          </Badge>
        </div>
      </div>

      <Separator />

      {/* VARIAÇÕES */}
      <div className="space-y-6">
        {/* SIZE */}
        <div>
          <p className="font-medium mb-2">Tamanho</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => {
              const available = getIsSizeAvailable(size);

              return (
                <button
                  key={size}
                  onClick={() => available && handleSelectSize(size)}
                  className={`
                    px-4 py-2 rounded-md border text-sm
                    transition-all
                    ${selectedSize === size ? "bg-primary text-white" : ""}
                    ${!available ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
                  `}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* COLOR */}
        <div>
          <p className="font-medium mb-2">Cor</p>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => {
              const available = getIsColorAvailable(color);

              return (
                <button
                  key={color}
                  onClick={() => available && handleSelectColor(color)}
                  className={`
                    px-4 py-2 rounded-md border text-sm
                    transition-all
                    ${selectedColor === color ? "bg-primary text-white" : ""}
                    ${!available ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
                  `}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Separator />

      {/* DESCRIPTION */}
      <div className="prose prose-sm max-w-none">
        <h3 className="font-semibold text-lg">Descrição</h3>
        <p className="text-muted-foreground whitespace-pre-line">
          {product.description}
        </p>
      </div>
    </div>
  );
}
