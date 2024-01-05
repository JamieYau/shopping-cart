export type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductsProviderProps = {
  children: React.ReactNode;
};
export type ProductsContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export type BasketProviderProps = {
  children: React.ReactNode;
};

export interface BasketContextType {
  basket: Product[];
  isOpen: boolean;
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: number) => void;
  toggleBasket: () => void;
}
