import { useBasket } from "../contexts/BasketContext";
import { useProducts } from "../contexts/ProductsContext";
import BasketItem from "./BasketItem";
import styles from "./Basket.module.css";

export default function Basket() {
  const { basket, isOpen, toggleBasket } = useBasket();
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
                <BasketItem
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
            <p className={styles.total}>Total: £{totalPrice}</p>
          </>
        )}
      </div>
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleBasket}
        onKeyDown={toggleBasket}
        role="button"
        tabIndex={0}
        aria-label="Toggle Basket"
      />
    </>
  );
}
