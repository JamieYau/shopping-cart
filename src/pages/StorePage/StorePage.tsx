import styles from "./StorePage.module.css";
import ProductList from "../../components/ProductList";
import { useProducts } from "../../contexts/ProductsContext";

export default function StorePage() {
  const { products } = useProducts();
  return (
    <main className={styles.storePage}>
      <div className={styles.sortContainer}>
        <div>
          <h2>Products</h2>
          <div>{products.length} results</div>
        </div>
        <label htmlFor="sort">
          Sort by:
          <select name="sort" id="sort">
            <option value="default">Default</option>
            <option value="low-high">Price-low to high</option>
            <option value="high-low">Price-high to low</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>
      <ProductList products={products} className={styles.store}/>
    </main>
  );
}
