import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsProvider from "./contexts/ProductsContext";
import BasketProvider from "./contexts/BasketContext";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BasketProvider>
          <Header />
          <Outlet />
          <Footer />
        </BasketProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
