"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import ProductImagesEdit from "@/components/products/ProductImagesEdit";
import { Product, ProductVariation } from "@/types/product";

/* ---------------- MOCK ---------------- */
const mockProduct: Product = {
  id: "1",
  clientId: "client-1",
  sku: "PROD-001",
  title: "Tênis Nike Air Max",
  description: "Tênis esportivo confortável",
  price: 599.9,
  available: true,
  createdAt: "2024-12-01",
  updatedAt: "2024-12-08",
  images: [
    { url: "https://picsum.photos/800/800" },
  ],
  variations: [
    {
      sku: "PROD-001-BLACK",
      color: "Preto",
      price: 599.9,
      stock: 10,
    },
    {
      sku: "PROD-001-WHITE",
      color: "Branco",
      price: 599.9,
      stock: 5,
    },
  ],
};
/* ------------------------------------- */

export default function DashboardProductsProductIdEdit() {
  const router = useRouter();
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>(mockProduct);
  const [selectedVariation, setSelectedVariation] =
    useState<ProductVariation>(mockProduct.variations[0]);

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-start gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(`/products/${productId}`)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-sm text-muted-foreground">
                SKU: {product.sku}
              </p>
              <p className="text-xs text-muted-foreground">
                Última atualização em {product.updatedAt}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Remover
            </Button>
            <Button>Salvar alterações</Button>
          </div>
        </CardHeader>
      </Card>

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* ===== IMAGENS ===== */}
        <Card className="lg:col-span-1 px-6">
          <ProductImagesEdit
            product={product}
            selectedVariation={selectedVariation}
            onSelectVariation={setSelectedVariation}
            onAddImage={() => console.log("Adicionar imagem")}
            onEditImage={(variation) =>
              console.log("Editar imagem da variação", variation)
            }
          />
        </Card>

        {/* ===== FORM ===== */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="font-medium">Informações do produto</h3>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="general">
              <TabsList>
                <TabsTrigger value="general">Geral</TabsTrigger>
                <TabsTrigger value="marketplaces">
                  Marketplaces
                </TabsTrigger>
              </TabsList>

              {/* --------- GERAL --------- */}
              <TabsContent value="general" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Título</Label>
                    <Input
                      value={product.title}
                      onChange={(e) =>
                        setProduct({ ...product, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>SKU</Label>
                    <Input value={product.sku} disabled />
                  </div>

                  <div className="space-y-2">
                    <Label>Preço</Label>
                    <Input
                      type="number"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Estoque (variação)</Label>
                    <Input
                      type="number"
                      value={selectedVariation.stock ?? 0}
                      onChange={(e) =>
                        setSelectedVariation({
                          ...selectedVariation,
                          stock: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Descrição</Label>
                  <Textarea
                    rows={4}
                    value={product.description}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </TabsContent>

              {/* --------- MARKETPLACES --------- */}
              <TabsContent value="marketplaces" className="space-y-4">
                <Separator />
                <p className="text-sm text-muted-foreground">
                  Configurações de publicação nos marketplaces (em
                  desenvolvimento)
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
