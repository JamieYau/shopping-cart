import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import formatRating from "../../utils/jsxHelpers";
import { formatPrice } from "../../utils/helpers";
import { useBasket } from "../../contexts/BasketContext";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const { addToBasket } = useBasket();
  const { products } = useProducts();
  const product = products.find((prod) => prod.id === Number(id));
  if (!product) return null;
  const { stars, count } = formatRating(product);

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <div className={styles.details}>
        <h1>{product.title}</h1>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <div>
          <p>{formatPrice(product.price)}</p>
          <div className={styles.rating}>
            {stars}
            <span>{count}</span>
          </div>
        </div>
        <button type="button" onClick={() => addToBasket(product)}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}
