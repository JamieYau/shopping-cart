import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import formatRating from "../../utils/helpers";
import { useBasket } from "../../contexts/BasketContext";

export default function ProductPage() {
  const { id } = useParams();
  const { addToBasket } = useBasket();
  const { products } = useProducts();
  const product = products.find((prod) => prod.id === Number(id));
  if (!product) return null;
  const { stars, count } = formatRating(product);

  return (
    <main>
      <h1>{product ? product.title : "Product not found"}</h1>
      <div>{product?.category}</div>
      <img src={product?.image ?? ""} alt={product?.title ?? "Product"} />
      <p>{product?.description ?? ""}</p>
      <div>
        <p>£{product?.price ?? ""}</p>
        <div>
          {stars}
          <span>{count}</span>
        </div>
      </div>
      <button type="button" onClick={() => addToBasket(product)}>Add to Cart</button>
    </main>
  );
}
