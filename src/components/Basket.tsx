import { useBasket } from "../contexts/BasketContext";
import { useProducts } from "../contexts/ProductsContext";
import styles from "./Basket.module.css";

export default function Basket() {
  const { basket, removeFromBasket, isOpen } = useBasket();
  const { products } = useProducts();
  const basketProducts = basket.map((basketItem) => {
    const product = products.find((prod) => prod.id === basketItem.id);
    return {
      ...basketItem,
      ...product,
    };
  });
  const totalPrice = basketProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );
  return (
    <>
      <div className={`${styles.basket} ${isOpen ? styles.open : ""}`}>
        <h2 className={styles.title}>Basket</h2>
        {basketProducts.length === 0 ? (
          <p className={styles.empty}>Your basket is empty</p>
        ) : (
          <>
            <ul className={styles.list}>
              {basketProducts.map((product) => (
                <li key={product.id} className={styles.listItem}>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt="Placeholder"
                  />
                  <div className={styles.details}>
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.price}>£{product.price}</p>
                  </div>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeFromBasket(product.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className={styles.total}>Total: £{totalPrice}</p>
          </>
        )}
      </div>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} />
    </>
  );
}
