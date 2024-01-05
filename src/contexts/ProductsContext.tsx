import { createContext, useContext } from "react";
import Product from "../types/product";

const ProductsContext = createContext<Product[] | undefined>(undefined);

export function useProducts() {
  const products = useContext(ProductsContext);

  if (products === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return products;
}
export const ProductsProvider = ProductsContext.Provider;
