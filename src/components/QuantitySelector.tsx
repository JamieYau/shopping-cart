import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import styles from "./QuantitySelector.module.css";

export default function QuantitySelector({
  initialQuantity,
  onQuantityChange,
}: {
  initialQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!Number.isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className={styles.quantitySelector}>
      <button
        className={`${styles.button} ${styles.left}`}
        type="button"
        onClick={handleDecrease}
        aria-label="Decrease Quantity"
      >
        <IoMdRemove />
      </button>
      <input
        className={styles.input}
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min="1"
      />
      <button
        className={`${styles.button} ${styles.right}`}
        type="button"
        onClick={handleIncrease}
        aria-label="Increase Quantity"
      >
        <IoMdAdd />
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  initialQuantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};
