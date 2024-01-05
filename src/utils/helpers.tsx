/* eslint-disable react/no-array-index-key */
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Product } from "../types/types";

export default function formatRating(product: Product): {
  stars: JSX.Element;
  count: JSX.Element;
} {
  const adjustedRating = Math.max(0, Math.min(5, product.rating.rate));

  const fullStars = Array.from(
    { length: Math.floor(adjustedRating) },
    (_, index) => <IoStarSharp key={`fullStar-${product.id}-${index}`} />
  );

  const hasHalfStar = adjustedRating % 1 >= 0.5;
  const halfStars = hasHalfStar
    ? [<IoStarHalfSharp key={`halfStar-${product.id}`} />]
    : [];

  const emptyStars = Array.from(
    { length: Math.floor(5 - fullStars.length - halfStars.length) },
    (_, index) => <IoStarOutline key={`emptyStar-${product.id}-${index}`} />
  );

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
