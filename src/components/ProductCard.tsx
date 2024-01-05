import styles from "./ProductCard.module.css";
import Product from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className={styles.productCard}>
      <img src={product.image} alt="Placeholder" />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.category}>{product.category}</p>
      <div className={styles.actions}>
        <p className={styles.price}>£{product.price}</p>
        <button type="button" className={styles.add}>Add to Cart</button>
      </div>
    </li>
  );
}
