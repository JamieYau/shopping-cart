import "./App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import fetchProducts from "./services/api";
import { ProductsProvider } from "./contexts/ProductsContext";
import Product from "./types/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductsProvider value={products}>
        <Outlet />
      </ProductsProvider>
      <Footer />
    </div>
  );
}

export default App;
