/* eslint-disable react/no-array-index-key */
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";
import Product from "../types/product";

export default function formatRating(product: Product): {
  stars: JSX.Element;
  count: JSX.Element;
} {
  const fullStars = Array(Math.floor(product.rating.rate))
    .fill(null)
    .map((_, index) => <IoStarSharp key={`fullStar-${product.id}-${index}`} />);
  const halfStars =
    product.rating.rate % 1 >= 0.5
      ? [<IoStarHalfSharp key={`halfStar-${product.id}`} />]
      : [];
  const emptyStars = Array(
    5 - Math.floor(product.rating.rate) - halfStars.length,
  )
    .fill(null)
    .map((_, index) => (
      <IoStarOutline key={`emptyStar-${product.id}-${index}`} />
    ));
  const stars = (
    <>
      {fullStars}
      {halfStars}
      {emptyStars}
    </>
  );
  const count = <span>({product.rating.count})</span>;
  return { stars, count };
}
