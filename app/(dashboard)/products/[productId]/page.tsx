import React from "react";
import { notFound } from "next/navigation";
import ProductClient from "@/components/products/ProductClient";
import type { Product } from "@/types/product";

// Mock fetch (simulate server-side fetch)
async function getProductById(id: string): Promise<Product | null> {
  "use server";
  // simulate latency
  await new Promise((r) => setTimeout(r, 200));

  const mock: Product = {
    id: "123",
    clientId: "client_1",
    sku: "SKU-0001",
    title: "Colar de Prata 925",
    description: "Colar elegante em prata 925, acabamento polido.",
    price: 199.9,
    available: true,
    variations: [
      { sku: "SKU-0001-BLK-42", color: "Preto", size: "42", stock: 15, price: 199.9 },
      { sku: "SKU-0001-WHT-41", color: "Branco", size: "41", stock: 10, price: 189.9 },
      { sku: "SKU-0001-RED-40", color: "Vermelho", size: "40", stock: 0, price: 194.9 },
    ],
    images: [
      { url: "https://picsum.photos/800/800?random=1", altText: "Colar em prata" },
    ],
    createdAt: new Date("2024-01-10").toISOString(),
    updatedAt: new Date("2024-02-01").toISOString(),
  };

  return id === mock.id ? mock : null;
}

export default async function DashboardProductsProductId(props: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await props.params;
  const product = await getProductById(productId);

  if (!product) return notFound();

  // send product to the client component (no hooks here)
  return (
    <main>
      <ProductClient product={product} />
    </main>
  );
}
