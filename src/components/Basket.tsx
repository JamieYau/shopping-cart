import { IoCloseSharp } from "react-icons/io5";
import { useBasket } from "../contexts/BasketContext";
import { useProducts } from "../contexts/ProductsContext";
import BasketItem from "./BasketItem";
import formatItemCount from "../utils/helpers";
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
        <div className={styles.basketHeader}>
          <h2 className={styles.title}>Basket</h2>
          <span>({formatItemCount(basket.length)})</span>
          <button
            type="button"
            aria-label="Close Basket"
            onClick={toggleBasket}
          >
            <IoCloseSharp />
          </button>
        </div>
        {basketProducts.length === 0 ? (
          <p className={styles.empty}>Your basket is empty</p>
        ) : (
          <>
            <ul className={styles.list}>
              {basketProducts.map((product) => (
                <BasketItem key={product.id} product={product} />
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
