import { IoMdCloseCircle } from "react-icons/io";
import styles from "./BasketItem.module.css";
import { useBasket } from "../contexts/BasketContext";
import { BasketItem as BasketItemType } from "../types/types";
import QuantitySelector from "./QuantitySelector";
import { formatPrice } from "../utils/helpers";

export default function BasketItem({
  basketItem,
}: {
  basketItem: BasketItemType;
}) {
  const { removeFromBasket, updateQuantity } = useBasket();
  const { product, quantity } = basketItem;
  return (
    <li className={styles.listItem}>
      <img className={styles.image} src={product.image} alt="Placeholder" />
      <div className={styles.information}>
        <div className={styles.details}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.category}>{product.category}</p>
        </div>
        <div className={styles.actions}>
          <QuantitySelector
            initialQuantity={quantity}
            onQuantityChange={(newQuantity) =>
              updateQuantity(product.id, newQuantity)
            }
          />
          <span className={styles.price}>{formatPrice(product.price)}</span>
        </div>
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
