import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { Product, ProductsContextType, ProductsProviderProps } from "../types/types";
import fetchProducts from "../services/api";

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export default function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const contextValue = useMemo(
    () => ({ products, setProducts }),
    [products, setProducts]
  );

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
}
