import { Product } from "./product";

export interface CreateClient {
  id: string;
  name: string;
}

export interface Client {
  id: string;
  name: string;
  createdAt: Date;
}

//Ainda será finalizado
export interface ClientWithRelations extends Client {
  products: Product[];
  credentials: any[];
  listings: any[];
}
