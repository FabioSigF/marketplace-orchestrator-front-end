export interface ProductImage {
  url: string;
  altText?: string;
}

export interface ProductVariation {
  sku: string;
  color?: string;
  size?: string;
  stock?: number;
  price: number;
}

export interface CreateProduct {
  clientId: string;
  sku: string;
  title: string;
  description: string;
  price: number;
  available?: boolean;
  variations?: ProductVariation[];
  images: ProductImage[];
}

//Product retornado pela API
export interface Product {
  id: string;
  clientId: string;
  sku: string;
  title: string;
  description: string;
  price: number;
  available: boolean;
  variations: ProductVariation[];
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}