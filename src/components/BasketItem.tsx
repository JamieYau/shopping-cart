import { IoMdCloseCircle } from "react-icons/io";
import styles from "./BasketItem.module.css";
import { useBasket } from "../contexts/BasketContext";
import { BasketItem as BasketItemType } from "../types/types";

export default function BasketItem({
  basketItem,
}: {
  basketItem: BasketItemType;
}) {
  const { removeFromBasket } = useBasket();
  const { product, quantity } = basketItem;
  return (
    <li className={styles.listItem}>
      <img className={styles.image} src={product.image} alt="Placeholder" />
      <div className={styles.details}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.quantity}>Quantity: {quantity}</p>
        <p className={styles.price}>£{product.price}</p>
      </div>
      <button
        type="button"
        className={styles.remove}
        onClick={() => removeFromBasket(product.id)}
        aria-label="Remove from basket"
      >
        <IoMdCloseCircle />
      </button>
    </li>
  );
}
