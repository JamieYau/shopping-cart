import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className={styles.productCard}>
      <img src="/images/placeholder.png" alt="Placeholder" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button type="button">Add to Basket</button>
    </li>
  );
}
