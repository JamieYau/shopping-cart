import { IoMdCloseCircle } from "react-icons/io";
import styles from "./BasketItem.module.css";
import { useBasket } from "../contexts/BasketContext";
import { BasketItem as BasketItemType } from "../types/types";
import QuantitySelector from "./QuantitySelector";

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
      <div className={styles.details}>
        <p className={styles.title}>{product.title}</p>
        <QuantitySelector
          initialQuantity={quantity}
          onQuantityChange={(newQuantity) =>
            updateQuantity(product.id, newQuantity)
          }
        />
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
