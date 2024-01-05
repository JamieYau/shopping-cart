import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { Product } from "../types/types";

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
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
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
    })
  ).isRequired,
  className: PropTypes.string,
};
