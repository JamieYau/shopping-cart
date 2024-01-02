import styles from './ProductCard.module.css';

export default function ProductCard() {
  return (
    <div className={styles.productCard}>
      <img src="/images/placeholder.png" alt="Placeholder" />
      <p>Product Name</p>
      <p>£9.99</p>
      <button type="button">Add to Basket</button>
    </div>
  );
}