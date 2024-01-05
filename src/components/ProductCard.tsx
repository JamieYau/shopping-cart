import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

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
