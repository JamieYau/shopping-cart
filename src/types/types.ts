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

export type BasketItem = {
  product: Product;
  quantity: number;
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
  basket: BasketItem[];
  isOpen: boolean;
  totalPrice: number;
  itemCount: number;
  addToBasket: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromBasket: (productId: number) => void;
  toggleBasket: () => void;
}
