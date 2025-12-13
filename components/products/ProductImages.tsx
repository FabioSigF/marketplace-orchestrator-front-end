import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Product, ProductVariation } from "@/types/product";
import Image from "next/image";

interface ProductImagesProps {
  product: Product;
  selectedVariation: ProductVariation;
  onSelectVariation: (variation: ProductVariation) => void;
}

export default function ProductImages({
  product,
  selectedVariation,
  onSelectVariation,
}: ProductImagesProps) {
  // fallback se o produto não tiver imagens (não deveria acontecer, mas é seguro)
  const defaultImage = product.images[0]?.url ?? "https://picsum.photos/800/800";

  // imagem principal muda ao clicar na miniatura
  const mainImage = `https://picsum.photos/800/800?random=${selectedVariation.sku}`;

  return (
    <div className="w-full space-y-8">
      {/* IMAGE PRINCIPAL */}
      <Card className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white py-0">
        <CardContent className="p-0">
          <AspectRatio ratio={1} className="relative">
            <Image
              fill
              src={mainImage || defaultImage}
              alt={product.images[0]?.altText ?? "product image"}
              className="object-cover"
            />
          </AspectRatio>
        </CardContent>
      </Card>

      {/* MINIATURAS */}
      <div className="flex gap-3 flex-wrap">
        {product.variations.map((variation) => {
          const variationImage = `https://picsum.photos/200/200?random=${variation.sku}`;
          const isSelected = variation.sku === selectedVariation.sku;

          return (
            <button
              key={variation.sku}
              onClick={() => onSelectVariation(variation)}
              aria-pressed={isSelected}
              className={`
                relative overflow-hidden group
                w-20 h-20 rounded-md transition-all
                ${isSelected
                  ? "shadow-md border border-gray-200"
                  : "opacity-80 hover:opacity-100 hover:scale-[1.03] border-none"}
              `}
            >
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={variationImage}
                  alt={variation.color ?? "variation image"}
                  className="object-cover"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
