import styles from "./ProductCard.module.css";
import { Product } from "../types/types";
import formatRating from "../utils/jsxHelpers";
import { formatPrice } from "../utils/helpers";

export default function ProductCard({ product }: { product: Product }) {
  const { stars, count } = formatRating(product);
  return (
    <li className={styles.productCard}>
      <img src={product.image} alt="Placeholder" />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.category}>{product.category}</p>
      <div className={styles.actions}>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <div className={styles.rating}>
          {stars}
          <span className={styles.count}>{count}</span>
        </div>
      </div>
    </li>
  );
}
