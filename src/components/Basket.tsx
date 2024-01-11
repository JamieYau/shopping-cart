import { IoCloseSharp } from "react-icons/io5";
import { useBasket } from "../contexts/BasketContext";
import BasketItem from "./BasketItem";
import { formatItemCount, formatPrice } from "../utils/helpers";
import styles from "./Basket.module.css";

export default function Basket() {
  const { basket, isOpen, totalPrice, itemCount, toggleBasket } = useBasket();

  return (
    <>
      <div className={`${styles.basket} ${isOpen ? styles.open : ""}`}>
        <div className={styles.basketHeader}>
          <h2 className={styles.title}>Basket</h2>
          <span>({formatItemCount(itemCount)})</span>
          <button
            type="button"
            aria-label="Close Basket"
            onClick={toggleBasket}
          >
            <IoCloseSharp />
          </button>
        </div>
        {itemCount === 0 ? (
          <p className={styles.empty}>Your basket is empty</p>
        ) : (
          <>
            <ul className={styles.list}>
              {basket.map((basketItem) => (
                <BasketItem
                  key={basketItem.product.id}
                  basketItem={basketItem}
                />
              ))}
            </ul>

            <div className={styles.basketFooter}>
              <p className={styles.total}>
                Basket Total <span>{formatPrice(totalPrice)}</span>
              </p>
              <div className={styles.basketActions}>
                <button type="button" className={styles.viewBasketBtn}>
                  View Basket
                </button>
                <button type="button" className={styles.checkoutBtn}>
                  Checkout
                </button>
              </div>
            </div>
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
