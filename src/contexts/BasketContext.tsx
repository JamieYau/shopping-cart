import { createContext, useContext, useMemo, useState } from "react";
import {
  BasketContextType,
  BasketProviderProps,
  Product,
  BasketItem,
} from "../types/types";

export const BasketContext = createContext<BasketContextType | undefined>(
  undefined
);

export default function BasketProvider({ children }: BasketProviderProps) {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = useMemo(
    () =>
      basket.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [basket]
  );

  const itemCount = useMemo(
    () => basket.reduce((sum, item) => sum + item.quantity, 0),
    [basket]
  );

  const addToBasket = (product: Product, quantity: number = 1) => {
    setBasket((prevBasket) => {
      const existingItemIndex = prevBasket.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // If the product is already in the basket, increment the quantity
        const newBasket = [...prevBasket];
        newBasket[existingItemIndex] = {
          ...newBasket[existingItemIndex],
          quantity: newBasket[existingItemIndex].quantity + quantity,
        };
        return newBasket;
      }
      // If the product is not in the basket, add it with the specified quantity
      return [...prevBasket, { product, quantity }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setBasket((prevBasket) => {
      const existingItemIndex = prevBasket.findIndex(
        (item) => item.product.id === productId
      );

      if (existingItemIndex >= 0) {
        // If the product is in the basket, update the quantity
        const newBasket = [...prevBasket];
        newBasket[existingItemIndex] = {
          ...newBasket[existingItemIndex],
          quantity,
        };
        return newBasket;
      }
      // If the product is not in the basket, do nothing
      return prevBasket;
    });
  };

  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.product.id !== productId)
    );
  };

  const toggleBasket = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const contextValue = useMemo(
    () => ({
      basket,
      isOpen,
      totalPrice,
      itemCount,
      addToBasket,
      updateQuantity,
      removeFromBasket,
      toggleBasket,
    }),
    [basket, isOpen, totalPrice, itemCount]
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
