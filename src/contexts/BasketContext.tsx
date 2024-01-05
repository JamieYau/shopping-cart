import { createContext, useContext, useMemo, useState } from "react";
import {
  BasketContextType,
  BasketProviderProps,
  Product,
} from "../types/types";

export const BasketContext = createContext<BasketContextType | undefined>(
  undefined
);

export default function BasketProvider({ children }: BasketProviderProps) {
  const [basket, setBasket] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((product) => product.id !== productId)
    );
  };

  const toggleBasket = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const contextValue = useMemo(
    () => ({ basket, isOpen, addToBasket, removeFromBasket, toggleBasket }),
    [basket, isOpen]
  );

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);

  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }

  return context;
}
