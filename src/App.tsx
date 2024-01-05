import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsProvider from "./contexts/ProductsContext";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsProvider>
        <Outlet />
      </ProductsProvider>
      <Footer />
    </div>
  );
}

export default App;
