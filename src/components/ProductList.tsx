import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import Product from "../types/product";

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
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};
