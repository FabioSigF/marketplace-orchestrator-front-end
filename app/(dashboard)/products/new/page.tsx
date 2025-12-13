"use client";

import { useRouter } from "next/navigation";
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

/* -------- PRODUTO INICIAL -------- */
const initialVariation: ProductVariation = {
  sku: "",
  price: 0,
  stock: 0,
};

const initialProduct: Product = {
  id: "",
  clientId: "",
  sku: "",
  title: "",
  description: "",
  price: 0,
  available: true,
  createdAt: "",
  updatedAt: "",
  images: [],
  variations: [initialVariation],
};
/* -------------------------------- */

export default function DashboardProductsNew() {
  const router = useRouter();

  const [product, setProduct] = useState<Product>(initialProduct);
  const [selectedVariation, setSelectedVariation] =
    useState<ProductVariation>(initialVariation);

  function handleCreateProduct() {
    console.log("Produto a ser criado:", product);

    // futuramente:
    // await api.post("/products", product)
    // router.push(`/products/${response.id}`)
  }

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-start gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/products")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div>
              <h2 className="text-xl font-semibold">Novo produto</h2>
              <p className="text-sm text-muted-foreground">
                Preencha as informações para criar um novo produto
              </p>
            </div>
          </div>

          <Button onClick={handleCreateProduct}>Criar produto</Button>
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
                <TabsTrigger value="variations">Variações</TabsTrigger>
                <TabsTrigger value="marketplaces">Marketplaces</TabsTrigger>
              </TabsList>

              {/* --------- GERAL --------- */}
              <TabsContent value="general" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Título</Label>
                    <Input
                      placeholder="Ex: Tênis Nike Air Max"
                      value={product.title}
                      onChange={(e) =>
                        setProduct({ ...product, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>SKU</Label>
                    <Input
                      placeholder="Ex: PROD-001"
                      value={product.sku}
                      onChange={(e) =>
                        setProduct({ ...product, sku: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Preço</Label>
                    <Input
                      type="number"
                      placeholder="0.00"
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
                    <Label>Estoque inicial</Label>
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
                    placeholder="Descrição do produto"
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

              <TabsContent value="variations" className="space-y-6">
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">Variações do produto</h4>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setProduct({
                        ...product,
                        variations: [
                          ...product.variations,
                          {
                            sku: `${product.sku}-${
                              product.variations.length + 1
                            }`,
                            price: product.price,
                            stock: 0,
                          },
                        ],
                      })
                    }
                  >
                    + Adicionar variação
                  </Button>
                </div>

                {/* LISTA DE VARIAÇÕES */}
                <div className="space-y-4">
                  {product.variations.map((variation, index) => {
                    const isSelected = variation.sku === selectedVariation.sku;

                    return (
                      <Card
                        key={variation.sku}
                        className={`border transition ${
                          isSelected ? "border-primary" : "border-border"
                        }`}
                      >
                        <CardContent className="space-y-4">
                          {/* SELEÇÃO */}
                          <div className="flex items-center justify-between">
                            {isSelected ? (
                              <Button
                                variant="secondary"
                                disabled
                                size="sm"
                                onClick={() => setSelectedVariation(variation)}
                              >
                                Em edição
                              </Button>
                            ) : (
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() => setSelectedVariation(variation)}
                              >
                                Editar variação
                              </Button>
                            )}

                            <Button
                              variant="secondary"
                              size="icon"
                              onClick={() =>
                                setProduct({
                                  ...product,
                                  variations: product.variations.filter(
                                    (_, i) => i !== index
                                  ),
                                })
                              }
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>

                          {/* FORM */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label>SKU</Label>
                              <Input
                                value={variation.sku}
                                onChange={(e) => {
                                  const updated = [...product.variations];
                                  updated[index] = {
                                    ...variation,
                                    sku: e.target.value,
                                  };
                                  setProduct({
                                    ...product,
                                    variations: updated,
                                  });
                                }}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label>Preço</Label>
                              <Input
                                type="number"
                                value={variation.price}
                                onChange={(e) => {
                                  const updated = [...product.variations];
                                  updated[index] = {
                                    ...variation,
                                    price: Number(e.target.value),
                                  };
                                  setProduct({
                                    ...product,
                                    variations: updated,
                                  });
                                }}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label>Estoque</Label>
                              <Input
                                type="number"
                                value={variation.stock ?? 0}
                                onChange={(e) => {
                                  const updated = [...product.variations];
                                  updated[index] = {
                                    ...variation,
                                    stock: Number(e.target.value),
                                  };
                                  setProduct({
                                    ...product,
                                    variations: updated,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
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
