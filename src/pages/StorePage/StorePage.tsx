import styles from "./StorePage.module.css";
import ProductList from "../../components/ProductList";
import { useProducts } from "../../contexts/ProductsContext";

export default function StorePage() {
  const { products } = useProducts();
  return (
    <main className={styles.storePage}>
      <div className={styles.sortContainer}>
        <div className={styles.header}>
          <h2>Products</h2>
          <div>{products.length} results</div>
        </div>
        <div className={styles.actions}>
          <label htmlFor="filter">
            Filter by:
            <select name="filter" id="filter">
              <option value="all">All</option>
              <option value="tech">Tech</option>
              <option value="clothes">Clothes</option>
              <option value="food">Food</option>
            </select>
          </label>
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
      </div>
      <ProductList products={products} className={styles.store} />
    </main>
  );
}
