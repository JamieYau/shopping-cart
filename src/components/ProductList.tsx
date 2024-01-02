import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList({
  products,
  className,
}: {
  products: Product[];
  className: string;
}) {
  return (
    <ul className={`${styles.productList} ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

ProductList.defaultProps = {
  className: "",
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};
