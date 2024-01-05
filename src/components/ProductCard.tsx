import styles from "./ProductCard.module.css";
import Product from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className={styles.productCard}>
      <img src={product.image} alt="Placeholder" />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button type="button">Add to Basket</button>
    </li>
  );
}
