import { useMemo, useState } from "react";
import styles from "./StorePage.module.css";
import ProductList from "../../components/ProductList";
import { useProducts } from "../../contexts/ProductsContext";
import { filterProducts, sortProducts } from "../../utils/helpers";
import { Product } from "../../types/types";

export default function StorePage() {
  const { products: allProducts } = useProducts();
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  const products: Product[] = useMemo(() => {
    const filteredProducts = filterProducts(allProducts, filter);
    const sortedProducts = sortProducts(filteredProducts, sort);
    return sortedProducts;
  }, [allProducts, filter, sort]);

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
            <select
              name="filter"
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="electronics">Tech</option>
              <option value="men's clothing">Mens</option>
              <option value="women's clothing">Womens</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </label>
          <label htmlFor="sort">
            Sort by:
            <select
              name="sort"
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-lowest">Price-low to high</option>
              <option value="price-highest">Price-high to low</option>
              <option value="rating">Rating</option>
            </select>
          </label>
        </div>
      </div>
      <ProductList products={products} className={styles.store} />
    </main>
  );
}
