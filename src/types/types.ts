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
}

export type ProductsProviderProps = {
  children: React.ReactNode;
};
export type ProductsContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};